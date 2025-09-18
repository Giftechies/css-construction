import recentPost1 from "@/../public/images/recent-post-1.png";
import recentPost2 from "@/../public/images/recent-post-2.png";
import recentPost3 from "@/../public/images/recent-post-3.png";
import Image from "next/image";
import Link from "next/link";

const RecentPost = () => {
  return (
    <div className="sp24px smt24px bg-white-4">
      <h5 className="h4 border-b border-white-3/20 pb-5 font-medium">
        Recent Post
      </h5>
      <div className="smt32px flex flex-col gap-5">
        <div className="group flex items-center gap-3">
          <div className="overflow-hidden">
            {" "}
            <Image
              src={recentPost1}
              width={80}
              height={80}
              alt="recent post"
              className="theme-transition-3 group-hover:scale-105"
            />
          </div>
          <Link href={`/blogs`} className="flex flex-col gap-3">
            <h6 className="h5 theme-transition-3 font-medium hover:text-primary ">
              The Journey of a Determined
            </h6>
            <p className="m-text text-black-3">July 28, 2023</p>
          </Link>
        </div>
        <div className="flex group items-center gap-3">

        <div className="overflow-hidden">
            {" "}
            <Image
              src={recentPost2}
              width={80}
              height={80}
              alt="recent post"
              className="theme-transition-3 group-hover:scale-105"
            />
          </div>
          <Link href={`/blogs`} className="flex flex-col gap-3">
            <h6 className="h5 theme-transition-3 font-medium hover:text-primary ">
              A Team&apos;s Mountain Odyssey
            </h6>
            <p className="m-text text-black-3">July 28, 2023</p>
          </Link>
        </div>
        <div className="flex group items-center gap-3">
        <div className="overflow-hidden">
            {" "}
            <Image
              src={recentPost3}
              width={80}
              height={80}
              alt="recent post"
              className="theme-transition-3 group-hover:scale-105"
            />
          </div>
          <Link href={`/blogs`} className="flex flex-col gap-3">
            <h6 className="h5 theme-transition-3 font-medium hover:text-primary ">
              The Art of Moving Mountains
            </h6>
            <p className="m-text text-black-3">July 28, 2023</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
