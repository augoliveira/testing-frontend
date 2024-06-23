'use client';

import { useRouter } from 'next/navigation';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';

import { Home as HomeIcon, Search } from 'lucide-react';

import { cn } from '@/lib/utils';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ children, className, ...props }) => {
  const router = useRouter();

  const handleLogout = () => {
    //Handle Logout in the future
  };

  return (
    <div
      className={cn(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}
    >
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 md:flex">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <HomeIcon className="text-black" />
          </button>
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <Search className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
