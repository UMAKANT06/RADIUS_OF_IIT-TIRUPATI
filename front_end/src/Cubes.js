import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Cubes(props) {
  const { nodes, materials } = useGLTF("/assets/Hostel_A.glb");
  return (
    <>
    <group {...props} dispose={null} scale={[6,6,6]} position={[-30,0,0]}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-4.2, 10.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-4.2, 10.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-16.7, 10.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[12.6, 10.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[12.6, 10.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[16.7, 1.5, -4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[16.7, 1.5, 4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[-16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
          position={[-15.1, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[-15.1, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.004"]}
          position={[-10.9, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.005"]}
          position={[-6.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.006"]}
          position={[-2.5, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.007"]}
          position={[1.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.008"]}
          position={[5.9, 4, -1.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.009"]}
          position={[5.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.010"]}
          position={[1.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["Material.011"]}
          position={[-2.5, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.012"]}
          position={[-6.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.013"]}
          position={[-10.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials["Material.014"]}
          position={[5.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials["Material.015"]}
          position={[5.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Material.016"]}
          position={[1.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials["Material.017"]}
          position={[-2.5, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Material.018"]}
          position={[-6.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials["Material.019"]}
          position={[-10.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["Material.020"]}
          position={[-15.1, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials["Material.021"]}
          position={[-10.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials["Material.022"]}
          position={[-10.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials["Material.023"]}
          position={[-6.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials["Material.024"]}
          position={[-2.5, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials["Material.025"]}
          position={[1.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[-4.2, 1.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[6.68, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[-14.32, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[-4.2, 7.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-4.2, 4.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-4.2, 7.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[-16.7, 1.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-16.7, 4.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[-16.7, 7.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["Material.026"]}
          position={[-16.85, 1.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["Material.027"]}
          position={[16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials["Material.028"]}
          position={[-16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials["Material.029"]}
          position={[-15.1, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials["Material.030"]}
          position={[-15.1, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials["Material.031"]}
          position={[-15.1, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials["Material.032"]}
          position={[-15.1, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials["Material.033"]}
          position={[-10.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials["Material.034"]}
          position={[-10.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials["Material.035"]}
          position={[-6.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials["Material.036"]}
          position={[-2.5, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={materials["Material.037"]}
          position={[1.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={materials["Material.038"]}
          position={[5.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039.geometry}
          material={materials["Material.039"]}
          position={[5.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040.geometry}
          material={materials["Material.040"]}
          position={[1.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041.geometry}
          material={materials["Material.041"]}
          position={[-2.5, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials["Material.042"]}
          position={[-6.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials["Material.043"]}
          position={[-6.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials["Material.044"]}
          position={[-2.5, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials["Material.045"]}
          position={[1.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials["Material.046"]}
          position={[5.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials["Material.047"]}
          position={[-15.1, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials["Material.048"]}
          position={[-15.1, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials["Material.049"]}
          position={[-15.1, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials["Material.050"]}
          position={[-10.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials["Material.051"]}
          position={[-6.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials["Material.052"]}
          position={[-2.5, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials["Material.053"]}
          position={[1.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane054.geometry}
          material={materials["Material.054"]}
          position={[5.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials["Material.055"]}
          position={[-10.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials["Material.056"]}
          position={[-6.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane057.geometry}
          material={materials["Material.057"]}
          position={[-2.5, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058.geometry}
          material={materials["Material.058"]}
          position={[1.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059.geometry}
          material={materials["Material.059"]}
          position={[5.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane060.geometry}
          material={materials["Material.060"]}
          position={[5.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane061.geometry}
          material={materials["Material.061"]}
          position={[1.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane062.geometry}
          material={materials["Material.062"]}
          position={[-2.5, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials["Material.063"]}
          position={[-6.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane064.geometry}
          material={materials["Material.064"]}
          position={[-10.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065.geometry}
          material={materials["Material.065"]}
          position={[5.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066.geometry}
          material={materials["Material.066"]}
          position={[1.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067.geometry}
          material={materials["Material.067"]}
          position={[-2.5, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane068.geometry}
          material={materials["Material.068"]}
          position={[-6.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane069.geometry}
          material={materials["Material.069"]}
          position={[-10.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070.geometry}
          material={materials["Material.070"]}
          position={[-15.1, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071.geometry}
          material={materials["Material.071"]}
          position={[5.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072.geometry}
          material={materials["Material.072"]}
          position={[1.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073.geometry}
          material={materials["Material.073"]}
          position={[-2.5, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane074.geometry}
          material={materials["Material.074"]}
          position={[-6.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane075.geometry}
          material={materials["Material.075"]}
          position={[-10.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane076.geometry}
          material={materials["Material.076"]}
          position={[-15.1, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane077.geometry}
          material={materials["Material.077"]}
          position={[5.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane078.geometry}
          material={materials["Material.078"]}
          position={[1.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane079.geometry}
          material={materials["Material.079"]}
          position={[-2.5, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane080.geometry}
          material={materials["Material.080"]}
          position={[-6.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081.geometry}
          material={materials["Material.081"]}
          position={[-10.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082.geometry}
          material={materials["Material.082"]}
          position={[-15.1, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083.geometry}
          material={materials["Material.083"]}
          position={[-15.1, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084.geometry}
          material={materials["Material.084"]}
          position={[-10.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085.geometry}
          material={materials["Material.085"]}
          position={[-6.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086.geometry}
          material={materials["Material.086"]}
          position={[-2.5, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087.geometry}
          material={materials["Material.087"]}
          position={[1.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088.geometry}
          material={materials["Material.088"]}
          position={[5.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089.geometry}
          material={materials["Material.089"]}
          position={[5.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090.geometry}
          material={materials["Material.090"]}
          position={[1.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091.geometry}
          material={materials["Material.091"]}
          position={[-2.5, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092.geometry}
          material={materials["Material.092"]}
          position={[-6.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093.geometry}
          material={materials["Material.093"]}
          position={[-10.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094.geometry}
          material={materials["Material.094"]}
          position={[-15.1, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095.geometry}
          material={materials["Material.095"]}
          position={[5.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096.geometry}
          material={materials["Material.096"]}
          position={[1.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097.geometry}
          material={materials["Material.097"]}
          position={[-2.5, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098.geometry}
          material={materials["Material.098"]}
          position={[-6.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099.geometry}
          material={materials["Material.099"]}
          position={[-10.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100.geometry}
          material={materials["Material.100"]}
          position={[-15.1, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[12.6, 1.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[12.6, 4.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[12.6, 7.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[12.6, 1.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[12.6, 4.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[12.6, 7.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[16.7, 7.5, 0]}
          scale={[0.1, 4.5, 7.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104.geometry}
          material={materials["Material.101"]}
          position={[-16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105.geometry}
          material={materials["Material.102"]}
          position={[3.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106.geometry}
          material={materials["Material.103"]}
          position={[16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[-4.2, 5.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[-4.2, 8.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[0, 12, 0]}
          scale={[16.8, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[12.6, 8.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[14.55, 8.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[10.45, 6, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={nodes.Cube029.material}
          position={[10.45, 6.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={nodes.Cube030.material}
          position={[10.45, 6.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={nodes.Cube031.material}
          position={[10.45, 6.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={nodes.Cube032.material}
          position={[12.5, 7.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={nodes.Cube033.material}
          position={[14.55, 7.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={nodes.Cube034.material}
          position={[14.55, 7.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={nodes.Cube035.material}
          position={[14.55, 8.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={nodes.Cube036.material}
          position={[14.55, 8.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={nodes.Cube037.material}
          position={[10.45, 7.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={nodes.Cube038.material}
          position={[-4.2, 2.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={nodes.Cube039.material}
          position={[10.45, 0, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={nodes.Cube040.material}
          position={[10.45, 0.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={nodes.Cube041.material}
          position={[10.45, 0.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={nodes.Cube042.material}
          position={[10.45, 0.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={nodes.Cube043.material}
          position={[10.45, 1.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={nodes.Cube044.material}
          position={[12.5, 1.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={nodes.Cube045.material}
          position={[14.55, 1.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={nodes.Cube046.material}
          position={[14.55, 1.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={nodes.Cube047.material}
          position={[14.55, 2.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={nodes.Cube048.material}
          position={[14.55, 2.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={nodes.Cube049.material}
          position={[14.55, 2.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={nodes.Cube050.material}
          position={[12.6, 2.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={nodes.Cube051.material}
          position={[10.45, 3, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={nodes.Cube052.material}
          position={[10.45, 3.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={nodes.Cube053.material}
          position={[10.45, 3.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={nodes.Cube054.material}
          position={[10.45, 3.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={nodes.Cube055.material}
          position={[10.45, 4.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={nodes.Cube056.material}
          position={[12.5, 4.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={nodes.Cube057.material}
          position={[14.55, 4.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={nodes.Cube058.material}
          position={[14.55, 4.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={nodes.Cube059.material}
          position={[14.55, 5.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={nodes.Cube060.material}
          position={[14.55, 5.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={nodes.Cube061.material}
          position={[14.55, 5.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={nodes.Cube062.material}
          position={[12.6, 5.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101.geometry}
          material={materials["Material.104"]}
          position={[16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102.geometry}
          material={materials["Material.105"]}
          position={[-13.6, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103.geometry}
          material={materials["Material.106"]}
          position={[3.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107.geometry}
          material={materials["Material.107"]}
          position={[3.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108.geometry}
          material={materials["Material.108"]}
          position={[7.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109.geometry}
          material={materials["Material.109"]}
          position={[-1, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110.geometry}
          material={materials["Material.110"]}
          position={[-5.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111.geometry}
          material={materials["Material.111"]}
          position={[-9.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112.geometry}
          material={materials["Material.112"]}
          position={[3.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113.geometry}
          material={materials["Material.113"]}
          position={[-13.6, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114.geometry}
          material={materials["Material.114"]}
          position={[7.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115.geometry}
          material={materials["Material.115"]}
          position={[7.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116.geometry}
          material={materials["Material.116"]}
          position={[-1, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117.geometry}
          material={materials["Material.117"]}
          position={[-1, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118.geometry}
          material={materials["Material.118"]}
          position={[-1, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119.geometry}
          material={materials["Material.119"]}
          position={[-5.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120.geometry}
          material={materials["Material.120"]}
          position={[-5.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121.geometry}
          material={materials["Material.121"]}
          position={[-5.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122.geometry}
          material={materials["Material.122"]}
          position={[-9.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123.geometry}
          material={materials["Material.123"]}
          position={[-9.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124.geometry}
          material={materials["Material.124"]}
          position={[-9.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125.geometry}
          material={materials["Material.125"]}
          position={[-13.6, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126.geometry}
          material={materials["Material.126"]}
          position={[-13.6, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127.geometry}
          material={materials["Material.127"]}
          position={[-13.6, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128.geometry}
          material={materials["Material.128"]}
          position={[7.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129.geometry}
          material={materials["Material.129"]}
          position={[7.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130.geometry}
          material={materials["Material.130"]}
          position={[3.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131.geometry}
          material={materials["Material.131"]}
          position={[-1, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132.geometry}
          material={materials["Material.132"]}
          position={[-5.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133.geometry}
          material={materials["Material.133"]}
          position={[-9.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134.geometry}
          material={materials["Material.134"]}
          position={[7.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135.geometry}
          material={materials["Material.135"]}
          position={[7.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136.geometry}
          material={materials["Material.136"]}
          position={[7.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137.geometry}
          material={materials["Material.137"]}
          position={[3.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138.geometry}
          material={materials["Material.138"]}
          position={[3.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139.geometry}
          material={materials["Material.139"]}
          position={[3.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={materials["Material.140"]}
          position={[-1, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141.geometry}
          material={materials["Material.141"]}
          position={[-1, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142.geometry}
          material={materials["Material.142"]}
          position={[-1, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143.geometry}
          material={materials["Material.143"]}
          position={[-5.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144.geometry}
          material={materials["Material.144"]}
          position={[-5.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145.geometry}
          material={materials["Material.145"]}
          position={[-5.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146.geometry}
          material={materials["Material.146"]}
          position={[-9.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147.geometry}
          material={materials["Material.147"]}
          position={[-9.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148.geometry}
          material={materials["Material.148"]}
          position={[-9.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149.geometry}
          material={materials["Material.149"]}
          position={[-13.6, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150.geometry}
          material={materials["Material.150"]}
          position={[-13.6, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151.geometry}
          material={materials["Material.151"]}
          position={[-13.6, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[8.24, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-14.32, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[5.12, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[6.68, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[2.48, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={nodes.Cube063.material}
          position={[-4.2, 1.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[-1.72, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-5.92, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[-10.12, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[6.68, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={nodes.Cylinder009.material}
          position={[6.68, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={nodes.Cylinder010.material}
          position={[6.68, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[2.48, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={nodes.Cylinder012.material}
          position={[2.48, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
          position={[2.48, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={nodes.Cylinder014.material}
          position={[-1.72, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={nodes.Cylinder015.material}
          position={[-1.72, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={nodes.Cylinder016.material}
          position={[-1.72, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={nodes.Cylinder017.material}
          position={[-5.92, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={nodes.Cylinder018.material}
          position={[-5.92, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={nodes.Cylinder019.material}
          position={[-5.92, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={nodes.Cylinder020.material}
          position={[-10.12, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={nodes.Cube064.material}
          position={[-4.2, 4.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={nodes.Cylinder021.material}
          position={[-10.12, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={nodes.Cylinder022.material}
          position={[-10.12, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={nodes.Cylinder023.material}
          position={[6.68, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={nodes.Cylinder024.material}
          position={[-14.32, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={nodes.Cylinder025.material}
          position={[-14.32, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={nodes.Cylinder026.material}
          position={[8.24, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={nodes.Cylinder027.material}
          position={[8.24, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={nodes.Cylinder028.material}
          position={[8.24, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={nodes.Cylinder029.material}
          position={[-15.88, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={nodes.Cylinder030.material}
          position={[5.12, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={nodes.Cylinder031.material}
          position={[5.12, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={nodes.Cylinder032.material}
          position={[8.24, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033.geometry}
          material={nodes.Cylinder033.material}
          position={[4.04, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={nodes.Cylinder034.material}
          position={[-0.16, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={nodes.Cylinder035.material}
          position={[-4.36, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={nodes.Cylinder036.material}
          position={[-8.56, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={nodes.Cylinder037.material}
          position={[5.12, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={nodes.Cylinder038.material}
          position={[0.92, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={nodes.Cylinder039.material}
          position={[-3.28, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040.geometry}
          material={nodes.Cylinder040.material}
          position={[-7.48, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={nodes.Cylinder041.material}
          position={[-11.68, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={nodes.Cylinder042.material}
          position={[4.04, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={nodes.Cylinder043.material}
          position={[4.04, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={nodes.Cylinder044.material}
          position={[4.04, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045.geometry}
          material={nodes.Cylinder045.material}
          position={[0.92, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={nodes.Cylinder046.material}
          position={[0.92, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={nodes.Cylinder047.material}
          position={[0.92, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048.geometry}
          material={nodes.Cylinder048.material}
          position={[-3.28, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049.geometry}
          material={nodes.Cylinder049.material}
          position={[-3.28, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050.geometry}
          material={nodes.Cylinder050.material}
          position={[-3.28, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051.geometry}
          material={nodes.Cylinder051.material}
          position={[-7.48, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={nodes.Cylinder052.material}
          position={[-7.48, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053.geometry}
          material={nodes.Cylinder053.material}
          position={[-7.48, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={nodes.Cylinder054.material}
          position={[-11.68, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055.geometry}
          material={nodes.Cylinder055.material}
          position={[-11.68, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056.geometry}
          material={nodes.Cylinder056.material}
          position={[-11.68, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057.geometry}
          material={nodes.Cylinder057.material}
          position={[5.12, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058.geometry}
          material={nodes.Cylinder058.material}
          position={[-15.88, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059.geometry}
          material={nodes.Cylinder059.material}
          position={[-15.88, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={nodes.Cylinder060.material}
          position={[-14.32, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061.geometry}
          material={nodes.Cylinder061.material}
          position={[-15.88, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062.geometry}
          material={nodes.Cylinder062.material}
          position={[-12.76, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063.geometry}
          material={nodes.Cylinder063.material}
          position={[-14.32, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={nodes.Cylinder064.material}
          position={[-10.12, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={nodes.Cylinder065.material}
          position={[-5.92, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={nodes.Cylinder066.material}
          position={[-1.72, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067.geometry}
          material={nodes.Cylinder067.material}
          position={[2.48, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068.geometry}
          material={nodes.Cylinder068.material}
          position={[-15.88, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069.geometry}
          material={nodes.Cylinder069.material}
          position={[-11.68, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070.geometry}
          material={nodes.Cylinder070.material}
          position={[-7.48, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={nodes.Cylinder071.material}
          position={[-3.28, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072.geometry}
          material={nodes.Cylinder072.material}
          position={[0.92, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073.geometry}
          material={nodes.Cylinder073.material}
          position={[-12.76, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074.geometry}
          material={nodes.Cylinder074.material}
          position={[-8.56, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075.geometry}
          material={nodes.Cylinder075.material}
          position={[-4.36, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={nodes.Cylinder076.material}
          position={[-0.16, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077.geometry}
          material={nodes.Cylinder077.material}
          position={[4.04, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078.geometry}
          material={nodes.Cylinder078.material}
          position={[-14.32, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079.geometry}
          material={nodes.Cylinder079.material}
          position={[-14.32, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080.geometry}
          material={nodes.Cylinder080.material}
          position={[-14.32, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081.geometry}
          material={nodes.Cylinder081.material}
          position={[-10.12, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082.geometry}
          material={nodes.Cylinder082.material}
          position={[-10.12, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083.geometry}
          material={nodes.Cylinder083.material}
          position={[-10.12, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084.geometry}
          material={nodes.Cylinder084.material}
          position={[-5.92, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085.geometry}
          material={nodes.Cylinder085.material}
          position={[-5.92, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086.geometry}
          material={nodes.Cylinder086.material}
          position={[-5.92, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087.geometry}
          material={nodes.Cylinder087.material}
          position={[-1.72, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088.geometry}
          material={nodes.Cylinder088.material}
          position={[-1.72, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089.geometry}
          material={nodes.Cylinder089.material}
          position={[-1.72, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090.geometry}
          material={nodes.Cylinder090.material}
          position={[2.48, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091.geometry}
          material={nodes.Cylinder091.material}
          position={[2.48, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092.geometry}
          material={nodes.Cylinder092.material}
          position={[2.48, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093.geometry}
          material={nodes.Cylinder093.material}
          position={[6.68, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094.geometry}
          material={nodes.Cylinder094.material}
          position={[6.68, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095.geometry}
          material={nodes.Cylinder095.material}
          position={[6.68, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096.geometry}
          material={nodes.Cylinder096.material}
          position={[-15.88, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder097.geometry}
          material={nodes.Cylinder097.material}
          position={[-15.88, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098.geometry}
          material={nodes.Cylinder098.material}
          position={[-15.88, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099.geometry}
          material={nodes.Cylinder099.material}
          position={[-11.68, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100.geometry}
          material={nodes.Cylinder100.material}
          position={[-11.68, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={nodes.Cylinder101.material}
          position={[-11.68, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder102.geometry}
          material={nodes.Cylinder102.material}
          position={[-7.48, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103.geometry}
          material={nodes.Cylinder103.material}
          position={[-7.48, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104.geometry}
          material={nodes.Cylinder104.material}
          position={[-7.48, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105.geometry}
          material={nodes.Cylinder105.material}
          position={[-3.28, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106.geometry}
          material={nodes.Cylinder106.material}
          position={[-3.28, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107.geometry}
          material={nodes.Cylinder107.material}
          position={[-3.28, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108.geometry}
          material={nodes.Cylinder108.material}
          position={[0.92, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder109.geometry}
          material={nodes.Cylinder109.material}
          position={[0.92, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110.geometry}
          material={nodes.Cylinder110.material}
          position={[0.92, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111.geometry}
          material={nodes.Cylinder111.material}
          position={[5.12, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112.geometry}
          material={nodes.Cylinder112.material}
          position={[5.12, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113.geometry}
          material={nodes.Cylinder113.material}
          position={[5.12, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114.geometry}
          material={nodes.Cylinder114.material}
          position={[-12.76, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115.geometry}
          material={nodes.Cylinder115.material}
          position={[-12.76, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116.geometry}
          material={nodes.Cylinder116.material}
          position={[-12.76, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117.geometry}
          material={nodes.Cylinder117.material}
          position={[-8.56, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118.geometry}
          material={nodes.Cylinder118.material}
          position={[-8.56, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119.geometry}
          material={nodes.Cylinder119.material}
          position={[-8.56, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120.geometry}
          material={nodes.Cylinder120.material}
          position={[-4.36, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121.geometry}
          material={nodes.Cylinder121.material}
          position={[-4.36, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122.geometry}
          material={nodes.Cylinder122.material}
          position={[-4.36, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123.geometry}
          material={nodes.Cylinder123.material}
          position={[-0.16, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder124.geometry}
          material={nodes.Cylinder124.material}
          position={[-0.16, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder125.geometry}
          material={nodes.Cylinder125.material}
          position={[-0.16, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder126.geometry}
          material={nodes.Cylinder126.material}
          position={[4.04, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127.geometry}
          material={nodes.Cylinder127.material}
          position={[4.04, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder128.geometry}
          material={nodes.Cylinder128.material}
          position={[4.04, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder129.geometry}
          material={nodes.Cylinder129.material}
          position={[8.24, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder130.geometry}
          material={nodes.Cylinder130.material}
          position={[8.24, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder131.geometry}
          material={nodes.Cylinder131.material}
          position={[8.24, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={nodes.Cube065.material}
          position={[6.68, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={nodes.Cube066.material}
          position={[-1.72, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={nodes.Cube067.material}
          position={[-1.72, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={nodes.Cube068.material}
          position={[-5.92, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={nodes.Cube069.material}
          position={[-10.12, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={nodes.Cube070.material}
          position={[6.68, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={nodes.Cube071.material}
          position={[6.68, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={nodes.Cube072.material}
          position={[2.48, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={nodes.Cube073.material}
          position={[2.48, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={nodes.Cube074.material}
          position={[2.48, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={nodes.Cube075.material}
          position={[-1.72, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={nodes.Cube076.material}
          position={[-5.92, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={nodes.Cube077.material}
          position={[-5.92, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={nodes.Cube078.material}
          position={[-10.12, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={nodes.Cube079.material}
          position={[-10.12, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={nodes.Cube080.material}
          position={[-14.32, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={nodes.Cube081.material}
          position={[-14.32, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={nodes.Cube082.material}
          position={[-14.32, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={nodes.Cube083.material}
          position={[-14.32, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube084.geometry}
          material={nodes.Cube084.material}
          position={[-14.32, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={nodes.Cube085.material}
          position={[-10.12, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={nodes.Cube086.material}
          position={[-5.92, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={nodes.Cube087.material}
          position={[-1.72, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube088.geometry}
          material={nodes.Cube088.material}
          position={[2.48, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089.geometry}
          material={nodes.Cube089.material}
          position={[6.68, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090.geometry}
          material={nodes.Cube090.material}
          position={[2.48, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={nodes.Cube091.material}
          position={[6.68, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={nodes.Cube092.material}
          position={[2.48, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={nodes.Cube093.material}
          position={[-1.72, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={nodes.Cube094.material}
          position={[-1.72, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={nodes.Cube095.material}
          position={[-5.92, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={nodes.Cube096.material}
          position={[-5.92, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={nodes.Cube097.material}
          position={[-10.12, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube098.geometry}
          material={nodes.Cube098.material}
          position={[-10.12, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
        </RigidBody>
    </group>

    <group {...props} dispose={null} scale={[6,6,6]} position={[-30,0,200]}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-4.2, 10.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-4.2, 10.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-16.7, 10.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[12.6, 10.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[12.6, 10.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[16.7, 1.5, -4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[16.7, 1.5, 4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[-16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
          position={[-15.1, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[-15.1, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.004"]}
          position={[-10.9, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.005"]}
          position={[-6.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.006"]}
          position={[-2.5, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.007"]}
          position={[1.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.008"]}
          position={[5.9, 4, -1.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.009"]}
          position={[5.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.010"]}
          position={[1.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["Material.011"]}
          position={[-2.5, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.012"]}
          position={[-6.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.013"]}
          position={[-10.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials["Material.014"]}
          position={[5.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials["Material.015"]}
          position={[5.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Material.016"]}
          position={[1.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials["Material.017"]}
          position={[-2.5, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Material.018"]}
          position={[-6.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials["Material.019"]}
          position={[-10.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["Material.020"]}
          position={[-15.1, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials["Material.021"]}
          position={[-10.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials["Material.022"]}
          position={[-10.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials["Material.023"]}
          position={[-6.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials["Material.024"]}
          position={[-2.5, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials["Material.025"]}
          position={[1.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[-4.2, 1.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[6.68, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[-14.32, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[-4.2, 7.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-4.2, 4.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-4.2, 7.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[-16.7, 1.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-16.7, 4.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[-16.7, 7.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["Material.026"]}
          position={[-16.85, 1.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["Material.027"]}
          position={[16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials["Material.028"]}
          position={[-16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials["Material.029"]}
          position={[-15.1, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials["Material.030"]}
          position={[-15.1, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials["Material.031"]}
          position={[-15.1, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials["Material.032"]}
          position={[-15.1, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials["Material.033"]}
          position={[-10.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials["Material.034"]}
          position={[-10.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials["Material.035"]}
          position={[-6.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials["Material.036"]}
          position={[-2.5, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={materials["Material.037"]}
          position={[1.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={materials["Material.038"]}
          position={[5.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039.geometry}
          material={materials["Material.039"]}
          position={[5.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040.geometry}
          material={materials["Material.040"]}
          position={[1.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041.geometry}
          material={materials["Material.041"]}
          position={[-2.5, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials["Material.042"]}
          position={[-6.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials["Material.043"]}
          position={[-6.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials["Material.044"]}
          position={[-2.5, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials["Material.045"]}
          position={[1.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials["Material.046"]}
          position={[5.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials["Material.047"]}
          position={[-15.1, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials["Material.048"]}
          position={[-15.1, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials["Material.049"]}
          position={[-15.1, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials["Material.050"]}
          position={[-10.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials["Material.051"]}
          position={[-6.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials["Material.052"]}
          position={[-2.5, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials["Material.053"]}
          position={[1.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane054.geometry}
          material={materials["Material.054"]}
          position={[5.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials["Material.055"]}
          position={[-10.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials["Material.056"]}
          position={[-6.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane057.geometry}
          material={materials["Material.057"]}
          position={[-2.5, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058.geometry}
          material={materials["Material.058"]}
          position={[1.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059.geometry}
          material={materials["Material.059"]}
          position={[5.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane060.geometry}
          material={materials["Material.060"]}
          position={[5.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane061.geometry}
          material={materials["Material.061"]}
          position={[1.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane062.geometry}
          material={materials["Material.062"]}
          position={[-2.5, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials["Material.063"]}
          position={[-6.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane064.geometry}
          material={materials["Material.064"]}
          position={[-10.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065.geometry}
          material={materials["Material.065"]}
          position={[5.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066.geometry}
          material={materials["Material.066"]}
          position={[1.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067.geometry}
          material={materials["Material.067"]}
          position={[-2.5, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane068.geometry}
          material={materials["Material.068"]}
          position={[-6.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane069.geometry}
          material={materials["Material.069"]}
          position={[-10.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070.geometry}
          material={materials["Material.070"]}
          position={[-15.1, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071.geometry}
          material={materials["Material.071"]}
          position={[5.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072.geometry}
          material={materials["Material.072"]}
          position={[1.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073.geometry}
          material={materials["Material.073"]}
          position={[-2.5, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane074.geometry}
          material={materials["Material.074"]}
          position={[-6.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane075.geometry}
          material={materials["Material.075"]}
          position={[-10.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane076.geometry}
          material={materials["Material.076"]}
          position={[-15.1, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane077.geometry}
          material={materials["Material.077"]}
          position={[5.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane078.geometry}
          material={materials["Material.078"]}
          position={[1.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane079.geometry}
          material={materials["Material.079"]}
          position={[-2.5, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane080.geometry}
          material={materials["Material.080"]}
          position={[-6.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081.geometry}
          material={materials["Material.081"]}
          position={[-10.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082.geometry}
          material={materials["Material.082"]}
          position={[-15.1, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083.geometry}
          material={materials["Material.083"]}
          position={[-15.1, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084.geometry}
          material={materials["Material.084"]}
          position={[-10.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085.geometry}
          material={materials["Material.085"]}
          position={[-6.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086.geometry}
          material={materials["Material.086"]}
          position={[-2.5, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087.geometry}
          material={materials["Material.087"]}
          position={[1.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088.geometry}
          material={materials["Material.088"]}
          position={[5.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089.geometry}
          material={materials["Material.089"]}
          position={[5.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090.geometry}
          material={materials["Material.090"]}
          position={[1.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091.geometry}
          material={materials["Material.091"]}
          position={[-2.5, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092.geometry}
          material={materials["Material.092"]}
          position={[-6.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093.geometry}
          material={materials["Material.093"]}
          position={[-10.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094.geometry}
          material={materials["Material.094"]}
          position={[-15.1, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095.geometry}
          material={materials["Material.095"]}
          position={[5.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096.geometry}
          material={materials["Material.096"]}
          position={[1.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097.geometry}
          material={materials["Material.097"]}
          position={[-2.5, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098.geometry}
          material={materials["Material.098"]}
          position={[-6.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099.geometry}
          material={materials["Material.099"]}
          position={[-10.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100.geometry}
          material={materials["Material.100"]}
          position={[-15.1, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[12.6, 1.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[12.6, 4.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[12.6, 7.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[12.6, 1.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[12.6, 4.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[12.6, 7.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[16.7, 7.5, 0]}
          scale={[0.1, 4.5, 7.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104.geometry}
          material={materials["Material.101"]}
          position={[-16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105.geometry}
          material={materials["Material.102"]}
          position={[3.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106.geometry}
          material={materials["Material.103"]}
          position={[16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[-4.2, 5.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[-4.2, 8.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[0, 12, 0]}
          scale={[16.8, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[12.6, 8.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[14.55, 8.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[10.45, 6, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={nodes.Cube029.material}
          position={[10.45, 6.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={nodes.Cube030.material}
          position={[10.45, 6.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={nodes.Cube031.material}
          position={[10.45, 6.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={nodes.Cube032.material}
          position={[12.5, 7.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={nodes.Cube033.material}
          position={[14.55, 7.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={nodes.Cube034.material}
          position={[14.55, 7.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={nodes.Cube035.material}
          position={[14.55, 8.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={nodes.Cube036.material}
          position={[14.55, 8.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={nodes.Cube037.material}
          position={[10.45, 7.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={nodes.Cube038.material}
          position={[-4.2, 2.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={nodes.Cube039.material}
          position={[10.45, 0, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={nodes.Cube040.material}
          position={[10.45, 0.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={nodes.Cube041.material}
          position={[10.45, 0.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={nodes.Cube042.material}
          position={[10.45, 0.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={nodes.Cube043.material}
          position={[10.45, 1.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={nodes.Cube044.material}
          position={[12.5, 1.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={nodes.Cube045.material}
          position={[14.55, 1.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={nodes.Cube046.material}
          position={[14.55, 1.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={nodes.Cube047.material}
          position={[14.55, 2.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={nodes.Cube048.material}
          position={[14.55, 2.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={nodes.Cube049.material}
          position={[14.55, 2.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={nodes.Cube050.material}
          position={[12.6, 2.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={nodes.Cube051.material}
          position={[10.45, 3, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={nodes.Cube052.material}
          position={[10.45, 3.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={nodes.Cube053.material}
          position={[10.45, 3.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={nodes.Cube054.material}
          position={[10.45, 3.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={nodes.Cube055.material}
          position={[10.45, 4.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={nodes.Cube056.material}
          position={[12.5, 4.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={nodes.Cube057.material}
          position={[14.55, 4.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={nodes.Cube058.material}
          position={[14.55, 4.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={nodes.Cube059.material}
          position={[14.55, 5.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={nodes.Cube060.material}
          position={[14.55, 5.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={nodes.Cube061.material}
          position={[14.55, 5.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={nodes.Cube062.material}
          position={[12.6, 5.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101.geometry}
          material={materials["Material.104"]}
          position={[16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102.geometry}
          material={materials["Material.105"]}
          position={[-13.6, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103.geometry}
          material={materials["Material.106"]}
          position={[3.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107.geometry}
          material={materials["Material.107"]}
          position={[3.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108.geometry}
          material={materials["Material.108"]}
          position={[7.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109.geometry}
          material={materials["Material.109"]}
          position={[-1, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110.geometry}
          material={materials["Material.110"]}
          position={[-5.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111.geometry}
          material={materials["Material.111"]}
          position={[-9.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112.geometry}
          material={materials["Material.112"]}
          position={[3.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113.geometry}
          material={materials["Material.113"]}
          position={[-13.6, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114.geometry}
          material={materials["Material.114"]}
          position={[7.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115.geometry}
          material={materials["Material.115"]}
          position={[7.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116.geometry}
          material={materials["Material.116"]}
          position={[-1, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117.geometry}
          material={materials["Material.117"]}
          position={[-1, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118.geometry}
          material={materials["Material.118"]}
          position={[-1, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119.geometry}
          material={materials["Material.119"]}
          position={[-5.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120.geometry}
          material={materials["Material.120"]}
          position={[-5.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121.geometry}
          material={materials["Material.121"]}
          position={[-5.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122.geometry}
          material={materials["Material.122"]}
          position={[-9.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123.geometry}
          material={materials["Material.123"]}
          position={[-9.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124.geometry}
          material={materials["Material.124"]}
          position={[-9.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125.geometry}
          material={materials["Material.125"]}
          position={[-13.6, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126.geometry}
          material={materials["Material.126"]}
          position={[-13.6, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127.geometry}
          material={materials["Material.127"]}
          position={[-13.6, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128.geometry}
          material={materials["Material.128"]}
          position={[7.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129.geometry}
          material={materials["Material.129"]}
          position={[7.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130.geometry}
          material={materials["Material.130"]}
          position={[3.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131.geometry}
          material={materials["Material.131"]}
          position={[-1, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132.geometry}
          material={materials["Material.132"]}
          position={[-5.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133.geometry}
          material={materials["Material.133"]}
          position={[-9.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134.geometry}
          material={materials["Material.134"]}
          position={[7.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135.geometry}
          material={materials["Material.135"]}
          position={[7.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136.geometry}
          material={materials["Material.136"]}
          position={[7.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137.geometry}
          material={materials["Material.137"]}
          position={[3.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138.geometry}
          material={materials["Material.138"]}
          position={[3.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139.geometry}
          material={materials["Material.139"]}
          position={[3.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={materials["Material.140"]}
          position={[-1, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141.geometry}
          material={materials["Material.141"]}
          position={[-1, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142.geometry}
          material={materials["Material.142"]}
          position={[-1, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143.geometry}
          material={materials["Material.143"]}
          position={[-5.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144.geometry}
          material={materials["Material.144"]}
          position={[-5.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145.geometry}
          material={materials["Material.145"]}
          position={[-5.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146.geometry}
          material={materials["Material.146"]}
          position={[-9.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147.geometry}
          material={materials["Material.147"]}
          position={[-9.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148.geometry}
          material={materials["Material.148"]}
          position={[-9.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149.geometry}
          material={materials["Material.149"]}
          position={[-13.6, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150.geometry}
          material={materials["Material.150"]}
          position={[-13.6, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151.geometry}
          material={materials["Material.151"]}
          position={[-13.6, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[8.24, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-14.32, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[5.12, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[6.68, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[2.48, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={nodes.Cube063.material}
          position={[-4.2, 1.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[-1.72, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-5.92, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[-10.12, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[6.68, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={nodes.Cylinder009.material}
          position={[6.68, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={nodes.Cylinder010.material}
          position={[6.68, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[2.48, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={nodes.Cylinder012.material}
          position={[2.48, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
          position={[2.48, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={nodes.Cylinder014.material}
          position={[-1.72, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={nodes.Cylinder015.material}
          position={[-1.72, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={nodes.Cylinder016.material}
          position={[-1.72, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={nodes.Cylinder017.material}
          position={[-5.92, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={nodes.Cylinder018.material}
          position={[-5.92, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={nodes.Cylinder019.material}
          position={[-5.92, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={nodes.Cylinder020.material}
          position={[-10.12, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={nodes.Cube064.material}
          position={[-4.2, 4.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={nodes.Cylinder021.material}
          position={[-10.12, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={nodes.Cylinder022.material}
          position={[-10.12, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={nodes.Cylinder023.material}
          position={[6.68, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={nodes.Cylinder024.material}
          position={[-14.32, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={nodes.Cylinder025.material}
          position={[-14.32, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={nodes.Cylinder026.material}
          position={[8.24, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={nodes.Cylinder027.material}
          position={[8.24, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={nodes.Cylinder028.material}
          position={[8.24, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={nodes.Cylinder029.material}
          position={[-15.88, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={nodes.Cylinder030.material}
          position={[5.12, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={nodes.Cylinder031.material}
          position={[5.12, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={nodes.Cylinder032.material}
          position={[8.24, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033.geometry}
          material={nodes.Cylinder033.material}
          position={[4.04, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={nodes.Cylinder034.material}
          position={[-0.16, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={nodes.Cylinder035.material}
          position={[-4.36, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={nodes.Cylinder036.material}
          position={[-8.56, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={nodes.Cylinder037.material}
          position={[5.12, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={nodes.Cylinder038.material}
          position={[0.92, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={nodes.Cylinder039.material}
          position={[-3.28, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040.geometry}
          material={nodes.Cylinder040.material}
          position={[-7.48, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={nodes.Cylinder041.material}
          position={[-11.68, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={nodes.Cylinder042.material}
          position={[4.04, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={nodes.Cylinder043.material}
          position={[4.04, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={nodes.Cylinder044.material}
          position={[4.04, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045.geometry}
          material={nodes.Cylinder045.material}
          position={[0.92, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={nodes.Cylinder046.material}
          position={[0.92, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={nodes.Cylinder047.material}
          position={[0.92, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048.geometry}
          material={nodes.Cylinder048.material}
          position={[-3.28, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049.geometry}
          material={nodes.Cylinder049.material}
          position={[-3.28, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050.geometry}
          material={nodes.Cylinder050.material}
          position={[-3.28, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051.geometry}
          material={nodes.Cylinder051.material}
          position={[-7.48, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={nodes.Cylinder052.material}
          position={[-7.48, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053.geometry}
          material={nodes.Cylinder053.material}
          position={[-7.48, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={nodes.Cylinder054.material}
          position={[-11.68, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055.geometry}
          material={nodes.Cylinder055.material}
          position={[-11.68, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056.geometry}
          material={nodes.Cylinder056.material}
          position={[-11.68, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057.geometry}
          material={nodes.Cylinder057.material}
          position={[5.12, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058.geometry}
          material={nodes.Cylinder058.material}
          position={[-15.88, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059.geometry}
          material={nodes.Cylinder059.material}
          position={[-15.88, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={nodes.Cylinder060.material}
          position={[-14.32, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061.geometry}
          material={nodes.Cylinder061.material}
          position={[-15.88, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062.geometry}
          material={nodes.Cylinder062.material}
          position={[-12.76, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063.geometry}
          material={nodes.Cylinder063.material}
          position={[-14.32, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={nodes.Cylinder064.material}
          position={[-10.12, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={nodes.Cylinder065.material}
          position={[-5.92, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={nodes.Cylinder066.material}
          position={[-1.72, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067.geometry}
          material={nodes.Cylinder067.material}
          position={[2.48, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068.geometry}
          material={nodes.Cylinder068.material}
          position={[-15.88, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069.geometry}
          material={nodes.Cylinder069.material}
          position={[-11.68, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070.geometry}
          material={nodes.Cylinder070.material}
          position={[-7.48, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={nodes.Cylinder071.material}
          position={[-3.28, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072.geometry}
          material={nodes.Cylinder072.material}
          position={[0.92, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073.geometry}
          material={nodes.Cylinder073.material}
          position={[-12.76, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074.geometry}
          material={nodes.Cylinder074.material}
          position={[-8.56, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075.geometry}
          material={nodes.Cylinder075.material}
          position={[-4.36, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={nodes.Cylinder076.material}
          position={[-0.16, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077.geometry}
          material={nodes.Cylinder077.material}
          position={[4.04, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078.geometry}
          material={nodes.Cylinder078.material}
          position={[-14.32, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079.geometry}
          material={nodes.Cylinder079.material}
          position={[-14.32, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080.geometry}
          material={nodes.Cylinder080.material}
          position={[-14.32, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081.geometry}
          material={nodes.Cylinder081.material}
          position={[-10.12, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082.geometry}
          material={nodes.Cylinder082.material}
          position={[-10.12, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083.geometry}
          material={nodes.Cylinder083.material}
          position={[-10.12, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084.geometry}
          material={nodes.Cylinder084.material}
          position={[-5.92, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085.geometry}
          material={nodes.Cylinder085.material}
          position={[-5.92, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086.geometry}
          material={nodes.Cylinder086.material}
          position={[-5.92, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087.geometry}
          material={nodes.Cylinder087.material}
          position={[-1.72, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088.geometry}
          material={nodes.Cylinder088.material}
          position={[-1.72, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089.geometry}
          material={nodes.Cylinder089.material}
          position={[-1.72, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090.geometry}
          material={nodes.Cylinder090.material}
          position={[2.48, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091.geometry}
          material={nodes.Cylinder091.material}
          position={[2.48, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092.geometry}
          material={nodes.Cylinder092.material}
          position={[2.48, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093.geometry}
          material={nodes.Cylinder093.material}
          position={[6.68, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094.geometry}
          material={nodes.Cylinder094.material}
          position={[6.68, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095.geometry}
          material={nodes.Cylinder095.material}
          position={[6.68, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096.geometry}
          material={nodes.Cylinder096.material}
          position={[-15.88, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder097.geometry}
          material={nodes.Cylinder097.material}
          position={[-15.88, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098.geometry}
          material={nodes.Cylinder098.material}
          position={[-15.88, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099.geometry}
          material={nodes.Cylinder099.material}
          position={[-11.68, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100.geometry}
          material={nodes.Cylinder100.material}
          position={[-11.68, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={nodes.Cylinder101.material}
          position={[-11.68, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder102.geometry}
          material={nodes.Cylinder102.material}
          position={[-7.48, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103.geometry}
          material={nodes.Cylinder103.material}
          position={[-7.48, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104.geometry}
          material={nodes.Cylinder104.material}
          position={[-7.48, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105.geometry}
          material={nodes.Cylinder105.material}
          position={[-3.28, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106.geometry}
          material={nodes.Cylinder106.material}
          position={[-3.28, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107.geometry}
          material={nodes.Cylinder107.material}
          position={[-3.28, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108.geometry}
          material={nodes.Cylinder108.material}
          position={[0.92, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder109.geometry}
          material={nodes.Cylinder109.material}
          position={[0.92, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110.geometry}
          material={nodes.Cylinder110.material}
          position={[0.92, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111.geometry}
          material={nodes.Cylinder111.material}
          position={[5.12, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112.geometry}
          material={nodes.Cylinder112.material}
          position={[5.12, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113.geometry}
          material={nodes.Cylinder113.material}
          position={[5.12, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114.geometry}
          material={nodes.Cylinder114.material}
          position={[-12.76, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115.geometry}
          material={nodes.Cylinder115.material}
          position={[-12.76, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116.geometry}
          material={nodes.Cylinder116.material}
          position={[-12.76, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117.geometry}
          material={nodes.Cylinder117.material}
          position={[-8.56, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118.geometry}
          material={nodes.Cylinder118.material}
          position={[-8.56, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119.geometry}
          material={nodes.Cylinder119.material}
          position={[-8.56, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120.geometry}
          material={nodes.Cylinder120.material}
          position={[-4.36, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121.geometry}
          material={nodes.Cylinder121.material}
          position={[-4.36, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122.geometry}
          material={nodes.Cylinder122.material}
          position={[-4.36, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123.geometry}
          material={nodes.Cylinder123.material}
          position={[-0.16, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder124.geometry}
          material={nodes.Cylinder124.material}
          position={[-0.16, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder125.geometry}
          material={nodes.Cylinder125.material}
          position={[-0.16, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder126.geometry}
          material={nodes.Cylinder126.material}
          position={[4.04, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127.geometry}
          material={nodes.Cylinder127.material}
          position={[4.04, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder128.geometry}
          material={nodes.Cylinder128.material}
          position={[4.04, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder129.geometry}
          material={nodes.Cylinder129.material}
          position={[8.24, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder130.geometry}
          material={nodes.Cylinder130.material}
          position={[8.24, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder131.geometry}
          material={nodes.Cylinder131.material}
          position={[8.24, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={nodes.Cube065.material}
          position={[6.68, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={nodes.Cube066.material}
          position={[-1.72, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={nodes.Cube067.material}
          position={[-1.72, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={nodes.Cube068.material}
          position={[-5.92, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={nodes.Cube069.material}
          position={[-10.12, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={nodes.Cube070.material}
          position={[6.68, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={nodes.Cube071.material}
          position={[6.68, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={nodes.Cube072.material}
          position={[2.48, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={nodes.Cube073.material}
          position={[2.48, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={nodes.Cube074.material}
          position={[2.48, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={nodes.Cube075.material}
          position={[-1.72, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={nodes.Cube076.material}
          position={[-5.92, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={nodes.Cube077.material}
          position={[-5.92, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={nodes.Cube078.material}
          position={[-10.12, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={nodes.Cube079.material}
          position={[-10.12, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={nodes.Cube080.material}
          position={[-14.32, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={nodes.Cube081.material}
          position={[-14.32, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={nodes.Cube082.material}
          position={[-14.32, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={nodes.Cube083.material}
          position={[-14.32, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube084.geometry}
          material={nodes.Cube084.material}
          position={[-14.32, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={nodes.Cube085.material}
          position={[-10.12, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={nodes.Cube086.material}
          position={[-5.92, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={nodes.Cube087.material}
          position={[-1.72, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube088.geometry}
          material={nodes.Cube088.material}
          position={[2.48, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089.geometry}
          material={nodes.Cube089.material}
          position={[6.68, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090.geometry}
          material={nodes.Cube090.material}
          position={[2.48, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={nodes.Cube091.material}
          position={[6.68, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={nodes.Cube092.material}
          position={[2.48, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={nodes.Cube093.material}
          position={[-1.72, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={nodes.Cube094.material}
          position={[-1.72, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={nodes.Cube095.material}
          position={[-5.92, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={nodes.Cube096.material}
          position={[-5.92, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={nodes.Cube097.material}
          position={[-10.12, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube098.geometry}
          material={nodes.Cube098.material}
          position={[-10.12, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
        </RigidBody>
    </group>

    <group {...props} dispose={null} scale={[6,6,6]} position={[-30,0,-200]}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-4.2, 10.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-4.2, 10.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-16.7, 10.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[12.6, 10.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[12.6, 10.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[16.7, 1.5, -4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[16.7, 1.5, 4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[-16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
          position={[-15.1, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[-15.1, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.004"]}
          position={[-10.9, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.005"]}
          position={[-6.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.006"]}
          position={[-2.5, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.007"]}
          position={[1.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.008"]}
          position={[5.9, 4, -1.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.009"]}
          position={[5.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.010"]}
          position={[1.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["Material.011"]}
          position={[-2.5, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.012"]}
          position={[-6.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.013"]}
          position={[-10.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials["Material.014"]}
          position={[5.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials["Material.015"]}
          position={[5.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Material.016"]}
          position={[1.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials["Material.017"]}
          position={[-2.5, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Material.018"]}
          position={[-6.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials["Material.019"]}
          position={[-10.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["Material.020"]}
          position={[-15.1, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials["Material.021"]}
          position={[-10.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials["Material.022"]}
          position={[-10.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials["Material.023"]}
          position={[-6.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials["Material.024"]}
          position={[-2.5, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials["Material.025"]}
          position={[1.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[-4.2, 1.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[6.68, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[-14.32, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[-4.2, 7.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-4.2, 4.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-4.2, 7.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[-16.7, 1.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-16.7, 4.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[-16.7, 7.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["Material.026"]}
          position={[-16.85, 1.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["Material.027"]}
          position={[16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials["Material.028"]}
          position={[-16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials["Material.029"]}
          position={[-15.1, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials["Material.030"]}
          position={[-15.1, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials["Material.031"]}
          position={[-15.1, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials["Material.032"]}
          position={[-15.1, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials["Material.033"]}
          position={[-10.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials["Material.034"]}
          position={[-10.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials["Material.035"]}
          position={[-6.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials["Material.036"]}
          position={[-2.5, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={materials["Material.037"]}
          position={[1.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={materials["Material.038"]}
          position={[5.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039.geometry}
          material={materials["Material.039"]}
          position={[5.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040.geometry}
          material={materials["Material.040"]}
          position={[1.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041.geometry}
          material={materials["Material.041"]}
          position={[-2.5, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials["Material.042"]}
          position={[-6.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials["Material.043"]}
          position={[-6.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials["Material.044"]}
          position={[-2.5, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials["Material.045"]}
          position={[1.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials["Material.046"]}
          position={[5.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials["Material.047"]}
          position={[-15.1, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials["Material.048"]}
          position={[-15.1, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials["Material.049"]}
          position={[-15.1, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials["Material.050"]}
          position={[-10.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials["Material.051"]}
          position={[-6.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials["Material.052"]}
          position={[-2.5, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials["Material.053"]}
          position={[1.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane054.geometry}
          material={materials["Material.054"]}
          position={[5.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials["Material.055"]}
          position={[-10.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials["Material.056"]}
          position={[-6.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane057.geometry}
          material={materials["Material.057"]}
          position={[-2.5, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058.geometry}
          material={materials["Material.058"]}
          position={[1.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059.geometry}
          material={materials["Material.059"]}
          position={[5.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane060.geometry}
          material={materials["Material.060"]}
          position={[5.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane061.geometry}
          material={materials["Material.061"]}
          position={[1.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane062.geometry}
          material={materials["Material.062"]}
          position={[-2.5, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials["Material.063"]}
          position={[-6.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane064.geometry}
          material={materials["Material.064"]}
          position={[-10.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065.geometry}
          material={materials["Material.065"]}
          position={[5.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066.geometry}
          material={materials["Material.066"]}
          position={[1.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067.geometry}
          material={materials["Material.067"]}
          position={[-2.5, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane068.geometry}
          material={materials["Material.068"]}
          position={[-6.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane069.geometry}
          material={materials["Material.069"]}
          position={[-10.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070.geometry}
          material={materials["Material.070"]}
          position={[-15.1, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071.geometry}
          material={materials["Material.071"]}
          position={[5.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072.geometry}
          material={materials["Material.072"]}
          position={[1.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073.geometry}
          material={materials["Material.073"]}
          position={[-2.5, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane074.geometry}
          material={materials["Material.074"]}
          position={[-6.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane075.geometry}
          material={materials["Material.075"]}
          position={[-10.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane076.geometry}
          material={materials["Material.076"]}
          position={[-15.1, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane077.geometry}
          material={materials["Material.077"]}
          position={[5.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane078.geometry}
          material={materials["Material.078"]}
          position={[1.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane079.geometry}
          material={materials["Material.079"]}
          position={[-2.5, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane080.geometry}
          material={materials["Material.080"]}
          position={[-6.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081.geometry}
          material={materials["Material.081"]}
          position={[-10.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082.geometry}
          material={materials["Material.082"]}
          position={[-15.1, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083.geometry}
          material={materials["Material.083"]}
          position={[-15.1, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084.geometry}
          material={materials["Material.084"]}
          position={[-10.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085.geometry}
          material={materials["Material.085"]}
          position={[-6.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086.geometry}
          material={materials["Material.086"]}
          position={[-2.5, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087.geometry}
          material={materials["Material.087"]}
          position={[1.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088.geometry}
          material={materials["Material.088"]}
          position={[5.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089.geometry}
          material={materials["Material.089"]}
          position={[5.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090.geometry}
          material={materials["Material.090"]}
          position={[1.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091.geometry}
          material={materials["Material.091"]}
          position={[-2.5, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092.geometry}
          material={materials["Material.092"]}
          position={[-6.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093.geometry}
          material={materials["Material.093"]}
          position={[-10.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094.geometry}
          material={materials["Material.094"]}
          position={[-15.1, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095.geometry}
          material={materials["Material.095"]}
          position={[5.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096.geometry}
          material={materials["Material.096"]}
          position={[1.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097.geometry}
          material={materials["Material.097"]}
          position={[-2.5, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098.geometry}
          material={materials["Material.098"]}
          position={[-6.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099.geometry}
          material={materials["Material.099"]}
          position={[-10.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100.geometry}
          material={materials["Material.100"]}
          position={[-15.1, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[12.6, 1.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[12.6, 4.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[12.6, 7.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[12.6, 1.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[12.6, 4.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[12.6, 7.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[16.7, 7.5, 0]}
          scale={[0.1, 4.5, 7.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104.geometry}
          material={materials["Material.101"]}
          position={[-16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105.geometry}
          material={materials["Material.102"]}
          position={[3.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106.geometry}
          material={materials["Material.103"]}
          position={[16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[-4.2, 5.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[-4.2, 8.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[0, 12, 0]}
          scale={[16.8, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[12.6, 8.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[14.55, 8.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[10.45, 6, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={nodes.Cube029.material}
          position={[10.45, 6.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={nodes.Cube030.material}
          position={[10.45, 6.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={nodes.Cube031.material}
          position={[10.45, 6.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={nodes.Cube032.material}
          position={[12.5, 7.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={nodes.Cube033.material}
          position={[14.55, 7.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={nodes.Cube034.material}
          position={[14.55, 7.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={nodes.Cube035.material}
          position={[14.55, 8.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={nodes.Cube036.material}
          position={[14.55, 8.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={nodes.Cube037.material}
          position={[10.45, 7.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={nodes.Cube038.material}
          position={[-4.2, 2.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={nodes.Cube039.material}
          position={[10.45, 0, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={nodes.Cube040.material}
          position={[10.45, 0.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={nodes.Cube041.material}
          position={[10.45, 0.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={nodes.Cube042.material}
          position={[10.45, 0.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={nodes.Cube043.material}
          position={[10.45, 1.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={nodes.Cube044.material}
          position={[12.5, 1.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={nodes.Cube045.material}
          position={[14.55, 1.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={nodes.Cube046.material}
          position={[14.55, 1.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={nodes.Cube047.material}
          position={[14.55, 2.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={nodes.Cube048.material}
          position={[14.55, 2.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={nodes.Cube049.material}
          position={[14.55, 2.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={nodes.Cube050.material}
          position={[12.6, 2.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={nodes.Cube051.material}
          position={[10.45, 3, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={nodes.Cube052.material}
          position={[10.45, 3.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={nodes.Cube053.material}
          position={[10.45, 3.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={nodes.Cube054.material}
          position={[10.45, 3.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={nodes.Cube055.material}
          position={[10.45, 4.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={nodes.Cube056.material}
          position={[12.5, 4.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={nodes.Cube057.material}
          position={[14.55, 4.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={nodes.Cube058.material}
          position={[14.55, 4.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={nodes.Cube059.material}
          position={[14.55, 5.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={nodes.Cube060.material}
          position={[14.55, 5.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={nodes.Cube061.material}
          position={[14.55, 5.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={nodes.Cube062.material}
          position={[12.6, 5.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101.geometry}
          material={materials["Material.104"]}
          position={[16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102.geometry}
          material={materials["Material.105"]}
          position={[-13.6, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103.geometry}
          material={materials["Material.106"]}
          position={[3.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107.geometry}
          material={materials["Material.107"]}
          position={[3.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108.geometry}
          material={materials["Material.108"]}
          position={[7.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109.geometry}
          material={materials["Material.109"]}
          position={[-1, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110.geometry}
          material={materials["Material.110"]}
          position={[-5.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111.geometry}
          material={materials["Material.111"]}
          position={[-9.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112.geometry}
          material={materials["Material.112"]}
          position={[3.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113.geometry}
          material={materials["Material.113"]}
          position={[-13.6, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114.geometry}
          material={materials["Material.114"]}
          position={[7.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115.geometry}
          material={materials["Material.115"]}
          position={[7.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116.geometry}
          material={materials["Material.116"]}
          position={[-1, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117.geometry}
          material={materials["Material.117"]}
          position={[-1, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118.geometry}
          material={materials["Material.118"]}
          position={[-1, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119.geometry}
          material={materials["Material.119"]}
          position={[-5.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120.geometry}
          material={materials["Material.120"]}
          position={[-5.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121.geometry}
          material={materials["Material.121"]}
          position={[-5.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122.geometry}
          material={materials["Material.122"]}
          position={[-9.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123.geometry}
          material={materials["Material.123"]}
          position={[-9.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124.geometry}
          material={materials["Material.124"]}
          position={[-9.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125.geometry}
          material={materials["Material.125"]}
          position={[-13.6, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126.geometry}
          material={materials["Material.126"]}
          position={[-13.6, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127.geometry}
          material={materials["Material.127"]}
          position={[-13.6, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128.geometry}
          material={materials["Material.128"]}
          position={[7.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129.geometry}
          material={materials["Material.129"]}
          position={[7.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130.geometry}
          material={materials["Material.130"]}
          position={[3.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131.geometry}
          material={materials["Material.131"]}
          position={[-1, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132.geometry}
          material={materials["Material.132"]}
          position={[-5.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133.geometry}
          material={materials["Material.133"]}
          position={[-9.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134.geometry}
          material={materials["Material.134"]}
          position={[7.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135.geometry}
          material={materials["Material.135"]}
          position={[7.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136.geometry}
          material={materials["Material.136"]}
          position={[7.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137.geometry}
          material={materials["Material.137"]}
          position={[3.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138.geometry}
          material={materials["Material.138"]}
          position={[3.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139.geometry}
          material={materials["Material.139"]}
          position={[3.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={materials["Material.140"]}
          position={[-1, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141.geometry}
          material={materials["Material.141"]}
          position={[-1, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142.geometry}
          material={materials["Material.142"]}
          position={[-1, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143.geometry}
          material={materials["Material.143"]}
          position={[-5.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144.geometry}
          material={materials["Material.144"]}
          position={[-5.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145.geometry}
          material={materials["Material.145"]}
          position={[-5.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146.geometry}
          material={materials["Material.146"]}
          position={[-9.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147.geometry}
          material={materials["Material.147"]}
          position={[-9.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148.geometry}
          material={materials["Material.148"]}
          position={[-9.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149.geometry}
          material={materials["Material.149"]}
          position={[-13.6, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150.geometry}
          material={materials["Material.150"]}
          position={[-13.6, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151.geometry}
          material={materials["Material.151"]}
          position={[-13.6, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[8.24, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-14.32, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[5.12, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[6.68, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[2.48, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={nodes.Cube063.material}
          position={[-4.2, 1.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[-1.72, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-5.92, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[-10.12, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[6.68, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={nodes.Cylinder009.material}
          position={[6.68, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={nodes.Cylinder010.material}
          position={[6.68, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[2.48, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={nodes.Cylinder012.material}
          position={[2.48, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
          position={[2.48, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={nodes.Cylinder014.material}
          position={[-1.72, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={nodes.Cylinder015.material}
          position={[-1.72, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={nodes.Cylinder016.material}
          position={[-1.72, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={nodes.Cylinder017.material}
          position={[-5.92, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={nodes.Cylinder018.material}
          position={[-5.92, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={nodes.Cylinder019.material}
          position={[-5.92, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={nodes.Cylinder020.material}
          position={[-10.12, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={nodes.Cube064.material}
          position={[-4.2, 4.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={nodes.Cylinder021.material}
          position={[-10.12, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={nodes.Cylinder022.material}
          position={[-10.12, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={nodes.Cylinder023.material}
          position={[6.68, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={nodes.Cylinder024.material}
          position={[-14.32, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={nodes.Cylinder025.material}
          position={[-14.32, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={nodes.Cylinder026.material}
          position={[8.24, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={nodes.Cylinder027.material}
          position={[8.24, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={nodes.Cylinder028.material}
          position={[8.24, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={nodes.Cylinder029.material}
          position={[-15.88, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={nodes.Cylinder030.material}
          position={[5.12, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={nodes.Cylinder031.material}
          position={[5.12, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={nodes.Cylinder032.material}
          position={[8.24, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033.geometry}
          material={nodes.Cylinder033.material}
          position={[4.04, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={nodes.Cylinder034.material}
          position={[-0.16, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={nodes.Cylinder035.material}
          position={[-4.36, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={nodes.Cylinder036.material}
          position={[-8.56, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={nodes.Cylinder037.material}
          position={[5.12, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={nodes.Cylinder038.material}
          position={[0.92, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={nodes.Cylinder039.material}
          position={[-3.28, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040.geometry}
          material={nodes.Cylinder040.material}
          position={[-7.48, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={nodes.Cylinder041.material}
          position={[-11.68, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={nodes.Cylinder042.material}
          position={[4.04, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={nodes.Cylinder043.material}
          position={[4.04, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={nodes.Cylinder044.material}
          position={[4.04, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045.geometry}
          material={nodes.Cylinder045.material}
          position={[0.92, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={nodes.Cylinder046.material}
          position={[0.92, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={nodes.Cylinder047.material}
          position={[0.92, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048.geometry}
          material={nodes.Cylinder048.material}
          position={[-3.28, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049.geometry}
          material={nodes.Cylinder049.material}
          position={[-3.28, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050.geometry}
          material={nodes.Cylinder050.material}
          position={[-3.28, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051.geometry}
          material={nodes.Cylinder051.material}
          position={[-7.48, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={nodes.Cylinder052.material}
          position={[-7.48, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053.geometry}
          material={nodes.Cylinder053.material}
          position={[-7.48, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={nodes.Cylinder054.material}
          position={[-11.68, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055.geometry}
          material={nodes.Cylinder055.material}
          position={[-11.68, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056.geometry}
          material={nodes.Cylinder056.material}
          position={[-11.68, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057.geometry}
          material={nodes.Cylinder057.material}
          position={[5.12, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058.geometry}
          material={nodes.Cylinder058.material}
          position={[-15.88, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059.geometry}
          material={nodes.Cylinder059.material}
          position={[-15.88, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={nodes.Cylinder060.material}
          position={[-14.32, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061.geometry}
          material={nodes.Cylinder061.material}
          position={[-15.88, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062.geometry}
          material={nodes.Cylinder062.material}
          position={[-12.76, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063.geometry}
          material={nodes.Cylinder063.material}
          position={[-14.32, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={nodes.Cylinder064.material}
          position={[-10.12, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={nodes.Cylinder065.material}
          position={[-5.92, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={nodes.Cylinder066.material}
          position={[-1.72, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067.geometry}
          material={nodes.Cylinder067.material}
          position={[2.48, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068.geometry}
          material={nodes.Cylinder068.material}
          position={[-15.88, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069.geometry}
          material={nodes.Cylinder069.material}
          position={[-11.68, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070.geometry}
          material={nodes.Cylinder070.material}
          position={[-7.48, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={nodes.Cylinder071.material}
          position={[-3.28, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072.geometry}
          material={nodes.Cylinder072.material}
          position={[0.92, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073.geometry}
          material={nodes.Cylinder073.material}
          position={[-12.76, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074.geometry}
          material={nodes.Cylinder074.material}
          position={[-8.56, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075.geometry}
          material={nodes.Cylinder075.material}
          position={[-4.36, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={nodes.Cylinder076.material}
          position={[-0.16, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077.geometry}
          material={nodes.Cylinder077.material}
          position={[4.04, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078.geometry}
          material={nodes.Cylinder078.material}
          position={[-14.32, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079.geometry}
          material={nodes.Cylinder079.material}
          position={[-14.32, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080.geometry}
          material={nodes.Cylinder080.material}
          position={[-14.32, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081.geometry}
          material={nodes.Cylinder081.material}
          position={[-10.12, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082.geometry}
          material={nodes.Cylinder082.material}
          position={[-10.12, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083.geometry}
          material={nodes.Cylinder083.material}
          position={[-10.12, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084.geometry}
          material={nodes.Cylinder084.material}
          position={[-5.92, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085.geometry}
          material={nodes.Cylinder085.material}
          position={[-5.92, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086.geometry}
          material={nodes.Cylinder086.material}
          position={[-5.92, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087.geometry}
          material={nodes.Cylinder087.material}
          position={[-1.72, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088.geometry}
          material={nodes.Cylinder088.material}
          position={[-1.72, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089.geometry}
          material={nodes.Cylinder089.material}
          position={[-1.72, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090.geometry}
          material={nodes.Cylinder090.material}
          position={[2.48, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091.geometry}
          material={nodes.Cylinder091.material}
          position={[2.48, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092.geometry}
          material={nodes.Cylinder092.material}
          position={[2.48, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093.geometry}
          material={nodes.Cylinder093.material}
          position={[6.68, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094.geometry}
          material={nodes.Cylinder094.material}
          position={[6.68, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095.geometry}
          material={nodes.Cylinder095.material}
          position={[6.68, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096.geometry}
          material={nodes.Cylinder096.material}
          position={[-15.88, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder097.geometry}
          material={nodes.Cylinder097.material}
          position={[-15.88, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098.geometry}
          material={nodes.Cylinder098.material}
          position={[-15.88, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099.geometry}
          material={nodes.Cylinder099.material}
          position={[-11.68, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100.geometry}
          material={nodes.Cylinder100.material}
          position={[-11.68, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={nodes.Cylinder101.material}
          position={[-11.68, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder102.geometry}
          material={nodes.Cylinder102.material}
          position={[-7.48, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103.geometry}
          material={nodes.Cylinder103.material}
          position={[-7.48, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104.geometry}
          material={nodes.Cylinder104.material}
          position={[-7.48, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105.geometry}
          material={nodes.Cylinder105.material}
          position={[-3.28, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106.geometry}
          material={nodes.Cylinder106.material}
          position={[-3.28, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107.geometry}
          material={nodes.Cylinder107.material}
          position={[-3.28, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108.geometry}
          material={nodes.Cylinder108.material}
          position={[0.92, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder109.geometry}
          material={nodes.Cylinder109.material}
          position={[0.92, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110.geometry}
          material={nodes.Cylinder110.material}
          position={[0.92, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111.geometry}
          material={nodes.Cylinder111.material}
          position={[5.12, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112.geometry}
          material={nodes.Cylinder112.material}
          position={[5.12, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113.geometry}
          material={nodes.Cylinder113.material}
          position={[5.12, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114.geometry}
          material={nodes.Cylinder114.material}
          position={[-12.76, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115.geometry}
          material={nodes.Cylinder115.material}
          position={[-12.76, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116.geometry}
          material={nodes.Cylinder116.material}
          position={[-12.76, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117.geometry}
          material={nodes.Cylinder117.material}
          position={[-8.56, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118.geometry}
          material={nodes.Cylinder118.material}
          position={[-8.56, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119.geometry}
          material={nodes.Cylinder119.material}
          position={[-8.56, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120.geometry}
          material={nodes.Cylinder120.material}
          position={[-4.36, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121.geometry}
          material={nodes.Cylinder121.material}
          position={[-4.36, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122.geometry}
          material={nodes.Cylinder122.material}
          position={[-4.36, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123.geometry}
          material={nodes.Cylinder123.material}
          position={[-0.16, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder124.geometry}
          material={nodes.Cylinder124.material}
          position={[-0.16, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder125.geometry}
          material={nodes.Cylinder125.material}
          position={[-0.16, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder126.geometry}
          material={nodes.Cylinder126.material}
          position={[4.04, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127.geometry}
          material={nodes.Cylinder127.material}
          position={[4.04, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder128.geometry}
          material={nodes.Cylinder128.material}
          position={[4.04, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder129.geometry}
          material={nodes.Cylinder129.material}
          position={[8.24, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder130.geometry}
          material={nodes.Cylinder130.material}
          position={[8.24, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder131.geometry}
          material={nodes.Cylinder131.material}
          position={[8.24, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={nodes.Cube065.material}
          position={[6.68, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={nodes.Cube066.material}
          position={[-1.72, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={nodes.Cube067.material}
          position={[-1.72, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={nodes.Cube068.material}
          position={[-5.92, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={nodes.Cube069.material}
          position={[-10.12, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={nodes.Cube070.material}
          position={[6.68, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={nodes.Cube071.material}
          position={[6.68, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={nodes.Cube072.material}
          position={[2.48, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={nodes.Cube073.material}
          position={[2.48, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={nodes.Cube074.material}
          position={[2.48, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={nodes.Cube075.material}
          position={[-1.72, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={nodes.Cube076.material}
          position={[-5.92, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={nodes.Cube077.material}
          position={[-5.92, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={nodes.Cube078.material}
          position={[-10.12, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={nodes.Cube079.material}
          position={[-10.12, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={nodes.Cube080.material}
          position={[-14.32, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={nodes.Cube081.material}
          position={[-14.32, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={nodes.Cube082.material}
          position={[-14.32, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={nodes.Cube083.material}
          position={[-14.32, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube084.geometry}
          material={nodes.Cube084.material}
          position={[-14.32, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={nodes.Cube085.material}
          position={[-10.12, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={nodes.Cube086.material}
          position={[-5.92, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={nodes.Cube087.material}
          position={[-1.72, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube088.geometry}
          material={nodes.Cube088.material}
          position={[2.48, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089.geometry}
          material={nodes.Cube089.material}
          position={[6.68, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090.geometry}
          material={nodes.Cube090.material}
          position={[2.48, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={nodes.Cube091.material}
          position={[6.68, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={nodes.Cube092.material}
          position={[2.48, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={nodes.Cube093.material}
          position={[-1.72, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={nodes.Cube094.material}
          position={[-1.72, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={nodes.Cube095.material}
          position={[-5.92, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={nodes.Cube096.material}
          position={[-5.92, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={nodes.Cube097.material}
          position={[-10.12, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube098.geometry}
          material={nodes.Cube098.material}
          position={[-10.12, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
        </RigidBody>
    </group>

    <group {...props} dispose={null} scale={[6,6,6]} position={[290,0,200]} rotation={[0, Math.PI, 0]}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-4.2, 10.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-4.2, 10.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-16.7, 10.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[12.6, 10.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[12.6, 10.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[16.7, 1.5, -4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[16.7, 1.5, 4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[-16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
          position={[-15.1, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[-15.1, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.004"]}
          position={[-10.9, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.005"]}
          position={[-6.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.006"]}
          position={[-2.5, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.007"]}
          position={[1.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.008"]}
          position={[5.9, 4, -1.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.009"]}
          position={[5.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.010"]}
          position={[1.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["Material.011"]}
          position={[-2.5, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.012"]}
          position={[-6.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.013"]}
          position={[-10.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials["Material.014"]}
          position={[5.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials["Material.015"]}
          position={[5.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Material.016"]}
          position={[1.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials["Material.017"]}
          position={[-2.5, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Material.018"]}
          position={[-6.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials["Material.019"]}
          position={[-10.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["Material.020"]}
          position={[-15.1, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials["Material.021"]}
          position={[-10.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials["Material.022"]}
          position={[-10.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials["Material.023"]}
          position={[-6.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials["Material.024"]}
          position={[-2.5, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials["Material.025"]}
          position={[1.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[-4.2, 1.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[6.68, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[-14.32, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[-4.2, 7.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-4.2, 4.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-4.2, 7.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[-16.7, 1.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-16.7, 4.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[-16.7, 7.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["Material.026"]}
          position={[-16.85, 1.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["Material.027"]}
          position={[16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials["Material.028"]}
          position={[-16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials["Material.029"]}
          position={[-15.1, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials["Material.030"]}
          position={[-15.1, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials["Material.031"]}
          position={[-15.1, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials["Material.032"]}
          position={[-15.1, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials["Material.033"]}
          position={[-10.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials["Material.034"]}
          position={[-10.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials["Material.035"]}
          position={[-6.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials["Material.036"]}
          position={[-2.5, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={materials["Material.037"]}
          position={[1.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={materials["Material.038"]}
          position={[5.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039.geometry}
          material={materials["Material.039"]}
          position={[5.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040.geometry}
          material={materials["Material.040"]}
          position={[1.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041.geometry}
          material={materials["Material.041"]}
          position={[-2.5, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials["Material.042"]}
          position={[-6.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials["Material.043"]}
          position={[-6.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials["Material.044"]}
          position={[-2.5, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials["Material.045"]}
          position={[1.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials["Material.046"]}
          position={[5.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials["Material.047"]}
          position={[-15.1, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials["Material.048"]}
          position={[-15.1, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials["Material.049"]}
          position={[-15.1, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials["Material.050"]}
          position={[-10.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials["Material.051"]}
          position={[-6.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials["Material.052"]}
          position={[-2.5, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials["Material.053"]}
          position={[1.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane054.geometry}
          material={materials["Material.054"]}
          position={[5.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials["Material.055"]}
          position={[-10.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials["Material.056"]}
          position={[-6.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane057.geometry}
          material={materials["Material.057"]}
          position={[-2.5, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058.geometry}
          material={materials["Material.058"]}
          position={[1.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059.geometry}
          material={materials["Material.059"]}
          position={[5.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane060.geometry}
          material={materials["Material.060"]}
          position={[5.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane061.geometry}
          material={materials["Material.061"]}
          position={[1.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane062.geometry}
          material={materials["Material.062"]}
          position={[-2.5, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials["Material.063"]}
          position={[-6.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane064.geometry}
          material={materials["Material.064"]}
          position={[-10.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065.geometry}
          material={materials["Material.065"]}
          position={[5.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066.geometry}
          material={materials["Material.066"]}
          position={[1.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067.geometry}
          material={materials["Material.067"]}
          position={[-2.5, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane068.geometry}
          material={materials["Material.068"]}
          position={[-6.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane069.geometry}
          material={materials["Material.069"]}
          position={[-10.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070.geometry}
          material={materials["Material.070"]}
          position={[-15.1, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071.geometry}
          material={materials["Material.071"]}
          position={[5.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072.geometry}
          material={materials["Material.072"]}
          position={[1.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073.geometry}
          material={materials["Material.073"]}
          position={[-2.5, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane074.geometry}
          material={materials["Material.074"]}
          position={[-6.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane075.geometry}
          material={materials["Material.075"]}
          position={[-10.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane076.geometry}
          material={materials["Material.076"]}
          position={[-15.1, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane077.geometry}
          material={materials["Material.077"]}
          position={[5.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane078.geometry}
          material={materials["Material.078"]}
          position={[1.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane079.geometry}
          material={materials["Material.079"]}
          position={[-2.5, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane080.geometry}
          material={materials["Material.080"]}
          position={[-6.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081.geometry}
          material={materials["Material.081"]}
          position={[-10.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082.geometry}
          material={materials["Material.082"]}
          position={[-15.1, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083.geometry}
          material={materials["Material.083"]}
          position={[-15.1, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084.geometry}
          material={materials["Material.084"]}
          position={[-10.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085.geometry}
          material={materials["Material.085"]}
          position={[-6.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086.geometry}
          material={materials["Material.086"]}
          position={[-2.5, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087.geometry}
          material={materials["Material.087"]}
          position={[1.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088.geometry}
          material={materials["Material.088"]}
          position={[5.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089.geometry}
          material={materials["Material.089"]}
          position={[5.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090.geometry}
          material={materials["Material.090"]}
          position={[1.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091.geometry}
          material={materials["Material.091"]}
          position={[-2.5, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092.geometry}
          material={materials["Material.092"]}
          position={[-6.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093.geometry}
          material={materials["Material.093"]}
          position={[-10.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094.geometry}
          material={materials["Material.094"]}
          position={[-15.1, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095.geometry}
          material={materials["Material.095"]}
          position={[5.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096.geometry}
          material={materials["Material.096"]}
          position={[1.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097.geometry}
          material={materials["Material.097"]}
          position={[-2.5, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098.geometry}
          material={materials["Material.098"]}
          position={[-6.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099.geometry}
          material={materials["Material.099"]}
          position={[-10.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100.geometry}
          material={materials["Material.100"]}
          position={[-15.1, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[12.6, 1.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[12.6, 4.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[12.6, 7.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[12.6, 1.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[12.6, 4.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[12.6, 7.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[16.7, 7.5, 0]}
          scale={[0.1, 4.5, 7.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104.geometry}
          material={materials["Material.101"]}
          position={[-16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105.geometry}
          material={materials["Material.102"]}
          position={[3.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106.geometry}
          material={materials["Material.103"]}
          position={[16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[-4.2, 5.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[-4.2, 8.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[0, 12, 0]}
          scale={[16.8, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[12.6, 8.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[14.55, 8.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[10.45, 6, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={nodes.Cube029.material}
          position={[10.45, 6.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={nodes.Cube030.material}
          position={[10.45, 6.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={nodes.Cube031.material}
          position={[10.45, 6.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={nodes.Cube032.material}
          position={[12.5, 7.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={nodes.Cube033.material}
          position={[14.55, 7.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={nodes.Cube034.material}
          position={[14.55, 7.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={nodes.Cube035.material}
          position={[14.55, 8.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={nodes.Cube036.material}
          position={[14.55, 8.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={nodes.Cube037.material}
          position={[10.45, 7.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={nodes.Cube038.material}
          position={[-4.2, 2.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={nodes.Cube039.material}
          position={[10.45, 0, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={nodes.Cube040.material}
          position={[10.45, 0.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={nodes.Cube041.material}
          position={[10.45, 0.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={nodes.Cube042.material}
          position={[10.45, 0.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={nodes.Cube043.material}
          position={[10.45, 1.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={nodes.Cube044.material}
          position={[12.5, 1.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={nodes.Cube045.material}
          position={[14.55, 1.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={nodes.Cube046.material}
          position={[14.55, 1.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={nodes.Cube047.material}
          position={[14.55, 2.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={nodes.Cube048.material}
          position={[14.55, 2.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={nodes.Cube049.material}
          position={[14.55, 2.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={nodes.Cube050.material}
          position={[12.6, 2.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={nodes.Cube051.material}
          position={[10.45, 3, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={nodes.Cube052.material}
          position={[10.45, 3.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={nodes.Cube053.material}
          position={[10.45, 3.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={nodes.Cube054.material}
          position={[10.45, 3.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={nodes.Cube055.material}
          position={[10.45, 4.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={nodes.Cube056.material}
          position={[12.5, 4.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={nodes.Cube057.material}
          position={[14.55, 4.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={nodes.Cube058.material}
          position={[14.55, 4.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={nodes.Cube059.material}
          position={[14.55, 5.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={nodes.Cube060.material}
          position={[14.55, 5.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={nodes.Cube061.material}
          position={[14.55, 5.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={nodes.Cube062.material}
          position={[12.6, 5.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101.geometry}
          material={materials["Material.104"]}
          position={[16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102.geometry}
          material={materials["Material.105"]}
          position={[-13.6, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103.geometry}
          material={materials["Material.106"]}
          position={[3.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107.geometry}
          material={materials["Material.107"]}
          position={[3.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108.geometry}
          material={materials["Material.108"]}
          position={[7.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109.geometry}
          material={materials["Material.109"]}
          position={[-1, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110.geometry}
          material={materials["Material.110"]}
          position={[-5.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111.geometry}
          material={materials["Material.111"]}
          position={[-9.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112.geometry}
          material={materials["Material.112"]}
          position={[3.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113.geometry}
          material={materials["Material.113"]}
          position={[-13.6, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114.geometry}
          material={materials["Material.114"]}
          position={[7.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115.geometry}
          material={materials["Material.115"]}
          position={[7.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116.geometry}
          material={materials["Material.116"]}
          position={[-1, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117.geometry}
          material={materials["Material.117"]}
          position={[-1, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118.geometry}
          material={materials["Material.118"]}
          position={[-1, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119.geometry}
          material={materials["Material.119"]}
          position={[-5.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120.geometry}
          material={materials["Material.120"]}
          position={[-5.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121.geometry}
          material={materials["Material.121"]}
          position={[-5.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122.geometry}
          material={materials["Material.122"]}
          position={[-9.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123.geometry}
          material={materials["Material.123"]}
          position={[-9.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124.geometry}
          material={materials["Material.124"]}
          position={[-9.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125.geometry}
          material={materials["Material.125"]}
          position={[-13.6, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126.geometry}
          material={materials["Material.126"]}
          position={[-13.6, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127.geometry}
          material={materials["Material.127"]}
          position={[-13.6, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128.geometry}
          material={materials["Material.128"]}
          position={[7.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129.geometry}
          material={materials["Material.129"]}
          position={[7.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130.geometry}
          material={materials["Material.130"]}
          position={[3.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131.geometry}
          material={materials["Material.131"]}
          position={[-1, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132.geometry}
          material={materials["Material.132"]}
          position={[-5.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133.geometry}
          material={materials["Material.133"]}
          position={[-9.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134.geometry}
          material={materials["Material.134"]}
          position={[7.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135.geometry}
          material={materials["Material.135"]}
          position={[7.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136.geometry}
          material={materials["Material.136"]}
          position={[7.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137.geometry}
          material={materials["Material.137"]}
          position={[3.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138.geometry}
          material={materials["Material.138"]}
          position={[3.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139.geometry}
          material={materials["Material.139"]}
          position={[3.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={materials["Material.140"]}
          position={[-1, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141.geometry}
          material={materials["Material.141"]}
          position={[-1, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142.geometry}
          material={materials["Material.142"]}
          position={[-1, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143.geometry}
          material={materials["Material.143"]}
          position={[-5.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144.geometry}
          material={materials["Material.144"]}
          position={[-5.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145.geometry}
          material={materials["Material.145"]}
          position={[-5.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146.geometry}
          material={materials["Material.146"]}
          position={[-9.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147.geometry}
          material={materials["Material.147"]}
          position={[-9.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148.geometry}
          material={materials["Material.148"]}
          position={[-9.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149.geometry}
          material={materials["Material.149"]}
          position={[-13.6, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150.geometry}
          material={materials["Material.150"]}
          position={[-13.6, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151.geometry}
          material={materials["Material.151"]}
          position={[-13.6, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[8.24, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-14.32, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[5.12, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[6.68, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[2.48, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={nodes.Cube063.material}
          position={[-4.2, 1.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[-1.72, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-5.92, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[-10.12, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[6.68, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={nodes.Cylinder009.material}
          position={[6.68, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={nodes.Cylinder010.material}
          position={[6.68, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[2.48, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={nodes.Cylinder012.material}
          position={[2.48, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
          position={[2.48, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={nodes.Cylinder014.material}
          position={[-1.72, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={nodes.Cylinder015.material}
          position={[-1.72, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={nodes.Cylinder016.material}
          position={[-1.72, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={nodes.Cylinder017.material}
          position={[-5.92, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={nodes.Cylinder018.material}
          position={[-5.92, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={nodes.Cylinder019.material}
          position={[-5.92, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={nodes.Cylinder020.material}
          position={[-10.12, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={nodes.Cube064.material}
          position={[-4.2, 4.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={nodes.Cylinder021.material}
          position={[-10.12, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={nodes.Cylinder022.material}
          position={[-10.12, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={nodes.Cylinder023.material}
          position={[6.68, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={nodes.Cylinder024.material}
          position={[-14.32, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={nodes.Cylinder025.material}
          position={[-14.32, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={nodes.Cylinder026.material}
          position={[8.24, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={nodes.Cylinder027.material}
          position={[8.24, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={nodes.Cylinder028.material}
          position={[8.24, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={nodes.Cylinder029.material}
          position={[-15.88, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={nodes.Cylinder030.material}
          position={[5.12, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={nodes.Cylinder031.material}
          position={[5.12, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={nodes.Cylinder032.material}
          position={[8.24, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033.geometry}
          material={nodes.Cylinder033.material}
          position={[4.04, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={nodes.Cylinder034.material}
          position={[-0.16, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={nodes.Cylinder035.material}
          position={[-4.36, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={nodes.Cylinder036.material}
          position={[-8.56, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={nodes.Cylinder037.material}
          position={[5.12, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={nodes.Cylinder038.material}
          position={[0.92, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={nodes.Cylinder039.material}
          position={[-3.28, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040.geometry}
          material={nodes.Cylinder040.material}
          position={[-7.48, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={nodes.Cylinder041.material}
          position={[-11.68, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={nodes.Cylinder042.material}
          position={[4.04, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={nodes.Cylinder043.material}
          position={[4.04, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={nodes.Cylinder044.material}
          position={[4.04, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045.geometry}
          material={nodes.Cylinder045.material}
          position={[0.92, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={nodes.Cylinder046.material}
          position={[0.92, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={nodes.Cylinder047.material}
          position={[0.92, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048.geometry}
          material={nodes.Cylinder048.material}
          position={[-3.28, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049.geometry}
          material={nodes.Cylinder049.material}
          position={[-3.28, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050.geometry}
          material={nodes.Cylinder050.material}
          position={[-3.28, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051.geometry}
          material={nodes.Cylinder051.material}
          position={[-7.48, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={nodes.Cylinder052.material}
          position={[-7.48, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053.geometry}
          material={nodes.Cylinder053.material}
          position={[-7.48, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={nodes.Cylinder054.material}
          position={[-11.68, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055.geometry}
          material={nodes.Cylinder055.material}
          position={[-11.68, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056.geometry}
          material={nodes.Cylinder056.material}
          position={[-11.68, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057.geometry}
          material={nodes.Cylinder057.material}
          position={[5.12, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058.geometry}
          material={nodes.Cylinder058.material}
          position={[-15.88, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059.geometry}
          material={nodes.Cylinder059.material}
          position={[-15.88, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={nodes.Cylinder060.material}
          position={[-14.32, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061.geometry}
          material={nodes.Cylinder061.material}
          position={[-15.88, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062.geometry}
          material={nodes.Cylinder062.material}
          position={[-12.76, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063.geometry}
          material={nodes.Cylinder063.material}
          position={[-14.32, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={nodes.Cylinder064.material}
          position={[-10.12, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={nodes.Cylinder065.material}
          position={[-5.92, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={nodes.Cylinder066.material}
          position={[-1.72, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067.geometry}
          material={nodes.Cylinder067.material}
          position={[2.48, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068.geometry}
          material={nodes.Cylinder068.material}
          position={[-15.88, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069.geometry}
          material={nodes.Cylinder069.material}
          position={[-11.68, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070.geometry}
          material={nodes.Cylinder070.material}
          position={[-7.48, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={nodes.Cylinder071.material}
          position={[-3.28, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072.geometry}
          material={nodes.Cylinder072.material}
          position={[0.92, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073.geometry}
          material={nodes.Cylinder073.material}
          position={[-12.76, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074.geometry}
          material={nodes.Cylinder074.material}
          position={[-8.56, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075.geometry}
          material={nodes.Cylinder075.material}
          position={[-4.36, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={nodes.Cylinder076.material}
          position={[-0.16, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077.geometry}
          material={nodes.Cylinder077.material}
          position={[4.04, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078.geometry}
          material={nodes.Cylinder078.material}
          position={[-14.32, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079.geometry}
          material={nodes.Cylinder079.material}
          position={[-14.32, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080.geometry}
          material={nodes.Cylinder080.material}
          position={[-14.32, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081.geometry}
          material={nodes.Cylinder081.material}
          position={[-10.12, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082.geometry}
          material={nodes.Cylinder082.material}
          position={[-10.12, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083.geometry}
          material={nodes.Cylinder083.material}
          position={[-10.12, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084.geometry}
          material={nodes.Cylinder084.material}
          position={[-5.92, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085.geometry}
          material={nodes.Cylinder085.material}
          position={[-5.92, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086.geometry}
          material={nodes.Cylinder086.material}
          position={[-5.92, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087.geometry}
          material={nodes.Cylinder087.material}
          position={[-1.72, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088.geometry}
          material={nodes.Cylinder088.material}
          position={[-1.72, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089.geometry}
          material={nodes.Cylinder089.material}
          position={[-1.72, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090.geometry}
          material={nodes.Cylinder090.material}
          position={[2.48, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091.geometry}
          material={nodes.Cylinder091.material}
          position={[2.48, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092.geometry}
          material={nodes.Cylinder092.material}
          position={[2.48, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093.geometry}
          material={nodes.Cylinder093.material}
          position={[6.68, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094.geometry}
          material={nodes.Cylinder094.material}
          position={[6.68, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095.geometry}
          material={nodes.Cylinder095.material}
          position={[6.68, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096.geometry}
          material={nodes.Cylinder096.material}
          position={[-15.88, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder097.geometry}
          material={nodes.Cylinder097.material}
          position={[-15.88, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098.geometry}
          material={nodes.Cylinder098.material}
          position={[-15.88, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099.geometry}
          material={nodes.Cylinder099.material}
          position={[-11.68, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100.geometry}
          material={nodes.Cylinder100.material}
          position={[-11.68, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={nodes.Cylinder101.material}
          position={[-11.68, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder102.geometry}
          material={nodes.Cylinder102.material}
          position={[-7.48, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103.geometry}
          material={nodes.Cylinder103.material}
          position={[-7.48, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104.geometry}
          material={nodes.Cylinder104.material}
          position={[-7.48, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105.geometry}
          material={nodes.Cylinder105.material}
          position={[-3.28, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106.geometry}
          material={nodes.Cylinder106.material}
          position={[-3.28, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107.geometry}
          material={nodes.Cylinder107.material}
          position={[-3.28, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108.geometry}
          material={nodes.Cylinder108.material}
          position={[0.92, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder109.geometry}
          material={nodes.Cylinder109.material}
          position={[0.92, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110.geometry}
          material={nodes.Cylinder110.material}
          position={[0.92, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111.geometry}
          material={nodes.Cylinder111.material}
          position={[5.12, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112.geometry}
          material={nodes.Cylinder112.material}
          position={[5.12, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113.geometry}
          material={nodes.Cylinder113.material}
          position={[5.12, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114.geometry}
          material={nodes.Cylinder114.material}
          position={[-12.76, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115.geometry}
          material={nodes.Cylinder115.material}
          position={[-12.76, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116.geometry}
          material={nodes.Cylinder116.material}
          position={[-12.76, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117.geometry}
          material={nodes.Cylinder117.material}
          position={[-8.56, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118.geometry}
          material={nodes.Cylinder118.material}
          position={[-8.56, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119.geometry}
          material={nodes.Cylinder119.material}
          position={[-8.56, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120.geometry}
          material={nodes.Cylinder120.material}
          position={[-4.36, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121.geometry}
          material={nodes.Cylinder121.material}
          position={[-4.36, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122.geometry}
          material={nodes.Cylinder122.material}
          position={[-4.36, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123.geometry}
          material={nodes.Cylinder123.material}
          position={[-0.16, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder124.geometry}
          material={nodes.Cylinder124.material}
          position={[-0.16, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder125.geometry}
          material={nodes.Cylinder125.material}
          position={[-0.16, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder126.geometry}
          material={nodes.Cylinder126.material}
          position={[4.04, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127.geometry}
          material={nodes.Cylinder127.material}
          position={[4.04, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder128.geometry}
          material={nodes.Cylinder128.material}
          position={[4.04, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder129.geometry}
          material={nodes.Cylinder129.material}
          position={[8.24, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder130.geometry}
          material={nodes.Cylinder130.material}
          position={[8.24, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder131.geometry}
          material={nodes.Cylinder131.material}
          position={[8.24, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={nodes.Cube065.material}
          position={[6.68, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={nodes.Cube066.material}
          position={[-1.72, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={nodes.Cube067.material}
          position={[-1.72, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={nodes.Cube068.material}
          position={[-5.92, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={nodes.Cube069.material}
          position={[-10.12, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={nodes.Cube070.material}
          position={[6.68, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={nodes.Cube071.material}
          position={[6.68, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={nodes.Cube072.material}
          position={[2.48, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={nodes.Cube073.material}
          position={[2.48, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={nodes.Cube074.material}
          position={[2.48, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={nodes.Cube075.material}
          position={[-1.72, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={nodes.Cube076.material}
          position={[-5.92, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={nodes.Cube077.material}
          position={[-5.92, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={nodes.Cube078.material}
          position={[-10.12, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={nodes.Cube079.material}
          position={[-10.12, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={nodes.Cube080.material}
          position={[-14.32, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={nodes.Cube081.material}
          position={[-14.32, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={nodes.Cube082.material}
          position={[-14.32, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={nodes.Cube083.material}
          position={[-14.32, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube084.geometry}
          material={nodes.Cube084.material}
          position={[-14.32, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={nodes.Cube085.material}
          position={[-10.12, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={nodes.Cube086.material}
          position={[-5.92, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={nodes.Cube087.material}
          position={[-1.72, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube088.geometry}
          material={nodes.Cube088.material}
          position={[2.48, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089.geometry}
          material={nodes.Cube089.material}
          position={[6.68, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090.geometry}
          material={nodes.Cube090.material}
          position={[2.48, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={nodes.Cube091.material}
          position={[6.68, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={nodes.Cube092.material}
          position={[2.48, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={nodes.Cube093.material}
          position={[-1.72, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={nodes.Cube094.material}
          position={[-1.72, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={nodes.Cube095.material}
          position={[-5.92, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={nodes.Cube096.material}
          position={[-5.92, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={nodes.Cube097.material}
          position={[-10.12, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube098.geometry}
          material={nodes.Cube098.material}
          position={[-10.12, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
        </RigidBody>
    </group>

    <group {...props} dispose={null} scale={[6,6,6]} position={[290,0,0]} rotation={[0, Math.PI, 0]}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-4.2, 10.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-4.2, 10.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-16.7, 10.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[12.6, 10.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[12.6, 10.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[16.7, 1.5, -4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[16.7, 1.5, 4.7]}
          scale={[0.1, 1.5, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[-16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
          position={[-15.1, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.003"]}
          position={[-15.1, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.004"]}
          position={[-10.9, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.005"]}
          position={[-6.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.006"]}
          position={[-2.5, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.007"]}
          position={[1.7, 4, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.008"]}
          position={[5.9, 4, -1.44]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.009"]}
          position={[5.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.010"]}
          position={[1.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["Material.011"]}
          position={[-2.5, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Material.012"]}
          position={[-6.7, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials["Material.013"]}
          position={[-10.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials["Material.014"]}
          position={[5.9, 4, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials["Material.015"]}
          position={[5.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Material.016"]}
          position={[1.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials["Material.017"]}
          position={[-2.5, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Material.018"]}
          position={[-6.7, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials["Material.019"]}
          position={[-10.9, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["Material.020"]}
          position={[-15.1, 10, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials["Material.021"]}
          position={[-10.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials["Material.022"]}
          position={[-10.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials["Material.023"]}
          position={[-6.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials["Material.024"]}
          position={[-2.5, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials["Material.025"]}
          position={[1.7, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[-4.2, 1.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[6.68, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[-14.32, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[-4.2, 7.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-4.2, 4.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-4.2, 7.5, 4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[-16.7, 1.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-16.7, 4.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[-16.7, 7.5, 0]}
          scale={[0.1, 1.5, 1.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["Material.026"]}
          position={[-16.85, 1.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["Material.027"]}
          position={[16.85, 10.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials["Material.028"]}
          position={[-16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials["Material.029"]}
          position={[-15.1, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials["Material.030"]}
          position={[-15.1, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials["Material.031"]}
          position={[-15.1, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials["Material.032"]}
          position={[-15.1, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials["Material.033"]}
          position={[-10.9, 10, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034.geometry}
          material={materials["Material.034"]}
          position={[-10.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035.geometry}
          material={materials["Material.035"]}
          position={[-6.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036.geometry}
          material={materials["Material.036"]}
          position={[-2.5, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={materials["Material.037"]}
          position={[1.7, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={materials["Material.038"]}
          position={[5.9, 1, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039.geometry}
          material={materials["Material.039"]}
          position={[5.9, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040.geometry}
          material={materials["Material.040"]}
          position={[1.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041.geometry}
          material={materials["Material.041"]}
          position={[-2.5, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042.geometry}
          material={materials["Material.042"]}
          position={[-6.7, 4, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043.geometry}
          material={materials["Material.043"]}
          position={[-6.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials["Material.044"]}
          position={[-2.5, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045.geometry}
          material={materials["Material.045"]}
          position={[1.7, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={materials["Material.046"]}
          position={[5.9, 7, -7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials["Material.047"]}
          position={[-15.1, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={materials["Material.048"]}
          position={[-15.1, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials["Material.049"]}
          position={[-15.1, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials["Material.050"]}
          position={[-10.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051.geometry}
          material={materials["Material.051"]}
          position={[-6.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052.geometry}
          material={materials["Material.052"]}
          position={[-2.5, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane053.geometry}
          material={materials["Material.053"]}
          position={[1.7, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane054.geometry}
          material={materials["Material.054"]}
          position={[5.9, 1, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials["Material.055"]}
          position={[-10.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials["Material.056"]}
          position={[-6.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane057.geometry}
          material={materials["Material.057"]}
          position={[-2.5, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058.geometry}
          material={materials["Material.058"]}
          position={[1.7, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059.geometry}
          material={materials["Material.059"]}
          position={[5.9, 4, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane060.geometry}
          material={materials["Material.060"]}
          position={[5.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane061.geometry}
          material={materials["Material.061"]}
          position={[1.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane062.geometry}
          material={materials["Material.062"]}
          position={[-2.5, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials["Material.063"]}
          position={[-6.7, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane064.geometry}
          material={materials["Material.064"]}
          position={[-10.9, 7, 7.95]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065.geometry}
          material={materials["Material.065"]}
          position={[5.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066.geometry}
          material={materials["Material.066"]}
          position={[1.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067.geometry}
          material={materials["Material.067"]}
          position={[-2.5, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane068.geometry}
          material={materials["Material.068"]}
          position={[-6.7, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane069.geometry}
          material={materials["Material.069"]}
          position={[-10.9, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070.geometry}
          material={materials["Material.070"]}
          position={[-15.1, 7, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071.geometry}
          material={materials["Material.071"]}
          position={[5.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072.geometry}
          material={materials["Material.072"]}
          position={[1.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073.geometry}
          material={materials["Material.073"]}
          position={[-2.5, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane074.geometry}
          material={materials["Material.074"]}
          position={[-6.7, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane075.geometry}
          material={materials["Material.075"]}
          position={[-10.9, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane076.geometry}
          material={materials["Material.076"]}
          position={[-15.1, 10, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane077.geometry}
          material={materials["Material.077"]}
          position={[5.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane078.geometry}
          material={materials["Material.078"]}
          position={[1.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane079.geometry}
          material={materials["Material.079"]}
          position={[-2.5, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane080.geometry}
          material={materials["Material.080"]}
          position={[-6.7, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081.geometry}
          material={materials["Material.081"]}
          position={[-10.9, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082.geometry}
          material={materials["Material.082"]}
          position={[-15.1, 7, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083.geometry}
          material={materials["Material.083"]}
          position={[-15.1, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084.geometry}
          material={materials["Material.084"]}
          position={[-10.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085.geometry}
          material={materials["Material.085"]}
          position={[-6.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086.geometry}
          material={materials["Material.086"]}
          position={[-2.5, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087.geometry}
          material={materials["Material.087"]}
          position={[1.7, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088.geometry}
          material={materials["Material.088"]}
          position={[5.9, 10, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089.geometry}
          material={materials["Material.089"]}
          position={[5.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090.geometry}
          material={materials["Material.090"]}
          position={[1.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091.geometry}
          material={materials["Material.091"]}
          position={[-2.5, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092.geometry}
          material={materials["Material.092"]}
          position={[-6.7, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093.geometry}
          material={materials["Material.093"]}
          position={[-10.9, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094.geometry}
          material={materials["Material.094"]}
          position={[-15.1, 1, 1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095.geometry}
          material={materials["Material.095"]}
          position={[5.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096.geometry}
          material={materials["Material.096"]}
          position={[1.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097.geometry}
          material={materials["Material.097"]}
          position={[-2.5, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098.geometry}
          material={materials["Material.098"]}
          position={[-6.7, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099.geometry}
          material={materials["Material.099"]}
          position={[-10.9, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100.geometry}
          material={materials["Material.100"]}
          position={[-15.1, 1, -1.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[12.6, 1.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[12.6, 4.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[12.6, 7.5, 7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[12.6, 1.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[12.6, 4.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[12.6, 7.5, -7.8]}
          scale={[4.2, 1.5, 0.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[16.7, 7.5, 0]}
          scale={[0.1, 4.5, 7.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104.geometry}
          material={materials["Material.101"]}
          position={[-16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105.geometry}
          material={materials["Material.102"]}
          position={[3.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106.geometry}
          material={materials["Material.103"]}
          position={[16.85, 7.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[-4.2, 5.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[-4.2, 8.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[0, 12, 0]}
          scale={[16.8, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[12.6, 8.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[14.55, 8.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[10.45, 6, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={nodes.Cube029.material}
          position={[10.45, 6.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={nodes.Cube030.material}
          position={[10.45, 6.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={nodes.Cube031.material}
          position={[10.45, 6.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={nodes.Cube032.material}
          position={[12.5, 7.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={nodes.Cube033.material}
          position={[14.55, 7.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={nodes.Cube034.material}
          position={[14.55, 7.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={nodes.Cube035.material}
          position={[14.55, 8.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={nodes.Cube036.material}
          position={[14.55, 8.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={nodes.Cube037.material}
          position={[10.45, 7.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={nodes.Cube038.material}
          position={[-4.2, 2.95, 0]}
          scale={[12.6, 0.05, 7.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={nodes.Cube039.material}
          position={[10.45, 0, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={nodes.Cube040.material}
          position={[10.45, 0.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={nodes.Cube041.material}
          position={[10.45, 0.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={nodes.Cube042.material}
          position={[10.45, 0.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={nodes.Cube043.material}
          position={[10.45, 1.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={nodes.Cube044.material}
          position={[12.5, 1.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={nodes.Cube045.material}
          position={[14.55, 1.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={nodes.Cube046.material}
          position={[14.55, 1.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={nodes.Cube047.material}
          position={[14.55, 2.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={nodes.Cube048.material}
          position={[14.55, 2.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={nodes.Cube049.material}
          position={[14.55, 2.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={nodes.Cube050.material}
          position={[12.6, 2.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={nodes.Cube051.material}
          position={[10.45, 3, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={nodes.Cube052.material}
          position={[10.45, 3.3, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={nodes.Cube053.material}
          position={[10.45, 3.6, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={nodes.Cube054.material}
          position={[10.45, 3.9, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={nodes.Cube055.material}
          position={[10.45, 4.2, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={nodes.Cube056.material}
          position={[12.5, 4.425, -6.8]}
          scale={[4.1, 0.15, 1.1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={nodes.Cube057.material}
          position={[14.55, 4.65, -5.3]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={nodes.Cube058.material}
          position={[14.55, 4.95, -4.5]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={nodes.Cube059.material}
          position={[14.55, 5.25, -3.7]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={nodes.Cube060.material}
          position={[14.55, 5.55, -2.9]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={nodes.Cube061.material}
          position={[14.55, 5.85, -2.1]}
          scale={[2.05, 0.15, 0.4]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={nodes.Cube062.material}
          position={[12.6, 5.95, 3.1]}
          scale={[4.2, 0.05, 4.8]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101.geometry}
          material={materials["Material.104"]}
          position={[16.85, 4.5, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102.geometry}
          material={materials["Material.105"]}
          position={[-13.6, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103.geometry}
          material={materials["Material.106"]}
          position={[3.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107.geometry}
          material={materials["Material.107"]}
          position={[3.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108.geometry}
          material={materials["Material.108"]}
          position={[7.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109.geometry}
          material={materials["Material.109"]}
          position={[-1, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110.geometry}
          material={materials["Material.110"]}
          position={[-5.2, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111.geometry}
          material={materials["Material.111"]}
          position={[-9.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112.geometry}
          material={materials["Material.112"]}
          position={[3.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113.geometry}
          material={materials["Material.113"]}
          position={[-13.6, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114.geometry}
          material={materials["Material.114"]}
          position={[7.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115.geometry}
          material={materials["Material.115"]}
          position={[7.4, 10, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116.geometry}
          material={materials["Material.116"]}
          position={[-1, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117.geometry}
          material={materials["Material.117"]}
          position={[-1, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118.geometry}
          material={materials["Material.118"]}
          position={[-1, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119.geometry}
          material={materials["Material.119"]}
          position={[-5.2, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120.geometry}
          material={materials["Material.120"]}
          position={[-5.2, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121.geometry}
          material={materials["Material.121"]}
          position={[-5.2, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122.geometry}
          material={materials["Material.122"]}
          position={[-9.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123.geometry}
          material={materials["Material.123"]}
          position={[-9.4, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124.geometry}
          material={materials["Material.124"]}
          position={[-9.4, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125.geometry}
          material={materials["Material.125"]}
          position={[-13.6, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126.geometry}
          material={materials["Material.126"]}
          position={[-13.6, 4, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127.geometry}
          material={materials["Material.127"]}
          position={[-13.6, 7, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128.geometry}
          material={materials["Material.128"]}
          position={[7.4, 1, 7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129.geometry}
          material={materials["Material.129"]}
          position={[7.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130.geometry}
          material={materials["Material.130"]}
          position={[3.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131.geometry}
          material={materials["Material.131"]}
          position={[-1, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132.geometry}
          material={materials["Material.132"]}
          position={[-5.2, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133.geometry}
          material={materials["Material.133"]}
          position={[-9.4, 10, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134.geometry}
          material={materials["Material.134"]}
          position={[7.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135.geometry}
          material={materials["Material.135"]}
          position={[7.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136.geometry}
          material={materials["Material.136"]}
          position={[7.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137.geometry}
          material={materials["Material.137"]}
          position={[3.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138.geometry}
          material={materials["Material.138"]}
          position={[3.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139.geometry}
          material={materials["Material.139"]}
          position={[3.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={materials["Material.140"]}
          position={[-1, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141.geometry}
          material={materials["Material.141"]}
          position={[-1, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142.geometry}
          material={materials["Material.142"]}
          position={[-1, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143.geometry}
          material={materials["Material.143"]}
          position={[-5.2, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144.geometry}
          material={materials["Material.144"]}
          position={[-5.2, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145.geometry}
          material={materials["Material.145"]}
          position={[-5.2, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146.geometry}
          material={materials["Material.146"]}
          position={[-9.4, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147.geometry}
          material={materials["Material.147"]}
          position={[-9.4, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148.geometry}
          material={materials["Material.148"]}
          position={[-9.4, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149.geometry}
          material={materials["Material.149"]}
          position={[-13.6, 1, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150.geometry}
          material={materials["Material.150"]}
          position={[-13.6, 4, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151.geometry}
          material={materials["Material.151"]}
          position={[-13.6, 7, -7.95]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[8.24, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-14.32, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[5.12, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[6.68, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[2.48, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={nodes.Cube063.material}
          position={[-4.2, 1.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[-1.72, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-5.92, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[-10.12, 10, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[6.68, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={nodes.Cylinder009.material}
          position={[6.68, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={nodes.Cylinder010.material}
          position={[6.68, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[2.48, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={nodes.Cylinder012.material}
          position={[2.48, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
          position={[2.48, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={nodes.Cylinder014.material}
          position={[-1.72, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={nodes.Cylinder015.material}
          position={[-1.72, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={nodes.Cylinder016.material}
          position={[-1.72, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={nodes.Cylinder017.material}
          position={[-5.92, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={nodes.Cylinder018.material}
          position={[-5.92, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={nodes.Cylinder019.material}
          position={[-5.92, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={nodes.Cylinder020.material}
          position={[-10.12, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={nodes.Cube064.material}
          position={[-4.2, 4.5, -4.7]}
          scale={[12.6, 1.5, 3.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={nodes.Cylinder021.material}
          position={[-10.12, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={nodes.Cylinder022.material}
          position={[-10.12, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={nodes.Cylinder023.material}
          position={[6.68, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={nodes.Cylinder024.material}
          position={[-14.32, 4, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={nodes.Cylinder025.material}
          position={[-14.32, 7, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={nodes.Cylinder026.material}
          position={[8.24, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={nodes.Cylinder027.material}
          position={[8.24, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={nodes.Cylinder028.material}
          position={[8.24, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={nodes.Cylinder029.material}
          position={[-15.88, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={nodes.Cylinder030.material}
          position={[5.12, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={nodes.Cylinder031.material}
          position={[5.12, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={nodes.Cylinder032.material}
          position={[8.24, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033.geometry}
          material={nodes.Cylinder033.material}
          position={[4.04, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={nodes.Cylinder034.material}
          position={[-0.16, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={nodes.Cylinder035.material}
          position={[-4.36, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={nodes.Cylinder036.material}
          position={[-8.56, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={nodes.Cylinder037.material}
          position={[5.12, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={nodes.Cylinder038.material}
          position={[0.92, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={nodes.Cylinder039.material}
          position={[-3.28, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040.geometry}
          material={nodes.Cylinder040.material}
          position={[-7.48, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={nodes.Cylinder041.material}
          position={[-11.68, 10, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={nodes.Cylinder042.material}
          position={[4.04, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={nodes.Cylinder043.material}
          position={[4.04, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={nodes.Cylinder044.material}
          position={[4.04, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045.geometry}
          material={nodes.Cylinder045.material}
          position={[0.92, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={nodes.Cylinder046.material}
          position={[0.92, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={nodes.Cylinder047.material}
          position={[0.92, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048.geometry}
          material={nodes.Cylinder048.material}
          position={[-3.28, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049.geometry}
          material={nodes.Cylinder049.material}
          position={[-3.28, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050.geometry}
          material={nodes.Cylinder050.material}
          position={[-3.28, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051.geometry}
          material={nodes.Cylinder051.material}
          position={[-7.48, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={nodes.Cylinder052.material}
          position={[-7.48, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053.geometry}
          material={nodes.Cylinder053.material}
          position={[-7.48, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={nodes.Cylinder054.material}
          position={[-11.68, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055.geometry}
          material={nodes.Cylinder055.material}
          position={[-11.68, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056.geometry}
          material={nodes.Cylinder056.material}
          position={[-11.68, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057.geometry}
          material={nodes.Cylinder057.material}
          position={[5.12, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058.geometry}
          material={nodes.Cylinder058.material}
          position={[-15.88, 4, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059.geometry}
          material={nodes.Cylinder059.material}
          position={[-15.88, 7, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={nodes.Cylinder060.material}
          position={[-14.32, 1, -8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061.geometry}
          material={nodes.Cylinder061.material}
          position={[-15.88, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062.geometry}
          material={nodes.Cylinder062.material}
          position={[-12.76, 1, -8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063.geometry}
          material={nodes.Cylinder063.material}
          position={[-14.32, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={nodes.Cylinder064.material}
          position={[-10.12, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={nodes.Cylinder065.material}
          position={[-5.92, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={nodes.Cylinder066.material}
          position={[-1.72, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067.geometry}
          material={nodes.Cylinder067.material}
          position={[2.48, 10, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068.geometry}
          material={nodes.Cylinder068.material}
          position={[-15.88, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069.geometry}
          material={nodes.Cylinder069.material}
          position={[-11.68, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070.geometry}
          material={nodes.Cylinder070.material}
          position={[-7.48, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={nodes.Cylinder071.material}
          position={[-3.28, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072.geometry}
          material={nodes.Cylinder072.material}
          position={[0.92, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073.geometry}
          material={nodes.Cylinder073.material}
          position={[-12.76, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074.geometry}
          material={nodes.Cylinder074.material}
          position={[-8.56, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075.geometry}
          material={nodes.Cylinder075.material}
          position={[-4.36, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={nodes.Cylinder076.material}
          position={[-0.16, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077.geometry}
          material={nodes.Cylinder077.material}
          position={[4.04, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078.geometry}
          material={nodes.Cylinder078.material}
          position={[-14.32, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079.geometry}
          material={nodes.Cylinder079.material}
          position={[-14.32, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080.geometry}
          material={nodes.Cylinder080.material}
          position={[-14.32, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081.geometry}
          material={nodes.Cylinder081.material}
          position={[-10.12, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082.geometry}
          material={nodes.Cylinder082.material}
          position={[-10.12, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083.geometry}
          material={nodes.Cylinder083.material}
          position={[-10.12, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084.geometry}
          material={nodes.Cylinder084.material}
          position={[-5.92, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085.geometry}
          material={nodes.Cylinder085.material}
          position={[-5.92, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder086.geometry}
          material={nodes.Cylinder086.material}
          position={[-5.92, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087.geometry}
          material={nodes.Cylinder087.material}
          position={[-1.72, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088.geometry}
          material={nodes.Cylinder088.material}
          position={[-1.72, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder089.geometry}
          material={nodes.Cylinder089.material}
          position={[-1.72, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder090.geometry}
          material={nodes.Cylinder090.material}
          position={[2.48, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091.geometry}
          material={nodes.Cylinder091.material}
          position={[2.48, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092.geometry}
          material={nodes.Cylinder092.material}
          position={[2.48, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder093.geometry}
          material={nodes.Cylinder093.material}
          position={[6.68, 1, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094.geometry}
          material={nodes.Cylinder094.material}
          position={[6.68, 4, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095.geometry}
          material={nodes.Cylinder095.material}
          position={[6.68, 7, 8.38]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.015, 1.56, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096.geometry}
          material={nodes.Cylinder096.material}
          position={[-15.88, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder097.geometry}
          material={nodes.Cylinder097.material}
          position={[-15.88, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder098.geometry}
          material={nodes.Cylinder098.material}
          position={[-15.88, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099.geometry}
          material={nodes.Cylinder099.material}
          position={[-11.68, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100.geometry}
          material={nodes.Cylinder100.material}
          position={[-11.68, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={nodes.Cylinder101.material}
          position={[-11.68, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder102.geometry}
          material={nodes.Cylinder102.material}
          position={[-7.48, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103.geometry}
          material={nodes.Cylinder103.material}
          position={[-7.48, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104.geometry}
          material={nodes.Cylinder104.material}
          position={[-7.48, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105.geometry}
          material={nodes.Cylinder105.material}
          position={[-3.28, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106.geometry}
          material={nodes.Cylinder106.material}
          position={[-3.28, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107.geometry}
          material={nodes.Cylinder107.material}
          position={[-3.28, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108.geometry}
          material={nodes.Cylinder108.material}
          position={[0.92, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder109.geometry}
          material={nodes.Cylinder109.material}
          position={[0.92, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110.geometry}
          material={nodes.Cylinder110.material}
          position={[0.92, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111.geometry}
          material={nodes.Cylinder111.material}
          position={[5.12, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112.geometry}
          material={nodes.Cylinder112.material}
          position={[5.12, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113.geometry}
          material={nodes.Cylinder113.material}
          position={[5.12, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114.geometry}
          material={nodes.Cylinder114.material}
          position={[-12.76, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115.geometry}
          material={nodes.Cylinder115.material}
          position={[-12.76, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116.geometry}
          material={nodes.Cylinder116.material}
          position={[-12.76, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117.geometry}
          material={nodes.Cylinder117.material}
          position={[-8.56, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118.geometry}
          material={nodes.Cylinder118.material}
          position={[-8.56, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119.geometry}
          material={nodes.Cylinder119.material}
          position={[-8.56, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120.geometry}
          material={nodes.Cylinder120.material}
          position={[-4.36, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121.geometry}
          material={nodes.Cylinder121.material}
          position={[-4.36, 10, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122.geometry}
          material={nodes.Cylinder122.material}
          position={[-4.36, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123.geometry}
          material={nodes.Cylinder123.material}
          position={[-0.16, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder124.geometry}
          material={nodes.Cylinder124.material}
          position={[-0.16, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder125.geometry}
          material={nodes.Cylinder125.material}
          position={[-0.16, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder126.geometry}
          material={nodes.Cylinder126.material}
          position={[4.04, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127.geometry}
          material={nodes.Cylinder127.material}
          position={[4.04, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder128.geometry}
          material={nodes.Cylinder128.material}
          position={[4.04, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder129.geometry}
          material={nodes.Cylinder129.material}
          position={[8.24, 1, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder130.geometry}
          material={nodes.Cylinder130.material}
          position={[8.24, 4, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder131.geometry}
          material={nodes.Cylinder131.material}
          position={[8.24, 7, 8.14]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.015, 0.24, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={nodes.Cube065.material}
          position={[6.68, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={nodes.Cube066.material}
          position={[-1.72, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={nodes.Cube067.material}
          position={[-1.72, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={nodes.Cube068.material}
          position={[-5.92, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={nodes.Cube069.material}
          position={[-10.12, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={nodes.Cube070.material}
          position={[6.68, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={nodes.Cube071.material}
          position={[6.68, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={nodes.Cube072.material}
          position={[2.48, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={nodes.Cube073.material}
          position={[2.48, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={nodes.Cube074.material}
          position={[2.48, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={nodes.Cube075.material}
          position={[-1.72, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={nodes.Cube076.material}
          position={[-5.92, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={nodes.Cube077.material}
          position={[-5.92, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={nodes.Cube078.material}
          position={[-10.12, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={nodes.Cube079.material}
          position={[-10.12, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={nodes.Cube080.material}
          position={[-14.32, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={nodes.Cube081.material}
          position={[-14.32, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={nodes.Cube082.material}
          position={[-14.32, 8.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={nodes.Cube083.material}
          position={[-14.32, 5.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube084.geometry}
          material={nodes.Cube084.material}
          position={[-14.32, 2.975, 8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={nodes.Cube085.material}
          position={[-10.12, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={nodes.Cube086.material}
          position={[-5.92, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={nodes.Cube087.material}
          position={[-1.72, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube088.geometry}
          material={nodes.Cube088.material}
          position={[2.48, 8.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089.geometry}
          material={nodes.Cube089.material}
          position={[6.68, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090.geometry}
          material={nodes.Cube090.material}
          position={[2.48, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={nodes.Cube091.material}
          position={[6.68, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={nodes.Cube092.material}
          position={[2.48, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={nodes.Cube093.material}
          position={[-1.72, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={nodes.Cube094.material}
          position={[-1.72, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={nodes.Cube095.material}
          position={[-5.92, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={nodes.Cube096.material}
          position={[-5.92, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={nodes.Cube097.material}
          position={[-10.12, 2.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube098.geometry}
          material={nodes.Cube098.material}
          position={[-10.12, 5.975, -8.2]}
          scale={[1.62, 0.025, 0.3]}
        />
        </RigidBody>
    </group>
    </>
  );
}

useGLTF.preload("/assets/Hostel_A.glb");