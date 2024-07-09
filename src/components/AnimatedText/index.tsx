'use client';
import React from 'react';

interface Props {
  text: string;
}

import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerchildren: 0.08
    }
  }
};
const singelword = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};

export function AnimatedText({ text }: Props) {
  return (
    <>
      <div className="mx-auto flex w-full items-start justify-start overflow-hidden text-start lg:py-2">
        <motion.h1
          className={
            '${}className} flex border-b border-slate-600/30 pl-8 text-4xl font-extrabold leading-7 text-slate-900'
          }
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split(' ').map((word, index) => (
            <motion.span
              key={word + '_' + index}
              className="-mb-px inline-block border-b border-b-current py-2"
              variants={singelword}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
}
