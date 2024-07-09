'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Image1 from '../../public/cortina-de-vidro1.jpg';
import Image2 from '../../public/Portas.jpg';
import Image3 from '../../public/Porta-2.jpg';

// import { Container } from './styles';

const Service: React.FC = () => {
  const [activeIdex, setActiveIndex] = useState(0);

  const TimelineItems = [
    {
      title: '01 Vidraçaria',
      description: 'Vidro para portas e janelas',
      image: Image1
    },
    {
      title: '02 Vidraçaria',
      description: 'Vidro para portas e janelas',
      image: Image2
    },
    {
      title: '03 Vidraçaria',
      description: 'Vidro para portas e janelas',
      image: Image3
    }
  ];
  return (
    <main className="flex w-full flex-col gap-20 px-4 py-20 md:px-14 md:py-40 lg:flex-row">
      <div className="flex w-full flex-col justify-between lg:w-1/2">
        <h1 classname="font-medium text-2xl md:?text-3xl">Slider</h1>
        <div>
          {TimelineItems.map((item, index) => (
            <div
              className={`&{activeIndex --- index ? "border-black" : } mb-4 border-b pb-1`}
            >
              <h1
                className="cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </h1>
            </div>
          ))}
          <button className="hover:opacity-2 mt-4 rounded-full border-r-gray-600 bg-green-400 px-4 py-2 text-sm text-slate-50 transition-all hover:text-base">
            Saiba Mais
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={TimelineItems[activeIdex].image} alt={Image} />
      </div>
    </main>
  );
};

export default Service;
