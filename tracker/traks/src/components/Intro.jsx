import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  const handleDragDrop = () =>{
    navigate('/dragdrop');
  }
  const handlePdfUpload = () =>{
    navigate('/pdfupload');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen  w-full  ">
      <div className="flex flex-col justify-center items-center">
        <div className="border border-teal-400 rounded-lg text-center h-[30vh] w-full sm:w-[70vw]"></div>

        <div className="w-[98%] relative  text-center top-[-8rem]  ml-[8px]">
          <h1 className="text-3xl font-bold text-teal-500 ">
            Welcome to Wimpy's Summer 30/31 Fitness Quiz!
          </h1>
          <div className="bg-transparent flex justify-center mt-4">
            <p className="text-xl text-orange-500 mt-12 bg-white w-[70%]">
              Ready to kickstart your fitness journey? Take our quick quiz and
              unlock <br /> amazing benefits, including a chance to win a
              Fitness Escapade in Thailand!
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleStartQuiz}
        className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 mt-16"
      >
        Start Quiz
      </button>

      <button
        onClick={handleDragDrop}
        className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 mt-16"
      >
        Game
      </button>

      <button
        onClick={handlePdfUpload}
        className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 mt-16"
      >
        Upload Pdf
      </button>

    </div>
  );
};

export default Intro;
