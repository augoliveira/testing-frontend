/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Image1 from '../../public/cortina-de-vidro1.jpg';
import Image2 from '../../public/cortina-de-vidro1.jpg';
import Image3 from '../../public/cortina-de-vidro1.jpg';

// import { Container } from './styles';

const Service: React.FC = () => {
  const [activeIdex, setActiveIdex] = useState(0);

  const TimelineItems = [
    {
      question: '01 Vidraçaria',
      answer: 'Vidro para portas e janelas',
      image: Image1
    },
    {
      question: '02 Vidraçaria',
      answer: 'Vidro para portas e janelas',
      image: Image2
    },
    {
      question: '03 Vidraçaria',
      answer: 'Vidro para portas e janelas',
      image: Image3
    }
  ];
  return (
    <main className="flex w-full flex-col gap-20 px-4 py-20 md:px-14 md:py-40 lg:flex-row">
      <div className="flex w-full flex-col justify-between lg:w-1/2">
        <h1 classname="font-medium text-2xl md:?text-3xl">Slider</h1>
        <div>
          {TimelineItems.map((item, index) => (
            <div>{item.title}</div>
          ))}
        </div>
      </div>
      <div className>
        <Image src={TimelineItems[activeIdex].image} alt={Image} />
      </div>
    </main>
  );
};

export default Service;
