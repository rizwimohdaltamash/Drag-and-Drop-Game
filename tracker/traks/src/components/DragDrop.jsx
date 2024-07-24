// import React, { useState, useEffect } from "react";
// import { Draggable, Droppable } from "react-drag-and-drop";
// import { ToastContainer, toast } from "react-toastify";
// import { Carousel } from "react-responsive-carousel";
// import "react-toastify/dist/ReactToastify.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ProgressBar from "./ProgressBar";
// import VegBurger from "../assets/burger.jpg";
// import ChickenBurger from "../assets/cburger.jpeg";
// import DoubleVegBurger from "../assets/doublevburger.jpeg";
// import DoubleChickenBurger from "../assets/doublecburger.jpg";
// import Sprint from "../assets/sprint.png";
// import BenchPress from "../assets/benchpress.jpg";
// import Cardio from "../assets/cardio.png";
// import PushUps from "../assets/pushups.jpeg";
// import FoodBg from "../assets/foodbg.jpg";
// import ExerciseBg from "../assets/exercisebg.jpg";
// import "../css/Carousel.css";

// const images = [
//   { id: "1", name: "Veg Burger", calories: 100, src: VegBurger, type: "food" },
//   {
//     id: "2",
//     name: "Chicken Burger",
//     calories: 150,
//     src: ChickenBurger,
//     type: "food",
//   },
//   {
//     id: "3",
//     name: "Double Veg-Burger",
//     calories: 200,
//     src: DoubleVegBurger,
//     type: "food",
//   },
//   {
//     id: "4",
//     name: "Double Chicken-Burger",
//     calories: 250,
//     src: DoubleChickenBurger,
//     type: "food",
//   },
//   { id: "5", name: "Sprint", calories: 300, src: Sprint, type: "exercise" },
//   {
//     id: "6",
//     name: "Bench Press",
//     calories: 350,
//     src: BenchPress,
//     type: "exercise",
//   },
//   { id: "7", name: "Cardio", calories: 400, src: Cardio, type: "exercise" },
//   { id: "8", name: "Push Ups", calories: 250, src: PushUps, type: "exercise" },
// ];

