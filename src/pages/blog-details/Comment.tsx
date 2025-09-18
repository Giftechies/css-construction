"use client";
import { cn } from "@/utils/cn";
import { IconSend, IconShare3 } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import AnimateHeight from "react-animate-height";

type Props = {
  image: StaticImageData;
  name: string;
  date: string;
  comment: string;
  className?: string;
};

const Comment = ({ image, name, date, comment, className }: Props) => {
  const [replayInputOpen, setReplayInputOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleReplay = () => {
    setReplayInputOpen(!replayInputOpen);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={cn("smt60px flex gap-5 max-sm:flex-col", className)}>
      <div className="shrink-0">
        <Image
          src={image}
          width={80}
          height={80}
          alt="comment profile image"
          className="rounded-full max-sm:size-15"
        />
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <p className="h5 font-medium">{name}</p>
          <p className="m-text text-black-1">{date}</p>
        </div>
        <p className="l-text smt24px text-black-3">{comment}</p>
        <button
          onClick={handleReplay}
          className="l-text mt-5 flex items-center gap-3 font-medium"
        >
          <span>Reply</span> <IconShare3 />
        </button>
        <AnimateHeight
          duration={500}
          height={replayInputOpen ? "auto" : 0}
          aria-label={`example-panel-replay-input`}
        >
          <div className={`theme-transition-3 mt-5 flex items-center gap-5 `}>
            <div>
              <Image
                src={image}
                width={60}
                height={60}
                alt="comment image 2"
                className="rounded-full"
              />
            </div>
            <form className="relative flex h-fit w-full flex-col gap-4">
              <div
                className={`rounded-32px border-neutral-30 text-sText placeholder:text-sText flex min-w-full gap-2 border px-2 py-3 placeholder:to-neutral-50 sm:gap-3 sm:px-5 sm:py-4`}
              >
                <input
                  type="text"
                  placeholder="Join the discussion..."
                  className="w-full bg-inherit outline-none"
                  ref={inputRef}
                />
                <button className=" rounded-32px self-end  text-neutral-500">
                  <IconSend className="theme-transition-3 hover:rotate-45" />
                </button>
              </div>
            </form>
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
};

export default Comment;
