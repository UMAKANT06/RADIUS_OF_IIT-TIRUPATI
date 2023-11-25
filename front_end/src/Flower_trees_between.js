import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Flower_trees_between(props) {
  const { nodes, materials } = useGLTF("/assets/Flower_trees_between.glb");
  return (
    <group {...props} dispose={null} position={[20,0,0]}>
      <group
        position={[18.778, -0.293, 29.832]}
        rotation={[-Math.PI, 0.055, -Math.PI]}
        scale={1.162}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__SIR13_0.geometry}
          material={materials.pasted__SIR13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__SIR13_0001.geometry}
          material={materials.pasted__SIR13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__SIR13_0002.geometry}
          material={materials.pasted__SIR13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__SIR14_0.geometry}
          material={materials.pasted__SIR14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__SIR15_0.geometry}
          material={materials.pasted__SIR15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__siren8_0.geometry}
          material={materials.pasted__siren8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__siren8_0001.geometry}
          material={materials.pasted__siren8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__siren8_0002.geometry}
          material={materials.pasted__siren8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pasted__pCube244_pasted__siren9_0.geometry}
          material={materials.pasted__siren9}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/Flower_trees_between.glb");