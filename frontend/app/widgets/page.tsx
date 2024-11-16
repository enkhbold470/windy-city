'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';

// Dynamically import the 3D heatmap component
const ThreeHeatmap = dynamic(() => import('@/components/3DWidget'), { ssr: false });

export default function WidgetsPage() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [xInput, setXInput] = useState('');
  const [yInput, setYInput] = useState('');
  const [zInput, setZInput] = useState('');
  const [isDraggingEnabled, setDraggingEnabled] = useState(false);

  const xValues = xInput.split(',').map(Number).filter((n) => !isNaN(n));
  const yValues = yInput.split(',').map(Number).filter((n) => !isNaN(n));
  const zValues = zInput.split(',').map(Number).filter((n) => !isNaN(n));

  // Enable dragging only if Shift is held
  const bind = useDrag(({ offset: [ox, oy] }) => {
    if (isDraggingEnabled) {
      api.start({ x: ox, y: oy });
    }
  });

  // Event listeners to toggle dragging on Shift key press
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Shift') setDraggingEnabled(true);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Shift') setDraggingEnabled(false);
  };

  // Attach and detach event listeners
  useState(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const rendererSize = 400; // Inner renderer size (400x400)
  const borderWidth = 30; // Border width to crop the renderer

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <animated.div
        {...bind()}
        style={{
          x,
          y,
          width: `${rendererSize}px`, // Total widget width is the renderer size
          height: `${rendererSize + 100}px`, // Include space for inputs
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.15)', // Stronger shadow
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: `${borderWidth}px solid #ccc`,
          cursor: isDraggingEnabled ? 'grab' : 'default',
          overflow: 'hidden', // Crop renderer content
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: `${rendererSize - borderWidth * 2}px`,
            height: `${rendererSize - borderWidth * 2}px`,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <ThreeHeatmap xValues={xValues} yValues={yValues} zValues={zValues} />
        </div>

        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '100%',
          }}
        >
          <input
            type="text"
            placeholder="X values (comma-separated)"
            value={xInput}
            onChange={(e) => setXInput(e.target.value)}
            style={{
              width: 'calc(100% - 20px)',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              margin: '0 auto',
            }}
          />
          <input
            type="text"
            placeholder="Y values (comma-separated)"
            value={yInput}
            onChange={(e) => setYInput(e.target.value)}
            style={{
              width: 'calc(100% - 20px)',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              margin: '0 auto',
            }}
          />
          <input
            type="text"
            placeholder="Z values (comma-separated)"
            value={zInput}
            onChange={(e) => setZInput(e.target.value)}
            style={{
              width: 'calc(100% - 20px)',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              margin: '0 auto',
            }}
          />
        </div>
      </animated.div>
    </div>
  );
}
