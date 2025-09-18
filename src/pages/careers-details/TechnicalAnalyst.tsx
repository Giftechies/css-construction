"use client";
import careersDetailsThumb from "@/../public/images/careers-details-thum.png";
import LinkAccentThree from "@/components/link/LinkAccentThree";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { cn } from "@/utils/cn";
import { IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import CareersDetailsRight from "./CareersDetailsRight";
import JobDescriptionTab from "./JobDescriptionTab";
import JobOverView from "./JobOverView";
import JobRequirements from "./JobRequirements";

const TechnicalAnalyst = () => {
  const [tabText, setTabText] = useState("description");

  const handleTab = (tabText: string) => {
    setTabText(tabText);
  };

  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-start-1 col-end-13 lg:col-end-8 xxl:col-start-2">
            <SectionTitle text="Application Technical Analyst" className="h2" />
            <SectionText text="Marketing Department" className="spt24px" />
            <Image
              src={careersDetailsThumb}
              width={636}
              height={350}
              alt="Career Detail image"
              className="spt32px fade-top"
            />
            <div className="spt32px">
              <div className="h4 flex items-center justify-around border-primary/60 font-medium max-sm:flex-wrap sm:border-b">
                <button
                  onClick={() => handleTab("description")}
                  className={cn(
                    "theme-transition-3 relative w-full border-b-2 border-transparent pb-4 after:bottom-0 after:left-0 after:h-px after:w-full after:bg-primary/30 hover:border-primary hover:text-primary max-sm:mb-2 max-sm:after:absolute",
                    { "border-primary": tabText === "description" },
                  )}
                >
                  Job Description
                </button>
                <button
                  onClick={() => handleTab("overview")}
                  className={cn(
                    "theme-transition-3 relative w-full border-b-2 border-transparent pb-4 after:bottom-0 after:left-0 after:h-px after:w-full after:bg-primary/30 hover:border-primary hover:text-primary max-sm:mb-2 max-sm:after:absolute",
                    { "border-primary": tabText === "overview" },
                  )}
                >
                  Job Overview
                </button>
                <button
                  onClick={() => handleTab("requirements")}
                  className={cn(
                    "theme-transition-3 relative w-full border-b-2 border-transparent pb-4 after:bottom-0 after:left-0 after:h-px after:w-full after:bg-primary/30 hover:border-primary hover:text-primary max-sm:mb-2 max-sm:after:absolute",
                    { "border-primary": tabText === "requirements" },
                  )}
                >
                  Job Requirements
                </button>
              </div>
            </div>
            {tabText === "description" && <JobDescriptionTab />}
            {tabText === "overview" && <JobOverView />}
            {tabText === "requirements" && <JobRequirements />}

            <div className="smt60px appear-down spt24px spb24px spl32px spr32px bg-accent-3/30">
              <div className="flex justify-between max-sm:flex-col max-sm:gap-6 sm:items-center">
                <div className="flex flex-col gap-3">
                  <p className="m-text">Marketing </p>
                  <h5 className="h5 font-medium">Regional Head Officer</h5>
                  <div className="m-text flex items-center gap-3 text-black-1">
                    <IconMapPin className="text-black-4" />{" "}
                    <span>Manhattan, New York</span>
                  </div>
                </div>
                <LinkAccentThree link="/contact" linkText="Apply For Job" />
              </div>
            </div>
          </div>
          <CareersDetailsRight />
        </div>
      </div>
    </section>
  );
};

export default TechnicalAnalyst;
