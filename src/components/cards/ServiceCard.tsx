import SectionInnerTitle from "../shared/SectionInnerTitle";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionText from "../shared/SectionText";
import Image from "next/image";
type card = {
  iconpath: string;
  imagepath: string;
  title: string;
  content: string;
};

export default function ServiceCard({
  iconpath,
  imagepath,
  title,
  content,
}: card) {
  return (
    <div className="card group relative flex w-[40rem] items-center justify-between gap-12 rounded-full border border-white-1 bg-white-1 px-5 py-2 ">
      <div className="icon   ">
        <Image src={iconpath} width={80} height={80} alt="" />
      </div>
      <div className="img  absolute left-30 top-[50%] aspect-square w-44   -translate-y-[50%] overflow-hidden rounded-full  ">
        <Image width={250} height={250}
          src={imagepath}
          className=" h-full w-full object-cover object-center transition-all duration-300  ease-linear group-hover:scale-[1.1] "
          alt=""
        />
      </div>
      <div className="text grid  w-[50%] grid-cols-[30%_70%]  gap-3 ">
        <div className="   ">
          <SectionSubTitle text={title} className="" />
        </div>
        <div className="  ">
          <SectionText text={content} />
        </div>
      </div>
    </div>
  );
}
