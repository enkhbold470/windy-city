'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const ThreeHeatmap = ({
  xValues,
  yValues,
  zValues,
}: {
  xValues: number[];
  yValues: number[];
  zValues: number[];
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    // Clean up existing renderer
    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current.domElement.remove();
    }

    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(15, 15, 30);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Add Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Normalize and distribute data
    const gridSize = 10;
    const normalizedPoints = xValues.map((x, i) => ({
      x: Math.floor((x / Math.max(...xValues)) * (gridSize - 1)),
      y: Math.floor((yValues[i] / Math.max(...yValues)) * (gridSize - 1)),
      z: Math.floor((zValues[i] / Math.max(...zValues)) * (gridSize - 1)),
    }));

    // Create Voxels
    const voxelSize = 0.8;
    normalizedPoints.forEach((point) => {
      const colorValue = (point.x + point.y + point.z) / (3 * (gridSize - 1));
      const color = new THREE.Color(`hsl(${Math.round(colorValue * 240)}, 100%, 50%)`); // HSL gradient

      const material = new THREE.MeshStandardMaterial({ color });
      const geometry = new THREE.BoxGeometry(voxelSize, voxelSize, voxelSize);
      const voxel = new THREE.Mesh(geometry, material);

      voxel.position.set(
        point.x - gridSize / 2,
        point.y - gridSize / 2,
        point.z - gridSize / 2
      );
      scene.add(voxel);
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      renderer.domElement.remove();
      scene.clear();
    };
  }, [xValues, yValues, zValues]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '500px',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}
    ></div>
  );
};

export default ThreeHeatmap;
