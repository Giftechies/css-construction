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
    <a
      href={`${href}`}
      className={cn("s-text theme-transition-3 px-6 flex items-center gap-3 border  tracking-wider  font-[600] border-primary bg-primary py-[10px] text-white-1  hover:bg-transparent capitalize    w-fit   rounded-full text-white-1  border-white  bg-transparent hover:border-primary hover:text-primary   ", className)}
    >
        
      {children}
    </a>
  );
};

export default HomeThreeBannerLink;
