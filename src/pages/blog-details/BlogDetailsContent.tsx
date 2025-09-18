import blogDetailsBig from "@/../public/images/blog-details-big.png";
import blogInnerImage from "@/../public/images/blog-inner-iamge.png";
import comment1 from "@/../public/images/comment-1.png";
import comment2 from "@/../public/images/comment-2.png";
import comment3 from "@/../public/images/comment-3.png";
import SectionTitle from "@/components/shared/SectionTitle";
import SocialMedia from "@/components/shared/SocialMedia";
import { IconQuote, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import BlogCategories from "./BlogCategories";
import Comment from "./Comment";
import PopularTags from "./PopularTags";
import RecentPost from "./RecentPost";

const BlogDetailsContent = () => {
  return (
    <section className="spy120px fade-wrapper" id="scrollPosition">
      <div className="container">
        <p className="l-text text-black-1">Latest News December 12, 2022</p>
        <SectionTitle text="Digital Banking Services " className="mt-4" />
        <div className="overflow-hidden">
          <Image
            src={blogDetailsBig}
            width={1296}
            height={584}
            alt="Blog detail big image"
            className="smt40px theme-transition-3 hover:scale-105"
          />{" "}
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-1 col-end-13 xl:col-end-9">
            <p className="l-text spt32px fade-top text-black-3">
              In the dynamic world of banking, staying ahead of the curve is
              crucial for both financial institutions and their customers. As we
              dive into 2023, it&apos;s time to explore the exciting trends and
              developments that are shaping the future of banking. From
              innovative technologies to evolving customer expectations, this
              blog post delves into what&apos;s on the horizon.
            </p>
            <p className="l-text spt32px fade-top text-black-3">
              In the dynamic world of banking, staying ahead of the curve is
              crucial for both financial institutions and their customers. As we
              dive into 2023, it&apos;s time to explore the exciting trends and
              developments that are From innovative technologies to evolving
              customer expectations,
            </p>
            <div className="overflow-hidden">
              <Image
                src={blogInnerImage}
                width={856}
                height={350}
                alt="blog inner image"
                className="spt32px theme-transition-3 hover:scale-105"
              />
            </div>
            <h4 className="h2 spt60px title-animation font-semibold">
              The Rise of Fintech and Open Banking
            </h4>
            <p className="l-text fade-top pt-2 text-black-3">
              Fintech startups are disrupting the traditional banking landscape.
              We discuss how these nimble companies are driving innovation and
              how open banking initiatives are fostering collaboration and
              improved financial services.
            </p>
            <div className="smt40px relative bg-white-1 shadow-custom2">
              <p className="lead-text spx32px spy40px fade-top relative z-10 text-center font-medium text-black-1">
                Keep up with evolving banking regulations and compliance
                requirements which play a critical role in shaping the industry.
              </p>
              <IconQuote
                stroke={1}
                className="absolute left-1/2 top-1/2 z-0 size-25 -translate-x-1/2 -translate-y-1/2 rotate-180 text-accent-3"
              />
            </div>
            <h4 className="h3 smt40px title-animation font-medium">
              The Rise of Fintech and Open Banking
            </h4>
            <p className="l-text fade-top mt-5 text-black-3">
              Always ready to push the boundaries, especially when it comes to
              our own platform, Our analytical eye to create a site that was
              visually engaging and also optimised for maximum performance. It
              also perfectly reflects the journey to help it tell a story to
              increase its understanding and drive action. To create a site that
              was visually engaging for maximum performance.
            </p>
            <p className="l-text fade-top mt-5 text-black-3">
              With the growth of online banking, traditional bank branches are
              evolving. Discover how branches are adapting to remain relevant,
              offering a blend of in-person and digital services.
            </p>
            <div className="smt60px flex flex-wrap items-center justify-between gap-4 border-b border-t border-white-3/40 py-5 sm:p-5">
              <div className="flex items-center gap-4">
                <p className="h4 font-medium">Tags</p>{" "}
                <div className="flex items-center gap-2 max-sm:flex-wrap">
                  <Link href={`/blogs`} className="bg-white-2 px-4 py-3">
                    Activities
                  </Link>
                  <Link href={`/blogs`} className="bg-white-2 px-4 py-3">
                    Depertment
                  </Link>
                  <Link href={`/blogs`} className="bg-white-2 px-4 py-3">
                    City
                  </Link>
                </div>
              </div>
              <SocialMedia />
            </div>

            {/* comment section start */}
            <div className="smt60px">
              <p className="h4 smb60px font-medium">03 Comments:</p>

              <Comment
                name="Robert Fox"
                date="October 07,2023"
                comment="We discuss how these nimble companies are driving innovation and how open banking initiatives are fostering collaboration and improved financial services."
                image={comment1}
              />
              <Comment
                name="Robert Fox"
                date="October 07,2023"
                comment="We discuss how these nimble companies are driving innovation and how open banking initiatives are fostering collaboration and improved financial services."
                image={comment2}
                className="px-10 sm:ps-25"
              />
              <Comment
                name="Robert Fox"
                date="October 07,2023"
                comment="We discuss how these nimble companies are driving innovation and how open banking initiatives are fostering collaboration and improved financial services."
                image={comment3}
              />
              <div className="spt120px">
                <p className="h5 font-medium">Leave A Comment</p>
                <form className="smt60px">
                  <div className="mb-6 flex items-center gap-6 max-sm:flex-col ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="placeholder:m-text w-full bg-white-4 px-5 py-3"
                    />
                    <input
                      type="email"
                      placeholder="email"
                      className="placeholder:m-text w-full bg-white-4 px-5 py-3"
                    />
                  </div>
                  <textarea
                    placeholder="Type Comment here"
                    className="placeholder:m-text w-full bg-white-4 px-5 py-3 outline-none"
                    rows={6}
                  />
                  <div className="smt60px">
                    
                    <button className="alter-btn btn-anim group/link relative z-10 inline-flex size-[140px] items-center justify-center gap-4 overflow-hidden rounded-full border border-black-3 bg-inherit font-semibold text-black-4 hover:border-accent-3">
                      Post Comment
                      <span className="pointer-events-none absolute z-[-1] h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-accent-3 duration-700 group-hover/link:w-[calc(100%*2.25)] group-hover/link:pt-[calc(100%*2.25)]"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* comment section end */}
          </div>
          <div className="spt32px col-start-1 col-end-13 xl:col-start-9">
            <div className="sp24px bg-white-4">
              <div className="flex items-center gap-6 bg-white-1 p-3">
                <input type="text" placeholder="Search" className="w-full" />{" "}
                <div className="bg-primary p-1.5">
                  <IconSearch size={20} className="text-white-1" />
                </div>
              </div>
            </div>
            <BlogCategories />
            <RecentPost />
            <PopularTags />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
