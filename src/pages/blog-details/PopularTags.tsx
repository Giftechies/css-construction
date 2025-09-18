import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="sp24px smt24px bg-white-4">
      <h5 className="h4 border-b border-white-3/20 pb-5 font-medium">
        Popular Tag
      </h5>
      <div className="smt32px flex flex-wrap gap-3">
        <Link
          href={`/blogs`}
          className="theme-transition-3 bg-white-1 px-4 py-2 hover:bg-primary hover:text-white-1"
        >
          Trading
        </Link>
        <Link
          href={`/blogs`}
          className="theme-transition-3 bg-white-1 px-4 py-2 hover:bg-primary hover:text-white-1"
        >
          Analysis
        </Link>
        <Link
          href={`/blogs`}
          className="theme-transition-3 bg-white-1 px-4 py-2 hover:bg-primary hover:text-white-1"
        >
          Research
        </Link>
        <Link
          href={`/blogs`}
          className="theme-transition-3 bg-white-1 px-4 py-2 hover:bg-primary hover:text-white-1"
        >
          Mentoring
        </Link>
        <Link
          href={`/blogs`}
          className="theme-transition-3 bg-white-1 px-4 py-2 hover:bg-primary hover:text-white-1"
        >
          Strategy
        </Link>
        <Link
          href={`/blogs`}
          className="theme-transition-3 bg-white-1 px-4 py-2 hover:bg-primary hover:text-white-1"
        >
          Planning
        </Link>
      </div>
    </div>
  );
};

export default PopularTags;
