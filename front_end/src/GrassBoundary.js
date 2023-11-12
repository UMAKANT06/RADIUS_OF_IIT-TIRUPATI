import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function GrassBoundary(props) {
  const { nodes, materials } = useGLTF("/assets/GrassBoundary.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 1, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/GrassBoundary.glb");