// const DragDrop = () => {
//   const [totalCalories1, setTotalCalories1] = useState(0);
//   const [totalCalories2, setTotalCalories2] = useState(0);
//   const [foodCarouselIndex, setFoodCarouselIndex] = useState(0);
//   const [exerciseCarouselIndex, setExerciseCarouselIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     handleResize(); // Set initial state

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const onDrop = (data, droppableArea) => {
//     const image = images.find((img) => img.id === data.image);
//     if (droppableArea === 1 && image.type === "food") {
//       setTotalCalories1((prevCalories) => prevCalories + image.calories);
//     } else if (droppableArea === 2 && image.type === "exercise") {
//       setTotalCalories2((prevCalories) => prevCalories + image.calories);
//     } else {
//       toast.error(
//         "You can only drop food images in the food area and exercise images in the exercise area."
//       );
//     }
//   };

//   const handleNext = (type) => {
//     if (type === "food") {
//       setFoodCarouselIndex(
//         (prevIndex) =>
//           (prevIndex + 1) % images.filter((img) => img.type === "food").length
//       );
//     } else if (type === "exercise") {
//       setExerciseCarouselIndex(
//         (prevIndex) =>
//           (prevIndex + 1) %
//           images.filter((img) => img.type === "exercise").length
//       );
//     }
//   };

//   const handlePrev = (type) => {
//     if (type === "food") {
//       setFoodCarouselIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + images.filter((img) => img.type === "food").length) %
//           images.filter((img) => img.type === "food").length
//       );
//     } else if (type === "exercise") {
//       setExerciseCarouselIndex(
//         (prevIndex) =>
//           (prevIndex -
//             1 +
//             images.filter((img) => img.type === "exercise").length) %
//           images.filter((img) => img.type === "exercise").length
//       );
//     }
//   };

//   return (
//     <div className="App">
//       <ToastContainer />

//       <div className="w-full flex justify-center mt-10 space-x-4">
//         <div className={`${isMobile ? "w-[40%]" : "w-[70%]"} mx-auto relative`}>
//           <button
//             type="button"
//             onClick={() => handlePrev("food")}
//             className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//           >
//             ❮
//           </button>
//           <button
//             type="button"
//             onClick={() => handleNext("food")}
//             className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//           >
//             ❯
//           </button>
//           <Carousel
//             showThumbs={false}
//             showStatus={false}
//             showIndicators={false}
//             infiniteLoop
//             useKeyboardArrows
//             autoPlay
//             interval={3000}
//             centerMode
//             centerSlidePercentage={isMobile ? 100 : 34}
//             selectedItem={foodCarouselIndex}
//             onChange={setFoodCarouselIndex}
//           >
//             {images
//               .filter((img) => img.type === "food")
//               .map((img) => (
//                 <Draggable key={img.id} type="image" data={img.id}>
//                   <div className="flex justify-center items-center h-[50vh]">
//                     <img
//                       src={img.src}
//                       alt={img.name}
//                       // className="w-full h-full object-cover "
//                     />
//                     <p className="absolute bottom-2  bg-black text-white p-1 text-center ">
//                       {img.name} - Calories: {img.calories}
//                     </p>
//                   </div>
//                 </Draggable>
//               ))}
//           </Carousel>
//         </div>
//       </div>

//       <div className="w-full flex flex-row justify-evenly mt-10">
//         <Droppable types={["image"]} onDrop={(data) => onDrop(data, 1)}>
//           <div
//             className="w-[30vw] h-[30vh] border-2 border-dashed border-gray-300 flex items-center justify-center flex-col"
//             style={{
//               backgroundImage: `url(${FoodBg})`,
//               backgroundSize: "cover",
//             }}
//           >
//             <div className=" text-center">
//               <p>Drop a food image here</p>
//               <p className="text-xl">Total Calories: {totalCalories1}</p>
//             </div>
//           </div>
//         </Droppable>
//         <Droppable types={["image"]} onDrop={(data) => onDrop(data, 2)}>
//           <div
//             className="w-[30vw] h-[30vh] border-2 border-dashed border-gray-300 flex items-center justify-center flex-col"
//             style={{
//               backgroundImage: `url(${ExerciseBg})`,
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="text-white text-center">
//               <p>Drop an exercise image here</p>
//               <p className="text-xl">Total Calories: {totalCalories2}</p>
//             </div>
//           </div>
//         </Droppable>
//       </div>

//       <div className="w-full flex justify-center mt-10 space-x-4">
//         <div className={`${isMobile ? "w-[40%]" : "w-[70%]"} mx-auto relative`}>
//           <button
//             type="button"
//             onClick={() => handlePrev("exercise")}
//             className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//           >
//             ❮
//           </button>
//           <button
//             type="button"
//             onClick={() => handleNext("exercise")}
//             className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//           >
//             ❯
//           </button>
//           <Carousel
//             showThumbs={false}
//             showStatus={false}
//             showIndicators={false}
//             infiniteLoop
//             useKeyboardArrows
//             autoPlay
//             interval={3000}
//             centerMode
//             centerSlidePercentage={isMobile ? 100 : 34}
//             selectedItem={exerciseCarouselIndex}
//             onChange={setExerciseCarouselIndex}
//           >
//             {images
//               .filter((img) => img.type === "exercise")
//               .map((img) => (
//                 <Draggable key={img.id} type="image" data={img.id}>
//                   <div className="flex justify-center items-center h-[50vh]">
//                     <img
//                       src={img.src}
//                       alt={img.name}
//                       // className="w-full h-full object-cover"
//                     />
//                     <p className="absolute bottom-2  bg-black text-white p-1">
//                       {img.name} - Calories: {img.calories}
//                     </p>
//                   </div>
//                 </Draggable>
//               ))}
//           </Carousel>
//         </div>
//       </div>
//       <ProgressBar
//         totalCalories1={totalCalories1}
//         totalCalories2={totalCalories2}
//       />
//     </div>
//   );
// };

// export default DragDrop;

// import React, { useState, useEffect } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { TouchBackend } from "react-dnd-touch-backend";
// import { ToastContainer, toast } from "react-toastify";
// import { Carousel } from "react-responsive-carousel";
// import "react-toastify/dist/ReactToastify.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ProgressBar from "./ProgressBar";
// import VegBurger from "../assets/burger.jpg";
// import ChickenBurger from "../assets/cburger.jpeg";
// import DoubleVegBurger from "../assets/doublevburger.jpeg";
// import DoubleChickenBurger from "../assets/doublecburger.jpg";
// import Sprint from "../assets/sprint.png";
// import BenchPress from "../assets/benchpress.jpg";
// import Cardio from "../assets/cardio.png";
// import PushUps from "../assets/pushups.jpeg";
// import FoodBg from "../assets/foodbg.jpg";
// import ExerciseBg from "../assets/exercisebg.jpg";
// import "../css/Carousel.css";

// const images = [
//   { id: "1", name: "Veg Burger", calories: 100, src: VegBurger, type: "food" },
//   {
//     id: "2",
//     name: "Chicken Burger",
//     calories: 150,
//     src: ChickenBurger,
//     type: "food",
//   },
//   {
//     id: "3",
//     name: "Double Veg-Burger",
//     calories: 200,
//     src: DoubleVegBurger,
//     type: "food",
//   },
//   {
//     id: "4",
//     name: "Double Chicken-Burger",
//     calories: 250,
//     src: DoubleChickenBurger,
//     type: "food",
//   },
//   { id: "5", name: "Sprint", calories: 300, src: Sprint, type: "exercise" },
//   {
//     id: "6", name: "Bench Press", calories: 350, src: BenchPress, type: "exercise",
//   },
//   { id: "7", name: "Cardio", calories: 400, src: Cardio, type: "exercise" },
//   { id: "8", name: "Push Ups", calories: 250, src: PushUps, type: "exercise" },
// ];

// const DraggableItem = ({ img }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "image",
//     item: { id: img.id },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));
  
//   return (
//     <div ref={drag} className="flex justify-center items-center h-[50vh]">
//       <img
//         src={img.src}
//         alt={img.name}
//         className="w-full h-full object-cover"
//         style={{ opacity: isDragging ? 0.5 : 1 }}
//       />
//       <p className="absolute bottom-2 bg-black text-white p-1 text-center">
//         {img.name} - Calories: {img.calories}
//       </p>
//     </div>
//   );
// };

// const DroppableArea = ({ children, onDrop, backgroundImage, calories }) => {
//   const [, drop] = useDrop(() => ({
//     accept: "image",
//     drop: (item) => onDrop(item),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="w-[30vw] h-[30vh] border-2 border-dashed border-gray-300 flex items-center justify-center flex-col"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="text-center">
//         {children}
//         <p className="text-xl">Total Calories: {calories}</p>
//       </div>
//     </div>
//   );
// };

// const DragDrop = () => {
//   const [totalCalories1, setTotalCalories1] = useState(0);
//   const [totalCalories2, setTotalCalories2] = useState(0);
//   const [foodCarouselIndex, setFoodCarouselIndex] = useState(0);
//   const [exerciseCarouselIndex, setExerciseCarouselIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     handleResize(); // Set initial state

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const onDrop = (data, droppableArea) => {
//     const image = images.find((img) => img.id === data.id);
//     if (droppableArea === 1 && image.type === "food") {
//       setTotalCalories1((prevCalories) => prevCalories + image.calories);
//     } else if (droppableArea === 2 && image.type === "exercise") {
//       setTotalCalories2((prevCalories) => prevCalories + image.calories);
//     } else {
//       toast.error(
//         "You can only drop food images in the food area and exercise images in the exercise area."
//       );
//     }
//   };

//   const handleNext = (type) => {
//     if (type === "food") {
//       setFoodCarouselIndex(
//         (prevIndex) =>
//           (prevIndex + 1) % images.filter((img) => img.type === "food").length
//       );
//     } else if (type === "exercise") {
//       setExerciseCarouselIndex(
//         (prevIndex) =>
//           (prevIndex + 1) %
//           images.filter((img) => img.type === "exercise").length
//       );
//     }
//   };

//   const handlePrev = (type) => {
//     if (type === "food") {
//       setFoodCarouselIndex(
//         (prevIndex) =>
//           (prevIndex - 1 + images.filter((img) => img.type === "food").length) %
//           images.filter((img) => img.type === "food").length
//       );
//     } else if (type === "exercise") {
//       setExerciseCarouselIndex(
//         (prevIndex) =>
//           (prevIndex -
//             1 +
//             images.filter((img) => img.type === "exercise").length) %
//           images.filter((img) => img.type === "exercise").length
//       );
//     }
//   };

//   return (
//     <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
//       <div className="App">
//         <ToastContainer />

//         <div className="w-full flex justify-center mt-10 space-x-4">
//           <div className={`${isMobile ? "w-[40%]" : "w-[70%]"} mx-auto relative`}>
//             <button
//               type="button"
//               onClick={() => handlePrev("food")}
//               className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//             >
//               ❮
//             </button>
//             <button
//               type="button"
//               onClick={() => handleNext("food")}
//               className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//             >
//               ❯
//             </button>
//             <Carousel
//               showThumbs={false}
//               showStatus={false}
//               showIndicators={false}
//               infiniteLoop
//               useKeyboardArrows
//               autoPlay
//               interval={3000}
//               centerMode
//               centerSlidePercentage={isMobile ? 100 : 34}
//               selectedItem={foodCarouselIndex}
//               onChange={setFoodCarouselIndex}
//             >
//               {images
//                 .filter((img) => img.type === "food")
//                 .map((img) => (
//                   <DraggableItem key={img.id} img={img} />
//                 ))}
//             </Carousel>
//           </div>
//         </div>

//         <div className="w-full flex flex-row justify-evenly mt-10">
//           <DroppableArea
//             onDrop={(data) => onDrop(data, 1)}
//             backgroundImage={FoodBg}
//             calories={totalCalories1}
//           >
//             <p>Drop a food image here</p>
//           </DroppableArea>
//           <div className="text-white">
//           <DroppableArea
            
//             onDrop={(data) => onDrop(data, 2)}
//             backgroundImage={ExerciseBg}
//             calories={totalCalories2}
//           >
//             <p >Drop an exercise image here</p>
//           </DroppableArea>
//           </div>
          
//         </div>

//         <div className="w-full flex justify-center mt-10 space-x-4">
//           <div className={`${isMobile ? "w-[40%]" : "w-[70%]"} mx-auto relative`}>
//             <button
//               type="button"
//               onClick={() => handlePrev("exercise")}
//               className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//             >
//               ❮
//             </button>
//             <button
//               type="button"
//               onClick={() => handleNext("exercise")}
//               className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
//             >
//               ❯
//             </button>
//             <Carousel
//               showThumbs={false}
//               showStatus={false}
//               showIndicators={false}
//               infiniteLoop
//               useKeyboardArrows
//               autoPlay
//               interval={3000}
//               centerMode
//               centerSlidePercentage={isMobile ? 100 : 34}
//               selectedItem={exerciseCarouselIndex}
//               onChange={setExerciseCarouselIndex}
//             >
//               {images
//                 .filter((img) => img.type === "exercise")
//                 .map((img) => (
//                   <DraggableItem key={img.id} img={img} />
//                 ))}
//             </Carousel>
//           </div>
//         </div>
//         <ProgressBar
//           totalCalories1={totalCalories1}
//           totalCalories2={totalCalories2}
//         />
//       </div>
//     </DndProvider>
//   );
// };

// export default DragDrop;

import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "./ProgressBar";
import VegBurger from "../assets/burger.jpg";
import ChickenBurger from "../assets/cburger.jpeg";
import DoubleVegBurger from "../assets/doublevburger.jpeg";
import DoubleChickenBurger from "../assets/doublecburger.jpg";
import Sprint from "../assets/sprint.png";
import BenchPress from "../assets/benchpress.jpg";
import Cardio from "../assets/cardio.png";
import PushUps from "../assets/pushups.jpeg";
import FoodBg from "../assets/foodbg.jpg";
import ExerciseBg from "../assets/exercisebg.jpg";
import "../css/Carousel.css";

const images = [
  { id: "1", name: "Veg Burger", calories: 100, src: VegBurger, type: "food" },
  { id: "2", name: "Chicken Burger", calories: 150, src: ChickenBurger, type: "food" },
  { id: "3", name: "Double Veg-Burger", calories: 200, src: DoubleVegBurger, type: "food" },
  { id: "4", name: "Double Chicken-Burger", calories: 250, src: DoubleChickenBurger, type: "food" },
  { id: "5", name: "Sprint", calories: 300, src: Sprint, type: "exercise" },
  { id: "6", name: "Bench Press", calories: 350, src: BenchPress, type: "exercise" },
  { id: "7", name: "Cardio", calories: 400, src: Cardio, type: "exercise" },
  { id: "8", name: "Push Ups", calories: 250, src: PushUps, type: "exercise" },
];

const DraggableItem = ({ img }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", img.id);
  };

  const handleTouchStart = (e) => {
    e.target.dataset.dragging = img.id;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains("droppable")) {
      element.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains("droppable")) {
      element.style.backgroundColor = "";
      const id = e.target.dataset.dragging;
      element.dispatchEvent(new CustomEvent("drop", { detail: { id } }));
    }
    e.target.dataset.dragging = "";
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="flex justify-center items-center h-[50vh]"
    >
      <img
        src={img.src}
        alt={img.name}
        className="w-full h-full object-cover"
      />
      <p className="absolute bottom-2 bg-black text-white p-1 text-center">
        {img.name} - Calories: {img.calories}
      </p>
    </div>
  );
};

