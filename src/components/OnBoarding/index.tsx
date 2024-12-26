"use client";
import React, { useState, useEffect } from "react";
import Start from "./Start";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import LastStep from "./LastStep";

import logo from "@/public/logo-innate.png";
import facebook from "@/public/fbb.png";
import linkedin from "@/public/LinkedIn.png";
import instagaram from "@/public/Instagram.png";

const OnBoarding: React.FC = () => {
  // Initialize state with a function that retrieves the saved step from localStorage
  const totalSteps = 9; // Total number of steps
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? Number(savedStep) : 0;
  });

  interface FormData {
    [key: string]: string | number | object | unknown[]; // Add supported data types
  }
  
  const [formData, setFormData] = useState<FormData>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? (JSON.parse(savedData) as FormData) : {}; // Retrieve data from localStorage
  });
  

  useEffect(() => {
    // Save the current step to localStorage
    localStorage.setItem("currentStep", String(currentStep));
  }, [currentStep]);

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () =>
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  const handlePrevious = () =>
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  const handleInputChange = (step: number, data: string | number | object | unknown[]) => {
    // Only update the state if the data has changed
    if (JSON.stringify(formData[`step${step}`]) !== JSON.stringify(data)) {
      console.log(`Step ${step} data:`, data); // Log the data
  
      setFormData((prev: FormData) => ({
        ...prev,
        [`step${step}`]: data, // Ensure alignment with FormData
      }));
    }
  };
  
  

  const handleStep8Next = async (): Promise<void> => {
    console.log("All data collected so far:", formData);
  
    // Define your API endpoint
    const apiEndpoint = "/api/contactFlow"; // Replace with your actual API URL
  
    try {
      // Check if formData is valid before sending the API request
      if (!formData || Object.keys(formData).length === 0) {
        alert("Please complete the form before proceeding.");
        return;
      }
      // Add images to the formData
      const formDataWithImages = {
        ...formData,
        images: {
          logo: logo.src,
          facebook: facebook.src,
          linkedin: linkedin.src,
          instagram: instagaram.src,
        },
      };
      console.log("API response:", formDataWithImages);
      // Call the API with the collected data
      const response: Response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithImages),
      });
      console.log("API response:", formDataWithImages);
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }
  
      // Parse the API response
      const data: { success: boolean; message: string } = await response.json();
      console.log("API response:", data);
  
      // Check the response success
      if (data.success) {
        handleNext(); // Proceed to the next step
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error calling contactFlow API:", error instanceof Error ? error.message : error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  
  

  // Calculate progress as a percentage
  const progress = ((currentStep / totalSteps) * 100).toFixed(2);

  return (
    <div className="onboarding-container gradient px-5">
      {currentStep !== 0 && (
        <div className="pt-40 flex justify-center mob:px-5">
          <div
            className="max-w-[1180px] relative"
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#FFFFFF3D",
              marginBottom: "20px",
              borderRadius: "5px",
            }}
          >
            {/* Filled Progress Bar */}
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: "#fff",
                transition: "width 0.3s ease-in-out",
                borderRadius: "5px",
              }}
            />

            {/* Circle at the end of the progress */}
            <div
              className="progress-circle"
              style={{
                position: "absolute",
                top: "50%",
                left: `${progress}%`,
                transform: "translate(-50%, -50%)",
                width: "15px",
                height: "15px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      )}

      {currentStep === 0 && <Start onNext={handleNext} />}
      {currentStep === 1 && (
        <Step1
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(1, data)}
        />
      )}
      {currentStep === 2 && (
        <Step2
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(2, data)}
        />
      )}
      {currentStep === 3 && (
        <Step3 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 4 && (
        <Step4
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(4, data)}
        />
      )}
      {currentStep === 5 && (
        <Step5
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(5, data)}
        />
      )}
      {currentStep === 6 && (
        <Step6
          onNext={handleNext}
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(6, data)}
        />
      )}
      {currentStep === 7 && (
        <Step7 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 8 && (
        <Step8
          onNext={handleStep8Next} // Use custom handler for Step 8
          onPrevious={handlePrevious}
          onChange={(data) => handleInputChange(8, data)}
        />
      )}
      {currentStep === 9 && <LastStep onPrevious={handlePrevious} />}
    </div>
  );
};

export default OnBoarding;
