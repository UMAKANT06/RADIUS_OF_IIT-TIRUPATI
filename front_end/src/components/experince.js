import { Physics,RigidBody, CuboidCollider} from "@react-three/rapier";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import React from 'react';
import { useLoader } from '@react-three/fiber';
import {Box,KeyboardControls} from '@react-three/drei';


import { Animate } from "./cammeraControls";

const ModelViewer = ({ modelPath, position }) => {
    const gltf = useLoader(GLTFLoader, modelPath);
    return <primitive object={gltf.scene} position={position} />;
  }; 

function Experince(){
    return(
        <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          // { name: "jump", keys: ["Space"] },
        ]}>
        <Physics debug ="true" gravity={[0, -30, 0]}>
           
            <RigidBody  type={"fixed"}   colliders="cuboid">
                <CuboidCollider args={[1,2,3]}>
                <ModelViewer modelPath="/assets/HOSTELS_FINAL.glb" position={[-21, -1, -153]} />
                </CuboidCollider>
                
               
            </RigidBody>
            <Animate/>
            <RigidBody type={"fixed"}>
                <Box position={[-21,-2.5,-153]} args={[500,500]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color={"springgreen"}/>
                </Box>
            </RigidBody>
        
        
        </Physics>
        </KeyboardControls>
    )
}

export {Experince};