const DroppableArea = ({ children, onDrop, backgroundImage, calories }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer ? e.dataTransfer.getData("id") : e.detail.id;
    onDrop(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-[30vw] h-[30vh] border-2 border-dashed border-gray-300 flex items-center justify-center flex-col droppable"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-center">
        {children}
        <p className="text-xl">Total Calories: {calories}</p>
      </div>
    </div>
  );
};

const CustomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = isMobile
    ? [images[currentIndex]]
    : [
        images[currentIndex % images.length],
        images[(currentIndex + 1) % images.length],
        images[(currentIndex + 2) % images.length],
      ];

  return (
    <div className={`carousel-container ${isMobile ? "mobile" : ""}`}>
      <button onClick={handlePrev} className="carousel-button">
        ❮
      </button>
      <div className="carousel-content">
        {visibleImages.map((img) => (
          <DraggableItem key={img.id} img={img} />
        ))}
      </div>
      <button onClick={handleNext} className="carousel-button">
        ❯
      </button>
    </div>
  );
};

const DragDrop = () => {
  const [totalCalories1, setTotalCalories1] = useState(0);
  const [totalCalories2, setTotalCalories2] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onDrop = (id) => {
    const image = images.find((img) => img.id === id);
    if (image) {
      if (image.type === "food") {
        setTotalCalories1((prevCalories) => prevCalories + image.calories);
      } else if (image.type === "exercise") {
        setTotalCalories2((prevCalories) => prevCalories + image.calories);
      } else {
        toast.error("You can only drop food images in the food area and exercise images in the exercise area.");
      }
    }
  };

  return (
    <div className="App">
      <ToastContainer />

      <div className="w-full flex justify-center mt-10 space-x-4">
        <div className={`${isMobile ? "w-[40%]" : "w-[70%]"} mx-auto relative`}>
          <CustomCarousel images={images.filter((img) => img.type === "food")} />
        </div>
      </div>

      <div className="w-full flex flex-row justify-evenly mt-10">
        <DroppableArea onDrop={onDrop} backgroundImage={FoodBg} calories={totalCalories1}>
          <p>Drop a food image here</p>
        </DroppableArea>
        <div className="text-white">
          <DroppableArea onDrop={onDrop} backgroundImage={ExerciseBg} calories={totalCalories2}>
            <p>Drop an exercise image here</p>
          </DroppableArea>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 space-x-4">
        <div className={`${isMobile ? "w-[40%]" : "w-[70%]"} mx-auto relative`}>
          <CustomCarousel images={images.filter((img) => img.type === "exercise")} />
        </div>
      </div>
      <ProgressBar totalCalories1={totalCalories1} totalCalories2={totalCalories2} />
    </div>
  );
};

export default DragDrop;
