import React from 'react';
import { useState } from 'react';

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
      <p>Hello Word</p>
    </main>
  );
};

export default Service;
