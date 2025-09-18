import Lines from "@/components/shared/Lines";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { blogDate } from "../../../public/data/blogData";
import HomeOneSingleBlog from "../home-one/HomeOneSingleBlog";

const AllBlogs = () => {
  return (
    <section className="spy120px relative overflow-hidden" id="scrollPosition">
      <div className="container">
        <div className="spt60px grid  items-center gap-x-6 gap-y-8 xl:grid-cols-2">
          {blogDate.map((item, index) => (
            <HomeOneSingleBlog
              key={`blog-${index}`}
              {...item}
              link="/blog-details"
              linkClass="rounded-full"
            />
          ))}
        </div>
        <div className="smt60px mx-auto flex w-fit items-center gap-3 rounded-xl px-3 py-3 shadow-custom3 xs:gap-8 xs:px-5">
          <button className="flex items-center gap-2">
            <IconChevronLeft size={20} className="text-primary" />{" "}
            <span className="h6 theme-transition-3 font-medium hover:text-primary">
              Prev
            </span>
          </button>
          <div className="flex items-center gap-1">
            <button className="h6 rounded-xl bg-primary px-3 py-1 font-medium text-white-1">
              1
            </button>
            <button className="h6 theme-transition-3 rounded-xl  px-3 py-1 font-medium text-black-4 hover:bg-primary hover:text-white-1">
              2
            </button>
            <button className="h6 theme-transition-3 rounded-xl  px-3 py-1 font-medium text-black-4 hover:bg-primary hover:text-white-1">
              3
            </button>
            <button className="h6 theme-transition-3 rounded-xl  px-3 py-1 font-medium text-black-4 hover:bg-primary hover:text-white-1">
              ...
            </button>
          </div>
          <button className="flex items-center gap-2">
            <span className="h6 theme-transition-3 font-medium hover:text-primary">
              Next
            </span>
            <IconChevronRight size={20} className="text-primary" />
          </button>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default AllBlogs;
