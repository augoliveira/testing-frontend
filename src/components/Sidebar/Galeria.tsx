'use client';

import { Library, Plus } from 'lucide-react';

const Galeria = () => {
  const onClick = () => {
    // Handle upload later
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <Library className="text-neutral-400" size={26} />
          <p className="text-md font-medium text-neutral-400">Library</p>
        </div>
        <Plus
          onClick={onClick}
          size={20}
          className="cursor-pointer text-neutral-400 transition hover:text-white"
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2 px-3">List of Songs!</div>
    </div>
  );
};

export default Galeria;
