import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function TreesBetween2(props) {
  const { nodes, materials } = useGLTF("/assets/TreesBetween2.glb");
  return (
    <group {...props} dispose={null} rotation={[Math.PI/2,0,0]} position={[90,0,70]} scale={[0.2,0.2,0.2]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.bark}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.foliage}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.foliage}
      />
    </group>
  );
}

useGLTF.preload("/assets/TreesBetween2.glb");