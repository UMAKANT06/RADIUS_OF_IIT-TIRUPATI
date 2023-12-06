import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

// import { useFrame } from '@react-three/fibre';

export function Security({ onCollision, playerCollider, ...props }) {
  const { nodes, materials } = useGLTF("/assets/Security.glb");
  
  
  return (
    <>
    <RigidBody type="fixed" sensor  onCollisionEnter={()=> { alert("hi") }}>
      <group {...props} dispose={null} position={[50, 0, -30]} scale={[1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["1_Walnut_brown"]}
            position={[-2.844, 0, -2.756]}
            scale={3}
          />
       
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Table}
            position={[0, 1, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />

      </group>

      <group {...props} dispose={null} position={[50, 0, 170]} scale={[1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["1_Walnut_brown"]}
            position={[-2.844, 0, -2.756]}
            scale={3}
          />
       
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Table}
            position={[0, 1, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />

      </group>

      <group {...props} dispose={null} position={[50, 0, -230]} scale={[1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["1_Walnut_brown"]}
            position={[-2.844, 0, -2.756]}
            scale={3}
          />
        
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Table}
            position={[0, 1, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />

      </group>


      <group {...props} dispose={null} position={[210, 0, -30]} scale={[1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["1_Walnut_brown"]}
            position={[-2.844, 0, -2.756]}
            scale={3}
          />
       
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Table}
            position={[0, 1, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />

      </group>

      <group {...props} dispose={null} position={[210, 0, 170]} scale={[1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["1_Walnut_brown"]}
            position={[-2.844, 0, -2.756]}
            scale={3}
          />
      
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Table}
            position={[0, 1, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
      </group>
      </RigidBody>
    </>
  );
}

useGLTF.preload("/assets/Security.glb");