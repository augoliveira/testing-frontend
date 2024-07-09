'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Image1 from '../../public/cortina-de-vidro1.jpg';
import Image2 from '../../public/Portas.jpg';
import Image3 from '../../public/Porta-2.jpg';
import { motion } from 'framer-motion';

// import { Container } from './styles';

const Service: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TimelineItems = [
    {
      title: 'Box para banheiro com sistema com roldanas aparentes',
      description:
        'O Box de Vidro Com Roldanas Aparentes com acabamento em aço inox é um dos modelos mais procurados atualmente por conseguir agregar alta resistência com beleza e sofisticação.',
      image: Image1
    },
    {
      title: 'Box para Banheiro de Abrir',
      description:
        'O Box para banheiro de Abrir é um modelo prático, mais indicado para pequenos ambientes, pois permite maior comodidade na abertura da porta e na passagem entre o seu box de vidro para banheiro e os outros móveis e louças sanitárias. Caso seu banheiro tenha um espaço pequeno e reduzido. O modelo ideal é o Box Marine com porta de abrir, uma opção é instalar a dobradiça com a abertura para dentro do box, desde que haja espaço útil entre a porta e as paredes internas. ou box do tipo Camarão Articulado onde as duas folhas recolhem.',
      image: Image2
    },
    {
      title: 'Box Articulado – Box de Vidro Articulado Arty Rollit',
      description:
        'O Box de Vidro Rollit Arty Articulado, box do tipo camarão, foi projetado para atender pequenos espaços. Ou seja, box para banheiros menores, garantindo a abertura total do vão.',
      image: Image3
    }
  ];
  return (
    <main className="flex w-full flex-col gap-20 bg-white px-4 py-20 md:px-14 md:py-40 lg:flex-row">
      <div className="flex w-full flex-col justify-between lg:w-1/2">
        <h1 className="text-2xl font-medium md:text-3xl">Slider</h1>
        <div>
          {TimelineItems.map((item, index) => (
            <div
              key={index}
              className={`${activeIndex === index ? 'border-black' : 'border-gray-200'} mb-4 border-b pb-1`}
            >
              <h1
                className={`cursor-pointer pb-2 text-xl font-light md:text-2xl ${
                  activeIndex === index ? 'text-black' : 'text-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </h1>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? 'auto' : 0
                }}
                transitio
                ClassName="mb-2 overflow-hidden rounded-md border-l-2 border-blue-500 bg-blue-100 p-4 pl-10  text-sm font-semibold text-gray-500 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-base"
              >
                <p className="pb-2 text-sm text-gray-500">{item.description}</p>
              </motion.div>
            </div>
          ))}
          <button className="hover:opacity-2 mt-4 rounded-full border-r-gray-600 bg-green-400 px-4 py-2 text-sm text-slate-50 transition-all hover:text-base">
            Saiba Mais
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={TimelineItems[activeIndex].image} alt={Image} />
      </div>
    </main>
  );
};

export default Service;
