"use client";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
// import {PostCode,PostDetails,Skip,Cart,Extra} from "@/components/booking/steps"
import PostCode from "@/components/booking/steps/PostCode";
import Extra from "@/components/booking/steps/Extra";
import Cart from "@/components/booking/steps/Cart";
import PostDetails from "@/components/booking/steps/PostDetails";
import Skip from "@/components/booking/steps/Skip";
import ProgressBar from "./ProgressBar";
import SectionSubTitle from "../shared/SectionSubTitle";
import { useRouter } from "next/navigation";
import { Fetchjobtype, Fetchextra } from "./action/action";

const BoonkingOnline = () => {
  // 🟢 Default form values
  const defaultValues = {
    postcodeArea: "",
    fullPostcode: "",
    deliveryDate: "",
    permitOnHighway: false,
    jobType: "",
    skipSize: [],
    extras: [],
    cart: [],
    customer: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  };

  // let fetchextra =[]
  const [fetchjob, setfetchjob] = useState([]);
  const [fetchextra, setfetchextra] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await Fetchjobtype();
      setfetchjob(res.data);

      const extrares = await Fetchextra();

      // If API data is successful and valid, replace the hardcoded list
      if (
        extrares.success &&
        Array.isArray(extrares.data) &&
        extrares.data.length > 0
      ) {
        setfetchextra(extrares.data);
        console.log(fetchextra, "dfsd<<<<><><><><><>");
      }
    })();
  }, []);

  const { register, handleSubmit } = useForm();

  const navigate = useRouter();

  const methods = useForm({ defaultValues });
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Postcode", component: <PostCode /> },
    { title: "Details", component: <PostDetails jobtype={fetchjob} /> },
    {
      title: "Skip Size",
      component: <Skip goToNextStep={() => setCurrentStep(currentStep + 1)} />,
    },
    { title: "Extras", component: <Extra EXTRAS={fetchextra} /> },
    { title: "Cart", component: <Cart /> },
    // { title: "Checkout", component: <Step6_Checkout /> },
  ];
  const nextStep = async () => {
    // Validate current step before moving forward
    const isValid = await methods.trigger(); // for now: validate all fields
    // if(jobType)
    const type = methods.watch("jobType");
    if (type === "collection") {
      console.log("Redirecting to collection page:", type);
      navigate.push("/collection"); // <-- redirects user
      return; // stop further steps
    }
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
          className="container  z-30 mt-8  flex flex-col items-center gap-8 rounded-lg bg-white-1 p-4 shadow-md"
        >
          <h1 className="h2 title-animation text-center  font-oswald  font-[700] !text-primary   ">
            Your Skip, Ready to Hire
          </h1>
          {/* Progress bar */}
          <ProgressBar
            className={"mt-6"}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            steps={steps}
          />

          {/* Render current step */}
          <div className="mx-auto mt-8 w-[70%] ">
            {steps[currentStep].component}
          </div>

          {/* Navigation buttons */}
          <div className="flex  justify-center gap-4 ">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="rounded-full bg-primary px-4 py-2 text-white-1"
              >
                Previous
              </button>
            )}

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className=" rounded-full bg-primary px-8 py-2 text-white-1"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className=" rounded-full bg-green-600 px-4 py-2 text-white-1"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default BoonkingOnline;
