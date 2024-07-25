import React, { useState } from "react";
import { db } from "../context/Firebase";
import { collection, addDoc } from "firebase/firestore";
import WhimpyLogo from "../assets/Wimpy.png";
import Next from "../assets/Next.png";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    email: "",
    phone: "",
    fitnessGoal: "",
    calories: "",
    favoriteMeal: "",
    favouriteDrink:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFitnessGoalChange = (goal) => {
    setFormData({ ...formData, fitnessGoal: goal });
  };

  const handleCalorieGoalChange = (cal) => {
    setFormData({ ...formData, calories: cal });
  };

  const handleMealGoalChange = (meal) => {
    setFormData({ ...formData, favoriteMeal: meal });
  };

  const handleDrinkGoalChange =(drink)=>{
    setFormData({ ...formData, favouriteDrink: drink });
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "responses"), formData);
      alert("Responses submitted!");
    } catch (error) {
      console.error("Error submitting responses: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-custom h-[96vh] w-[97vw] flex items-center justify-center rounded-lg">
        {/* 1st box */}
        <div className="w-3/4 h-[90%] ">
          <div className="flex flex-col w-[80%] ">
            <div>
              <div className="bg-white rounded-tr-full rounded-br-full w-[70%]">
                <h1 className="mt-2 ml-10 text-pretty text-[#00C2BA] text-3xl font-extrabold h-20 flex flex-col justify-center mb-6">
                  {step === 1 && " Tell us about yourself!"}
                  {step === 2 && "What's your fitness goal?"}
                  {step === 3 &&
                    "How many calories do you aim to consume daily?"}
                  {step === 4 && "What's your favourite meal at Wimpy?"}
                  {step ===5 && "What is your favourite refreshing drink this summer from Wimpy?"}

                </h1>
              </div>
              <p className="mt-2 text-pretty text-[#00C2BA] text-lg w-[60%] flex flex-col justify-center ml-10">
                {step === 1 &&
                  "Please enter your basic details to personalize your experience."}
                {step === 2 &&
                  "Choose the fitness goal that best describes your current focus."}
                {step === 3 && "Select one of the following options."}
                {step === 4 &&
                  "Let us know your go-to meal so we can recommend some delicious options for your fitness journey!"}
                 {step===5 && " Let us know which is your favorite."} 
              </p>
            </div>
            <div className="flex flex-col items-center">
              <form className="mt-8 space-y-6 w-[90%]">
                {step === 1 && (
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <div className="mb-6">
                        <input
                          name="name"
                          type="text"
                          required
                          className="h-[6vh] appearance-none rounded-full relative block w-full px-3 py-2 border border-[#00C2BA] placeholder-gray-500 focus:outline-none focus:ring-[#1d6765] focus:border-[#228888] focus:z-10 sm:text-sm"
                          placeholder="Name"
                          onChange={handleChange}
                          style={{ backgroundColor: "transparent" }}
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          name="age"
                          type="text"
                          required
                          className="h-[6vh] appearance-none rounded-full relative block w-full px-3 py-2 border border-[#00C2BA] placeholder-gray-500 focus:outline-none focus:ring-[#1d6765] focus:border-[#228888] focus:z-10 sm:text-sm"
                          placeholder="Age"
                          onChange={handleChange}
                          style={{ backgroundColor: "transparent" }}
                        />
                      </div>
                      <div className="mb-6">
                        <select
                          name="sex"
                          required
                          className="h-[6vh] appearance-none rounded-full relative block w-full px-3 py-2 border border-[#00C2BA] placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1d6765] focus:border-[#228888] focus:z-10 sm:text-sm"
                          onChange={handleChange}
                          style={{ backgroundColor: "transparent" }}
                        >
                          <option value="">Sex</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <input
                          name="email"
                          type="email"
                          required
                          className="h-[6vh] appearance-none rounded-full relative block w-full px-3 py-2 border border-[#00C2BA] placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1d6765] focus:border-[#228888] focus:z-10 sm:text-sm"
                          placeholder="Email Address"
                          onChange={handleChange}
                          style={{ backgroundColor: "transparent" }}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          name="phone"
                          type="text"
                          required
                          className="h-[6vh] appearance-none rounded-full relative block w-full px-3 py-2 border border-[#00C2BA] placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1d6765] focus:border-[#228888] focus:z-10 sm:text-sm"
                          placeholder="Phone"
                          onChange={handleChange}
                          style={{ backgroundColor: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    
                     <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.fitnessGoal === "lose_weight" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleFitnessGoalChange("lose_weight")}
                    >
                      Lose Weight
                    </button>
                    <br />
                    
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.fitnessGoal === "build_muscle" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleFitnessGoalChange("build_muscle")}
                    >
                      Build Muscle
                    </button>
                    <br />
                   
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.fitnessGoal === "improve_endurance" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleFitnessGoalChange("improve_endurance")}
                    >
                      Improve Endurance
                    </button>
                    <br />
                    
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.fitnessGoal === "wellbeing" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleFitnessGoalChange("wellbeing")}
                    >
                      General Wellbeing
                    </button>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4">
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.calories === "1200-1500" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleCalorieGoalChange("1200-1500")}
                    >
                      1200-1500
                    </button>
                    <br />
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.calories === "1500-2000" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleCalorieGoalChange("1500-2000")}
                    >
                      1500-2000
                    </button>
                    <br />
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.calories === "2000+" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleCalorieGoalChange("2000+")}
                    >
                      2000+
                    </button>
                  </div>
                )}
                {step === 4 && (
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div className="space-y-4">
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favoriteMeal === "chicken" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleMealGoalChange("chicken")}
                    >
                      Chicken
                    </button>
                      <br />
                      <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favoriteMeal === "burger" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleMealGoalChange("burger")}
                    >
                     Burger
                    </button>
                      <br />
                      <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favoriteMeal === "pizza" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleMealGoalChange("pizza")}
                    >
                      Pizza
                    </button>
                      <br />
                      <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favoriteMeal === "tacos" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleMealGoalChange("tacos")}
                    >
                      Taco's
                    </button>
                    </div>
                   
                  </div>
                )}

{step === 5 && (
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div className="space-y-4">
                    <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favouriteDrink === "coca-cola" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleDrinkGoalChange("coca-cola")}
                    >
                      Coca-Cola
                    </button>
                      <br />
                      <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favouriteDrink === "sprite" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleDrinkGoalChange("sprite")}
                    >
                      Sprite
                    </button>
                      <br />
                      <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favouriteDrink === "tea" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleDrinkGoalChange("tea")}
                    >
                      Tea
                    </button>
                      <br />
                      <button
                      type="button"
                      className={`w-[40%] py-4 ${formData.favouriteDrink === "coffee" ? "bg-green-200" : "bg-white"} text-[#00C2BA] font-semibold rounded-full shadow-lg`}
                      onClick={() => handleDrinkGoalChange("coffee")}
                    >
                      Coffee
                    </button>
                    </div>
                    <button
                      type="button"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>

        {/* 2nd Box */}
        <div className="w-1/4 flex flex-col justify-center items-center h-[100%] relative">
          <img
            src={WhimpyLogo}
            alt="Whimpy"
            className="w-[50%] absolute top-4 right-4"
          />
          {step < 5 && (
            <button type="button" onClick={handleNext}>
              <img
                src={Next}
                alt="Next"
                className="w-[30%] absolute bottom-2 right-4"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
