import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Grass(props) {
  const { nodes, materials } = useGLTF("/assets/Grass.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.brush_Petal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.brush_Petal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.brush_Petal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.brush_Petal}
      />
    </group>
  );
}

useGLTF.preload("/assets/Grass.glb");

