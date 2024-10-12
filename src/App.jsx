import Confirmation from "./components/Confirmation.jsx"
import Form1 from "./components/Form1"
import Form2 from "./components/Form2"
import React from "react"
import { FormProvider } from "./components/Formcontext.jsx";
import { useState } from "react";
import { useForm } from "./components/Formcontext.jsx";

export default function App() {
  const [step, setStep] = useState(1);
  

  const nextStep = () => {
      setStep((prev) => prev + 1);
  };

  const previousStep = () => {
      setStep((prev) => prev - 1);
  };

  const resetForm=()=>{
    setStep(1)
   
  }
  return (
    <div>
      <FormProvider>
            {step === 1 && <Form1 onNext={nextStep} />}
            {step === 2 && <Form2 step={step} onPrevious={previousStep} onNext={nextStep} />}
            {step === 3 && <Confirmation onReset={resetForm} />}
            </FormProvider>
      </div>
  )
}