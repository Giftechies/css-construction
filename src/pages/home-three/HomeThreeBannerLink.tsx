import { ReactNode } from 'react';
import { IconArrowUpRight, IconBrandTelegram } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

type HomeThreeBannerLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const HomeThreeBannerLink: React.FC<HomeThreeBannerLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={`${href}`}
      className={cn("s-text theme-transition-3 px-8 flex items-center gap-3 border  tracking-normal  font-[600] border-primary bg-primary py-[10px] text-white-1  hover:bg-transparent rounded-full capitalize ", className)}
    >
         <IconBrandTelegram className=" size-5 theme-transition-3  fill-white-1 group-hover:rotate-45" />{" "}
      {children}
    </Link>
  );
};

export default HomeThreeBannerLink;
