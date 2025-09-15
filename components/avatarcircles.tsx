'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useTransform, MotionValue } from "framer-motion";

interface Circle {
  id: number;
  color: string;
  size: string;
  position: string;
  opacity: number;
  radius: number;
  speed: number;
}

const allPossibleCirclesData = [
  { id: 0, color: 'bg-pink-400', size: 'w-10 h-10', position: '-top-8 -left-6', radius: 10, speed: 2 },
  { id: 1, color: 'bg-cyan-400', size: 'w-12 h-12', position: '-top-4 -right-8', radius: 10, speed: 4 },
  { id: 2, color: 'bg-yellow-400', size: 'w-14 h-14', position: '-bottom-6 -left-4', radius: 10, speed: 6 },
  { id: 3, color: 'bg-purple-400', size: 'w-16 h-16', position: '-bottom-8 -right-6', radius: 10, speed: 8 },
  { id: 4, color: 'bg-orange-400', size: 'w-18 h-18', position: 'top-2 -left-12', radius: 10, speed: 10 },
  { id: 5, color: 'bg-green-400', size: 'w-20 h-20', position: 'bottom-4 -right-10', radius: 10, speed: 12 },
  { id: 6, color: 'bg-red-400', size: 'w-24 h-24', position: '-top-12 right-4', radius: 10, speed: 14 },
  { id: 7, color: 'bg-blue-400', size: 'w-28 h-28', position: 'top-8 -left-8', radius: 10, speed: 16 },
  { id: 8, color: 'bg-indigo-400', size: 'w-12 h-12', position: '-top-6 right-2', radius: 10, speed: 18 },
  { id: 9, color: 'bg-teal-400', size: 'w-14 h-14', position: 'bottom-2 -left-10', radius: 10, speed: 20 },
  { id: 10, color: 'bg-lime-400', size: 'w-16 h-16', position: '-bottom-4 right-8', radius: 10, speed: 22 },
  { id: 11, color: 'bg-fuchsia-400', size: 'w-18 h-18', position: 'top-6 -right-4', radius: 10, speed: 24 },
];

interface AvatarCirclesProps {
  imageUrl: string;
  alt: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
}

const AvatarCircles: React.FC<AvatarCirclesProps> = ({ imageUrl, alt, className = "", scrollYProgress }) => {
  const [circlesToDisplay, setCirclesToDisplay] = useState<Circle[]>([]);
  const [isClient, setIsClient] = useState(false);

  // We now use a single useTransform call to create a new motion value that maps to the circle's x and y
  const transforms = allPossibleCirclesData.map((circle) => {
    const transformX = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * circle.speed) * circle.radius);
    const transformY = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * circle.speed) * circle.radius);
    return { transformX, transformY };
  });

  useEffect(() => {
    setIsClient(true);
    const numCircles = Math.floor(Math.random() * 3) + 6;
    const shuffledData = [...allPossibleCirclesData].sort(() => 0.5 - Math.random());
    const newCircles = shuffledData.slice(0, numCircles).map(circle => ({
      ...circle,
      opacity: Math.floor(Math.random() * 30) + 20,
    }));
    setCirclesToDisplay(newCircles);
  }, []);

  if (!isClient) {
    return (
      <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 ${className}`}>
        <div className="relative">
          <div className="relative z-10 w-32 h-32 border-2 border-black rounded-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(max-width: 768px) 200px, 128px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`absolute -top-16 left-1/2 transform -translate-x-1/2 ${className}`}
    >
      <div className="relative">
        {circlesToDisplay.map((circle) => (
          <motion.div
            key={circle.id}
            className={`absolute ${circle.position} ${circle.size} ${circle.color} rounded-full transition-opacity duration-300`}
            style={{ 
              opacity: circle.opacity / 100,
              x: transforms[circle.id]?.transformX,
              y: transforms[circle.id]?.transformY,
            }}
          />
        ))}
        
        <div className="relative z-10 w-32 h-32 border-2 border-black rounded-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes="(max-width: 768px) 200px, 128px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarCircles;