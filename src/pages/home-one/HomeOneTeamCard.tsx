"use client";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  image: StaticImageData;
  name: string;
  title: string;
};

function HomeOneTeamCard({ image, name, title }: Props) {
  const [socialButtonOpen, setSocialButtonOpen] = useState(false);
  return (
    <div>
      <div className="group relative bg-primary">
        <Image
          src={image}
          width={100}
          height={100}
          alt="Team one"
          className="w-full block "
        />
        <div
          className={`theme-transition-4 absolute -bottom-7 right-6 z-20 w-fit rounded-full`}
        >
          <div
            className={`theme-transition-4 flex flex-col gap-1 p-1  ${
              socialButtonOpen
                ? "visible rounded-full border border-accent-3 opacity-100"
                : "invisible  opacity-0"
            }`}
          >
            <Link
              href="/"
              className="hover:text-primaryColor theme-transition-3 rounded-full border border-accent-3 bg-accent-3 p-3 hover:bg-transparent"
            >
              <IconBrandFacebookFilled stroke={1} />
            </Link>
            <Link
              href="/"
              className="hover:text-primaryColor theme-transition-3 rounded-full border border-accent-3 bg-accent-3 p-3 hover:bg-transparent"
            >
              <IconBrandTwitterFilled stroke={1} />
            </Link>
            <Link
              href="/"
              className="hover:text-primaryColor theme-transition-3 rounded-full border border-accent-3 bg-accent-3 p-3 hover:bg-transparent"
            >
              <IconBrandInstagram stroke={2} />
            </Link>
          </div>
          <div className="bg-primaryColor rounded-full p-2">
            <button
              onClick={() => setSocialButtonOpen(!socialButtonOpen)}
              className={`w-fit bg-accent-3 p-3 `}
            >
              {socialButtonOpen ? (
                <IconMinus size={20} />
              ) : (
                <IconPlus size={20} />
              )}
            </button>
          </div>
        </div>
        <div className="theme-card rounded-16px theme-transition-4 absolute bottom-0 left-0 flex h-0 w-full opacity-0 group-hover:visible group-hover:h-full group-hover:opacity-100"></div>
      </div>
      <div className="mt-4 text-center">
        <Link href={`/team-details`} className="h4 font-medium">
          {name}
        </Link>
        <p className="m-text ">{title}</p>
      </div>
    </div>
  );
}

export default HomeOneTeamCard;
