import { ReactNode } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
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
      className={cn("px-[24px] l-text theme-transition-3 flex items-center gap-3 border leading-[19.2px] tracking-[.2px]  font-[700] border-primary bg-primary py-[10px] text-white-1  hover:bg-transparent rounded-full  ", className)}
    >
      {children}
      <IconArrowUpRight />
    </Link>
  );
};

export default HomeThreeBannerLink;
