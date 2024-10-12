import React from "react";
import { useForm } from "./Formcontext";

const Confirmation = ({onReset}) => {
    const { formData } = useForm();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="w-full max-w-sm flex flex-col bg-white rounded-lg shadow-lg p-6 m-4">
                <h1 className="text-center text-2xl font-serif text-rose-700">Preview</h1>
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Details</h2>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Address 1: {formData.address1}</p>
                    <p>Address 2: {formData.address2}</p>
                    <p>City: {formData.city}</p>
                    <p>State: {formData.state}</p>
                    <p>Zip Code: {formData.zipCode}</p>
                </div>
               
                <div className="mt-4 text-center">
                    <button
                        className="bg-blue-500 text-white rounded p-2"
                        onClick={() => {
                            alert("Form submitted");
                            onReset(); 
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
