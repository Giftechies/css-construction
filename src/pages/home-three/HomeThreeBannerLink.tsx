import { ReactNode } from 'react';
import { IconArrowUpRight, IconBrandTelegram } from '@tabler/icons-react';
import Link from 'next/link';
import { cn } from  "../../lib/utils";

type HomeThreeBannerLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const HomeThreeBannerLink: React.FC<HomeThreeBannerLinkProps> = ({ href, children, className }) => {
  return (
    <Link
      href={`${href}`}
      className={cn("s-text theme-transition-3 px-6 flex items-center gap-3 border  tracking-wider  font-[600] border-primary bg-primary py-[10px] text-white-1  hover:bg-transparent rounded-full capitalize w-fit   hover:text-white-1  hover:border-white-1   ", className)}
    >
        
      {children}
    </Link>
  );
};

export default HomeThreeBannerLink;
