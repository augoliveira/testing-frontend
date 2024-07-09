import Link from 'next/link';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active: booleam;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href
}: ) => {
  return (
    <Link
      href={href}
      className={cn(
        `text-md flex h-auto w-full cursor-pointer flex-row items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white`,
        active && 'text-white'
      )}
    >
      <Icon size={26} />
      <p className="truncare w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
