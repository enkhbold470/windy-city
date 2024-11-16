'use client';

import { useState, useEffect } from 'react';

const AnimatedSection = () => {
  const [position, setPosition] = useState(300); // Initial position (300px below)
  const [opacity, setOpacity] = useState(0); // Initial opacity (invisible)

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      frame += 1;

      // Inverse exponential motion
      const newPosition = Math.max(0, 500 * Math.exp(-frame / 30)); // Decays towards 0
      const newOpacity = Math.min(1, 1 - newPosition / 300); // Fade in as it moves up

      setPosition(newPosition);
      setOpacity(newOpacity);

      if (newPosition > 0) {
        requestAnimationFrame(animate); // Continue animation until position reaches 0
      }
    };

    animate();
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${position}px)`, // Move up dynamically
        opacity: opacity, // Fade in dynamically
        transition: 'opacity 0.1s ease-out', // Smooth fading effect
      }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
        We Make Crop Data Processing A Breeze.
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        Growing crops is tough. Making sense of the data shouldn’t be. With our
        interactive flowchart, you can track, compare, and act—boosting yields
        and solving problems faster.
      </p>
      <div className="flex justify-center">
        <a href="/dashboard">
        <button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-8 py-4 text-lg rounded-lg">
            Try it Out!
            </button>

        </a>
      </div>
    </div>
  );
};

export default AnimatedSection;
