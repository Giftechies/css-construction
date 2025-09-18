import blogImage1 from "@/../public/images/home-one/home-one-recent-blog-1.png";
import blogImage2 from "@/../public/images/home-one/home-one-recent-blog-2.png";
import RoundedLink from "@/components/link/RoundedLink";
import Lines from "@/components/shared/Lines";
import SectionSubTitle from "@/components/shared/SectionSubTitle";
import SectionText from "@/components/shared/SectionText";
import SectionTitle from "@/components/shared/SectionTitle";
import HomeOneSingleBlog from "./HomeOneSingleBlog";
import BlogCard from "@/components/cards/BlogCard";

const HomeOneRecentBlog = () => {
  return (
    <section className="spy120px fade-wrapper relative overflow-hidden">
      <div className="container  ">
        <div className="flex w-full justify-between gap-4 max-md:flex-col md:items-center md:gap-6">
          <div className=" w-[60%] " >
            <SectionSubTitle text="Recent Blog" />
            <SectionTitle
              text="Read update Journal "
              className="mt-5  "
            />
          </div>
          <div className="spt60px flex items-center justify-center">
          <RoundedLink buttonText="All Blog" link="/blogs" />
        </div>
         
        </div>
        <div className="spt60px grid  items-center gap-6 xl:grid-cols-3">
        

          <BlogCard imagepath={"https://images.unsplash.com/photo-1756302555654-5e413da2d1b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"}
           link="/blog-details" />
          <BlogCard imagepath={"https://images.unsplash.com/photo-1756302555654-5e413da2d1b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"} link="/blog-details" />
          <BlogCard imagepath={"https://images.unsplash.com/photo-1756302555654-5e413da2d1b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"} link="/blog-details" />
        </div>
        
      </div>
    </section>
  );
};

export default HomeOneRecentBlog;
