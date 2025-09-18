import teamDetails from "@/../public/images/team-details.png";
import FollowUs from "@/components/shared/FollowUs";
import SectionText from "@/components/shared/SectionText";
import Image from "next/image";

const TeamDetailsContent = () => {
  return (
    <section className="spy120px fade-wrapper relative" id="scrollPosition">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="spr60px spt60px spl60px col-start-1 col-end-13 bg-primary md:col-end-7">
            <Image
              src={teamDetails}
              width={516}
              height={933}
              alt="Team member image"
              className="fade-top mx-auto block max-md:max-w-56"
            />
          </div>
          <div className="col-start-1 col-end-13 md:col-start-7 lg:col-start-8">
            <h3 className="d4 title-animation font-semibold">Guy Hawkins</h3>
            <p className="lead-text mt-3">CEO & Founder</p>
            <div className="spt32px">
              <h5 className="h4 font-medium">About Firlo.</h5>
              <SectionText
                text="In the world of banking, teams are the backbone of success. Their collective efforts ensure that banks can provide financial services that recognizing the importance of teamwork and culture of collaboration, the banking industry can continue to build strong financial foundations for a brighter future."
                className="fade-top mt-5"
              />
            </div>
            <div className="spt60px">
              <FollowUs />
            </div>
            <div className="smt60px smb60px h-px w-full bg-[#B3B6B9]/40"></div>
            <div>
              <p className="h4 font-medium">Details</p>
              <div className="spt24px fade-top flex items-center gap-5">
                <div className="flex flex-col gap-3">
                  <p className="xl-text text-black-3">Location:</p>
                  <p className="xl-text text-black-3">Position:</p>
                  <p className="xl-text text-black-3">Email:</p>
                  <p className="xl-text text-black-3">Age:</p>
                  <p className="xl-text text-black-3">Qualification:</p>
                  <p className="xl-text text-black-3">Gender:</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="xl-text">Spain, Barcelona</p>
                  <p className="xl-text">Founder & CEO</p>
                  <p className="xl-text">sara.cruz@example.com</p>
                  <p className="xl-text">42</p>
                  <p className="xl-text">Master Degree</p>
                  <p className="xl-text">Male</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsContent;
