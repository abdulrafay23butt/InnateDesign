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
      <form className="w-full max-w-[611px]">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
        />
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
        />
        <input
          type="text"
          name="projectAddress"
          value={formData.projectAddress}
          onChange={handleChange}
          placeholder="Project Address"
          required
          className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
        />
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
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="w-full py-2 mb-9 border-b-2 border-[#FFFFFF3D] focus:outline-none text-[16px] text-white placeholder-white bg-transparent"
        />
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
