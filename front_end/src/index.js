import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Helloworld from './components/helloworld';
import Scene from './components/models';
function Box(){
  return(
    <mesh position={[-3,-1.1,2]}>
      <boxGeometry/>
      <meshStandardMaterial color={"red"}/>
    </mesh>
  )

}
function Plane(){
  return(
    <mesh position={[-3,0,5]} rotation={[Math.PI/2,0,0]}>
      <planeBufferGeometry attach={"geometry"} args={[100,100]}/>
      <meshStandardMaterial color={"green"}/>
    </mesh>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <Canvas>
  <ambientLight intensity={0.5}/>
  <Box/>
</Canvas>

);
