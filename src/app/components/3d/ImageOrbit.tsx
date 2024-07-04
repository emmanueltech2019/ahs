// "use client"; // For client-side rendering

// import { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useTexture } from '@react-three/drei'; // Helpers
// import * as THREE from "three"



// const ImageOrbit = ({ imageUrl }: { imageUrl: string }) => {
//   const meshRef = useRef<THREE.Mesh>(null!);
//   const texture = useTexture(imageUrl);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.005; // Slow rotation
//     }
//   });

//   useEffect(() => {
//     // Ensure controls are enabled and damping is set after the canvas is mounted
//     const controls = meshRef.current.parent?.getObjectByName('orbitControls') as OrbitControls | undefined;
//     if (controls) {
//       controls.enabled = true;
//       controls.enableDamping = true;
//     }
//   }, []);

//   return (
//     <Canvas className='w-full h-96'> 
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <mesh ref={meshRef}>
//         <planeGeometry args={[5, 5]} /> 
//         <meshBasicMaterial map={texture} />
//       </mesh>
//       <OrbitControls makeDefault />
//     </Canvas>
//   );
// };

// export default ImageOrbit;




// "use client"; // For client-side rendering

// import { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useTexture } from '@react-three/drei'; // Helpers
// import * as THREE from "three"

// // Import the type explicitly
// import type { OrbitControls as OrbitControlsType } from '@react-three/drei';

// const ImageOrbit = ({ imageUrl }: { imageUrl: string }) => {
//   const meshRef = useRef<THREE.Mesh>(null!);
//   const texture = useTexture(imageUrl);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.005; // Slow rotation
//     }
//   });

//   useEffect(() => {
//     // Ensure controls are enabled and damping is set after the canvas is mounted
//     const controls = meshRef.current.parent?.getObjectByName('orbitControls') as typeof OrbitControlsType | undefined;
//     if (controls) {
//       controls.enabled = true;
//       controls.enableDamping = true;
//     }
//   }, []);

//   return (
//     <Canvas className='w-full h-96'> 
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <mesh ref={meshRef}>
//         <planeGeometry args={[5, 5]} /> 
//         <meshBasicMaterial map={texture} />
//       </mesh>
//       <OrbitControls makeDefault />
//     </Canvas>
//   );
// };

// export default ImageOrbit;



// "use client"; // For client-side rendering

// import { useRef, useEffect } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls, useTexture } from '@react-three/drei'; // Helpers
// import * as THREE from "three"

// // Import the type explicitly
// import type { OrbitControls as OrbitControlsType } from '@react-three/drei';

// const ImageOrbit = ({ imageUrl }: { imageUrl: string }) => {
//   return (
//     <Canvas className='w-full h-96'> 
//       <Scene imageUrl={imageUrl} />
//     </Canvas>
//   );
// };

// const Scene = ({ imageUrl }: { imageUrl: string }) => {
//   const meshRef = useRef<THREE.Mesh>(null!);
//   const texture = useTexture(imageUrl);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.005; // Slow rotation
//     }
//   });

//   useEffect(() => {
//     // Ensure controls are enabled and damping is set after the canvas is mounted
//     const { scene } = useThree();
//     const controls = scene.getObjectByName('orbitControls') as typeof OrbitControlsType | undefined;
//     if (controls) {
//       controls.enabled = true;
//       controls.enableDamping = true;
//     }
//   }, []);

//   return (
//     <>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <mesh ref={meshRef}>
//         <planeGeometry args={[5, 5]} /> 
//         <meshBasicMaterial map={texture} />
//       </mesh>
//       <OrbitControls makeDefault />
//     </>
//   );
// };

// export default ImageOrbit;




// /components/ImageOrbitControl.tsx
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import 'tailwindcss/tailwind.css';

// const ImageOrbitControl: React.FC = () => {
//   const canvasRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const width = canvasRef.current!.clientWidth;
//     const height = canvasRef.current!.clientHeight;

//     // Create scene
//     const scene = new THREE.Scene();

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 5;

//     // Create renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(width, height);
//     canvasRef.current!.appendChild(renderer.domElement);

//     // Create orbit controls
//     const controls = new OrbitControls(camera, renderer.domElement);

//     // Load texture
//     const textureLoader = new THREE.TextureLoader();
//     const texture = textureLoader.load('https://res.cloudinary.com/wise-solution-inc/image/upload/v1719852288/haital-hernia_j1nqeu.png');
    
//     // Create a plane to apply the texture
//     const geometry = new THREE.PlaneGeometry(3, 3);
//     const material = new THREE.MeshBasicMaterial({ map: texture });
//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       const width = canvasRef.current!.clientWidth;
//       const height = canvasRef.current!.clientHeight;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       canvasRef.current!.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={canvasRef} className="w-full h-full"></div>;
// };

// export default ImageOrbitControl;




// // components/ImageOrbit.tsx
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useTexture } from '@react-three/drei';
// import { TextureLoader } from 'three';

// interface ImageOrbitProps {
//   imageUrl: string;
// }

// const ImagePlane: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
//   const texture = useTexture(imageUrl);
//   return (
//     <mesh>
//       <planeBufferGeometry args={[5, 5]} />
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// };

// const ImageOrbit: React.FC<ImageOrbitProps> = ({ imageUrl }) => {
//   return (
//     <div className="w-full h-full">
//       <Canvas>
//         <Suspense fallback={null}>
//           <ambientLight />
//           <ImagePlane imageUrl={imageUrl} />
//           <OrbitControls />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default ImageOrbit;


// components/ImageOrbit.tsx
import React, { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { PlaneGeometry, MeshBasicMaterial } from 'three';
import * as THREE from "three"

// Extend Three.js objects into R3F
extend({ PlaneGeometry, MeshBasicMaterial });

interface ImageOrbitProps {
  imageUrl: string;
}

const ImagePlane: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const texture = useTexture(imageUrl);
  return (
    <mesh>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent={true} />
    </mesh>
  );
};

const ImageOrbit: React.FC<ImageOrbitProps> = ({ imageUrl }) => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <ImagePlane imageUrl={imageUrl} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ImageOrbit;
