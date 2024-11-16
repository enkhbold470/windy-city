'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const FloatingImages = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleScroll = () => {
      if (imagesRef.current) {
        const scrollY = window.scrollY; // Track vertical scroll position
        const images = Array.from(imagesRef.current.children) as HTMLElement[];

        images.forEach((image, index) => {
          const offset = scrollY * (0.2 + index * 0.1); // Make each image move differently
          image.style.transform = `translate(${offset}px, ${-offset * 0.6}px)`; // Move right and upward
          image.style.opacity = `${Math.max(2 - scrollY / 400, 0)}`; // Fade out more quickly
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={imagesRef}
      style={{
        position: 'absolute',
        top: '200px', // Lower the images
        width: '100%', // Ensure the container width matches the viewport
        display: 'flex',
        justifyContent: 'left', // Center the images horizontally
        alignItems: 'center', // Align images vertically within the container
        gap: '200px', // Space between images
        pointerEvents: 'none', // Prevent interactions
      }}      
    >
      <div
        style={{
          position: 'relative',
          width: '225px', // 1.5x larger
          height: '225px',
          opacity: 10,
          animation: 'fadeInBounce 1.5s ease-out forwards', // Fade in with bounce effect
          animationDelay: '0s', // Start immediately
        }}
      >
        <Image
          src="/assets/pngtree-canola-isometric-farm-field-png-image_12954091.png"
          alt="Floating Image 1"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        style={{
          position: 'relative',
          width: '225px',
          height: '225px',
          opacity: 10,
          animation: 'fadeInBounce 1.5s ease-out forwards',
          animationDelay: '0.3s', // Delay for sequential fade-in
        }}
      >
        <Image
          src="/assets/pngtree-canola-isometric-farm-field-png-image_12954090.png"
          alt="Floating Image 2"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        style={{
          position: 'relative',
          width: '225px',
          height: '225px',
          opacity: 10,
          animation: 'fadeInBounce 1.5s ease-out forwards',
          animationDelay: '0.6s',
        }}
      >
        <Image
          src="/assets/pngtree-canola-isometric-farm-field-png-image_12954089.png"
          alt="Floating Image 3"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default FloatingImages;
