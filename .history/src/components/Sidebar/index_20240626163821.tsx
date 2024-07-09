/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { usePathname } from 'next/navigation';
import { useState, useMemo } from 'react';
import { HiHome, HiSearch } from 'react-icons/hi';

import { ArrowLeft, Atom } from 'lucide-react';

import Box from '../ui/Box';
import Galeria from './Galeria';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
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
