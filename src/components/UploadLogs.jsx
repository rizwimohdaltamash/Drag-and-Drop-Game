import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../context/Firebase';

const UploadLogs = () => {
  const [, setLogs] = useState([]);
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const querySnapshot = await getDocs(collection(db, 'uploadLogs'));
      const logsData = [];
      querySnapshot.forEach((doc) => {
        logsData.push(doc.data());
      });
      setLogs(logsData);
    };

    const fetchPdfs = async () => {
      const querySnapshot = await getDocs(collection(db, 'pdfs'));
      const pdfsData = [];
      querySnapshot.forEach((doc) => {
        pdfsData.push(doc.data());
      });
      setPdfs(pdfsData);
    };

    fetchLogs();
    fetchPdfs();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Uploaded Logs</h2>
      <div className="space-y-4">
        {/* {logs.map((log, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <p className="text-sm text-gray-700">{log.message}</p>
            <p className="text-sm text-gray-500">{new Date(log.timestamp.toDate()).toLocaleString()}</p>
          </div>
        ))} */}
        {pdfs.map((pdf, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-lg font-medium mb-2">Uploaded PDF:</h3>
            <p className="text-sm text-gray-600">File Name: {pdf.name}</p>
            <p className="text-sm text-gray-600">Uploaded At: {new Date(pdf.createdAt.toDate()).toLocaleString()}</p>
            <iframe
              src={pdf.url}
              width="100%"
              height="400px"
              title="PDF Preview"
              className="border rounded-lg mt-2"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadLogs;
