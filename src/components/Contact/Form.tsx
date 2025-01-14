'use client';
import React, { useState } from "react";
import Image from "next/image";
import rightarrow from "@/public/images/press/RightArrowblue.png";
import Swal from 'sweetalert2';

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectAddress: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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

    Swal.fire({
      title: 'Success!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <>
      <form className="mob:flex-1 mob:flex-col max-w-[80%] sm:max-w-[100%]  mob:max-w-[100%] w-full ">
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
            className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white  focus:outline-none focus:ring-0"

          />
          <label
            htmlFor="name"
            className="absolute left-0 top-2.5 text-sm text-white transition-all peer-placeholder-shown:top-25  peer-placeholder-shown:text-base peer-focus:-top-2  peer-focus:text-sm"
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
            className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white  focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-2.5 text-sm text-white transition-all peer-placeholder-shown:top-25  peer-placeholder-shown:text-base peer-focus:-top-2  peer-focus:text-sm"
          >
            Email
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder=""
            required
            className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white  focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 top-2.5 text-sm text-white transition-all peer-placeholder-shown:top-25  peer-placeholder-shown:text-base peer-focus:-top-2  peer-focus:text-sm"
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
            className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white  focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="projectAddress"
            className="absolute left-0 top-2.5 text-sm text-white transition-all peer-placeholder-shown:top-25  peer-placeholder-shown:text-base peer-focus:-top-2  peer-focus:text-sm"
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
            className="peer block py-2 mb-9 w-full appearance-none border-b-2 border-[#FFFFFF3D] text-[16px] bg-transparent px-0 text-sm text-white  focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="message"
            className="absolute left-0 top-2.5 text-sm text-white transition-all peer-placeholder-shown:top-25  peer-placeholder-shown:text-base peer-focus:-top-2  peer-focus:text-sm"
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
    </>
  );
};

export default Form;
