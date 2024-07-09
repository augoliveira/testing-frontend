'use client';

import React from 'react';

// import { Container } from './styles';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1716984157551-cfca8e4d1b2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1716847214582-d5979adbf300?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnw2c01WalRMU2tlUXx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1716377239833-54b55d732bc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1672923062105-3127a97ca7b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8',
  'https://plus.unsplash.com/premium_photo-1672923062105-3127a97ca7b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxM3w2c01WalRMU2tlUXx8ZW58MHx8fHx8'
];

const imagesWrapperAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.1
    }
  }
};

const imageAnim = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 1.5,
      ease: [0.8, 0, 0.16, 1]
    }
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.8, 0, 0.16, 1]
    }
  }
};

const Hero: React.FC = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="relative h-full w-full">
          <motion.div
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.8, 0, 0.16, 1]
            }}
            className="h-full w-full"
          >
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1716611213337-6d2ce6e8e549?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div />
          </motion.div>

          <div className="absolute bottom-44 right-0 w-full overflow-hidden">
            <div className="grid grid-cols-12">
              <div className="col-span-5" />
              <div className="col-span-7 h-[380px] w-full">
                <motion.div
                  variants={imagesWrapperAnim}
                  initial="hidden"
                  animate="show"
                  className="flex gap-6"
                >
                  {images.map((d, i) => (
                    <motion.div
                      variants={imageAnim}
                      key={i}
                      className="aspect-[4/6] h-[380px] rounded-xl bg-red-500"
                    >
                      <img
                        className="h-full w-full rounded-xl object-cover"
                        src={d}
                        alt=""
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.8, 0, 0.16, 1]
            }}
            className="absolute right-0 top-0 h-full w-full bg-white"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
