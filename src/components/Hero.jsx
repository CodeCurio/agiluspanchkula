import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './Hero.css';

function Box(props) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5;
    mesh.current.rotation.y += delta * 0.5;
  });
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'#007BFF'} />
    </mesh>
  );
}

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Precision Diagnostics,</h1>
        <h1>Delivered with Care.</h1>
        <p>Experience the future of healthcare with our state-of-the-art lab services.</p>
      </div>
      <Canvas className="hero-canvas">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}

export default Hero;
