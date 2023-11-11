import React, { useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

export function TreesBetween1(props) {
  const { nodes, materials } = useGLTF("/assets/TreesBetween1.glb");
  return (
    <>
    <group {...props} dispose={null} position={[-70,0, -135]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[150,0, -65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[70,0, -65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-139,0, -65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[139,0, 65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-195,0, -135]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[165,0, 135]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-250,0, -65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[240,0, 65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-250,0, 135]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[70,0, 135]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-150,0, 135]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[150,0, 265]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[60,0, 265]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-195,0, 65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-75,0, 65]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-75,0, 265]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-185,0, 265]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-185,0, -265]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    <group {...props} dispose={null} position={[-75,0, -265]} scale={[14,14,14]}>
      <group position={[10, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5340.geometry}
          material={materials.Bark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5342.geometry}
          material={materials.Leaves}
        />
      </group>
    </group>

    
    </>
  );
}

useGLTF.preload("/assets/TreesBetween1.glb");

