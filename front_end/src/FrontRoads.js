import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function FrontRoads(props) {
  const { nodes, materials } = useGLTF("/assets/FrontRoads.glb");
  return (
    <>
    <group {...props} dispose={null} scale={[6,6,6]} position={[75,0,0]} rotation={[0,Math.PI/2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
      />
    </group>

<group {...props} dispose={null} scale={[6,6,6]} position={[75,0,200]} rotation={[0,Math.PI/2,0]}>
<mesh
  castShadow
  receiveShadow
  geometry={nodes.Plane.geometry}
  material={materials["Material.001"]}
/>
</group>

<group {...props} dispose={null} scale={[6,6,6]} position={[75,0,-200]} rotation={[0,Math.PI/2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
      />
    </group>

    <group {...props} dispose={null} scale={[6,6,6]} position={[185,0,0]} rotation={[0,Math.PI/2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
      />
    </group>

    <group {...props} dispose={null} scale={[6,6,6]} position={[185,0,200]} rotation={[0,Math.PI/2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
      />
    </group>
    
</>
  );
}

useGLTF.preload("/assets/FrontRoads.glb");

