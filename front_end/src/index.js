import { CubeTextureLoader } from 'three';
import React from 'react';
import ReactDOM from 'react-dom';
import { Cloud, OrbitControls, Environment ,Sky} from '@react-three/drei';
import './index.css';
import { createRoot } from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { useBox, usePlane, Physics } from '@react-three/cannon';
import { extend, useLoader,useThree } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

extend({ OrbitControls });

function Skybox(){
const {scene}=useThree();
const loader = new CubeTextureLoader();
const sunset = loader.load([
  "/assets/sky/skybox_px.jpg",
  "/assets/sky/skybox_nx.jpg",
  "/assets/sky/skybox_py.jpg",
  "/assets/sky/skybox_ny.jpg",
  "/assets/sky/skybox_pz.jpg",
  "/assets/sky/skybox_nz.jpg",
]);
scene.background=sunset;
return null;

};

const Ground = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const ModelViewer = ({ modelPath, position }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  return <primitive object={gltf.scene} position={position} />;
};

const App = () => {
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}
      camera={{ position: [0, 0, 10] }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <Sky sunPosition={[1, 1, 1]} /> */}
      <OrbitControls />
      <Physics>
        <Skybox/>
      <ModelViewer modelPath="/assets/hostel_a.glb" position={[10, 0, 10]} />
      <Environment preset='sunset' />
      </Physics>
    </Canvas>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')).render(<App />);
