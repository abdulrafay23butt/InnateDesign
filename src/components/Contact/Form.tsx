'use client';
import React, { useState } from "react";
import Image from "next/image";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import Swal from 'sweetalert2';
import logo from "@/public/logo-innate.png";
import facebook from "@/public/fbb.png";
import linkedin from "@/public/LinkedIn.png";
import instagaram from "@/public/Instagram.png";
import { ClipLoader } from "react-spinners"

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectAddress: '',
    projectType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    // if (email.includes("@"))
    //   return true;
    // return false;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      return true;
    }
    return false;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.projectAddress ||
      !formData.projectType ||
      !formData.message
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields.',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    else if (!validateEmail(formData.email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter valid Email',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    const apiEndpoint = "/api/ContactUsapi"; // Replace with your actual API URL

    try {
      setLoading(true)

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
      // console.log("API response:", formDataWithImages);
      // Call the API with the collected data
      const response: Response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithImages),
      });
      // console.log("API response:", response);

      // Check if the response is successful
      if (!response.ok) {
        setLoading(false);
        throw new Error(`API call failed with status: ${response.status}`);
      }

      // Parse the API response
      const data: { success: boolean; message: string } = await response.json();
      // console.log("API response:", data);
      setLoading(false);
      // Check the response success
      if (data.success) {
        Swal.fire({
          title: 'Success!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectAddress: '',
          projectType: '',
          message: '',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Error calling contactFlow API:", error instanceof Error ? error.message : error);
      Swal.fire({
        title: 'Error!',
        text: "Something went Wrong. Please Try Again",
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      });
      setLoading(false);
    }


  };
  return (
    <>
      <div className="w-full">
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <ClipLoader color="#007bff" size={50} />
          </div>
        )}
        <form className="mob:flex-1 mob:flex-col max-w-[100%]  mob:max-w-[100%] w-full ">


          <div className="relative w-full">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) => {
                const regex = /^[a-zA-Z\s]*$/;
                if (regex.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              placeholder=""
              required
              className={`peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white focus:outline-none focus:ring-0`}
            />
            <label
              htmlFor="name"
              className={`absolute left-0 text-sm text-white transition-all ${formData.name ? "-top-4 text-sm" : "top-2.5 text-base peer-focus:-top-4 peer-focus:text-sm"
                }`}
            >
              Name
            </label>
          </div>


          <div className="relative w-full">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="email"
              className={`absolute left-0 text-sm text-white transition-all ${formData.email ? "-top-4 text-sm" : "top-2.5 text-base peer-focus:-top-4 peer-focus:text-sm"
                }`}
            >
              Email
            </label>
          </div>

          <div className="relative w-full">
            <input
              type="number"
              name="phone"
              id="phone"
              value={formData.phone || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 14) {
                  handleChange(e);
                }
                else{
                  Swal.fire({
                    title: 'Error!',
                    text: "Enter max 14 digits",
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000,
                  });
                }
              }}
              placeholder=""
              required
              className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="phone"
              className={`absolute left-0 text-sm text-white transition-all ${formData.phone && formData.phone.toString().length > 0
                ? "-top-4 text-sm"
                : "top-2.5 text-base peer-focus:-top-4 peer-focus:text-sm"
                }`}
            >
              Phone
            </label>
          </div>


          <div className="relative w-full">
            <input
              type="text"
              name="projectAddress"
              id="projectAddress"
              value={formData.projectAddress}
              onChange={handleChange}
              placeholder=""
              required
              className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="projectAddress"
              className={`absolute left-0 text-sm text-white transition-all ${formData.projectAddress ? "-top-4 text-sm" : "top-2.5 text-base peer-focus:-top-4 peer-focus:text-sm"
                }`}
            >
              Project Address
            </label>
          </div>

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
          >
            <option value="" disabled className="text-[#AAAAAA] bg-[#333333]">
              Project Type
            </option>
            <option value="Architectural Design" className="text-white bg-[#333333]">Architectural Design</option>
            <option value="Permitting" className="text-white bg-[#333333]">Permitting</option>
            <option value="Roofing" className="text-white bg-[#333333]">Roofing</option>
            <option value="Sliding" className="text-white bg-[#333333]">Sliding</option>
            <option value="Decks" className="text-white bg-[#333333]">Decks</option>
            <option value="Kitchen Remodel" className="text-white bg-[#333333]">Kitchen Remodel</option>
            <option value="Bathroom Remodel" className="text-white bg-[#333333]">Bathroom Remodel</option>
            <option value="General Remodel" className="text-white bg-[#333333]">General Remodel</option>
            <option value="ADU" className="text-white bg-[#333333]">ADU</option>
            <option value="Addition" className="text-white bg-[#333333]">Addition</option>
            <option value="New Construction" className="text-white bg-[#333333]">New Construction</option>
            <option value="Landscaping" className="text-white bg-[#333333]">Landscaping</option>
            <option value="Painting" className="text-white bg-[#333333]">Painting</option>
            <option value="Other" className="text-white bg-[#333333]">Other</option>
          </select>
          <div className="relative w-full">
            <input
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=""
              required
              className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="message"
              className={`absolute left-0 text-sm text-white transition-all ${formData.message ? "-top-4 text-sm" : "top-2.5 text-base peer-focus:-top-4 peer-focus:text-sm"
                }`}
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-[130.63px] h-[50px] hover:bg-white hover:text-black hover:border-black transition duration-300 border border-white text-white text-[16px] font-medium flex items-center justify-center gap-1"
            onClick={handleClick}
          >
            Submit
            <Image src={rightarrow} alt="" width={18} height={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
