import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitch,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <p className="h5 font-medium">Share</p>{" "}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl border border-primary p-2 text-primary hover:bg-primary hover:text-white-1"
        >
          <IconBrandFacebook />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl border border-primary p-2 text-primary hover:bg-primary hover:text-white-1"
        >
          <IconBrandTwitch />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl border border-primary p-2 text-primary hover:bg-primary hover:text-white-1"
        >
          <IconBrandInstagram />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl border border-primary p-2 text-primary hover:bg-primary hover:text-white-1"
        >
          <IconBrandDiscord />
        </Link>
        <Link
          href={`/`}
          className="theme-transition-3 rounded-xl border border-primary p-2 text-primary hover:bg-primary hover:text-white-1"
        >
          <IconBrandYoutube />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
