import React, { useState } from "react";
import { useForm } from "./Formcontext";

const Form2 = ({ onPrevious, onNext, step }) => {
  const { formData, setFormData } = useForm();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError={}
    if (!formData.address1) newError.address1 = "Address is required.";
    if (!formData.address2) newError.address2 = "Address2  is required.";
    if (!formData.city) newError.city = "City is required.";
    if (!formData.state) newError.state = "State is required.";
    if (!formData.zipCode) newError.zipCode = "zipCode is required.";
   
    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      return;
    }
    onNext();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-sm flex flex-col bg-white rounded-lg shadow-lg p-6 bg-opacity-100 z-50 m-5">
        <h1 className="text-center text-2xl font-serif text-rose-700 m-2">
          Enter Address
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="address1" className="mb-2">
              address1
            </label>
            <input
              type="text"
              id="address1"
              name="address1"
              placeholder="Adress line 1"
              value={formData.address1}
              onChange={handleChange}
       
              className={`border rounded p-2 ${errors.address1 ? 'border-red-500' : ''}`}
            />
            {errors.address1 && <span className="text-red-500 text-sm">{errors.address1}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="address2" className="mb-2">
              address2
            </label>
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="Adress line 2"
              value={formData.address2}
              onChange={handleChange}
              className={`border rounded p-2 ${errors.address1 ? 'border-red-500' : ''}`}
            />
               {errors.address2 && <span className="text-red-500 text-sm">{errors.address2}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="city" className="mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
              className={`border rounded p-2 ${errors.city ? 'border-red-500' : ''}`}
            />
             {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="state" className="mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Enter state"
              value={formData.state}
              onChange={handleChange}
              className={`border rounded p-2 ${errors.state ? 'border-red-500' : ''}`}
            />
             {errors.state && <span className="text-red-500 text-sm">{errors.state}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="zipCode" className="mb-2">
              zipCode
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Enter zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={`border rounded p-2 ${errors.state ? 'border-red-500' : ''}`}
              
            />
               {errors.zipCode && <span className="text-red-500 text-sm">{errors.zipCode}</span>}
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onPrevious}
              disabled={step === 2}
              className="bg-gray-300 text-gray-700 rounded p-2"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form2;
