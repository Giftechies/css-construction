"use client"
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import { IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";
import HomeThreeBannerLink from "../home-three/HomeThreeBannerLink";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import { usePathname } from "next/navigation";


const AboutLocal = ({
    imagepath1,
    imagepath2,
    imagepath3,
    counterNumber, // Not used in JSX, but kept in props
    counterText, // Not used in JSX, but kept in props
    title,
    text1,
    text2, // Not used in JSX, but kept in props
    buttonText,
    stepText1 = "",
    stepText2 = "",
    stepText3 = "",
    stepText4 = "",
    stepText5 = "",
    subheading
}) => {

    const pathname = usePathname()

    return (
        <section
            className="spt80px  spb120px  overflow-hidden"
            
        >
            <div className="container grid grid-cols-12 items-center space-y-6 lg:gap-24">
                
                {/* Image Gallery Column (Left on Large Screens) */}
                <div className="col-span-12 xl:col-span-6">
                    
                    {/* The Image Wrapper: Changes layout based on screen size */}
                    <div className="flex flex-col gap-4 sm:flex-row xl:flex-row xl:h-[600px] sm:h-[400px]">
                        
                        {/* Image 1: Main/Taller Image - Left side (Full width on mobile, 5/12 on tablet/desktop) */}
                        <div className="w-full sm:w-5/12 h-[200px] sm:h-full rounded-lg overflow-hidden relative group">
                            <Image
                                src={imagepath1}
                                width={400}
                                height={600}
                                alt="Mission image one"
                                className="w-full h-full object-cover object-center theme-transition-3 them group-hover:scale-105"
                            />
                        </div>

                        {/* Image 2 & 3 Container - Right side (stacked vertically) */}
                        <div className="w-full sm:w-7/12 h-full flex flex-col gap-4">
                            
                            {/* Image 2: Top Right */}
                            <div className="w-full h-[200px] sm:h-1/2 rounded-lg overflow-hidden relative group">
                                <Image
                                    src={imagepath2}
                                    width={500}
                                    height={300}
                                    alt="Mission image two"
                                    className="w-full h-full object-cover object-center theme-transition-3 group-hover:scale-105"
                                />
                            </div>

                            {/* Image 3: Bottom Right - Now visible on mobile, just stacked below Image 2 */}
                            <div className="w-full h-[200px] sm:h-1/2 rounded-lg overflow-hidden relative group">
                                <Image
                                    src={imagepath3}
                                    width={500}
                                    height={300}
                                    alt="Mission image three"
                                    className="w-full h-full object-cover object-center theme-transition-3 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Column (Right on Large Screens) */}
                <div className="col-span-12 xl:col-span-6">
                    <SectionSubTitle text={title ? title : "Who we are"} className=" " />
                    <SectionTitle
                        text={subheading ? subheading : "Our Mission & Vision"}
                        className="h1 text-left text-black-2 pt-3"
                    /> 
                    {/* Main Text: Ensure text container doesn't overflow */}
                    <div className="w-full"> 
                        <SectionText
                            className="fade-top text-left pt-5"
                            text={text1}
                        />
                    </div>

                    {/* Checkbox List */}
                    <div className="spt32px flex flex-col gap-3">
                        {pathname === "/about-us" ? <p className="h6 font-semibold" >We serve:</p> : ""}
                        
                        {/* Use utility classes for consistent list item styling */}
                        {[stepText1, stepText2, stepText3, stepText4, stepText5].filter(text => text).map((text, index) => (
                            <div key={index} className="m-text text-wrap flex items-start gap-2 text-accent-1">
                                <IconCheckbox className="mt-1 flex-shrink-0 size-5" /> 
                                <span className="break-words">{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Button/Link */}
                    {pathname !== "/about-us" && (
                        <HomeThreeBannerLink 
                            href="/about-us" 
                            className="bg-primary rounded-full text-white-1 hover:bg-transparent hover:text-primary hover:border-primary w-fit mt-6" 
                        >
                            {buttonText ? buttonText : "Discover More"}
                        </HomeThreeBannerLink>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutLocal;