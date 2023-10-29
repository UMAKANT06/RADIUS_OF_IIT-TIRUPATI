import * as THREE from "three";
import React from 'react';
import { CubeTextureLoader } from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment} from '@react-three/drei';
import { createRoot } from 'react-dom';
import { Physics} from '@react-three/cannon';
import { Vector3} from 'three';
import { Animate } from "./components/cammeraControls";
import { Experince } from "./components/experince";

function Skybox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const sunset = loader.load([
    '/assets/sky/skybox_px.jpg',
    '/assets/sky/skybox_nx.jpg',
    '/assets/sky/skybox_py.jpg',
    '/assets/sky/skybox_ny.jpg',
    '/assets/sky/skybox_pz.jpg',
    '/assets/sky/skybox_nz.jpg',
  ]);
  scene.background = sunset;
  return null;
}


const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);

// Set the initial camera position
camera.position.set(20, -908, 10);
//models
//ground






function App() {
  const newCameraPosition = new Vector3(-21, -108, -153);

  return (
    <Canvas
      style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 0, 10]} />

      <OrbitControls enableZoom={false}  />
      <Experince/>
      <Physics>
        
        <Skybox />
        
        <Environment preset="sunset" />
      </Physics>
    </Canvas>
  );
}

const root = createRoot(document.getElementById('root')).render(<App />,<Animate/>);


