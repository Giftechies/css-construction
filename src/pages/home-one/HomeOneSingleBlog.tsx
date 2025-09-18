import BorderVerticalThree from "@/components/shared/BorderVerticalThree";
import SectionText from "@/components/shared/SectionText";
import { cn } from "@/utils/cn";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData |string  ;
  date: string;
  title: string;
  text: string;
  link: string;
  linkClass?: string;
};

const HomeOneSingleBlog = ({
  image,
  date,
  title,
  text,
  link,
  linkClass,
}: Props) => {
  return (
    <div className="till-card relative justify-center gap-6 max-xl:flex max-xl:items-center max-md:flex-col lg:gap-10 xl:pb-15">
      <div className="w-fit overflow-hidden">
        <Image
          src={image}
          width={306}
          height={450}
          alt="Blog image one"
          className="reveal-img parallax-img w-[306px] h-[450px] object-contain relative inline-block"
        />
      </div>
      <div className="sp24px bottom-0 left-[220px] max-w-[416px] bg-white-1 shadow-custom2 max-xl:h-fit xl:absolute">
        <p className="s-text text-black-3">{date}</p>
        <Link
          href={`/blog-details`}
          className="h4 theme-transition-3 mt-3 block font-medium hover:text-primary"
        >
          {title}
        </Link>
        <SectionText text={text} className="mt-4" />
        <BorderVerticalThree className="mt-3" />
        <Link
          href={`${link}`}
          className="group theme-transition-3 mt-3 flex items-center gap-6 hover:text-primary"
        >
          <span className="xl-text font-medium">Read More</span>{" "}
          <span
            className={cn(
              "theme-transition-3 bg-primary p-2 text-white-1 group-hover:bg-accent-3 md:p-3",
              linkClass,
            )}
          >
            <IconArrowUpRight className="theme-transition-3 group-hover:text-primary" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeOneSingleBlog;
