"use client"
import React, { useState } from 'react'
import { useForm,FormProvider } from 'react-hook-form'
import {PostCode,PostDetails,Skip,Cart,Extra} from "@/components/booking/steps"
import   ProgressBar      from "./ProgressBar"


const BoonkingOnline = () => {
    
// 🟢 Default form values
const defaultValues = {
  postcodeArea: "",
  fullPostcode: "",
  deliveryDate: "",
  permitOnHighway: false,
  jobType: "",
  skipSize: null,
  extras: [],
  cart: [],
  customer: {
    name: "",
    phone: "",
    email: "",
    address: "",
  },
};

const {register,handleSubmit} = useForm()

const methods = useForm({ defaultValues });
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Postcode", component: <PostCode /> },
    { title: "Details", component: <PostDetails /> },
    { title: "Skip Size", component: <Skip /> },
    { title: "Extras", component: <Extra /> },
    { title: "Cart", component: <Cart /> },
    // { title: "Checkout", component: <Step6_Checkout /> },
  ];
  const nextStep = async () => {
    // Validate current step before moving forward
    const isValid = await methods.trigger(); // for now: validate all fields
    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

const onSubmit = (data) => {
    console.log("✅ Final submit:", data);
    // call API or payment gateway here
  };
  return (
    <>
  <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="container m-8 p-4 shadow-md rounded-lg"
      >
        {/* Progress bar */}
        <ProgressBar currentStep={currentStep} steps={steps} />

        {/* Render current step */}
        <div className="mt-6 w-[70%] mx-auto ">{steps[currentStep].component}</div>

        {/* Navigation buttons */}
        <div className="flex  gap-4 justify-center  mt-10">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-primary text-white-1 rounded"
            >
              Previous
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className=" px-8 py-2 bg-primary text-white-1 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className=" px-4 py-2 bg-green-600 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
    </>
  )
}

export default BoonkingOnline