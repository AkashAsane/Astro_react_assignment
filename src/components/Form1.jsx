import React, { useState } from "react";
import { useForm } from "./Formcontext";

const Form1 = ({ onNext }) => {
  const { formData, setFormData } = useForm();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError={}
    if (!formData.name) newError.name = "Name is required.";
    if (!formData.email) newError.email = "Email is required.";
    if (!formData.phone) {
      newError.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newError.phone = "Phone number must be valid";
    }
    
   

    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      return;
    }

    onNext();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-sm flex flex-col bg-white rounded-lg shadow-lg p-6 bg-opacity-100 z-50 m-3">
        <h1 className="text-center text-2xl font-serif text-rose-700 m-2">
          Enter Presonal Details
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter  name"
              value={formData.name}
              onChange={handleChange}
              className={`border rounded p-2 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded p-2 ${errors.name ? 'border-red-500' : ''}`}
             
            />
             {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phone" className="mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            
              className={`border rounded p-2 ${errors.phone ? 'border-red-500' : ''}`}
            />
             {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>
          <button type="submit" className="bg-teal-500 text-white rounded p-2 ">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
