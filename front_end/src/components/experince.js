import { Physics,RigidBody,ConvexHullCollider, CuboidCollider,TrimeshCollider } from "@react-three/rapier";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import React, { Suspense, useMemo, useState, useEffect ,useRef} from 'react';
import ReactDOM from 'react-dom';
import { CubeTextureLoader } from 'three';
import { Canvas, useThree, useFrame, useLoader,extend } from '@react-three/fiber';
import { OrbitControls, Environment ,PerspectiveCamera,PointerLockControls,Box} from '@react-three/drei';
import { createRoot } from 'react-dom';
import { Vector3, Quaternion, Euler ,MathUtils} from 'three';
import { Animate } from "./cammeraControls";

const ModelViewer = ({ modelPath, position }) => {
    const gltf = useLoader(GLTFLoader, modelPath);
    return <primitive object={gltf.scene} position={position} />;
  }; 

function Experince(){
    return(
        <Physics debug="true">
            <RigidBody type={"fixed"} >
                <CuboidCollider args={[1,2,3]}>
                <ModelViewer modelPath="/assets/HOSTELS_FINAL.glb" position={[-21, -1, -153]} />
                </CuboidCollider>
            </RigidBody>
            <RigidBody type={"fixed"}>
        <Box position={[-21,-2.5,-153]} args={[500,500]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color={"springgreen"}/>
        </Box>
        </RigidBody>
        <Animate/>
        </Physics>
    )
}

export {Experince};