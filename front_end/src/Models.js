import { Physics,RigidBody, CuboidCollider,usePhysics} from "@react-three/rapier";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import React from 'react';
import { useLoader } from '@react-three/fiber';


const ModelViewer = ({ modelPath, position }) => {
    const gltf = useLoader(GLTFLoader, modelPath);
    return <primitive object={gltf.scene} position={position} />
  }; 

function Models(){
    return(
        
        <Physics debug ="true" gravity={[0, -30, 0]} >
            <RigidBody  type={"fixed"}   colliders="false"  enabledRotations={[false, false, false]}>
                <CuboidCollider args={[1,1,1]}>
                <ModelViewer modelPath="/assets/hostel_a.glb" position={[-21, -1, -153]} />
                </CuboidCollider>
            </RigidBody>
        </Physics>
      
    )
}

export {Models};