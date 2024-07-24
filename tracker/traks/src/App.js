import "./App.css";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import Intro from "./components/Intro";
import DragDrop from "./components/DragDrop";
import ProgressBar from "./components/ProgressBar";
import PdfUpload from "./components/PdfUpload";
import UploadLogs from "./components/UploadLogs";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  const [value,setValue]=useState(0);

    useEffect(()=>{
     setInterval(() => {
        setValue((val)=>val+1);
     },100);
    },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro/>} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dragdrop" element={<DragDrop />} />
        <Route path="/progressbar" element={<ProgressBar value={value} />} />
        <Route path="/pdfupload" element={<PdfUpload />} />
        <Route path="/uploadlogs" element={<UploadLogs />} />
        
      </Routes>
    </div>
  );
}

export default App;
