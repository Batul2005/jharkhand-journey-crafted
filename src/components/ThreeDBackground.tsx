import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles component
function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate random particle positions
  const particles = React.useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 100;
      temp[i3 + 1] = (Math.random() - 0.5) * 100;
      temp[i3 + 2] = (Math.random() - 0.5) * 100;
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4ade80"
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Animated spheres representing hills/mountains
function AnimatedSpheres() {
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);
  const sphere3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(time * 0.5) * 2;
      sphere1Ref.current.rotation.x = time * 0.2;
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.cos(time * 0.3) * 1.5;
      sphere2Ref.current.rotation.z = time * 0.15;
    }
    
    if (sphere3Ref.current) {
      sphere3Ref.current.position.y = Math.sin(time * 0.4) * 1;
      sphere3Ref.current.rotation.y = time * 0.1;
    }
  });

  return (
    <>
      <Sphere ref={sphere1Ref} args={[2, 64, 64]} position={[-15, 0, -10]}>
        <meshLambertMaterial color="#2E7D32" transparent opacity={0.3} />
      </Sphere>
      
      <Sphere ref={sphere2Ref} args={[1.5, 64, 64]} position={[10, 2, -15]}>
        <meshLambertMaterial color="#C95A3C" transparent opacity={0.25} />
      </Sphere>
      
      <Sphere ref={sphere3Ref} args={[1, 32, 32]} position={[5, -2, -8]}>
        <meshLambertMaterial color="#F4C542" transparent opacity={0.4} />
      </Sphere>
    </>
  );
}

// Main 3D background component
interface ThreeDBackgroundProps {
  className?: string;
  intensity?: number;
}

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({ 
  className = "",
  intensity = 1 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Performance optimization - hide on small screens or low-end devices
  useEffect(() => {
    const checkPerformance = () => {
      const isLowEnd = window.innerWidth < 768 || 
                      (navigator as any).hardwareConcurrency < 4 ||
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsVisible(!isLowEnd);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  if (!isVisible) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 ${className}`} />
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 30], 
          fov: 60,
          near: 0.1,
          far: 1000 
        }}
        style={{ 
          background: 'transparent',
          opacity: intensity 
        }}
        gl={{ 
          antialias: false, // Disable for better performance
          alpha: true,
          powerPreference: "low-power"
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8}
          color="#ffffff"
        />
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.3}
          color="#4ade80"
        />
        
        {/* 3D Elements */}
        <FloatingParticles />
        <AnimatedSpheres />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#f0f0f0', 30, 100]} />
      </Canvas>
      
      {/* Gradient overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </div>
  );
};

export default ThreeDBackground;