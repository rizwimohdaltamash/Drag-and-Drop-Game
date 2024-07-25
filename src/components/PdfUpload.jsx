import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { storage, db } from '../context/Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const PdfUpload = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfURL, setPdfURL] = useState('');
  const [uploading, setUploading] = useState(false);
 
  const [fileName, setFileName] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    // Fetch the PDF URL and metadata from Firestore when the component mounts
    const fetchPdfData = async () => {
      const querySnapshot = await getDocs(collection(db, 'pdfs'));
      querySnapshot.forEach((doc) => {
        setPdfURL(doc.data().url);
        setFileName(doc.data().name);
        setCreatedAt(doc.data().createdAt.toDate().toLocaleString());
      });
    };

    fetchPdfData();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!pdfFile ) return;

    setUploading(true);
    const storageRef = ref(storage, `pdfs/${pdfFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, pdfFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error('Upload failed', error);
        setUploading(false);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log('File available at', downloadURL);
          setPdfURL(downloadURL);

          // Save the PDF URL and metadata to Firestore
          const createdAt = new Date();
          await addDoc(collection(db, 'pdfs'), {
            url: downloadURL,
            name: pdfFile.name,
            createdAt,
            
          });

          // Log "PDF uploaded" with timestamp to a separate Firestore collection
          // await addDoc(collection(db, 'uploadLogs'), {
          //   message: 'PDF uploaded',
          //   timestamp: createdAt
          // });

          setFileName(pdfFile.name);
          setCreatedAt(createdAt.toLocaleString());
          setUploading(false);
        });
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Upload and Display PDF</h2>
      <div className="mb-4">
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={handleFileChange} 
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-indigo-50 file:text-indigo-700
                     hover:file:bg-indigo-100"
        />
      </div>
     
      <button 
        onClick={handleUpload} 
        className={`w-full py-2 rounded-lg transition duration-300 ${uploading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} text-white`}
        disabled={uploading }
      >
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>
      {pdfURL && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Uploaded PDF:</h3>
          <p className="text-sm text-gray-600">File Name: {fileName}</p>
          <p className="text-sm text-gray-600">Uploaded At: {createdAt}</p>
          <iframe src={pdfURL} width="100%" height="400px" title="PDF Preview" className="border rounded-lg mt-2"></iframe>
        </div>
      )}
      <div className="mt-6 text-center">
        <Link to="/uploadlogs" className="text-indigo-600 hover:underline">
          View Uploaded Logs
        </Link>
      </div>
    </div>
  );
};

export default PdfUpload;
