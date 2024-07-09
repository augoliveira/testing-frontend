/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import { useState, useMemo } from 'react';
import { HiHome, HiSearch } from 'react-icons/hi';

import { ArrowLeft, Atom } from 'lucide-react';

import Box from '../ui/Box';
import Galeria from './Galeria';
import SidebarItem from './SidebarItem';

type Props = { children: React.ReactNode };

const Sidebar: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/'
      },
      {
        icon: HiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/'
      }
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div
        className={`duration relative hidden h-screen flex-col gap-y-2 bg-black p-2 md:flex`}
      >
        <ArrowLeft
          className={`absolute -right-3 top-9 z-40 cursor-pointer rounded-full border border-dark-purple bg-white text-3xl text-dark-purple ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Galeria />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
