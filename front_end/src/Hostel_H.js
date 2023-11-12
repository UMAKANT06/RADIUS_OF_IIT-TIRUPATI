import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Hostel_H(props) {
  const { nodes, materials } = useGLTF("/assets/hostel_H.glb");
  return (
    <group {...props} dispose={null} position={[405, 0.1, -471]} scale={[6, 6, 6]} rotation={[0, -Math.PI / 2, 0]}>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-39.1, 6, -33]}
          scale={[6.9, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-35.4, 6, -2.8]}
          scale={[8.6, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[28.5, 6, -40.2]}
          scale={[17.1, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[2.4, 6, -3.1]}
          scale={[2, 6, 2.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[53.8, 6, -40.2]}
          scale={[5.2, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[52.1, 6, -33]}
          scale={[6.9, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[-40.8, 6, -40.2]}
          scale={[8.6, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[-10.4, 6, -40.2]}
          scale={[18.8, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[28.9, 6, -33]}
          scale={[10.3, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[9.8, 6, -31.1]}
          scale={[2.8, 6, 4.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[9.6, 6, -14]}
          scale={[2.6, 6, 8.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[27.2, 6, -2.8]}
          scale={[12, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-12.1, 6, -33]}
          scale={[17.1, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[47.4, 6, 2.5]}
          scale={[2.8, 6, 4.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[-56.2, 6, 38.3]}
          scale={[2.8, 6, 4.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[4.6, 6, 38.3]}
          scale={[2.8, 6, 4.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[-13.5, 6, -2.8]}
          scale={[10.3, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[-11.8, 6, 4.4]}
          scale={[12, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[-16.9, 6, 33]}
          scale={[10.3, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[-2.4, 6, 20.6]}
          scale={[2.6, 6, 8.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[-37.1, 6, 33]}
          scale={[6.9, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[-13.5, 6, 40.2]}
          scale={[13.7, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[-38.8, 6, 40.2]}
          scale={[8.6, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[-37.1, 6, 4.4]}
          scale={[10.3, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[-56.2, 6, -38.3]}
          scale={[2.8, 6, 4.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[-56.2, 6, 2.5]}
          scale={[2.8, 6, 4.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[28.9, 6, 4.4]}
          scale={[13.7, 6, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[2.4, 6, -17.5]}
          scale={[2.6, 6, 6.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[33, 1, -0.19]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.002"]}
          position={[38.4, 1, -0.19]}
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
          position={[54.8, 10, -37.59]}
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
          position={[19.4, 1, -0.19]}
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
          position={[24.8, 1, -0.19]}
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
          position={[26.2, 1, -0.19]}
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
          position={[31.6, 1, -0.19]}
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
          position={[18, 1, -0.19]}
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
          position={[38.4, 10, 1.77]}
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
          position={[-19.6, 1, 1.79]}
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
          position={[19.4, 1, 1.79]}
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
          position={[24.8, 1, 1.79]}
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
          position={[26.2, 1, 1.79]}
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
          position={[31.6, 1, 1.79]}
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
          position={[33, 1, 1.79]}
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
          position={[18, 1, 1.79]}
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
          position={[-0.6, 1, 1.79]}
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
          position={[-6, 1, -0.19]}
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
          position={[-6, 1, 1.79]}
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
          position={[-7.4, 1, 1.79]}
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
          position={[-12.8, 1, 1.79]}
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
          position={[-14.2, 1, 1.79]}
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
          position={[-44.6, 10, 1.77]}
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
          position={[-7.4, 1, -0.19]}
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
          position={[-19.6, 1, -0.19]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials["Material.026"]}
          position={[-12.8, 1, 37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["Material.027"]}
          position={[-14.2, 1, -0.19]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials["Material.028"]}
          position={[-12.8, 1, -0.19]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029.geometry}
          material={materials["Material.029"]}
          position={[-21, 1, 1.79]}
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
          position={[-43.2, 10, 1.77]}
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
          position={[-29.6, 1, 1.79]}
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
          position={[-31, 1, 1.79]}
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
          position={[-36.4, 1, 1.79]}
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
          position={[-37.8, 1, 1.79]}
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
          position={[-21, 1, -0.19]}
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
          position={[-43.2, 1, -0.19]}
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
          position={[-29.6, 1, -0.19]}
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
          position={[-31, 1, -0.19]}
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
          position={[-36.4, 1, -0.19]}
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
          position={[-37.8, 1, -0.19]}
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
          position={[-54.2, 10, 33.75]}
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
          position={[45.4, 10, -2.05]}
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
          position={[2.6, 10, 33.75]}
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
          position={[-14.2, 1, 37.59]}
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
          position={[-19.6, 1, 37.59]}
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
          position={[-21, 1, 37.59]}
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
          position={[-43.2, 10, 37.57]}
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
          position={[-7.4, 10, 37.59]}
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
          position={[-6, 1, 37.59]}
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
          position={[-43.2, 1, 35.61]}
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
          position={[-31, 1, 37.59]}
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
          position={[-44.6, 10, 37.57]}
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
          position={[-36.4, 1, 37.59]}
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
          position={[-37.8, 1, 37.59]}
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
          position={[-26.4, 1, 37.59]}
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
          position={[-7.4, 1, 35.61]}
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
          position={[-31, 1, 35.61]}
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
          position={[-37.8, 1, 35.61]}
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
          position={[-36.4, 1, 35.61]}
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
          position={[-26.4, 1, 35.61]}
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
          position={[-12.8, 1, 35.61]}
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
          position={[-21, 1, 35.61]}
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
          position={[-19.6, 1, 35.61]}
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
          position={[-14.2, 1, 35.61]}
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
          position={[-54.2, 10, -33.75]}
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
          position={[-54.2, 10, -2.05]}
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
          position={[39.8, 10, 1.77]}
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
          position={[25.8, 1, -37.59]}
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
          position={[-43.7, 1, -35.61]}
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
          position={[56.2, 10, -37.59]}
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
          position={[49.4, 10, -35.61]}
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
          position={[56.2, 10, -35.61]}
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
          position={[54.8, 10, -35.61]}
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
          position={[49.4, 10, -37.59]}
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
          position={[38, 10, -37.57]}
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
          position={[-25, 1, -37.59]}
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
          position={[48, 10, -35.61]}
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
          position={[22.8, 1, -35.61]}
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
          position={[36.4, 1, -35.61]}
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
          position={[35, 1, -35.61]}
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
          position={[39.4, 10, -37.57]}
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
          position={[29.6, 1, -35.61]}
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
          position={[28.2, 1, -35.61]}
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
          position={[44.8, 7, -37.59]}
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
          position={[32.6, 1, -37.59]}
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
          position={[31.2, 1, -37.59]}
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
          position={[24.4, 1, -37.59]}
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
          position={[21, 1, -37.59]}
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
          position={[15.6, 1, -37.59]}
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
          position={[12.2, 1, -37.59]}
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
          position={[-46.6, 10, -37.57]}
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
          position={[7.6, 1, -37.59]}
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
          position={[2.2, 1, -37.59]}
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
          position={[0.8, 1, -37.59]}
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
          position={[-4.6, 1, -37.59]}
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
          position={[-6, 1, -37.59]}
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
          position={[-11.4, 1, -37.59]}
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
          position={[-12.8, 1, -37.59]}
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
          position={[-18.2, 1, -37.59]}
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
          position={[-19.6, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101.geometry}
          material={materials["Material.101"]}
          position={[-26.4, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102.geometry}
          material={materials["Material.102"]}
          position={[-45.2, 10, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103.geometry}
          material={materials["Material.103"]}
          position={[-33, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104.geometry}
          material={materials["Material.104"]}
          position={[-38.4, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105.geometry}
          material={materials["Material.105"]}
          position={[-39.8, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106.geometry}
          material={materials["Material.106"]}
          position={[21.4, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107.geometry}
          material={materials["Material.107"]}
          position={[-25, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108.geometry}
          material={materials["Material.108"]}
          position={[2.2, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109.geometry}
          material={materials["Material.109"]}
          position={[0.8, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110.geometry}
          material={materials["Material.110"]}
          position={[-4.6, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111.geometry}
          material={materials["Material.111"]}
          position={[-6, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112.geometry}
          material={materials["Material.112"]}
          position={[-11.4, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113.geometry}
          material={materials["Material.113"]}
          position={[-12.8, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114.geometry}
          material={materials["Material.114"]}
          position={[-18.2, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115.geometry}
          material={materials["Material.115"]}
          position={[-19.6, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116.geometry}
          material={materials["Material.116"]}
          position={[-26.4, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117.geometry}
          material={materials["Material.117"]}
          position={[2.17, 10, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118.geometry}
          material={materials["Material.118"]}
          position={[-36.9, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119.geometry}
          material={materials["Material.119"]}
          position={[-35.5, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120.geometry}
          material={materials["Material.120"]}
          position={[-42.3, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121.geometry}
          material={materials["Material.121"]}
          position={[7.8, 10, -26.55]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122.geometry}
          material={materials["Material.122"]}
          position={[6.97, 10, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123.geometry}
          material={materials["Material.123"]}
          position={[5.01, 1, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124.geometry}
          material={materials["Material.124"]}
          position={[5.01, 1, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125.geometry}
          material={materials["Material.125"]}
          position={[5.01, 1, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126.geometry}
          material={materials["Material.126"]}
          position={[0.21, 1, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127.geometry}
          material={materials["Material.127"]}
          position={[0.21, 1, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128.geometry}
          material={materials["Material.128"]}
          position={[0.21, 1, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129.geometry}
          material={materials["Material.129"]}
          position={[0.21, 1, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130.geometry}
          material={materials["Material.130"]}
          position={[0.21, 1, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131.geometry}
          material={materials["Material.131"]}
          position={[2.17, 10, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132.geometry}
          material={materials["Material.132"]}
          position={[2.19, 1, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133.geometry}
          material={materials["Material.133"]}
          position={[2.19, 1, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134.geometry}
          material={materials["Material.134"]}
          position={[2.19, 1, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135.geometry}
          material={materials["Material.135"]}
          position={[2.19, 1, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136.geometry}
          material={materials["Material.136"]}
          position={[2.17, 10, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137.geometry}
          material={materials["Material.137"]}
          position={[5.03, 10, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138.geometry}
          material={materials["Material.138"]}
          position={[6.99, 1, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139.geometry}
          material={materials["Material.139"]}
          position={[6.97, 10, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={materials["Material.140"]}
          position={[6.99, 1, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141.geometry}
          material={materials["Material.141"]}
          position={[6.99, 1, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[4.8, 6, 17.2]}
          scale={[2.6, 6, 12]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142.geometry}
          material={materials["Material.142"]}
          position={[-0.6, 1, 37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143.geometry}
          material={materials["Material.143"]}
          position={[-46.6, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144.geometry}
          material={materials["Material.144"]}
          position={[54.8, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145.geometry}
          material={materials["Material.145"]}
          position={[24.4, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146.geometry}
          material={materials["Material.146"]}
          position={[54.8, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147.geometry}
          material={materials["Material.147"]}
          position={[56.2, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148.geometry}
          material={materials["Material.148"]}
          position={[56.2, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149.geometry}
          material={materials["Material.149"]}
          position={[56.2, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150.geometry}
          material={materials["Material.150"]}
          position={[49.4, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151.geometry}
          material={materials["Material.151"]}
          position={[44.8, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane152.geometry}
          material={materials["Material.152"]}
          position={[25.8, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane153.geometry}
          material={materials["Material.153"]}
          position={[38, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane154.geometry}
          material={materials["Material.154"]}
          position={[39.4, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane155.geometry}
          material={materials["Material.155"]}
          position={[31.2, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane156.geometry}
          material={materials["Material.156"]}
          position={[32.6, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane157.geometry}
          material={materials["Material.157"]}
          position={[24.4, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane158.geometry}
          material={materials["Material.158"]}
          position={[21, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane159.geometry}
          material={materials["Material.159"]}
          position={[15.6, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane160.geometry}
          material={materials["Material.160"]}
          position={[12.2, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane161.geometry}
          material={materials["Material.161"]}
          position={[7.6, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane162.geometry}
          material={materials["Material.162"]}
          position={[-25, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane163.geometry}
          material={materials["Material.163"]}
          position={[0.8, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane164.geometry}
          material={materials["Material.164"]}
          position={[2.2, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane165.geometry}
          material={materials["Material.165"]}
          position={[-4.6, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane166.geometry}
          material={materials["Material.166"]}
          position={[-6, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane167.geometry}
          material={materials["Material.167"]}
          position={[-11.4, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane168.geometry}
          material={materials["Material.168"]}
          position={[-12.8, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane169.geometry}
          material={materials["Material.169"]}
          position={[-18.2, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane170.geometry}
          material={materials["Material.170"]}
          position={[-19.6, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane171.geometry}
          material={materials["Material.171"]}
          position={[-26.4, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane172.geometry}
          material={materials["Material.172"]}
          position={[-33, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane173.geometry}
          material={materials["Material.173"]}
          position={[-45.2, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane174.geometry}
          material={materials["Material.174"]}
          position={[-39.8, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane175.geometry}
          material={materials["Material.175"]}
          position={[-38.4, 10.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane176.geometry}
          material={materials["Material.176"]}
          position={[54.8, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane177.geometry}
          material={materials["Material.177"]}
          position={[56.2, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane178.geometry}
          material={materials["Material.178"]}
          position={[56.2, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane179.geometry}
          material={materials["Material.179"]}
          position={[54.8, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane180.geometry}
          material={materials["Material.180"]}
          position={[54.8, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane181.geometry}
          material={materials["Material.181"]}
          position={[54.8, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane182.geometry}
          material={materials["Material.182"]}
          position={[49.4, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane183.geometry}
          material={materials["Material.183"]}
          position={[49.4, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane184.geometry}
          material={materials["Material.184"]}
          position={[49.4, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane185.geometry}
          material={materials["Material.185"]}
          position={[44.8, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane186.geometry}
          material={materials["Material.186"]}
          position={[44.8, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane187.geometry}
          material={materials["Material.187"]}
          position={[44.8, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane188.geometry}
          material={materials["Material.188"]}
          position={[39.4, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane189.geometry}
          material={materials["Material.189"]}
          position={[39.4, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane190.geometry}
          material={materials["Material.190"]}
          position={[39.4, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane191.geometry}
          material={materials["Material.191"]}
          position={[38, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane192.geometry}
          material={materials["Material.192"]}
          position={[38, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane193.geometry}
          material={materials["Material.193"]}
          position={[38, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane194.geometry}
          material={materials["Material.194"]}
          position={[32.6, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane195.geometry}
          material={materials["Material.195"]}
          position={[32.6, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane196.geometry}
          material={materials["Material.196"]}
          position={[32.6, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane197.geometry}
          material={materials["Material.197"]}
          position={[31.2, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane198.geometry}
          material={materials["Material.198"]}
          position={[31.2, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane199.geometry}
          material={materials["Material.199"]}
          position={[31.2, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane200.geometry}
          material={materials["Material.200"]}
          position={[25.8, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane201.geometry}
          material={materials["Material.201"]}
          position={[25.8, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane202.geometry}
          material={materials["Material.202"]}
          position={[25.8, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane203.geometry}
          material={materials["Material.203"]}
          position={[24.4, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane204.geometry}
          material={materials["Material.204"]}
          position={[24.4, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane205.geometry}
          material={materials["Material.205"]}
          position={[24.4, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane206.geometry}
          material={materials["Material.206"]}
          position={[21, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane207.geometry}
          material={materials["Material.207"]}
          position={[21, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane208.geometry}
          material={materials["Material.208"]}
          position={[21, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane209.geometry}
          material={materials["Material.209"]}
          position={[15.6, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane210.geometry}
          material={materials["Material.210"]}
          position={[15.6, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane211.geometry}
          material={materials["Material.211"]}
          position={[15.6, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane212.geometry}
          material={materials["Material.212"]}
          position={[12.2, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane213.geometry}
          material={materials["Material.213"]}
          position={[12.2, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane214.geometry}
          material={materials["Material.214"]}
          position={[12.2, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane215.geometry}
          material={materials["Material.215"]}
          position={[7.6, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane216.geometry}
          material={materials["Material.216"]}
          position={[7.6, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane217.geometry}
          material={materials["Material.217"]}
          position={[7.6, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane218.geometry}
          material={materials["Material.218"]}
          position={[2.2, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane219.geometry}
          material={materials["Material.219"]}
          position={[2.2, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane220.geometry}
          material={materials["Material.220"]}
          position={[2.2, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane221.geometry}
          material={materials["Material.221"]}
          position={[0.8, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane222.geometry}
          material={materials["Material.222"]}
          position={[0.8, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane223.geometry}
          material={materials["Material.223"]}
          position={[0.8, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane224.geometry}
          material={materials["Material.224"]}
          position={[-4.6, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane225.geometry}
          material={materials["Material.225"]}
          position={[-4.6, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane226.geometry}
          material={materials["Material.226"]}
          position={[-4.6, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane227.geometry}
          material={materials["Material.227"]}
          position={[-6, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane228.geometry}
          material={materials["Material.228"]}
          position={[-6, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane229.geometry}
          material={materials["Material.229"]}
          position={[-6, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane230.geometry}
          material={materials["Material.230"]}
          position={[-11.4, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane231.geometry}
          material={materials["Material.231"]}
          position={[-11.4, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane232.geometry}
          material={materials["Material.232"]}
          position={[-11.4, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane233.geometry}
          material={materials["Material.233"]}
          position={[-12.8, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane234.geometry}
          material={materials["Material.234"]}
          position={[-12.8, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane235.geometry}
          material={materials["Material.235"]}
          position={[-12.8, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane236.geometry}
          material={materials["Material.236"]}
          position={[-18.2, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane237.geometry}
          material={materials["Material.237"]}
          position={[-18.2, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane238.geometry}
          material={materials["Material.238"]}
          position={[-18.2, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane239.geometry}
          material={materials["Material.239"]}
          position={[-19.6, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane240.geometry}
          material={materials["Material.240"]}
          position={[-19.6, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane241.geometry}
          material={materials["Material.241"]}
          position={[-19.6, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane242.geometry}
          material={materials["Material.242"]}
          position={[-25, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane243.geometry}
          material={materials["Material.243"]}
          position={[-25, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane244.geometry}
          material={materials["Material.244"]}
          position={[-25, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane245.geometry}
          material={materials["Material.245"]}
          position={[-43.2, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane246.geometry}
          material={materials["Material.246"]}
          position={[-26.4, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane247.geometry}
          material={materials["Material.247"]}
          position={[-26.4, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane248.geometry}
          material={materials["Material.248"]}
          position={[-33, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane249.geometry}
          material={materials["Material.249"]}
          position={[-33, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane250.geometry}
          material={materials["Material.250"]}
          position={[-33, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane251.geometry}
          material={materials["Material.251"]}
          position={[-38.4, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane252.geometry}
          material={materials["Material.252"]}
          position={[-38.4, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane253.geometry}
          material={materials["Material.253"]}
          position={[-38.4, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane254.geometry}
          material={materials["Material.254"]}
          position={[-39.8, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane255.geometry}
          material={materials["Material.255"]}
          position={[-39.8, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane256.geometry}
          material={materials["Material.256"]}
          position={[-39.8, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane257.geometry}
          material={materials["Material.257"]}
          position={[-45.2, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane258.geometry}
          material={materials["Material.258"]}
          position={[-45.2, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane259.geometry}
          material={materials["Material.259"]}
          position={[-45.2, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane260.geometry}
          material={materials["Material.260"]}
          position={[-46.6, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane261.geometry}
          material={materials["Material.261"]}
          position={[-46.6, 4.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane262.geometry}
          material={materials["Material.262"]}
          position={[-46.6, 7.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane263.geometry}
          material={materials["Material.263"]}
          position={[49.4, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane264.geometry}
          material={materials["Material.264"]}
          position={[-25, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane265.geometry}
          material={materials["Material.265"]}
          position={[44.8, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane266.geometry}
          material={materials["Material.266"]}
          position={[39.4, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane267.geometry}
          material={materials["Material.267"]}
          position={[38, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane268.geometry}
          material={materials["Material.268"]}
          position={[32.6, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane269.geometry}
          material={materials["Material.269"]}
          position={[31.2, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane270.geometry}
          material={materials["Material.270"]}
          position={[25.8, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane271.geometry}
          material={materials["Material.271"]}
          position={[21, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane272.geometry}
          material={materials["Material.272"]}
          position={[15.6, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane273.geometry}
          material={materials["Material.273"]}
          position={[12.2, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane274.geometry}
          material={materials["Material.274"]}
          position={[7.6, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane275.geometry}
          material={materials["Material.275"]}
          position={[-45.2, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane276.geometry}
          material={materials["Material.276"]}
          position={[2.2, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane277.geometry}
          material={materials["Material.277"]}
          position={[0.8, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane278.geometry}
          material={materials["Material.278"]}
          position={[-4.6, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane279.geometry}
          material={materials["Material.279"]}
          position={[-6, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane280.geometry}
          material={materials["Material.280"]}
          position={[-11.4, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane281.geometry}
          material={materials["Material.281"]}
          position={[-12.8, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane282.geometry}
          material={materials["Material.282"]}
          position={[-18.2, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane283.geometry}
          material={materials["Material.283"]}
          position={[-19.6, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane284.geometry}
          material={materials["Material.284"]}
          position={[-26.4, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane285.geometry}
          material={materials["Material.285"]}
          position={[-26.4, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane286.geometry}
          material={materials["Material.286"]}
          position={[-33, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane287.geometry}
          material={materials["Material.287"]}
          position={[-46.6, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane288.geometry}
          material={materials["Material.288"]}
          position={[-38.4, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane289.geometry}
          material={materials["Material.289"]}
          position={[-39.8, 10.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane290.geometry}
          material={materials["Material.290"]}
          position={[-46.6, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane291.geometry}
          material={materials["Material.291"]}
          position={[-46.6, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane292.geometry}
          material={materials["Material.292"]}
          position={[-46.6, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane293.geometry}
          material={materials["Material.293"]}
          position={[-45.2, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane294.geometry}
          material={materials["Material.294"]}
          position={[-45.2, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane295.geometry}
          material={materials["Material.295"]}
          position={[-45.2, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane296.geometry}
          material={materials["Material.296"]}
          position={[-39.8, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane297.geometry}
          material={materials["Material.297"]}
          position={[-39.8, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane298.geometry}
          material={materials["Material.298"]}
          position={[-39.8, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane299.geometry}
          material={materials["Material.299"]}
          position={[-38.4, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane300.geometry}
          material={materials["Material.300"]}
          position={[-38.4, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane301.geometry}
          material={materials["Material.301"]}
          position={[-38.4, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane302.geometry}
          material={materials["Material.302"]}
          position={[-33, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane303.geometry}
          material={materials["Material.303"]}
          position={[-33, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane304.geometry}
          material={materials["Material.304"]}
          position={[-33, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane305.geometry}
          material={materials["Material.305"]}
          position={[-26.4, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane306.geometry}
          material={materials["Material.306"]}
          position={[-26.4, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane307.geometry}
          material={materials["Material.307"]}
          position={[-26.4, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane308.geometry}
          material={materials["Material.308"]}
          position={[-25, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane309.geometry}
          material={materials["Material.309"]}
          position={[-25, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane310.geometry}
          material={materials["Material.310"]}
          position={[-25, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane311.geometry}
          material={materials["Material.311"]}
          position={[-19.6, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane312.geometry}
          material={materials["Material.312"]}
          position={[-19.6, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane313.geometry}
          material={materials["Material.313"]}
          position={[-19.6, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane314.geometry}
          material={materials["Material.314"]}
          position={[-18.2, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane315.geometry}
          material={materials["Material.315"]}
          position={[-18.2, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane316.geometry}
          material={materials["Material.316"]}
          position={[-18.2, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane317.geometry}
          material={materials["Material.317"]}
          position={[-12.8, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane318.geometry}
          material={materials["Material.318"]}
          position={[-12.8, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane319.geometry}
          material={materials["Material.319"]}
          position={[-12.8, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane320.geometry}
          material={materials["Material.320"]}
          position={[-11.4, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane321.geometry}
          material={materials["Material.321"]}
          position={[-11.4, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane322.geometry}
          material={materials["Material.322"]}
          position={[-11.4, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane323.geometry}
          material={materials["Material.323"]}
          position={[-6, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane324.geometry}
          material={materials["Material.324"]}
          position={[-6, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane325.geometry}
          material={materials["Material.325"]}
          position={[-6, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane326.geometry}
          material={materials["Material.326"]}
          position={[-4.6, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane327.geometry}
          material={materials["Material.327"]}
          position={[-4.6, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane328.geometry}
          material={materials["Material.328"]}
          position={[-4.6, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane329.geometry}
          material={materials["Material.329"]}
          position={[0.8, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane330.geometry}
          material={materials["Material.330"]}
          position={[0.8, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane331.geometry}
          material={materials["Material.331"]}
          position={[0.8, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane332.geometry}
          material={materials["Material.332"]}
          position={[2.2, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane333.geometry}
          material={materials["Material.333"]}
          position={[2.2, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane334.geometry}
          material={materials["Material.334"]}
          position={[2.2, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane335.geometry}
          material={materials["Material.335"]}
          position={[7.6, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane336.geometry}
          material={materials["Material.336"]}
          position={[7.6, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane337.geometry}
          material={materials["Material.337"]}
          position={[7.6, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane338.geometry}
          material={materials["Material.338"]}
          position={[12.2, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane339.geometry}
          material={materials["Material.339"]}
          position={[12.2, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane340.geometry}
          material={materials["Material.340"]}
          position={[12.2, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane341.geometry}
          material={materials["Material.341"]}
          position={[15.6, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane342.geometry}
          material={materials["Material.342"]}
          position={[15.6, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane343.geometry}
          material={materials["Material.343"]}
          position={[15.6, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane344.geometry}
          material={materials["Material.344"]}
          position={[21, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane345.geometry}
          material={materials["Material.345"]}
          position={[21, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane346.geometry}
          material={materials["Material.346"]}
          position={[21, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane347.geometry}
          material={materials["Material.347"]}
          position={[24.4, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane348.geometry}
          material={materials["Material.348"]}
          position={[24.4, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane349.geometry}
          material={materials["Material.349"]}
          position={[24.4, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane350.geometry}
          material={materials["Material.350"]}
          position={[25.8, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane351.geometry}
          material={materials["Material.351"]}
          position={[25.8, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane352.geometry}
          material={materials["Material.352"]}
          position={[25.8, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane353.geometry}
          material={materials["Material.353"]}
          position={[31.2, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane354.geometry}
          material={materials["Material.354"]}
          position={[31.2, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane355.geometry}
          material={materials["Material.355"]}
          position={[31.2, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane356.geometry}
          material={materials["Material.356"]}
          position={[32.6, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane357.geometry}
          material={materials["Material.357"]}
          position={[32.6, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane358.geometry}
          material={materials["Material.358"]}
          position={[32.6, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane359.geometry}
          material={materials["Material.359"]}
          position={[38, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane360.geometry}
          material={materials["Material.360"]}
          position={[38, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane361.geometry}
          material={materials["Material.361"]}
          position={[38, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane362.geometry}
          material={materials["Material.362"]}
          position={[39.4, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane363.geometry}
          material={materials["Material.363"]}
          position={[39.4, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane364.geometry}
          material={materials["Material.364"]}
          position={[39.4, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane365.geometry}
          material={materials["Material.365"]}
          position={[44.8, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane366.geometry}
          material={materials["Material.366"]}
          position={[44.8, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane367.geometry}
          material={materials["Material.367"]}
          position={[44.8, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane368.geometry}
          material={materials["Material.368"]}
          position={[49.4, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane369.geometry}
          material={materials["Material.369"]}
          position={[49.4, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane370.geometry}
          material={materials["Material.370"]}
          position={[49.4, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane371.geometry}
          material={materials["Material.371"]}
          position={[54.8, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane372.geometry}
          material={materials["Material.372"]}
          position={[54.8, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane373.geometry}
          material={materials["Material.373"]}
          position={[54.8, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane374.geometry}
          material={materials["Material.374"]}
          position={[-43.2, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane375.geometry}
          material={materials["Material.375"]}
          position={[56.2, 4.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane376.geometry}
          material={materials["Material.376"]}
          position={[56.2, 7.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane377.geometry}
          material={materials["Material.377"]}
          position={[56.2, 1.5, -42.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane378.geometry}
          material={materials["Material.378"]}
          position={[56.2, 1.5, -42.88]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane379.geometry}
          material={materials["Material.379"]}
          position={[56.2, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane380.geometry}
          material={materials["Material.380"]}
          position={[0.8, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane381.geometry}
          material={materials["Material.381"]}
          position={[49.4, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane382.geometry}
          material={materials["Material.382"]}
          position={[48, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane383.geometry}
          material={materials["Material.383"]}
          position={[22.8, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane384.geometry}
          material={materials["Material.384"]}
          position={[36.4, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane385.geometry}
          material={materials["Material.385"]}
          position={[35, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane386.geometry}
          material={materials["Material.386"]}
          position={[29.6, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane387.geometry}
          material={materials["Material.387"]}
          position={[28.2, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane388.geometry}
          material={materials["Material.388"]}
          position={[21.4, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane389.geometry}
          material={materials["Material.389"]}
          position={[-25, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane390.geometry}
          material={materials["Material.390"]}
          position={[2.2, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane391.geometry}
          material={materials["Material.391"]}
          position={[-26.4, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane392.geometry}
          material={materials["Material.392"]}
          position={[-4.6, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane393.geometry}
          material={materials["Material.393"]}
          position={[-6, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane394.geometry}
          material={materials["Material.394"]}
          position={[-11.4, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane395.geometry}
          material={materials["Material.395"]}
          position={[-12.8, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane396.geometry}
          material={materials["Material.396"]}
          position={[-18.2, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane397.geometry}
          material={materials["Material.397"]}
          position={[-19.6, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane398.geometry}
          material={materials["Material.398"]}
          position={[-41.8, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane399.geometry}
          material={materials["Material.399"]}
          position={[-35, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane400.geometry}
          material={materials["Material.400"]}
          position={[-36.4, 10.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane401.geometry}
          material={materials["Material.401"]}
          position={[49.4, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane402.geometry}
          material={materials["Material.402"]}
          position={[54.8, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane403.geometry}
          material={materials["Material.403"]}
          position={[56.2, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane404.geometry}
          material={materials["Material.404"]}
          position={[48, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane405.geometry}
          material={materials["Material.405"]}
          position={[22.8, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane406.geometry}
          material={materials["Material.406"]}
          position={[35, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane407.geometry}
          material={materials["Material.407"]}
          position={[36.4, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane408.geometry}
          material={materials["Material.408"]}
          position={[29.6, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane409.geometry}
          material={materials["Material.409"]}
          position={[28.2, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane410.geometry}
          material={materials["Material.410"]}
          position={[21.4, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane411.geometry}
          material={materials["Material.411"]}
          position={[-25, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane412.geometry}
          material={materials["Material.412"]}
          position={[0.8, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane413.geometry}
          material={materials["Material.413"]}
          position={[2.2, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane414.geometry}
          material={materials["Material.414"]}
          position={[-4.6, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane415.geometry}
          material={materials["Material.415"]}
          position={[-6, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane416.geometry}
          material={materials["Material.416"]}
          position={[-11.4, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane417.geometry}
          material={materials["Material.417"]}
          position={[-12.8, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane418.geometry}
          material={materials["Material.418"]}
          position={[-18.2, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane419.geometry}
          material={materials["Material.419"]}
          position={[-19.6, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane420.geometry}
          material={materials["Material.420"]}
          position={[-26.4, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane421.geometry}
          material={materials["Material.421"]}
          position={[-41.8, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane422.geometry}
          material={materials["Material.422"]}
          position={[-36.4, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane423.geometry}
          material={materials["Material.423"]}
          position={[-35, 10.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane424.geometry}
          material={materials["Material.424"]}
          position={[56.2, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane425.geometry}
          material={materials["Material.425"]}
          position={[56.2, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane426.geometry}
          material={materials["Material.426"]}
          position={[56.2, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane427.geometry}
          material={materials["Material.427"]}
          position={[54.8, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane428.geometry}
          material={materials["Material.428"]}
          position={[54.8, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane429.geometry}
          material={materials["Material.429"]}
          position={[54.8, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane430.geometry}
          material={materials["Material.430"]}
          position={[49.4, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane431.geometry}
          material={materials["Material.431"]}
          position={[49.4, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane432.geometry}
          material={materials["Material.432"]}
          position={[49.4, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane433.geometry}
          material={materials["Material.433"]}
          position={[19.4, 10.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane434.geometry}
          material={materials["Material.434"]}
          position={[48, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane435.geometry}
          material={materials["Material.435"]}
          position={[48, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane436.geometry}
          material={materials["Material.436"]}
          position={[56.2, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane437.geometry}
          material={materials["Material.437"]}
          position={[56.2, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane438.geometry}
          material={materials["Material.438"]}
          position={[56.2, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane439.geometry}
          material={materials["Material.439"]}
          position={[54.8, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane440.geometry}
          material={materials["Material.440"]}
          position={[54.8, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane441.geometry}
          material={materials["Material.441"]}
          position={[54.8, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane442.geometry}
          material={materials["Material.442"]}
          position={[49.4, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane443.geometry}
          material={materials["Material.443"]}
          position={[49.4, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane444.geometry}
          material={materials["Material.444"]}
          position={[49.4, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane445.geometry}
          material={materials["Material.445"]}
          position={[48, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane446.geometry}
          material={materials["Material.446"]}
          position={[48, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane447.geometry}
          material={materials["Material.447"]}
          position={[48, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane448.geometry}
          material={materials["Material.448"]}
          position={[36.4, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane449.geometry}
          material={materials["Material.449"]}
          position={[36.4, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane450.geometry}
          material={materials["Material.450"]}
          position={[36.4, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane451.geometry}
          material={materials["Material.451"]}
          position={[19.4, 10.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane452.geometry}
          material={materials["Material.452"]}
          position={[36.4, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane453.geometry}
          material={materials["Material.453"]}
          position={[36.4, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane454.geometry}
          material={materials["Material.454"]}
          position={[35, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane455.geometry}
          material={materials["Material.455"]}
          position={[35, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane456.geometry}
          material={materials["Material.456"]}
          position={[35, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane457.geometry}
          material={materials["Material.457"]}
          position={[35, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane458.geometry}
          material={materials["Material.458"]}
          position={[35, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane459.geometry}
          material={materials["Material.459"]}
          position={[35, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane460.geometry}
          material={materials["Material.460"]}
          position={[29.6, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane461.geometry}
          material={materials["Material.461"]}
          position={[29.6, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane462.geometry}
          material={materials["Material.462"]}
          position={[29.6, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane463.geometry}
          material={materials["Material.463"]}
          position={[28.2, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane464.geometry}
          material={materials["Material.464"]}
          position={[28.2, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane465.geometry}
          material={materials["Material.465"]}
          position={[28.2, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane466.geometry}
          material={materials["Material.466"]}
          position={[22.8, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane467.geometry}
          material={materials["Material.467"]}
          position={[22.8, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane468.geometry}
          material={materials["Material.468"]}
          position={[22.8, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane469.geometry}
          material={materials["Material.469"]}
          position={[21.4, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane470.geometry}
          material={materials["Material.470"]}
          position={[21.4, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane471.geometry}
          material={materials["Material.471"]}
          position={[21.4, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane472.geometry}
          material={materials["Material.472"]}
          position={[29.6, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane473.geometry}
          material={materials["Material.473"]}
          position={[29.6, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane474.geometry}
          material={materials["Material.474"]}
          position={[29.6, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane475.geometry}
          material={materials["Material.475"]}
          position={[28.2, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane476.geometry}
          material={materials["Material.476"]}
          position={[28.2, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane477.geometry}
          material={materials["Material.477"]}
          position={[28.2, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane478.geometry}
          material={materials["Material.478"]}
          position={[22.8, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane479.geometry}
          material={materials["Material.479"]}
          position={[22.8, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane480.geometry}
          material={materials["Material.480"]}
          position={[22.8, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane481.geometry}
          material={materials["Material.481"]}
          position={[21.4, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane482.geometry}
          material={materials["Material.482"]}
          position={[21.4, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane483.geometry}
          material={materials["Material.483"]}
          position={[21.4, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane484.geometry}
          material={materials["Material.484"]}
          position={[2.2, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane485.geometry}
          material={materials["Material.485"]}
          position={[2.2, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane486.geometry}
          material={materials["Material.486"]}
          position={[2.2, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane487.geometry}
          material={materials["Material.487"]}
          position={[0.8, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane488.geometry}
          material={materials["Material.488"]}
          position={[0.8, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane489.geometry}
          material={materials["Material.489"]}
          position={[0.8, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane490.geometry}
          material={materials["Material.490"]}
          position={[-4.6, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane491.geometry}
          material={materials["Material.491"]}
          position={[-4.6, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane492.geometry}
          material={materials["Material.492"]}
          position={[-4.6, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane493.geometry}
          material={materials["Material.493"]}
          position={[-6, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane494.geometry}
          material={materials["Material.494"]}
          position={[-6, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane495.geometry}
          material={materials["Material.495"]}
          position={[-6, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane496.geometry}
          material={materials["Material.496"]}
          position={[-11.4, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane497.geometry}
          material={materials["Material.497"]}
          position={[-11.4, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane498.geometry}
          material={materials["Material.498"]}
          position={[-11.4, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane499.geometry}
          material={materials["Material.499"]}
          position={[-12.8, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane500.geometry}
          material={materials["Material.500"]}
          position={[-12.8, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane501.geometry}
          material={materials["Material.501"]}
          position={[-12.8, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane502.geometry}
          material={materials["Material.502"]}
          position={[-18.2, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane503.geometry}
          material={materials["Material.503"]}
          position={[-18.2, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane504.geometry}
          material={materials["Material.504"]}
          position={[-18.2, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane505.geometry}
          material={materials["Material.505"]}
          position={[-19.6, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane506.geometry}
          material={materials["Material.506"]}
          position={[-19.6, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane507.geometry}
          material={materials["Material.507"]}
          position={[-19.6, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane508.geometry}
          material={materials["Material.508"]}
          position={[-25, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane509.geometry}
          material={materials["Material.509"]}
          position={[-25, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane510.geometry}
          material={materials["Material.510"]}
          position={[-25, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane511.geometry}
          material={materials["Material.511"]}
          position={[-26.4, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane512.geometry}
          material={materials["Material.512"]}
          position={[-26.4, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane513.geometry}
          material={materials["Material.513"]}
          position={[-26.4, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane514.geometry}
          material={materials["Material.514"]}
          position={[2.2, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane515.geometry}
          material={materials["Material.515"]}
          position={[2.2, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane516.geometry}
          material={materials["Material.516"]}
          position={[2.2, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane517.geometry}
          material={materials["Material.517"]}
          position={[0.8, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane518.geometry}
          material={materials["Material.518"]}
          position={[0.8, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane519.geometry}
          material={materials["Material.519"]}
          position={[0.8, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane520.geometry}
          material={materials["Material.520"]}
          position={[-4.6, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane521.geometry}
          material={materials["Material.521"]}
          position={[-4.6, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane522.geometry}
          material={materials["Material.522"]}
          position={[-4.6, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane523.geometry}
          material={materials["Material.523"]}
          position={[-6, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane524.geometry}
          material={materials["Material.524"]}
          position={[-6, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane525.geometry}
          material={materials["Material.525"]}
          position={[-6, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane526.geometry}
          material={materials["Material.526"]}
          position={[-11.4, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane527.geometry}
          material={materials["Material.527"]}
          position={[-11.4, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane528.geometry}
          material={materials["Material.528"]}
          position={[-11.4, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane529.geometry}
          material={materials["Material.529"]}
          position={[-12.8, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane530.geometry}
          material={materials["Material.530"]}
          position={[-12.8, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane531.geometry}
          material={materials["Material.531"]}
          position={[-12.8, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane532.geometry}
          material={materials["Material.532"]}
          position={[-18.2, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane533.geometry}
          material={materials["Material.533"]}
          position={[-18.2, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane534.geometry}
          material={materials["Material.534"]}
          position={[-18.2, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane535.geometry}
          material={materials["Material.535"]}
          position={[-19.6, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane536.geometry}
          material={materials["Material.536"]}
          position={[-19.6, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane537.geometry}
          material={materials["Material.537"]}
          position={[-19.6, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane538.geometry}
          material={materials["Material.538"]}
          position={[-25, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane539.geometry}
          material={materials["Material.539"]}
          position={[-25, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane540.geometry}
          material={materials["Material.540"]}
          position={[-25, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane541.geometry}
          material={materials["Material.541"]}
          position={[-26.4, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane542.geometry}
          material={materials["Material.542"]}
          position={[-26.4, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane543.geometry}
          material={materials["Material.543"]}
          position={[-26.4, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane544.geometry}
          material={materials["Material.544"]}
          position={[-35, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane545.geometry}
          material={materials["Material.545"]}
          position={[-35, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane546.geometry}
          material={materials["Material.546"]}
          position={[-35, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane547.geometry}
          material={materials["Material.547"]}
          position={[-35, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane548.geometry}
          material={materials["Material.548"]}
          position={[-35, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane549.geometry}
          material={materials["Material.549"]}
          position={[-35, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane550.geometry}
          material={materials["Material.550"]}
          position={[-36.4, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane551.geometry}
          material={materials["Material.551"]}
          position={[-36.4, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane552.geometry}
          material={materials["Material.552"]}
          position={[-36.4, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane553.geometry}
          material={materials["Material.553"]}
          position={[-41.8, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane554.geometry}
          material={materials["Material.554"]}
          position={[-41.8, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane555.geometry}
          material={materials["Material.555"]}
          position={[-41.8, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane556.geometry}
          material={materials["Material.556"]}
          position={[-43.2, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane557.geometry}
          material={materials["Material.557"]}
          position={[-43.2, 4.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane558.geometry}
          material={materials["Material.558"]}
          position={[-43.2, 7.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane559.geometry}
          material={materials["Material.559"]}
          position={[-36.4, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane560.geometry}
          material={materials["Material.560"]}
          position={[-36.4, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane561.geometry}
          material={materials["Material.561"]}
          position={[-36.4, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane562.geometry}
          material={materials["Material.562"]}
          position={[-41.8, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane563.geometry}
          material={materials["Material.563"]}
          position={[-41.8, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane564.geometry}
          material={materials["Material.564"]}
          position={[-41.8, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane565.geometry}
          material={materials["Material.565"]}
          position={[-43.2, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane566.geometry}
          material={materials["Material.566"]}
          position={[-43.2, 4.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane567.geometry}
          material={materials["Material.567"]}
          position={[-43.2, 7.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane568.geometry}
          material={materials["Material.568"]}
          position={[48, 1.5, -30.35]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane569.geometry}
          material={materials["Material.569"]}
          position={[19.4, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane570.geometry}
          material={materials["Material.570"]}
          position={[18, 10.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane571.geometry}
          material={materials["Material.571"]}
          position={[33, 10.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane572.geometry}
          material={materials["Material.572"]}
          position={[31.6, 10.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane573.geometry}
          material={materials["Material.573"]}
          position={[26.2, 10.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane574.geometry}
          material={materials["Material.574"]}
          position={[24.8, 10.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane575.geometry}
          material={materials["Material.575"]}
          position={[36.4, 1.5, -30.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane576.geometry}
          material={materials["Material.576"]}
          position={[19.4, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane577.geometry}
          material={materials["Material.577"]}
          position={[18, 10.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane578.geometry}
          material={materials["Material.578"]}
          position={[33, 10.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane579.geometry}
          material={materials["Material.579"]}
          position={[31.6, 10.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane580.geometry}
          material={materials["Material.580"]}
          position={[26.2, 10.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane581.geometry}
          material={materials["Material.581"]}
          position={[24.8, 10.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane582.geometry}
          material={materials["Material.582"]}
          position={[38.4, 10.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane583.geometry}
          material={materials["Material.583"]}
          position={[18, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane584.geometry}
          material={materials["Material.584"]}
          position={[39.8, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane585.geometry}
          material={materials["Material.585"]}
          position={[38.4, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane586.geometry}
          material={materials["Material.586"]}
          position={[31.6, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane587.geometry}
          material={materials["Material.587"]}
          position={[33, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane588.geometry}
          material={materials["Material.588"]}
          position={[26.2, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane589.geometry}
          material={materials["Material.589"]}
          position={[24.8, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane590.geometry}
          material={materials["Material.590"]}
          position={[38.4, 10.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane591.geometry}
          material={materials["Material.591"]}
          position={[18, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane592.geometry}
          material={materials["Material.592"]}
          position={[39.8, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane593.geometry}
          material={materials["Material.593"]}
          position={[38.4, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane594.geometry}
          material={materials["Material.594"]}
          position={[33, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane595.geometry}
          material={materials["Material.595"]}
          position={[31.6, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane596.geometry}
          material={materials["Material.596"]}
          position={[26.2, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane597.geometry}
          material={materials["Material.597"]}
          position={[24.8, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane598.geometry}
          material={materials["Material.598"]}
          position={[39.8, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane599.geometry}
          material={materials["Material.599"]}
          position={[39.8, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane600.geometry}
          material={materials["Material.600"]}
          position={[39.8, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane601.geometry}
          material={materials["Material.601"]}
          position={[38.4, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane602.geometry}
          material={materials["Material.602"]}
          position={[38.4, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane603.geometry}
          material={materials["Material.603"]}
          position={[38.4, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane604.geometry}
          material={materials["Material.604"]}
          position={[33, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane605.geometry}
          material={materials["Material.605"]}
          position={[33, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane606.geometry}
          material={materials["Material.606"]}
          position={[33, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane607.geometry}
          material={materials["Material.607"]}
          position={[31.6, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane608.geometry}
          material={materials["Material.608"]}
          position={[31.6, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane609.geometry}
          material={materials["Material.609"]}
          position={[31.6, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane610.geometry}
          material={materials["Material.610"]}
          position={[26.2, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane611.geometry}
          material={materials["Material.611"]}
          position={[26.2, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane612.geometry}
          material={materials["Material.612"]}
          position={[26.2, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane613.geometry}
          material={materials["Material.613"]}
          position={[24.8, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane614.geometry}
          material={materials["Material.614"]}
          position={[24.8, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane615.geometry}
          material={materials["Material.615"]}
          position={[24.8, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane616.geometry}
          material={materials["Material.616"]}
          position={[24.8, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane617.geometry}
          material={materials["Material.617"]}
          position={[19.4, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane618.geometry}
          material={materials["Material.618"]}
          position={[19.4, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane619.geometry}
          material={materials["Material.619"]}
          position={[19.4, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane620.geometry}
          material={materials["Material.620"]}
          position={[-19.6, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane621.geometry}
          material={materials["Material.621"]}
          position={[18, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane622.geometry}
          material={materials["Material.622"]}
          position={[18, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane623.geometry}
          material={materials["Material.623"]}
          position={[39.8, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane624.geometry}
          material={materials["Material.624"]}
          position={[39.8, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane625.geometry}
          material={materials["Material.625"]}
          position={[39.8, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane626.geometry}
          material={materials["Material.626"]}
          position={[38.4, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane627.geometry}
          material={materials["Material.627"]}
          position={[38.4, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane628.geometry}
          material={materials["Material.628"]}
          position={[38.4, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane629.geometry}
          material={materials["Material.629"]}
          position={[33, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane630.geometry}
          material={materials["Material.630"]}
          position={[33, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane631.geometry}
          material={materials["Material.631"]}
          position={[33, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane632.geometry}
          material={materials["Material.632"]}
          position={[31.6, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane633.geometry}
          material={materials["Material.633"]}
          position={[31.6, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane634.geometry}
          material={materials["Material.634"]}
          position={[31.6, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane635.geometry}
          material={materials["Material.635"]}
          position={[26.2, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane636.geometry}
          material={materials["Material.636"]}
          position={[26.2, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane637.geometry}
          material={materials["Material.637"]}
          position={[26.2, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane638.geometry}
          material={materials["Material.638"]}
          position={[24.8, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane639.geometry}
          material={materials["Material.639"]}
          position={[24.8, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane640.geometry}
          material={materials["Material.640"]}
          position={[24.8, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane641.geometry}
          material={materials["Material.641"]}
          position={[19.4, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane642.geometry}
          material={materials["Material.642"]}
          position={[19.4, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane643.geometry}
          material={materials["Material.643"]}
          position={[19.4, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane644.geometry}
          material={materials["Material.644"]}
          position={[-19.6, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane645.geometry}
          material={materials["Material.645"]}
          position={[18, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane646.geometry}
          material={materials["Material.646"]}
          position={[18, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane647.geometry}
          material={materials["Material.647"]}
          position={[18, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane648.geometry}
          material={materials["Material.648"]}
          position={[-0.6, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane649.geometry}
          material={materials["Material.649"]}
          position={[18, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane650.geometry}
          material={materials["Material.650"]}
          position={[-0.6, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane651.geometry}
          material={materials["Material.651"]}
          position={[-26.4, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane652.geometry}
          material={materials["Material.652"]}
          position={[-0.6, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane653.geometry}
          material={materials["Material.653"]}
          position={[-0.6, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane654.geometry}
          material={materials["Material.654"]}
          position={[-26.4, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane655.geometry}
          material={materials["Material.655"]}
          position={[-0.6, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane656.geometry}
          material={materials["Material.656"]}
          position={[-0.6, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane657.geometry}
          material={materials["Material.657"]}
          position={[-21, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane658.geometry}
          material={materials["Material.658"]}
          position={[-6, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane659.geometry}
          material={materials["Material.659"]}
          position={[-12.8, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane660.geometry}
          material={materials["Material.660"]}
          position={[-7.4, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane661.geometry}
          material={materials["Material.661"]}
          position={[-14.2, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane662.geometry}
          material={materials["Material.662"]}
          position={[-6, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane663.geometry}
          material={materials["Material.663"]}
          position={[-6, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane664.geometry}
          material={materials["Material.664"]}
          position={[-6, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane665.geometry}
          material={materials["Material.665"]}
          position={[-7.4, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane666.geometry}
          material={materials["Material.666"]}
          position={[-7.4, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane667.geometry}
          material={materials["Material.667"]}
          position={[-7.4, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane668.geometry}
          material={materials["Material.668"]}
          position={[-12.8, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane669.geometry}
          material={materials["Material.669"]}
          position={[-12.8, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane670.geometry}
          material={materials["Material.670"]}
          position={[-12.8, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane671.geometry}
          material={materials["Material.671"]}
          position={[-14.2, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane672.geometry}
          material={materials["Material.672"]}
          position={[-14.2, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane673.geometry}
          material={materials["Material.673"]}
          position={[-14.2, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane674.geometry}
          material={materials["Material.674"]}
          position={[-19.6, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane675.geometry}
          material={materials["Material.675"]}
          position={[-19.6, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane676.geometry}
          material={materials["Material.676"]}
          position={[-19.6, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane677.geometry}
          material={materials["Material.677"]}
          position={[-7.4, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane678.geometry}
          material={materials["Material.678"]}
          position={[-21, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane679.geometry}
          material={materials["Material.679"]}
          position={[-21, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane680.geometry}
          material={materials["Material.680"]}
          position={[-21, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane681.geometry}
          material={materials["Material.681"]}
          position={[-6, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane682.geometry}
          material={materials["Material.682"]}
          position={[-7.4, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane683.geometry}
          material={materials["Material.683"]}
          position={[-12.8, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane684.geometry}
          material={materials["Material.684"]}
          position={[-14.2, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane685.geometry}
          material={materials["Material.685"]}
          position={[-6, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane686.geometry}
          material={materials["Material.686"]}
          position={[-6, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane687.geometry}
          material={materials["Material.687"]}
          position={[-6, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane688.geometry}
          material={materials["Material.688"]}
          position={[-7.4, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane689.geometry}
          material={materials["Material.689"]}
          position={[-7.4, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane690.geometry}
          material={materials["Material.690"]}
          position={[-7.4, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane691.geometry}
          material={materials["Material.691"]}
          position={[-12.8, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane692.geometry}
          material={materials["Material.692"]}
          position={[-12.8, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane693.geometry}
          material={materials["Material.693"]}
          position={[-12.8, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane694.geometry}
          material={materials["Material.694"]}
          position={[-14.2, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane695.geometry}
          material={materials["Material.695"]}
          position={[-14.2, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane696.geometry}
          material={materials["Material.696"]}
          position={[-14.2, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane697.geometry}
          material={materials["Material.697"]}
          position={[-19.6, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane698.geometry}
          material={materials["Material.698"]}
          position={[-19.6, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane699.geometry}
          material={materials["Material.699"]}
          position={[-19.6, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane700.geometry}
          material={materials["Material.700"]}
          position={[-7.4, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane701.geometry}
          material={materials["Material.701"]}
          position={[-21, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane702.geometry}
          material={materials["Material.702"]}
          position={[-21, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane703.geometry}
          material={materials["Material.703"]}
          position={[-43.2, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane704.geometry}
          material={materials["Material.704"]}
          position={[-43.2, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane705.geometry}
          material={materials["Material.705"]}
          position={[-6, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane706.geometry}
          material={materials["Material.706"]}
          position={[-21, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane707.geometry}
          material={materials["Material.707"]}
          position={[-19.6, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane708.geometry}
          material={materials["Material.708"]}
          position={[-14.2, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane709.geometry}
          material={materials["Material.709"]}
          position={[-12.8, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane710.geometry}
          material={materials["Material.710"]}
          position={[-6, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane711.geometry}
          material={materials["Material.711"]}
          position={[-21, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane712.geometry}
          material={materials["Material.712"]}
          position={[-19.6, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane713.geometry}
          material={materials["Material.713"]}
          position={[-14.2, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane714.geometry}
          material={materials["Material.714"]}
          position={[-12.8, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane715.geometry}
          material={materials["Material.715"]}
          position={[-43.2, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane716.geometry}
          material={materials["Material.716"]}
          position={[-21, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane717.geometry}
          material={materials["Material.717"]}
          position={[-21, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane718.geometry}
          material={materials["Material.718"]}
          position={[-19.6, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane719.geometry}
          material={materials["Material.719"]}
          position={[-19.6, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane720.geometry}
          material={materials["Material.720"]}
          position={[-19.6, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane721.geometry}
          material={materials["Material.721"]}
          position={[-14.2, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane722.geometry}
          material={materials["Material.722"]}
          position={[-14.2, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane723.geometry}
          material={materials["Material.723"]}
          position={[-14.2, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane724.geometry}
          material={materials["Material.724"]}
          position={[-12.8, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane725.geometry}
          material={materials["Material.725"]}
          position={[-12.8, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane726.geometry}
          material={materials["Material.726"]}
          position={[-12.8, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane727.geometry}
          material={materials["Material.727"]}
          position={[-7.4, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane728.geometry}
          material={materials["Material.728"]}
          position={[-7.4, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane729.geometry}
          material={materials["Material.729"]}
          position={[-7.4, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane730.geometry}
          material={materials["Material.730"]}
          position={[-6, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane731.geometry}
          material={materials["Material.731"]}
          position={[-6, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane732.geometry}
          material={materials["Material.732"]}
          position={[-6, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane733.geometry}
          material={materials["Material.733"]}
          position={[-29.6, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane734.geometry}
          material={materials["Material.734"]}
          position={[-21, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane735.geometry}
          material={materials["Material.735"]}
          position={[-21, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane736.geometry}
          material={materials["Material.736"]}
          position={[-19.6, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane737.geometry}
          material={materials["Material.737"]}
          position={[-19.6, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane738.geometry}
          material={materials["Material.738"]}
          position={[-19.6, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane739.geometry}
          material={materials["Material.739"]}
          position={[-14.2, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane740.geometry}
          material={materials["Material.740"]}
          position={[-14.2, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane741.geometry}
          material={materials["Material.741"]}
          position={[-14.2, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane742.geometry}
          material={materials["Material.742"]}
          position={[-12.8, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane743.geometry}
          material={materials["Material.743"]}
          position={[-12.8, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane744.geometry}
          material={materials["Material.744"]}
          position={[-12.8, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane745.geometry}
          material={materials["Material.745"]}
          position={[-7.4, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane746.geometry}
          material={materials["Material.746"]}
          position={[-7.4, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane747.geometry}
          material={materials["Material.747"]}
          position={[-7.4, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane748.geometry}
          material={materials["Material.748"]}
          position={[-6, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane749.geometry}
          material={materials["Material.749"]}
          position={[-6, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane750.geometry}
          material={materials["Material.750"]}
          position={[-6, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane751.geometry}
          material={materials["Material.751"]}
          position={[38.4, 1.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane752.geometry}
          material={materials["Material.752"]}
          position={[38.4, 4.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane753.geometry}
          material={materials["Material.753"]}
          position={[38.4, 7.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane754.geometry}
          material={materials["Material.754"]}
          position={[33, 1.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane755.geometry}
          material={materials["Material.755"]}
          position={[33, 4.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane756.geometry}
          material={materials["Material.756"]}
          position={[33, 7.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane757.geometry}
          material={materials["Material.757"]}
          position={[31.6, 1.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane758.geometry}
          material={materials["Material.758"]}
          position={[31.6, 4.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane759.geometry}
          material={materials["Material.759"]}
          position={[31.6, 7.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane760.geometry}
          material={materials["Material.760"]}
          position={[26.2, 1.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane761.geometry}
          material={materials["Material.761"]}
          position={[26.2, 4.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane762.geometry}
          material={materials["Material.762"]}
          position={[26.2, 7.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane763.geometry}
          material={materials["Material.763"]}
          position={[24.8, 1.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane764.geometry}
          material={materials["Material.764"]}
          position={[24.8, 4.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane765.geometry}
          material={materials["Material.765"]}
          position={[24.8, 7.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane766.geometry}
          material={materials["Material.766"]}
          position={[19.4, 1.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane767.geometry}
          material={materials["Material.767"]}
          position={[19.4, 4.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane768.geometry}
          material={materials["Material.768"]}
          position={[19.4, 7.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane769.geometry}
          material={materials["Material.769"]}
          position={[18, 1.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane770.geometry}
          material={materials["Material.770"]}
          position={[18, 4.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane771.geometry}
          material={materials["Material.771"]}
          position={[18, 7.5, -5.45]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane772.geometry}
          material={materials["Material.772"]}
          position={[38.4, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane773.geometry}
          material={materials["Material.773"]}
          position={[38.4, 4.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane774.geometry}
          material={materials["Material.774"]}
          position={[38.4, 7.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane775.geometry}
          material={materials["Material.775"]}
          position={[33, 4.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane776.geometry}
          material={materials["Material.776"]}
          position={[33, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane777.geometry}
          material={materials["Material.777"]}
          position={[33, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane778.geometry}
          material={materials["Material.778"]}
          position={[33, 7.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane779.geometry}
          material={materials["Material.779"]}
          position={[31.6, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane780.geometry}
          material={materials["Material.780"]}
          position={[31.6, 4.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane781.geometry}
          material={materials["Material.781"]}
          position={[31.6, 7.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane782.geometry}
          material={materials["Material.782"]}
          position={[26.2, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane783.geometry}
          material={materials["Material.783"]}
          position={[26.2, 4.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane784.geometry}
          material={materials["Material.784"]}
          position={[26.2, 7.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane785.geometry}
          material={materials["Material.785"]}
          position={[24.8, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane786.geometry}
          material={materials["Material.786"]}
          position={[24.8, 4.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane787.geometry}
          material={materials["Material.787"]}
          position={[24.8, 7.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane788.geometry}
          material={materials["Material.788"]}
          position={[19.4, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane789.geometry}
          material={materials["Material.789"]}
          position={[19.4, 4.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane790.geometry}
          material={materials["Material.790"]}
          position={[19.4, 7.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane791.geometry}
          material={materials["Material.791"]}
          position={[18, 1.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane792.geometry}
          material={materials["Material.792"]}
          position={[18, 4.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane793.geometry}
          material={materials["Material.793"]}
          position={[18, 7.5, -5.48]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane794.geometry}
          material={materials["Material.794"]}
          position={[-21, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane795.geometry}
          material={materials["Material.795"]}
          position={[-21, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane796.geometry}
          material={materials["Material.796"]}
          position={[-44.6, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane797.geometry}
          material={materials["Material.797"]}
          position={[-36.4, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane798.geometry}
          material={materials["Material.798"]}
          position={[-29.6, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane799.geometry}
          material={materials["Material.799"]}
          position={[-31, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane800.geometry}
          material={materials["Material.800"]}
          position={[-37.8, 10.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane801.geometry}
          material={materials["Material.801"]}
          position={[-44.6, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane802.geometry}
          material={materials["Material.802"]}
          position={[-29.6, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane803.geometry}
          material={materials["Material.803"]}
          position={[-31, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane804.geometry}
          material={materials["Material.804"]}
          position={[-36.4, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane805.geometry}
          material={materials["Material.805"]}
          position={[-37.8, 10.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane806.geometry}
          material={materials["Material.806"]}
          position={[-29.6, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane807.geometry}
          material={materials["Material.807"]}
          position={[-29.6, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane808.geometry}
          material={materials["Material.808"]}
          position={[-29.6, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane809.geometry}
          material={materials["Material.809"]}
          position={[-31, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane810.geometry}
          material={materials["Material.810"]}
          position={[-31, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane811.geometry}
          material={materials["Material.811"]}
          position={[-31, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane812.geometry}
          material={materials["Material.812"]}
          position={[-36.4, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane813.geometry}
          material={materials["Material.813"]}
          position={[-36.4, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane814.geometry}
          material={materials["Material.814"]}
          position={[-36.4, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane815.geometry}
          material={materials["Material.815"]}
          position={[-36.4, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane816.geometry}
          material={materials["Material.816"]}
          position={[-37.8, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane817.geometry}
          material={materials["Material.817"]}
          position={[-37.8, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane818.geometry}
          material={materials["Material.818"]}
          position={[-37.8, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane819.geometry}
          material={materials["Material.819"]}
          position={[-43.2, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane820.geometry}
          material={materials["Material.820"]}
          position={[-43.2, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane821.geometry}
          material={materials["Material.821"]}
          position={[-43.2, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane822.geometry}
          material={materials["Material.822"]}
          position={[-44.6, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane823.geometry}
          material={materials["Material.823"]}
          position={[-44.6, 4.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane824.geometry}
          material={materials["Material.824"]}
          position={[-44.6, 7.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane825.geometry}
          material={materials["Material.825"]}
          position={[-29.6, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane826.geometry}
          material={materials["Material.826"]}
          position={[-29.6, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane827.geometry}
          material={materials["Material.827"]}
          position={[-29.6, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane828.geometry}
          material={materials["Material.828"]}
          position={[-31, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane829.geometry}
          material={materials["Material.829"]}
          position={[-31, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane830.geometry}
          material={materials["Material.830"]}
          position={[-31, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane831.geometry}
          material={materials["Material.831"]}
          position={[-36.4, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane832.geometry}
          material={materials["Material.832"]}
          position={[-36.4, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane833.geometry}
          material={materials["Material.833"]}
          position={[-36.4, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane834.geometry}
          material={materials["Material.834"]}
          position={[-37.8, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane835.geometry}
          material={materials["Material.835"]}
          position={[-37.8, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane836.geometry}
          material={materials["Material.836"]}
          position={[-37.8, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane837.geometry}
          material={materials["Material.837"]}
          position={[-43.2, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane838.geometry}
          material={materials["Material.838"]}
          position={[-43.2, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane839.geometry}
          material={materials["Material.839"]}
          position={[-43.2, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane840.geometry}
          material={materials["Material.840"]}
          position={[-44.6, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane841.geometry}
          material={materials["Material.841"]}
          position={[-44.6, 4.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane842.geometry}
          material={materials["Material.842"]}
          position={[-44.6, 7.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane843.geometry}
          material={materials["Material.843"]}
          position={[-21, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane844.geometry}
          material={materials["Material.844"]}
          position={[-37.8, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane845.geometry}
          material={materials["Material.845"]}
          position={[-29.6, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane846.geometry}
          material={materials["Material.846"]}
          position={[-31, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane847.geometry}
          material={materials["Material.847"]}
          position={[-36.4, 10.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane848.geometry}
          material={materials["Material.848"]}
          position={[-29.6, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane849.geometry}
          material={materials["Material.849"]}
          position={[-29.6, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane850.geometry}
          material={materials["Material.850"]}
          position={[-29.6, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane851.geometry}
          material={materials["Material.851"]}
          position={[-31, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane852.geometry}
          material={materials["Material.852"]}
          position={[-31, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane853.geometry}
          material={materials["Material.853"]}
          position={[-31, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane854.geometry}
          material={materials["Material.854"]}
          position={[-31, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane855.geometry}
          material={materials["Material.855"]}
          position={[-36.4, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane856.geometry}
          material={materials["Material.856"]}
          position={[-36.4, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane857.geometry}
          material={materials["Material.857"]}
          position={[-36.4, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane858.geometry}
          material={materials["Material.858"]}
          position={[-37.8, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane859.geometry}
          material={materials["Material.859"]}
          position={[-37.8, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane860.geometry}
          material={materials["Material.860"]}
          position={[-37.8, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane861.geometry}
          material={materials["Material.861"]}
          position={[-43.2, 1.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane862.geometry}
          material={materials["Material.862"]}
          position={[-43.2, 4.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane863.geometry}
          material={materials["Material.863"]}
          position={[-43.2, 7.5, -5.46]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane864.geometry}
          material={materials["Material.864"]}
          position={[-21, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane865.geometry}
          material={materials["Material.865"]}
          position={[-43.2, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane866.geometry}
          material={materials["Material.866"]}
          position={[-37.8, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane867.geometry}
          material={materials["Material.867"]}
          position={[-29.6, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane868.geometry}
          material={materials["Material.868"]}
          position={[-31, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane869.geometry}
          material={materials["Material.869"]}
          position={[-36.4, 10.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane870.geometry}
          material={materials["Material.870"]}
          position={[-29.6, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane871.geometry}
          material={materials["Material.871"]}
          position={[-29.6, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane872.geometry}
          material={materials["Material.872"]}
          position={[-31, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane873.geometry}
          material={materials["Material.873"]}
          position={[-31, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane874.geometry}
          material={materials["Material.874"]}
          position={[-31, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane875.geometry}
          material={materials["Material.875"]}
          position={[-36.4, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane876.geometry}
          material={materials["Material.876"]}
          position={[-36.4, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane877.geometry}
          material={materials["Material.877"]}
          position={[-36.4, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane878.geometry}
          material={materials["Material.878"]}
          position={[-37.8, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane879.geometry}
          material={materials["Material.879"]}
          position={[-37.8, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane880.geometry}
          material={materials["Material.880"]}
          position={[-37.8, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane881.geometry}
          material={materials["Material.881"]}
          position={[-43.2, 1.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane882.geometry}
          material={materials["Material.882"]}
          position={[-43.2, 4.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane883.geometry}
          material={materials["Material.883"]}
          position={[-43.2, 7.5, -5.49]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane884.geometry}
          material={materials["Material.884"]}
          position={[-5.06, 10.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane885.geometry}
          material={materials["Material.885"]}
          position={[-5.09, 10.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane886.geometry}
          material={materials["Material.886"]}
          position={[-0.6, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane887.geometry}
          material={materials["Material.887"]}
          position={[-21, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane888.geometry}
          material={materials["Material.888"]}
          position={[-6, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane889.geometry}
          material={materials["Material.889"]}
          position={[-7.4, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane890.geometry}
          material={materials["Material.890"]}
          position={[-12.8, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane891.geometry}
          material={materials["Material.891"]}
          position={[-14.2, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane892.geometry}
          material={materials["Material.892"]}
          position={[-19.6, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane893.geometry}
          material={materials["Material.893"]}
          position={[-0.6, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane894.geometry}
          material={materials["Material.894"]}
          position={[-0.6, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane895.geometry}
          material={materials["Material.895"]}
          position={[-0.6, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane896.geometry}
          material={materials["Material.896"]}
          position={[-6, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane897.geometry}
          material={materials["Material.897"]}
          position={[-6, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane898.geometry}
          material={materials["Material.898"]}
          position={[-6, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane899.geometry}
          material={materials["Material.899"]}
          position={[-7.4, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane900.geometry}
          material={materials["Material.900"]}
          position={[-7.4, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane901.geometry}
          material={materials["Material.901"]}
          position={[-7.4, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane902.geometry}
          material={materials["Material.902"]}
          position={[-12.8, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane903.geometry}
          material={materials["Material.903"]}
          position={[-12.8, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane904.geometry}
          material={materials["Material.904"]}
          position={[-12.8, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane905.geometry}
          material={materials["Material.905"]}
          position={[-14.2, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane906.geometry}
          material={materials["Material.906"]}
          position={[-14.2, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane907.geometry}
          material={materials["Material.907"]}
          position={[-14.2, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane908.geometry}
          material={materials["Material.908"]}
          position={[-19.6, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane909.geometry}
          material={materials["Material.909"]}
          position={[-19.6, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane910.geometry}
          material={materials["Material.910"]}
          position={[-19.6, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane911.geometry}
          material={materials["Material.911"]}
          position={[-21, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane912.geometry}
          material={materials["Material.912"]}
          position={[-21, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane913.geometry}
          material={materials["Material.913"]}
          position={[-21, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane914.geometry}
          material={materials["Material.914"]}
          position={[-44.6, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane915.geometry}
          material={materials["Material.915"]}
          position={[-26.4, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane916.geometry}
          material={materials["Material.916"]}
          position={[-26.4, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane917.geometry}
          material={materials["Material.917"]}
          position={[-0.6, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane918.geometry}
          material={materials["Material.918"]}
          position={[-21, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane919.geometry}
          material={materials["Material.919"]}
          position={[-6, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane920.geometry}
          material={materials["Material.920"]}
          position={[-7.4, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane921.geometry}
          material={materials["Material.921"]}
          position={[-12.8, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane922.geometry}
          material={materials["Material.922"]}
          position={[-14.2, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane923.geometry}
          material={materials["Material.923"]}
          position={[-19.6, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane924.geometry}
          material={materials["Material.924"]}
          position={[-0.6, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane925.geometry}
          material={materials["Material.925"]}
          position={[-0.6, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane926.geometry}
          material={materials["Material.926"]}
          position={[-0.6, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane927.geometry}
          material={materials["Material.927"]}
          position={[-6, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane928.geometry}
          material={materials["Material.928"]}
          position={[-6, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane929.geometry}
          material={materials["Material.929"]}
          position={[-6, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane930.geometry}
          material={materials["Material.930"]}
          position={[-7.4, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane931.geometry}
          material={materials["Material.931"]}
          position={[-7.4, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane932.geometry}
          material={materials["Material.932"]}
          position={[-7.4, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane933.geometry}
          material={materials["Material.933"]}
          position={[-12.8, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane934.geometry}
          material={materials["Material.934"]}
          position={[-12.8, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane935.geometry}
          material={materials["Material.935"]}
          position={[-12.8, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane936.geometry}
          material={materials["Material.936"]}
          position={[-14.2, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane938.geometry}
          material={materials["Material.938"]}
          position={[-14.2, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane939.geometry}
          material={materials["Material.939"]}
          position={[-14.2, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane937.geometry}
          material={materials["Material.940"]}
          position={[-19.6, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane940.geometry}
          material={materials["Material.941"]}
          position={[-19.6, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane941.geometry}
          material={materials["Material.942"]}
          position={[-19.6, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane942.geometry}
          material={materials["Material.943"]}
          position={[-21, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane943.geometry}
          material={materials["Material.944"]}
          position={[-21, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane944.geometry}
          material={materials["Material.945"]}
          position={[-21, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane945.geometry}
          material={materials["Material.946"]}
          position={[-43.2, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane946.geometry}
          material={materials["Material.947"]}
          position={[-26.4, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane947.geometry}
          material={materials["Material.948"]}
          position={[-26.4, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane948.geometry}
          material={materials["Material.949"]}
          position={[-26.4, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane949.geometry}
          material={materials["Material.950"]}
          position={[-31, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane950.geometry}
          material={materials["Material.951"]}
          position={[-43.2, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane951.geometry}
          material={materials["Material.952"]}
          position={[-37.8, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane952.geometry}
          material={materials["Material.953"]}
          position={[-36.4, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane953.geometry}
          material={materials["Material.954"]}
          position={[-43.2, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane954.geometry}
          material={materials["Material.955"]}
          position={[-31, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane955.geometry}
          material={materials["Material.956"]}
          position={[-31, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane956.geometry}
          material={materials["Material.957"]}
          position={[-36.4, 10.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane957.geometry}
          material={materials["Material.958"]}
          position={[-36.4, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane958.geometry}
          material={materials["Material.959"]}
          position={[-36.4, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane959.geometry}
          material={materials["Material.960"]}
          position={[-37.8, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane960.geometry}
          material={materials["Material.961"]}
          position={[-37.8, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane961.geometry}
          material={materials["Material.962"]}
          position={[-37.8, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane962.geometry}
          material={materials["Material.963"]}
          position={[-43.2, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane963.geometry}
          material={materials["Material.964"]}
          position={[-43.2, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane964.geometry}
          material={materials["Material.965"]}
          position={[-43.2, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane965.geometry}
          material={materials["Material.966"]}
          position={[-44.6, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane966.geometry}
          material={materials["Material.967"]}
          position={[-44.6, 4.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane967.geometry}
          material={materials["Material.968"]}
          position={[-44.6, 7.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane968.geometry}
          material={materials["Material.969"]}
          position={[-26.4, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane969.geometry}
          material={materials["Material.970"]}
          position={[-31, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane970.geometry}
          material={materials["Material.971"]}
          position={[-44.6, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane971.geometry}
          material={materials["Material.972"]}
          position={[-36.4, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane972.geometry}
          material={materials["Material.973"]}
          position={[-37.8, 10.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane973.geometry}
          material={materials["Material.974"]}
          position={[-43.2, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane974.geometry}
          material={materials["Material.975"]}
          position={[-31, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane975.geometry}
          material={materials["Material.976"]}
          position={[-31, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane976.geometry}
          material={materials["Material.977"]}
          position={[-36.4, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane977.geometry}
          material={materials["Material.978"]}
          position={[-36.4, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane978.geometry}
          material={materials["Material.979"]}
          position={[-36.4, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane979.geometry}
          material={materials["Material.980"]}
          position={[-37.8, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane980.geometry}
          material={materials["Material.981"]}
          position={[-37.8, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane981.geometry}
          material={materials["Material.982"]}
          position={[-37.8, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane982.geometry}
          material={materials["Material.983"]}
          position={[-43.2, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane983.geometry}
          material={materials["Material.984"]}
          position={[-43.2, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane984.geometry}
          material={materials["Material.985"]}
          position={[-43.2, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane985.geometry}
          material={materials["Material.986"]}
          position={[-44.6, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane986.geometry}
          material={materials["Material.987"]}
          position={[-44.6, 4.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane987.geometry}
          material={materials["Material.988"]}
          position={[-44.6, 7.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane988.geometry}
          material={materials["Material.989"]}
          position={[45.4, 1, -2.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane989.geometry}
          material={materials["Material.990"]}
          position={[45.4, 4, -2.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane990.geometry}
          material={materials["Material.991"]}
          position={[45.4, 7, -2.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane991.geometry}
          material={materials["Material.992"]}
          position={[7.8, 1, -26.55]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane992.geometry}
          material={materials["Material.993"]}
          position={[7.8, 7, -26.55]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane993.geometry}
          material={materials["Material.994"]}
          position={[7.8, 4, -26.55]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane994.geometry}
          material={materials["Material.995"]}
          position={[-54.2, 1, -2.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane995.geometry}
          material={materials["Material.996"]}
          position={[-54.2, 4, -2.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane996.geometry}
          material={materials["Material.997"]}
          position={[-54.2, 7, -2.05]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane997.geometry}
          material={materials["Material.998"]}
          position={[-54.2, 1, 33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane998.geometry}
          material={materials["Material.999"]}
          position={[-54.2, 4, 33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane999.geometry}
          material={materials["Material.1000"]}
          position={[-54.2, 7, 33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1000.geometry}
          material={materials["Material.1001"]}
          position={[-54.2, 1, -33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1001.geometry}
          material={materials["Material.1002"]}
          position={[-54.2, 4, -33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1002.geometry}
          material={materials["Material.1003"]}
          position={[-54.2, 7, -33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1003.geometry}
          material={materials["Material.1004"]}
          position={[2.6, 1, 33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1004.geometry}
          material={materials["Material.1005"]}
          position={[2.6, 4, 33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1005.geometry}
          material={materials["Material.1006"]}
          position={[2.6, 7, 33.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1006.geometry}
          material={materials["Material.1007"]}
          position={[-0.6, 1.5, 7.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1007.geometry}
          material={materials["Material.1008"]}
          position={[-0.6, 1.5, 7.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1008.geometry}
          material={materials["Material.1009"]}
          position={[-5.06, 10.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1009.geometry}
          material={materials["Material.1010"]}
          position={[-5.06, 10.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1010.geometry}
          material={materials["Material.1011"]}
          position={[-5.06, 7.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1011.geometry}
          material={materials["Material.1012"]}
          position={[-5.06, 10.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1012.geometry}
          material={materials["Material.1013"]}
          position={[-5.09, 7.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1013.geometry}
          material={materials["Material.1014"]}
          position={[-5.09, 10.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1014.geometry}
          material={materials["Material.1015"]}
          position={[-5.09, 4.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1015.geometry}
          material={materials["Material.1016"]}
          position={[-5.09, 4.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1016.geometry}
          material={materials["Material.1017"]}
          position={[-5.06, 1.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1017.geometry}
          material={materials["Material.1018"]}
          position={[-5.06, 4.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1018.geometry}
          material={materials["Material.1019"]}
          position={[-5.06, 7.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1019.geometry}
          material={materials["Material.1020"]}
          position={[-5.06, 1.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1020.geometry}
          material={materials["Material.1021"]}
          position={[-5.06, 4.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1021.geometry}
          material={materials["Material.1022"]}
          position={[-5.06, 7.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1022.geometry}
          material={materials["Material.1023"]}
          position={[-5.06, 10.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1023.geometry}
          material={materials["Material.1024"]}
          position={[-5.06, 4.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1024.geometry}
          material={materials["Material.1025"]}
          position={[-5.06, 1.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1025.geometry}
          material={materials["Material.1026"]}
          position={[-5.06, 1.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1026.geometry}
          material={materials["Material.1027"]}
          position={[-5.06, 4.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1027.geometry}
          material={materials["Material.1028"]}
          position={[-5.06, 7.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1028.geometry}
          material={materials["Material.1029"]}
          position={[7.46, 10.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1029.geometry}
          material={materials["Material.1030"]}
          position={[-5.06, 4.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1030.geometry}
          material={materials["Material.1031"]}
          position={[-5.06, 7.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1031.geometry}
          material={materials["Material.1032"]}
          position={[-5.09, 4.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1032.geometry}
          material={materials["Material.1033"]}
          position={[-0.29, 4.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1033.geometry}
          material={materials["Material.1034"]}
          position={[-5.09, 1.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1034.geometry}
          material={materials["Material.1035"]}
          position={[-5.09, 10.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1035.geometry}
          material={materials["Material.1036"]}
          position={[-5.09, 7.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1036.geometry}
          material={materials["Material.1037"]}
          position={[-5.09, 1.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1037.geometry}
          material={materials["Material.1038"]}
          position={[-5.09, 10.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1038.geometry}
          material={materials["Material.1039"]}
          position={[-5.09, 7.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1039.geometry}
          material={materials["Material.1040"]}
          position={[-5.09, 1.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1040.geometry}
          material={materials["Material.1041"]}
          position={[-5.09, 4.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1041.geometry}
          material={materials["Material.1042"]}
          position={[-5.09, 7.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1042.geometry}
          material={materials["Material.1043"]}
          position={[-5.09, 1.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1043.geometry}
          material={materials["Material.1044"]}
          position={[7.49, 10.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1044.geometry}
          material={materials["Material.1045"]}
          position={[-5.09, 4.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1045.geometry}
          material={materials["Material.1046"]}
          position={[-5.09, 7.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1046.geometry}
          material={materials["Material.1047"]}
          position={[-31, 1.5, 42.86]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1047.geometry}
          material={materials["Material.1048"]}
          position={[-31, 1.5, 42.89]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1048.geometry}
          material={materials["Material.1049"]}
          position={[-31, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1049.geometry}
          material={materials["Material.1050"]}
          position={[-7.4, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1050.geometry}
          material={materials["Material.1051"]}
          position={[-36.4, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1051.geometry}
          material={materials["Material.1052"]}
          position={[-37.8, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1052.geometry}
          material={materials["Material.1053"]}
          position={[-26.4, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1053.geometry}
          material={materials["Material.1054"]}
          position={[-37.8, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1054.geometry}
          material={materials["Material.1055"]}
          position={[-36.4, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1055.geometry}
          material={materials["Material.1056"]}
          position={[-31, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1056.geometry}
          material={materials["Material.1057"]}
          position={[-43.2, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1057.geometry}
          material={materials["Material.1058"]}
          position={[-43.2, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1058.geometry}
          material={materials["Material.1059"]}
          position={[-43.2, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1059.geometry}
          material={materials["Material.1060"]}
          position={[-37.8, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1060.geometry}
          material={materials["Material.1061"]}
          position={[-37.8, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1061.geometry}
          material={materials["Material.1062"]}
          position={[-37.8, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1062.geometry}
          material={materials["Material.1063"]}
          position={[-36.4, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1063.geometry}
          material={materials["Material.1064"]}
          position={[-36.4, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1064.geometry}
          material={materials["Material.1065"]}
          position={[-36.4, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1065.geometry}
          material={materials["Material.1066"]}
          position={[-31, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1066.geometry}
          material={materials["Material.1067"]}
          position={[-31, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1067.geometry}
          material={materials["Material.1068"]}
          position={[-31, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1068.geometry}
          material={materials["Material.1069"]}
          position={[-31, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1069.geometry}
          material={materials["Material.1070"]}
          position={[-31, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1070.geometry}
          material={materials["Material.1071"]}
          position={[-31, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1071.geometry}
          material={materials["Material.1072"]}
          position={[-36.4, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1072.geometry}
          material={materials["Material.1073"]}
          position={[-36.4, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1073.geometry}
          material={materials["Material.1074"]}
          position={[-36.4, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1074.geometry}
          material={materials["Material.1075"]}
          position={[-37.8, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1075.geometry}
          material={materials["Material.1076"]}
          position={[-37.8, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1076.geometry}
          material={materials["Material.1077"]}
          position={[-37.8, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1077.geometry}
          material={materials["Material.1078"]}
          position={[-43.2, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1078.geometry}
          material={materials["Material.1079"]}
          position={[-43.2, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1079.geometry}
          material={materials["Material.1080"]}
          position={[-43.2, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1080.geometry}
          material={materials["Material.1081"]}
          position={[-26.4, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1081.geometry}
          material={materials["Material.1082"]}
          position={[-7.4, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1082.geometry}
          material={materials["Material.1083"]}
          position={[-19.6, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1083.geometry}
          material={materials["Material.1084"]}
          position={[-21, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1084.geometry}
          material={materials["Material.1085"]}
          position={[-14.2, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1085.geometry}
          material={materials["Material.1086"]}
          position={[-26.4, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1086.geometry}
          material={materials["Material.1087"]}
          position={[-26.4, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1087.geometry}
          material={materials["Material.1088"]}
          position={[-26.4, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1088.geometry}
          material={materials["Material.1089"]}
          position={[-21, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1089.geometry}
          material={materials["Material.1090"]}
          position={[-21, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1090.geometry}
          material={materials["Material.1091"]}
          position={[-21, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1091.geometry}
          material={materials["Material.1092"]}
          position={[-19.6, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1092.geometry}
          material={materials["Material.1093"]}
          position={[-19.6, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1093.geometry}
          material={materials["Material.1094"]}
          position={[-19.6, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1094.geometry}
          material={materials["Material.1095"]}
          position={[-14.2, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1095.geometry}
          material={materials["Material.1096"]}
          position={[-14.2, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1096.geometry}
          material={materials["Material.1097"]}
          position={[-14.2, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1097.geometry}
          material={materials["Material.1098"]}
          position={[-12.8, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1098.geometry}
          material={materials["Material.1099"]}
          position={[-12.8, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1099.geometry}
          material={materials["Material.1100"]}
          position={[-12.8, 10.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1100.geometry}
          material={materials["Material.1101"]}
          position={[-12.8, 7.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1101.geometry}
          material={materials["Material.1102"]}
          position={[-7.4, 1.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1102.geometry}
          material={materials["Material.1103"]}
          position={[-7.4, 4.5, 30.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1103.geometry}
          material={materials["Material.1104"]}
          position={[-7.4, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1104.geometry}
          material={materials["Material.1105"]}
          position={[-26.4, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1105.geometry}
          material={materials["Material.1106"]}
          position={[-26.4, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1106.geometry}
          material={materials["Material.1107"]}
          position={[-26.4, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1107.geometry}
          material={materials["Material.1108"]}
          position={[-12.8, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1108.geometry}
          material={materials["Material.1109"]}
          position={[-21, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1109.geometry}
          material={materials["Material.1110"]}
          position={[-19.6, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1110.geometry}
          material={materials["Material.1111"]}
          position={[-14.2, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1111.geometry}
          material={materials["Material.1112"]}
          position={[-21, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1112.geometry}
          material={materials["Material.1113"]}
          position={[-21, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1113.geometry}
          material={materials["Material.1114"]}
          position={[-21, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1114.geometry}
          material={materials["Material.1115"]}
          position={[-19.6, 10.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1115.geometry}
          material={materials["Material.1116"]}
          position={[-19.6, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1116.geometry}
          material={materials["Material.1117"]}
          position={[-19.6, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1117.geometry}
          material={materials["Material.1118"]}
          position={[-14.2, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1118.geometry}
          material={materials["Material.1119"]}
          position={[-14.2, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1119.geometry}
          material={materials["Material.1120"]}
          position={[-14.2, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1120.geometry}
          material={materials["Material.1121"]}
          position={[-12.8, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1121.geometry}
          material={materials["Material.1122"]}
          position={[-12.8, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1122.geometry}
          material={materials["Material.1123"]}
          position={[-12.8, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1123.geometry}
          material={materials["Material.1124"]}
          position={[-7.4, 1.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1124.geometry}
          material={materials["Material.1125"]}
          position={[-7.4, 4.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1125.geometry}
          material={materials["Material.1126"]}
          position={[-7.4, 7.5, 30.31]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1126.geometry}
          material={materials["Material.1127"]}
          position={[-5.06, 1.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1127.geometry}
          material={materials["Material.1128"]}
          position={[-5.09, 1.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1128.geometry}
          material={materials["Material.1129"]}
          position={[7.46, 10.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1129.geometry}
          material={materials["Material.1130"]}
          position={[7.46, 10.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1130.geometry}
          material={materials["Material.1131"]}
          position={[7.46, 10.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1131.geometry}
          material={materials["Material.1132"]}
          position={[7.46, 10.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1132.geometry}
          material={materials["Material.1133"]}
          position={[7.46, 10.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1133.geometry}
          material={materials["Material.1134"]}
          position={[7.46, 10.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1134.geometry}
          material={materials["Material.1135"]}
          position={[-0.26, 10.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1135.geometry}
          material={materials["Material.1136"]}
          position={[7.46, 4.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1136.geometry}
          material={materials["Material.1137"]}
          position={[7.46, 7.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1137.geometry}
          material={materials["Material.1138"]}
          position={[12.26, 10.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1138.geometry}
          material={materials["Material.1139"]}
          position={[7.46, 4.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1139.geometry}
          material={materials["Material.1140"]}
          position={[7.46, 7.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1140.geometry}
          material={materials["Material.1141"]}
          position={[7.46, 1.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1141.geometry}
          material={materials["Material.1142"]}
          position={[7.46, 4.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1142.geometry}
          material={materials["Material.1143"]}
          position={[7.46, 7.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1143.geometry}
          material={materials["Material.1144"]}
          position={[7.46, 1.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1144.geometry}
          material={materials["Material.1145"]}
          position={[7.46, 4.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1145.geometry}
          material={materials["Material.1146"]}
          position={[7.46, 7.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1146.geometry}
          material={materials["Material.1147"]}
          position={[7.46, 1.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1147.geometry}
          material={materials["Material.1148"]}
          position={[7.46, 4.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1148.geometry}
          material={materials["Material.1149"]}
          position={[7.46, 7.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1149.geometry}
          material={materials["Material.1150"]}
          position={[7.46, 1.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1150.geometry}
          material={materials["Material.1151"]}
          position={[7.46, 4.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1151.geometry}
          material={materials["Material.1152"]}
          position={[7.46, 7.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1152.geometry}
          material={materials["Material.1153"]}
          position={[7.46, 1.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1153.geometry}
          material={materials["Material.1154"]}
          position={[7.46, 4.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1154.geometry}
          material={materials["Material.1155"]}
          position={[7.46, 7.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1155.geometry}
          material={materials["Material.1156"]}
          position={[7.49, 10.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1156.geometry}
          material={materials["Material.1157"]}
          position={[7.49, 10.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1157.geometry}
          material={materials["Material.1158"]}
          position={[7.46, 1.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1158.geometry}
          material={materials["Material.1159"]}
          position={[12.29, 10.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1159.geometry}
          material={materials["Material.1160"]}
          position={[7.49, 10.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1160.geometry}
          material={materials["Material.1161"]}
          position={[7.49, 10.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1161.geometry}
          material={materials["Material.1162"]}
          position={[7.49, 10.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1162.geometry}
          material={materials["Material.1163"]}
          position={[7.49, 10.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1163.geometry}
          material={materials["Material.1164"]}
          position={[7.49, 4.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1164.geometry}
          material={materials["Material.1165"]}
          position={[7.49, 7.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1165.geometry}
          material={materials["Material.1166"]}
          position={[7.46, 1.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1166.geometry}
          material={materials["Material.1167"]}
          position={[7.49, 1.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1167.geometry}
          material={materials["Material.1168"]}
          position={[7.49, 4.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1168.geometry}
          material={materials["Material.1169"]}
          position={[7.49, 7.5, 25]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1169.geometry}
          material={materials["Material.1170"]}
          position={[7.49, 1.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1170.geometry}
          material={materials["Material.1171"]}
          position={[7.49, 4.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1171.geometry}
          material={materials["Material.1172"]}
          position={[7.49, 7.5, 19.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1172.geometry}
          material={materials["Material.1173"]}
          position={[7.49, 1.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1173.geometry}
          material={materials["Material.1174"]}
          position={[7.49, 4.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1174.geometry}
          material={materials["Material.1175"]}
          position={[7.49, 7.5, 18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1175.geometry}
          material={materials["Material.1176"]}
          position={[7.49, 1.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1176.geometry}
          material={materials["Material.1177"]}
          position={[7.49, 4.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1177.geometry}
          material={materials["Material.1178"]}
          position={[7.49, 7.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1178.geometry}
          material={materials["Material.1179"]}
          position={[7.49, 1.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1179.geometry}
          material={materials["Material.1180"]}
          position={[7.49, 4.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1180.geometry}
          material={materials["Material.1181"]}
          position={[7.49, 7.5, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1181.geometry}
          material={materials["Material.1182"]}
          position={[7.49, 1.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1182.geometry}
          material={materials["Material.1183"]}
          position={[7.49, 4.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1183.geometry}
          material={materials["Material.1184"]}
          position={[7.49, 7.5, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1184.geometry}
          material={materials["Material.1185"]}
          position={[12.26, 10.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1185.geometry}
          material={materials["Material.1186"]}
          position={[12.26, 10.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1186.geometry}
          material={materials["Material.1187"]}
          position={[12.26, 10.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1187.geometry}
          material={materials["Material.1188"]}
          position={[12.26, 10.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1188.geometry}
          material={materials["Material.1189"]}
          position={[7.49, 1.5, 26.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1189.geometry}
          material={materials["Material.1190"]}
          position={[12.29, 10.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1190.geometry}
          material={materials["Material.1191"]}
          position={[12.29, 10.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1191.geometry}
          material={materials["Material.1192"]}
          position={[12.29, 10.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1192.geometry}
          material={materials["Material.1193"]}
          position={[12.29, 10.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1193.geometry}
          material={materials["Material.1194"]}
          position={[12.26, 1.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1194.geometry}
          material={materials["Material.1195"]}
          position={[12.26, 4.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1195.geometry}
          material={materials["Material.1196"]}
          position={[12.26, 7.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1196.geometry}
          material={materials["Material.1197"]}
          position={[12.26, 1.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1197.geometry}
          material={materials["Material.1198"]}
          position={[12.26, 4.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1198.geometry}
          material={materials["Material.1199"]}
          position={[12.26, 7.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1199.geometry}
          material={materials["Material.1200"]}
          position={[12.29, 1.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1200.geometry}
          material={materials["Material.1201"]}
          position={[12.26, 1.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1201.geometry}
          material={materials["Material.1202"]}
          position={[12.26, 4.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1202.geometry}
          material={materials["Material.1203"]}
          position={[12.26, 7.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1203.geometry}
          material={materials["Material.1204"]}
          position={[12.26, 1.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1204.geometry}
          material={materials["Material.1205"]}
          position={[12.26, 4.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1205.geometry}
          material={materials["Material.1206"]}
          position={[12.26, 7.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1206.geometry}
          material={materials["Material.1207"]}
          position={[12.26, 1.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1207.geometry}
          material={materials["Material.1208"]}
          position={[12.26, 4.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1208.geometry}
          material={materials["Material.1209"]}
          position={[12.26, 7.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1209.geometry}
          material={materials["Material.1210"]}
          position={[12.29, 1.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1210.geometry}
          material={materials["Material.1211"]}
          position={[12.29, 4.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1211.geometry}
          material={materials["Material.1212"]}
          position={[12.29, 7.5, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1212.geometry}
          material={materials["Material.1213"]}
          position={[12.29, 1.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1213.geometry}
          material={materials["Material.1214"]}
          position={[12.29, 4.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1214.geometry}
          material={materials["Material.1215"]}
          position={[12.29, 7.5, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1215.geometry}
          material={materials["Material.1216"]}
          position={[12.29, 4.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1216.geometry}
          material={materials["Material.1217"]}
          position={[12.29, 7.5, -15]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1217.geometry}
          material={materials["Material.1218"]}
          position={[12.29, 1.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1218.geometry}
          material={materials["Material.1219"]}
          position={[12.29, 4.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1219.geometry}
          material={materials["Material.1220"]}
          position={[12.29, 7.5, -16.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1220.geometry}
          material={materials["Material.1221"]}
          position={[12.29, 1.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1221.geometry}
          material={materials["Material.1222"]}
          position={[12.29, 4.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1222.geometry}
          material={materials["Material.1223"]}
          position={[12.29, 7.5, -21.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1223.geometry}
          material={materials["Material.1224"]}
          position={[-5.09, 10.5, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1224.geometry}
          material={materials["Material.1225"]}
          position={[-0.29, 10.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1225.geometry}
          material={materials["Material.1226"]}
          position={[-0.29, 7.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1226.geometry}
          material={materials["Material.1227"]}
          position={[-0.29, 4.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1227.geometry}
          material={materials["Material.1228"]}
          position={[-0.26, 10.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1228.geometry}
          material={materials["Material.1229"]}
          position={[-0.26, 4.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1229.geometry}
          material={materials["Material.1230"]}
          position={[-0.26, 7.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1230.geometry}
          material={materials["Material.1231"]}
          position={[-0.26, 1.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1231.geometry}
          material={materials["Material.1232"]}
          position={[-0.26, 10.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1232.geometry}
          material={materials["Material.1233"]}
          position={[-0.26, 7.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1233.geometry}
          material={materials["Material.1234"]}
          position={[-0.29, 1.5, -11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1234.geometry}
          material={materials["Material.1235"]}
          position={[-0.29, 10.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1235.geometry}
          material={materials["Material.1236"]}
          position={[-0.29, 10.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1236.geometry}
          material={materials["Material.1237"]}
          position={[-0.26, 1.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1237.geometry}
          material={materials["Material.1238"]}
          position={[-0.26, 4.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1238.geometry}
          material={materials["Material.1239"]}
          position={[-0.26, 10.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1239.geometry}
          material={materials["Material.1240"]}
          position={[-0.29, 1.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1240.geometry}
          material={materials["Material.1241"]}
          position={[-0.29, 4.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1241.geometry}
          material={materials["Material.1242"]}
          position={[-0.29, 7.5, -16.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1242.geometry}
          material={materials["Material.1243"]}
          position={[-0.26, 1.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1243.geometry}
          material={materials["Material.1244"]}
          position={[-0.26, 4.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1244.geometry}
          material={materials["Material.1245"]}
          position={[-0.26, 7.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1245.geometry}
          material={materials["Material.1246"]}
          position={[-0.29, 1.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1246.geometry}
          material={materials["Material.1247"]}
          position={[-0.29, 4.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1247.geometry}
          material={materials["Material.1248"]}
          position={[-0.29, 10.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1248.geometry}
          material={materials["Material.1249"]}
          position={[-0.29, 7.5, -18.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1249.geometry}
          material={materials["Material.1250"]}
          position={[-0.26, 1.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1250.geometry}
          material={materials["Material.1251"]}
          position={[-0.26, 4.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1251.geometry}
          material={materials["Material.1252"]}
          position={[-0.26, 7.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1252.geometry}
          material={materials["Material.1253"]}
          position={[-0.29, 1.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1253.geometry}
          material={materials["Material.1254"]}
          position={[-0.29, 7.5, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 0.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1254.geometry}
          material={materials["Material.1255"]}
          position={[-44.6, 1, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1255.geometry}
          material={materials["Material.1256"]}
          position={[-44.6, 4, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1256.geometry}
          material={materials["Material.1257"]}
          position={[-44.6, 7, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1257.geometry}
          material={materials["Material.1258"]}
          position={[-43.2, 1, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1258.geometry}
          material={materials["Material.1259"]}
          position={[-43.2, 4, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1259.geometry}
          material={materials["Material.1260"]}
          position={[-43.2, 7, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1260.geometry}
          material={materials["Material.1261"]}
          position={[-44.6, 1, 37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1261.geometry}
          material={materials["Material.1262"]}
          position={[-44.6, 4, 37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1262.geometry}
          material={materials["Material.1263"]}
          position={[-44.6, 7, 37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1263.geometry}
          material={materials["Material.1264"]}
          position={[-43.2, 1, 37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1264.geometry}
          material={materials["Material.1265"]}
          position={[-43.2, 4, 37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1265.geometry}
          material={materials["Material.1266"]}
          position={[-43.2, 7, 37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1266.geometry}
          material={materials["Material.1267"]}
          position={[-46.6, 1, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1267.geometry}
          material={materials["Material.1268"]}
          position={[-46.6, 4, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1268.geometry}
          material={materials["Material.1269"]}
          position={[-46.6, 7, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1269.geometry}
          material={materials["Material.1270"]}
          position={[2.17, 1, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1270.geometry}
          material={materials["Material.1271"]}
          position={[2.17, 4, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1271.geometry}
          material={materials["Material.1272"]}
          position={[2.17, 7, 6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1272.geometry}
          material={materials["Material.1273"]}
          position={[2.17, 1, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1273.geometry}
          material={materials["Material.1274"]}
          position={[2.17, 4, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1274.geometry}
          material={materials["Material.1275"]}
          position={[2.17, 7, 11.4]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1275.geometry}
          material={materials["Material.1276"]}
          position={[2.17, 1, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1276.geometry}
          material={materials["Material.1277"]}
          position={[2.17, 4, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1277.geometry}
          material={materials["Material.1278"]}
          position={[2.17, 7, 12.8]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1278.geometry}
          material={materials["Material.1279"]}
          position={[6.97, 1, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1279.geometry}
          material={materials["Material.1280"]}
          position={[6.97, 4, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1280.geometry}
          material={materials["Material.1281"]}
          position={[6.97, 7, -8.2]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1281.geometry}
          material={materials["Material.1282"]}
          position={[6.97, 1, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1282.geometry}
          material={materials["Material.1283"]}
          position={[6.97, 4, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1283.geometry}
          material={materials["Material.1284"]}
          position={[6.97, 7, -9.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1284.geometry}
          material={materials["Material.1285"]}
          position={[38, 1, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1285.geometry}
          material={materials["Material.1286"]}
          position={[38, 4, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1286.geometry}
          material={materials["Material.1287"]}
          position={[38, 7, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1287.geometry}
          material={materials["Material.1288"]}
          position={[39.4, 1, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1288.geometry}
          material={materials["Material.1289"]}
          position={[39.4, 4, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1289.geometry}
          material={materials["Material.1290"]}
          position={[39.4, 7, -37.57]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1290.geometry}
          material={materials["Material.1291"]}
          position={[56.2, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1291.geometry}
          material={materials["Material.1292"]}
          position={[56.2, 4, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1292.geometry}
          material={materials["Material.1293"]}
          position={[56.2, 7, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1293.geometry}
          material={materials["Material.1294"]}
          position={[54.8, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1294.geometry}
          material={materials["Material.1295"]}
          position={[54.8, 4, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1295.geometry}
          material={materials["Material.1296"]}
          position={[54.8, 7, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1296.geometry}
          material={materials["Material.1297"]}
          position={[49.4, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1297.geometry}
          material={materials["Material.1298"]}
          position={[49.4, 4, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1298.geometry}
          material={materials["Material.1299"]}
          position={[49.4, 7, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1299.geometry}
          material={materials["Material.1300"]}
          position={[44.8, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1300.geometry}
          material={materials["Material.1301"]}
          position={[44.8, 10, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1301.geometry}
          material={materials["Material.1302"]}
          position={[44.8, 4, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1302.geometry}
          material={materials["Material.1303"]}
          position={[56.2, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1303.geometry}
          material={materials["Material.1304"]}
          position={[56.2, 4, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1304.geometry}
          material={materials["Material.1305"]}
          position={[56.2, 7, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1305.geometry}
          material={materials["Material.1306"]}
          position={[54.8, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1306.geometry}
          material={materials["Material.1307"]}
          position={[54.8, 4, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1307.geometry}
          material={materials["Material.1308"]}
          position={[54.8, 7, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1308.geometry}
          material={materials["Material.1309"]}
          position={[49.4, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1309.geometry}
          material={materials["Material.1310"]}
          position={[49.4, 4, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1310.geometry}
          material={materials["Material.1311"]}
          position={[49.4, 7, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1311.geometry}
          material={materials["Material.1312"]}
          position={[48, 1, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1312.geometry}
          material={materials["Material.1313"]}
          position={[48, 4, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1313.geometry}
          material={materials["Material.1314"]}
          position={[48, 7, -35.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1314.geometry}
          material={materials["Material.1315"]}
          position={[5.03, 1, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1315.geometry}
          material={materials["Material.1316"]}
          position={[5.03, 4, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1316.geometry}
          material={materials["Material.1317"]}
          position={[5.03, 7, -23.6]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.5, 1, 1]}
        />
        </RigidBody>
        <group
          position={[7.1, 4, 31.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials["Material.1322"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials["Material.1318"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_3.geometry}
            material={materials["Material.1319"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_4.geometry}
            material={materials["Material.1320"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_5.geometry}
            material={materials["Material.1323"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_6.geometry}
            material={materials["Material.1325"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_7.geometry}
            material={materials["Material.1413"]}
          />
          </RigidBody>
        </group>
        <group
          position={[0.98, 10, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_1.geometry}
            material={materials["Material.1327"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_2.geometry}
            material={materials["Material.1324"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_3.geometry}
            material={materials["Material.1331"]}
          />
          </RigidBody>
        </group>
        <group
          position={[43.63, 10, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["Material.1330"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_2.geometry}
            material={materials["Material.1326"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_3.geometry}
            material={materials["Material.1329"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-50.22, 4, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_1.geometry}
            material={materials["Material.1336"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_2.geometry}
            material={materials["Material.1328"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_3.geometry}
            material={materials["Material.1332"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_4.geometry}
            material={materials["Material.1333"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_5.geometry}
            material={materials["Material.1334"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_6.geometry}
            material={materials["Material.1335"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_7.geometry}
            material={materials["Material.1338"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_8.geometry}
            material={materials["Material.1340"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_9.geometry}
            material={materials["Material.1376"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials["Material.1339"]}
          position={[-30.1, 1, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
        </RigidBody>
        <group
          position={[-28.66, 10, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_1.geometry}
            material={materials["Material.1343"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_2.geometry}
            material={materials["Material.1341"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_3.geometry}
            material={materials["Material.1342"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_4.geometry}
            material={materials["Material.1344"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_5.geometry}
            material={materials["Material.1345"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials["Material.1346"]}
          position={[-27.22, 1, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody >
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={materials["Material.1347"]}
          position={[-27.94, 1, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={materials["Material.1349"]}
          position={[-29.38, 1, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={materials["Material.1350"]}
          position={[-28.66, 1, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
        </RigidBody>
        <group
          position={[-51.14, 10, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_1.geometry}
            material={materials["Material.1354"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_2.geometry}
            material={materials["Material.1351"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_3.geometry}
            material={materials["Material.1352"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_4.geometry}
            material={materials["Material.1353"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_5.geometry}
            material={materials["Material.1355"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036_6.geometry}
            material={materials["Material.1356"]}
          />
          </RigidBody>
        </group >
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={materials["Material.1357"]}
          position={[-29.12, 1, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={materials["Material.1362"]}
          position={[-32, 1, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045.geometry}
          material={materials["Material.1363"]}
          position={[-31.28, 1, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={materials["Material.1364"]}
          position={[-30.56, 1, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={materials["Material.1365"]}
          position={[-29.84, 1, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
        </RigidBody>
        <group
          position={[-30.56, 10, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_1.geometry}
            material={materials["Material.1366"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_2.geometry}
            material={materials["Material.1348"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_3.geometry}
            material={materials["Material.1358"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_4.geometry}
            material={materials["Material.1360"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048_5.geometry}
            material={materials["Material.1361"]}
          />
          </RigidBody>
        </group>
        <group
          position={[9.94, 10, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_1.geometry}
            material={materials["Material.1369"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_2.geometry}
            material={materials["Material.1359"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_3.geometry}
            material={materials["Material.1367"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_4.geometry}
            material={materials["Material.1368"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051_5.geometry}
            material={materials["Material.1371"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={materials["Material.1378"]}
          position={[-23.82, 1, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
        </RigidBody>
        <group
          position={[-50.58, 10, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_1.geometry}
            material={materials["Material.1381"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_2.geometry}
            material={materials["Material.1337"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_3.geometry}
            material={materials["Material.1377"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_4.geometry}
            material={materials["Material.1379"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_5.geometry}
            material={materials["Material.1380"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_6.geometry}
            material={materials["Material.1382"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_7.geometry}
            material={materials["Material.1383"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_8.geometry}
            material={materials["Material.1384"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063_9.geometry}
            material={materials["Material.1385"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068.geometry}
          material={materials["Material.1386"]}
          position={[-26.7, 1, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody >
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069.geometry}
          material={materials["Material.1387"]}
          position={[-25.98, 1, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={materials["Material.1389"]}
          position={[-24.54, 1, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
        </RigidBody>
        <group
          position={[-25.26, 10, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_1.geometry}
            material={materials["Material.1392"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_2.geometry}
            material={materials["Material.1390"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_3.geometry}
            material={materials["Material.1391"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_4.geometry}
            material={materials["Material.1393"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074_5.geometry}
            material={materials["Material.1394"]}
          />
          </RigidBody>
        </group>
        <group
          position={[47.14, 1, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_1.geometry}
            material={materials["Material.1395"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_2.geometry}
            material={materials["Material.1370"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_3.geometry}
            material={materials["Material.1372"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_4.geometry}
            material={materials["Material.1373"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077_5.geometry}
            material={materials["Material.1375"]}
          />
          </RigidBody>
        </group>
        <group
          position={[42.02, 10, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_1.geometry}
            material={materials["Material.1400"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_2.geometry}
            material={materials["Material.1374"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_3.geometry}
            material={materials["Material.1396"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_4.geometry}
            material={materials["Material.1397"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_5.geometry}
            material={materials["Material.1398"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_6.geometry}
            material={materials["Material.1399"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_7.geometry}
            material={materials["Material.1402"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_8.geometry}
            material={materials["Material.1403"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder082_9.geometry}
            material={materials["Material.1404"]}
          />
          </RigidBody>
        </group>
        <group
          position={[15.47, 10, -35.3]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_1.geometry}
            material={materials["Material.1409"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_2.geometry}
            material={materials["Material.1401"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_3.geometry}
            material={materials["Material.1405"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_4.geometry}
            material={materials["Material.1406"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_5.geometry}
            material={materials["Material.1407"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_6.geometry}
            material={materials["Material.1408"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_7.geometry}
            material={materials["Material.1410"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_8.geometry}
            material={materials["Material.1411"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_9.geometry}
            material={materials["Material.1412"]}
          />
          </RigidBody>
        </group>
        <group
          position={[11.9, 10, -25.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_1.geometry}
            material={materials["Material.1417"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_2.geometry}
            material={materials["Material.1321"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_3.geometry}
            material={materials["Material.1414"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_4.geometry}
            material={materials["Material.1416"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_5.geometry}
            material={materials["Material.1424"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_6.geometry}
            material={materials["Material.1459"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={materials["Material.1419"]}
          position={[-3.5, 1, -0.9]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
        </RigidBody>
        <group
          position={[13.79, 10, -5.35]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_1.geometry}
            material={materials["Material.1422"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_2.geometry}
            material={materials["Material.1388"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_3.geometry}
            material={materials["Material.1420"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_4.geometry}
            material={materials["Material.1421"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_5.geometry}
            material={materials["Material.1423"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.7, 10, -27.58]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_1.geometry}
            material={materials["Material.1429"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_2.geometry}
            material={materials["Material.1415"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_3.geometry}
            material={materials["Material.1425"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_4.geometry}
            material={materials["Material.1426"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_5.geometry}
            material={materials["Material.1427"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_6.geometry}
            material={materials["Material.1430"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_7.geometry}
            material={materials["Material.1431"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_8.geometry}
            material={materials["Material.1432"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder111_9.geometry}
            material={materials["Material.1433"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.2, 10, -8.24]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_1.geometry}
            material={materials["Material.1437"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_2.geometry}
            material={materials["Material.1428"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_3.geometry}
            material={materials["Material.1434"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_4.geometry}
            material={materials["Material.1435"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_5.geometry}
            material={materials["Material.1438"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_6.geometry}
            material={materials["Material.1439"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_7.geometry}
            material={materials["Material.1440"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_8.geometry}
            material={materials["Material.1447"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-1.34, 10, -0.9]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder126_1.geometry}
            material={materials["Material.1444"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder126_2.geometry}
            material={materials["Material.1442"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder126_3.geometry}
            material={materials["Material.1443"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder126_4.geometry}
            material={materials["Material.1445"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder126_5.geometry}
            material={materials["Material.1446"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-4.7, 4, 30.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder138_1.geometry}
            material={materials["Material.1456"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder138_2.geometry}
            material={materials["Material.1455"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-5.78, 4, 30.58]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder140_1.geometry}
            material={materials["Material.1458"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder140_2.geometry}
            material={materials["Material.1451"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder140_3.geometry}
            material={materials["Material.1457"]}
          />
          </RigidBody>
        </group>
        <group
          position={[58.7, 10, -36.68]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder143_1.geometry}
            material={materials["Material.1461"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder143_2.geometry}
            material={materials["Material.1418"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder143_3.geometry}
            material={materials["Material.1460"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-0.1, 7, 9.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder144_1.geometry}
            material={materials["Material.1462"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder144_2.geometry}
            material={materials["Material.1436"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder144_3.geometry}
            material={materials["Material.1448"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder144_4.geometry}
            material={materials["Material.1449"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder144_5.geometry}
            material={materials["Material.1450"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder144_6.geometry}
            material={materials["Material.1453"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder144_7.geometry}
            material={materials["Material.1534"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 10, -32.52]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder147_1.geometry}
            material={materials["Material.1465"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder147_2.geometry}
            material={materials["Material.1463"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder147_3.geometry}
            material={materials["Material.1464"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder147_4.geometry}
            material={materials["Material.1466"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder147_5.geometry}
            material={materials["Material.1452"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 10, -30.72]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_1.geometry}
            material={materials["Material.1477"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_2.geometry}
            material={materials["Material.1454"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_3.geometry}
            material={materials["Material.1467"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_4.geometry}
            material={materials["Material.1468"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_5.geometry}
            material={materials["Material.1469"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_6.geometry}
            material={materials["Material.1470"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_7.geometry}
            material={materials["Material.1471"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_8.geometry}
            material={materials["Material.1472"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_9.geometry}
            material={materials["Material.1473"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_10.geometry}
            material={materials["Material.1474"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_11.geometry}
            material={materials["Material.1475"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_12.geometry}
            material={materials["Material.1476"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_13.geometry}
            material={materials["Material.1478"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_14.geometry}
            material={materials["Material.1479"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_15.geometry}
            material={materials["Material.1480"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_16.geometry}
            material={materials["Material.1481"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_17.geometry}
            material={materials["Material.1482"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_18.geometry}
            material={materials["Material.1483"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_19.geometry}
            material={materials["Material.1484"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder159_20.geometry}
            material={materials["Material.1485"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 10, 30.98]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_1.geometry}
            material={materials["Material.1486"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_2.geometry}
            material={materials["Material.1487"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_3.geometry}
            material={materials["Material.1488"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_4.geometry}
            material={materials["Material.1489"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_5.geometry}
            material={materials["Material.1490"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_6.geometry}
            material={materials["Material.1491"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_7.geometry}
            material={materials["Material.1492"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_8.geometry}
            material={materials["Material.1493"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_9.geometry}
            material={materials["Material.1494"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_10.geometry}
            material={materials["Material.1495"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_11.geometry}
            material={materials["Material.1496"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_12.geometry}
            material={materials["Material.1497"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_13.geometry}
            material={materials["Material.1498"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_14.geometry}
            material={materials["Material.1499"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_15.geometry}
            material={materials["Material.1500"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_16.geometry}
            material={materials["Material.1501"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_17.geometry}
            material={materials["Material.1502"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_18.geometry}
            material={materials["Material.1503"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_19.geometry}
            material={materials["Material.1504"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder168_20.geometry}
            material={materials["Material.1505"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 10, 32.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder169_1.geometry}
            material={materials["Material.1506"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder169_2.geometry}
            material={materials["Material.1507"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder169_3.geometry}
            material={materials["Material.1508"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder169_4.geometry}
            material={materials["Material.1509"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 10, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_1.geometry}
            material={materials["Material.1510"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_2.geometry}
            material={materials["Material.1511"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_3.geometry}
            material={materials["Material.1512"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_4.geometry}
            material={materials["Material.1513"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_5.geometry}
            material={materials["Material.1514"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_6.geometry}
            material={materials["Material.1515"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_7.geometry}
            material={materials["Material.1516"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_8.geometry}
            material={materials["Material.1517"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_9.geometry}
            material={materials["Material.1518"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_10.geometry}
            material={materials["Material.1519"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_11.geometry}
            material={materials["Material.1520"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_12.geometry}
            material={materials["Material.1521"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_13.geometry}
            material={materials["Material.1522"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_14.geometry}
            material={materials["Material.1523"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_15.geometry}
            material={materials["Material.1524"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_16.geometry}
            material={materials["Material.1525"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_17.geometry}
            material={materials["Material.1526"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_18.geometry}
            material={materials["Material.1527"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_19.geometry}
            material={materials["Material.1528"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder170_20.geometry}
            material={materials["Material.1529"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 10, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder171_1.geometry}
            material={materials["Material.1530"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder171_2.geometry}
            material={materials["Material.1531"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder171_3.geometry}
            material={materials["Material.1532"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder171_4.geometry}
            material={materials["Material.1533"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[-4.4, 12, 0.8]}
          scale={[54.6, 1, 6.2]}
        />
      </RigidBody >
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1318.geometry}
          material={materials["Material.2325"]}
          position={[-4.4, 6, 0.8]}
          scale={[54.6, 1, 6.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1319.geometry}
          material={materials["Material.2324"]}
          position={[-4.4, 3, 0.8]}
          scale={[54.6, 1, 6.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1320.geometry}
          material={materials["Material.2326"]}
          position={[-4.4, 9, 0.8]}
          scale={[54.6, 1, 6.2]}
        />
        </RigidBody>
        <group
          position={[43.2, 10, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_1.geometry}
            material={materials["Material.1535"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_2.geometry}
            material={materials["Material.1536"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_3.geometry}
            material={materials["Material.1537"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_4.geometry}
            material={materials["Material.1538"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_5.geometry}
            material={materials["Material.1539"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_6.geometry}
            material={materials["Material.1540"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_7.geometry}
            material={materials["Material.1541"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_8.geometry}
            material={materials["Material.1542"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_9.geometry}
            material={materials["Material.1543"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_10.geometry}
            material={materials["Material.1544"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_11.geometry}
            material={materials["Material.1545"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_12.geometry}
            material={materials["Material.1546"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_13.geometry}
            material={materials["Material.1547"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_14.geometry}
            material={materials["Material.1548"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_15.geometry}
            material={materials["Material.1549"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_16.geometry}
            material={materials["Material.1550"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_17.geometry}
            material={materials["Material.1551"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_18.geometry}
            material={materials["Material.1552"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_19.geometry}
            material={materials["Material.1553"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder173_20.geometry}
            material={materials["Material.1554"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 4, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174.geometry}
            material={materials["Material.1555"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_1.geometry}
            material={materials["Material.1556"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_2.geometry}
            material={materials["Material.1557"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_3.geometry}
            material={materials["Material.1558"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_4.geometry}
            material={materials["Material.1559"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_5.geometry}
            material={materials["Material.1560"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_6.geometry}
            material={materials["Material.1561"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_7.geometry}
            material={materials["Material.1562"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_8.geometry}
            material={materials["Material.1563"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_9.geometry}
            material={materials["Material.1564"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_10.geometry}
            material={materials["Material.1565"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_11.geometry}
            material={materials["Material.1566"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_12.geometry}
            material={materials["Material.1567"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_13.geometry}
            material={materials["Material.1568"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_14.geometry}
            material={materials["Material.1569"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_15.geometry}
            material={materials["Material.1570"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_16.geometry}
            material={materials["Material.1571"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_17.geometry}
            material={materials["Material.1572"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_18.geometry}
            material={materials["Material.1573"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder174_19.geometry}
            material={materials["Material.1574"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 7, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175.geometry}
            material={materials["Material.1575"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_1.geometry}
            material={materials["Material.1576"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_2.geometry}
            material={materials["Material.1577"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_3.geometry}
            material={materials["Material.1578"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_4.geometry}
            material={materials["Material.1579"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_5.geometry}
            material={materials["Material.1580"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_6.geometry}
            material={materials["Material.1581"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_7.geometry}
            material={materials["Material.1582"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_8.geometry}
            material={materials["Material.1583"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_9.geometry}
            material={materials["Material.1584"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_10.geometry}
            material={materials["Material.1585"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_11.geometry}
            material={materials["Material.1586"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_12.geometry}
            material={materials["Material.1587"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_13.geometry}
            material={materials["Material.1588"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_14.geometry}
            material={materials["Material.1589"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_15.geometry}
            material={materials["Material.1590"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_16.geometry}
            material={materials["Material.1591"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_17.geometry}
            material={materials["Material.1592"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_18.geometry}
            material={materials["Material.1593"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder175_19.geometry}
            material={materials["Material.1594"]}
          />
          </RigidBody>
        </group>
        <group
          position={[50.04, 10, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder176.geometry}
            material={materials["Material.1595"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder176_1.geometry}
            material={materials["Material.1596"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder176_2.geometry}
            material={materials["Material.1597"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder176_3.geometry}
            material={materials["Material.1598"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 4, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder177.geometry}
            material={materials["Material.1599"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder177_1.geometry}
            material={materials["Material.1600"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder177_2.geometry}
            material={materials["Material.1601"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder177_3.geometry}
            material={materials["Material.1602"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 7, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder178.geometry}
            material={materials["Material.1603"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder178_1.geometry}
            material={materials["Material.1604"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder178_2.geometry}
            material={materials["Material.1605"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder178_3.geometry}
            material={materials["Material.1606"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1321.geometry}
          material={materials["Material.2335"]}
          position={[0, 9, -36.6]}
          scale={[59, 1, 6.2]}
        />
      </RigidBody >
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1322.geometry}
          material={nodes.Plane1322.material}
          position={[0, 12, -36.6]}
          scale={[59, 1, 6.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1323.geometry}
          material={materials["Material.2333"]}
          position={[0, 3, -36.6]}
          scale={[59, 1, 6.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1324.geometry}
          material={materials["Material.2334"]}
          position={[0, 6, -36.6]}
          scale={[59, 1, 6.2]}
        />
        </RigidBody>
        <group
          position={[-51.14, 1, -30.72]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179.geometry}
            material={materials["Material.1607"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_1.geometry}
            material={materials["Material.1608"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_2.geometry}
            material={materials["Material.1609"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_3.geometry}
            material={materials["Material.1610"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_4.geometry}
            material={materials["Material.1611"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_5.geometry}
            material={materials["Material.1612"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_6.geometry}
            material={materials["Material.1613"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_7.geometry}
            material={materials["Material.1614"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_8.geometry}
            material={materials["Material.1615"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_9.geometry}
            material={materials["Material.1616"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_10.geometry}
            material={materials["Material.1617"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_11.geometry}
            material={materials["Material.1618"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_12.geometry}
            material={materials["Material.1619"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_13.geometry}
            material={materials["Material.1620"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_14.geometry}
            material={materials["Material.1621"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_15.geometry}
            material={materials["Material.1622"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_16.geometry}
            material={materials["Material.1623"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_17.geometry}
            material={materials["Material.1624"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_18.geometry}
            material={materials["Material.1625"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder179_19.geometry}
            material={materials["Material.1626"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 4, -30.72]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180.geometry}
            material={materials["Material.1627"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_1.geometry}
            material={materials["Material.1628"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_2.geometry}
            material={materials["Material.1629"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_3.geometry}
            material={materials["Material.1630"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_4.geometry}
            material={materials["Material.1631"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_5.geometry}
            material={materials["Material.1632"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_6.geometry}
            material={materials["Material.1633"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_7.geometry}
            material={materials["Material.1634"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_8.geometry}
            material={materials["Material.1635"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_9.geometry}
            material={materials["Material.1636"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_10.geometry}
            material={materials["Material.1637"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_11.geometry}
            material={materials["Material.1638"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_12.geometry}
            material={materials["Material.1639"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_13.geometry}
            material={materials["Material.1640"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_14.geometry}
            material={materials["Material.1641"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_15.geometry}
            material={materials["Material.1642"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_16.geometry}
            material={materials["Material.1643"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_17.geometry}
            material={materials["Material.1644"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_18.geometry}
            material={materials["Material.1645"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder180_19.geometry}
            material={materials["Material.1646"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 7, -30.72]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181.geometry}
            material={materials["Material.1647"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_1.geometry}
            material={materials["Material.1648"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_2.geometry}
            material={materials["Material.1649"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_3.geometry}
            material={materials["Material.1650"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_4.geometry}
            material={materials["Material.1651"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_5.geometry}
            material={materials["Material.1652"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_6.geometry}
            material={materials["Material.1653"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_7.geometry}
            material={materials["Material.1654"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_8.geometry}
            material={materials["Material.1655"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_9.geometry}
            material={materials["Material.1656"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_10.geometry}
            material={materials["Material.1657"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_11.geometry}
            material={materials["Material.1658"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_12.geometry}
            material={materials["Material.1659"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_13.geometry}
            material={materials["Material.1660"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_14.geometry}
            material={materials["Material.1661"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_15.geometry}
            material={materials["Material.1662"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_16.geometry}
            material={materials["Material.1663"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_17.geometry}
            material={materials["Material.1664"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_18.geometry}
            material={materials["Material.1665"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder181_19.geometry}
            material={materials["Material.1666"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 1, -32.52]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder182.geometry}
            material={materials["Material.1667"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder182_1.geometry}
            material={materials["Material.1668"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder182_2.geometry}
            material={materials["Material.1669"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder182_3.geometry}
            material={materials["Material.1670"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder182_4.geometry}
            material={materials["Material.1671"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 4, -32.52]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder183.geometry}
            material={materials["Material.1672"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder183_1.geometry}
            material={materials["Material.1673"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder183_2.geometry}
            material={materials["Material.1674"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder183_3.geometry}
            material={materials["Material.1675"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder183_4.geometry}
            material={materials["Material.1676"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 7, -32.52]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder184.geometry}
            material={materials["Material.1677"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder184_1.geometry}
            material={materials["Material.1678"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder184_2.geometry}
            material={materials["Material.1679"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder184_3.geometry}
            material={materials["Material.1680"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder184_4.geometry}
            material={materials["Material.1681"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1325.geometry}
          material={nodes.Plane1325.material}
          position={[-25.7, 12, 36.6]}
          scale={[33.3, 1, 6.2]}
        />
      </RigidBody >
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1326.geometry}
          material={materials["Material.2327"]}
          position={[-25.9, 3, 36.6]}
          scale={[33.3, 1, 6.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1327.geometry}
          material={materials["Material.2329"]}
          position={[-25.9, 6, 36.6]}
          scale={[33.3, 1, 6.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1328.geometry}
          material={materials["Material.2331"]}
          position={[-25.9, 9, 36.6]}
          scale={[33.3, 1, 6.2]}
        />
        </RigidBody>
        <group
          position={[-51.14, 1, 30.98]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185.geometry}
            material={materials["Material.1682"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_1.geometry}
            material={materials["Material.1683"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_2.geometry}
            material={materials["Material.1684"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_3.geometry}
            material={materials["Material.1685"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_4.geometry}
            material={materials["Material.1686"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_5.geometry}
            material={materials["Material.1687"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_6.geometry}
            material={materials["Material.1688"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_7.geometry}
            material={materials["Material.1689"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_8.geometry}
            material={materials["Material.1690"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_9.geometry}
            material={materials["Material.1691"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_10.geometry}
            material={materials["Material.1692"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_11.geometry}
            material={materials["Material.1693"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_12.geometry}
            material={materials["Material.1694"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_13.geometry}
            material={materials["Material.1695"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_14.geometry}
            material={materials["Material.1696"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_15.geometry}
            material={materials["Material.1697"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_16.geometry}
            material={materials["Material.1698"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_17.geometry}
            material={materials["Material.1699"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_18.geometry}
            material={materials["Material.1700"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder185_19.geometry}
            material={materials["Material.1701"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 4, 30.98]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186.geometry}
            material={materials["Material.1702"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_1.geometry}
            material={materials["Material.1703"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_2.geometry}
            material={materials["Material.1704"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_3.geometry}
            material={materials["Material.1705"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_4.geometry}
            material={materials["Material.1706"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_5.geometry}
            material={materials["Material.1707"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_6.geometry}
            material={materials["Material.1708"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_7.geometry}
            material={materials["Material.1709"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_8.geometry}
            material={materials["Material.1710"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_9.geometry}
            material={materials["Material.1711"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_10.geometry}
            material={materials["Material.1712"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_11.geometry}
            material={materials["Material.1713"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_12.geometry}
            material={materials["Material.1714"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_13.geometry}
            material={materials["Material.1715"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_14.geometry}
            material={materials["Material.1716"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_15.geometry}
            material={materials["Material.1717"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_16.geometry}
            material={materials["Material.1718"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_17.geometry}
            material={materials["Material.1719"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_18.geometry}
            material={materials["Material.1720"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder186_19.geometry}
            material={materials["Material.1721"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 7, 30.98]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187.geometry}
            material={materials["Material.1722"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_1.geometry}
            material={materials["Material.1723"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_2.geometry}
            material={materials["Material.1724"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_3.geometry}
            material={materials["Material.1725"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_4.geometry}
            material={materials["Material.1726"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_5.geometry}
            material={materials["Material.1727"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_6.geometry}
            material={materials["Material.1728"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_7.geometry}
            material={materials["Material.1729"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_8.geometry}
            material={materials["Material.1730"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_9.geometry}
            material={materials["Material.1731"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_10.geometry}
            material={materials["Material.1732"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_11.geometry}
            material={materials["Material.1733"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_12.geometry}
            material={materials["Material.1734"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_13.geometry}
            material={materials["Material.1735"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_14.geometry}
            material={materials["Material.1736"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_15.geometry}
            material={materials["Material.1737"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_16.geometry}
            material={materials["Material.1738"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_17.geometry}
            material={materials["Material.1739"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_18.geometry}
            material={materials["Material.1740"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder187_19.geometry}
            material={materials["Material.1741"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 1, 32.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder188.geometry}
            material={materials["Material.1742"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder188_1.geometry}
            material={materials["Material.1743"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder188_2.geometry}
            material={materials["Material.1744"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder188_3.geometry}
            material={materials["Material.1745"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 4, 32.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder189.geometry}
            material={materials["Material.1746"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder189_1.geometry}
            material={materials["Material.1747"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder189_2.geometry}
            material={materials["Material.1748"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder189_3.geometry}
            material={materials["Material.1749"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-58.7, 7, 32.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder190.geometry}
            material={materials["Material.1750"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder190_1.geometry}
            material={materials["Material.1751"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder190_2.geometry}
            material={materials["Material.1752"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder190_3.geometry}
            material={materials["Material.1753"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-28.66, 1, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder191.geometry}
            material={materials["Material.1754"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder191_1.geometry}
            material={materials["Material.1755"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder191_2.geometry}
            material={materials["Material.1756"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder191_3.geometry}
            material={materials["Material.1757"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder191_4.geometry}
            material={materials["Material.1758"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-28.66, 4, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder192.geometry}
            material={materials["Material.1759"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder192_1.geometry}
            material={materials["Material.1760"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder192_2.geometry}
            material={materials["Material.1761"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder192_3.geometry}
            material={materials["Material.1762"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder192_4.geometry}
            material={materials["Material.1763"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-28.66, 10, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder193.geometry}
            material={materials["Material.1764"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder193_1.geometry}
            material={materials["Material.1765"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder193_2.geometry}
            material={materials["Material.1766"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder193_3.geometry}
            material={materials["Material.1767"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder193_4.geometry}
            material={materials["Material.1768"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-28.66, 4, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder194.geometry}
            material={materials["Material.1769"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder194_1.geometry}
            material={materials["Material.1770"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder194_2.geometry}
            material={materials["Material.1771"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder194_3.geometry}
            material={materials["Material.1772"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder194_4.geometry}
            material={materials["Material.1773"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-28.66, 7, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder195.geometry}
            material={materials["Material.1774"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder195_1.geometry}
            material={materials["Material.1775"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder195_2.geometry}
            material={materials["Material.1776"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder195_3.geometry}
            material={materials["Material.1777"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder195_4.geometry}
            material={materials["Material.1778"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-28.66, 7, 30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder196.geometry}
            material={materials["Material.1779"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder196_1.geometry}
            material={materials["Material.1780"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder196_2.geometry}
            material={materials["Material.1781"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder196_3.geometry}
            material={materials["Material.1782"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder196_4.geometry}
            material={materials["Material.1783"]}
          />
          </RigidBody>
        </group>
        <group
          position={[0.98, 1, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder197.geometry}
            material={materials["Material.1784"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder197_1.geometry}
            material={materials["Material.1785"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder197_2.geometry}
            material={materials["Material.1786"]}
          />
          </RigidBody>
        </group>
        <group
          position={[0.98, 4, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder198.geometry}
            material={materials["Material.1787"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder198_1.geometry}
            material={materials["Material.1788"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder198_2.geometry}
            material={materials["Material.1789"]}
          />
          </RigidBody>
        </group>
        <group
          position={[0.98, 7, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder199.geometry}
            material={materials["Material.1790"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder199_1.geometry}
            material={materials["Material.1791"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder199_2.geometry}
            material={materials["Material.1792"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-5.78, 7, 30.58]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder200.geometry}
            material={materials["Material.1793"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder200_1.geometry}
            material={materials["Material.1794"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder200_2.geometry}
            material={materials["Material.1795"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-5.78, 10, 30.58]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder201.geometry}
            material={materials["Material.1796"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder201_1.geometry}
            material={materials["Material.1797"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder201_2.geometry}
            material={materials["Material.1798"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-5.78, 1, 30.58]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder202.geometry}
            material={materials["Material.1799"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder202_1.geometry}
            material={materials["Material.1800"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder202_2.geometry}
            material={materials["Material.1801"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-4.7, 7, 30.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder203.geometry}
            material={materials["Material.1802"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder203_1.geometry}
            material={materials["Material.1803"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-4.7, 10, 30.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder204.geometry}
            material={materials["Material.1804"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder204_1.geometry}
            material={materials["Material.1805"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-4.7, 1, 30.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder205.geometry}
            material={materials["Material.1806"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder205_1.geometry}
            material={materials["Material.1807"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-0.1, 10, 9.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206.geometry}
            material={materials["Material.1808"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206_1.geometry}
            material={materials["Material.1809"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206_2.geometry}
            material={materials["Material.1810"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206_3.geometry}
            material={materials["Material.1811"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206_4.geometry}
            material={materials["Material.1812"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206_5.geometry}
            material={materials["Material.1813"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206_6.geometry}
            material={materials["Material.1814"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-0.1, 4, 9.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207.geometry}
            material={materials["Material.1815"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207_1.geometry}
            material={materials["Material.1816"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207_2.geometry}
            material={materials["Material.1817"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207_3.geometry}
            material={materials["Material.1818"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207_4.geometry}
            material={materials["Material.1819"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207_5.geometry}
            material={materials["Material.1820"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207_6.geometry}
            material={materials["Material.1821"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-0.1, 1, 9.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208.geometry}
            material={materials["Material.1822"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208_1.geometry}
            material={materials["Material.1823"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208_2.geometry}
            material={materials["Material.1824"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208_3.geometry}
            material={materials["Material.1825"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208_4.geometry}
            material={materials["Material.1826"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208_5.geometry}
            material={materials["Material.1827"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208_6.geometry}
            material={materials["Material.1828"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-50.22, 7, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209.geometry}
            material={materials["Material.1829"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_1.geometry}
            material={materials["Material.1830"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_2.geometry}
            material={materials["Material.1831"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_3.geometry}
            material={materials["Material.1832"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_4.geometry}
            material={materials["Material.1833"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_5.geometry}
            material={materials["Material.1834"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_6.geometry}
            material={materials["Material.1835"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_7.geometry}
            material={materials["Material.1836"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_8.geometry}
            material={materials["Material.1837"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-50.22, 10, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210.geometry}
            material={materials["Material.1838"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_1.geometry}
            material={materials["Material.1839"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_2.geometry}
            material={materials["Material.1840"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_3.geometry}
            material={materials["Material.1841"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_4.geometry}
            material={materials["Material.1842"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_5.geometry}
            material={materials["Material.1843"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_6.geometry}
            material={materials["Material.1844"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_7.geometry}
            material={materials["Material.1845"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_8.geometry}
            material={materials["Material.1846"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-50.22, 1, 42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211.geometry}
            material={materials["Material.1847"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_1.geometry}
            material={materials["Material.1848"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_2.geometry}
            material={materials["Material.1849"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_3.geometry}
            material={materials["Material.1850"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_4.geometry}
            material={materials["Material.1851"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_5.geometry}
            material={materials["Material.1852"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_6.geometry}
            material={materials["Material.1853"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_7.geometry}
            material={materials["Material.1854"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_8.geometry}
            material={materials["Material.1855"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-50.58, 1, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212.geometry}
            material={materials["Material.1856"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_1.geometry}
            material={materials["Material.1857"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_2.geometry}
            material={materials["Material.1858"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_3.geometry}
            material={materials["Material.1859"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_4.geometry}
            material={materials["Material.1860"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_5.geometry}
            material={materials["Material.1861"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_6.geometry}
            material={materials["Material.1862"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_7.geometry}
            material={materials["Material.1863"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_8.geometry}
            material={materials["Material.1864"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-50.58, 4, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213.geometry}
            material={materials["Material.1865"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_1.geometry}
            material={materials["Material.1866"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_2.geometry}
            material={materials["Material.1867"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_3.geometry}
            material={materials["Material.1868"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_4.geometry}
            material={materials["Material.1869"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_5.geometry}
            material={materials["Material.1870"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_6.geometry}
            material={materials["Material.1871"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_7.geometry}
            material={materials["Material.1872"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_8.geometry}
            material={materials["Material.1873"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-50.58, 7, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214.geometry}
            material={materials["Material.1874"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_1.geometry}
            material={materials["Material.1875"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_2.geometry}
            material={materials["Material.1876"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_3.geometry}
            material={materials["Material.1877"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_4.geometry}
            material={materials["Material.1878"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_5.geometry}
            material={materials["Material.1879"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_6.geometry}
            material={materials["Material.1880"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_7.geometry}
            material={materials["Material.1881"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_8.geometry}
            material={materials["Material.1882"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-25.26, 1, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder215.geometry}
            material={materials["Material.1883"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder215_1.geometry}
            material={materials["Material.1884"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder215_2.geometry}
            material={materials["Material.1885"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder215_3.geometry}
            material={materials["Material.1886"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder215_4.geometry}
            material={materials["Material.1887"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-25.26, 10, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder216.geometry}
            material={materials["Material.1888"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder216_1.geometry}
            material={materials["Material.1889"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder216_2.geometry}
            material={materials["Material.1890"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder216_3.geometry}
            material={materials["Material.1891"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder216_4.geometry}
            material={materials["Material.1892"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-25.26, 7, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder217.geometry}
            material={materials["Material.1893"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder217_1.geometry}
            material={materials["Material.1894"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder217_2.geometry}
            material={materials["Material.1895"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder217_3.geometry}
            material={materials["Material.1896"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder217_4.geometry}
            material={materials["Material.1897"]}
          />
          </RigidBody>
        </group>
        <group
          position={[7.1, 10, 31.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218.geometry}
            material={materials["Material.1898"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218_1.geometry}
            material={materials["Material.1899"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218_2.geometry}
            material={materials["Material.1900"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218_3.geometry}
            material={materials["Material.1901"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218_4.geometry}
            material={materials["Material.1902"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218_5.geometry}
            material={materials["Material.1903"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218_6.geometry}
            material={materials["Material.1904"]}
          />
          </RigidBody>
        </group>
        <group
          position={[7.1, 1, 31.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219.geometry}
            material={materials["Material.1905"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219_1.geometry}
            material={materials["Material.1906"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219_2.geometry}
            material={materials["Material.1907"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219_3.geometry}
            material={materials["Material.1908"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219_4.geometry}
            material={materials["Material.1909"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219_5.geometry}
            material={materials["Material.1910"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219_6.geometry}
            material={materials["Material.1911"]}
          />
          </RigidBody>
        </group>
        <group
          position={[7.1, 7, 31.34]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220.geometry}
            material={materials["Material.1912"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220_1.geometry}
            material={materials["Material.1913"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220_2.geometry}
            material={materials["Material.1914"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220_3.geometry}
            material={materials["Material.1915"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220_4.geometry}
            material={materials["Material.1916"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220_5.geometry}
            material={materials["Material.1917"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220_6.geometry}
            material={materials["Material.1918"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-25.26, 4, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder221.geometry}
            material={materials["Material.1919"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder221_1.geometry}
            material={materials["Material.1920"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder221_2.geometry}
            material={materials["Material.1921"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder221_3.geometry}
            material={materials["Material.1922"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder221_4.geometry}
            material={materials["Material.1923"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-25.26, 4, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder222.geometry}
            material={materials["Material.1924"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder222_1.geometry}
            material={materials["Material.1925"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder222_2.geometry}
            material={materials["Material.1926"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder222_3.geometry}
            material={materials["Material.1927"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder222_4.geometry}
            material={materials["Material.1928"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-25.26, 7, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder223.geometry}
            material={materials["Material.1929"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder223_1.geometry}
            material={materials["Material.1930"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder223_2.geometry}
            material={materials["Material.1931"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder223_3.geometry}
            material={materials["Material.1932"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder223_4.geometry}
            material={materials["Material.1933"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-1.34, 1, -0.9]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder224.geometry}
            material={materials["Material.1934"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder224_1.geometry}
            material={materials["Material.1935"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder224_2.geometry}
            material={materials["Material.1936"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder224_3.geometry}
            material={materials["Material.1937"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder224_4.geometry}
            material={materials["Material.1938"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-1.34, 4, -0.9]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder225.geometry}
            material={materials["Material.1939"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder225_1.geometry}
            material={materials["Material.1940"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder225_2.geometry}
            material={materials["Material.1941"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder225_3.geometry}
            material={materials["Material.1942"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder225_4.geometry}
            material={materials["Material.1943"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-1.34, 7, -0.9]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder226.geometry}
            material={materials["Material.1944"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder226_1.geometry}
            material={materials["Material.1945"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder226_2.geometry}
            material={materials["Material.1946"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder226_3.geometry}
            material={materials["Material.1947"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder226_4.geometry}
            material={materials["Material.1948"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.2, 1, -8.24]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227.geometry}
            material={materials["Material.1949"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_1.geometry}
            material={materials["Material.1950"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_2.geometry}
            material={materials["Material.1951"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_3.geometry}
            material={materials["Material.1952"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_4.geometry}
            material={materials["Material.1953"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_5.geometry}
            material={materials["Material.1954"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_6.geometry}
            material={materials["Material.1955"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_7.geometry}
            material={materials["Material.1956"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.2, 4, -8.24]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228.geometry}
            material={materials["Material.1957"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_1.geometry}
            material={materials["Material.1958"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_2.geometry}
            material={materials["Material.1959"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_3.geometry}
            material={materials["Material.1960"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_4.geometry}
            material={materials["Material.1961"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_5.geometry}
            material={materials["Material.1962"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_6.geometry}
            material={materials["Material.1963"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_7.geometry}
            material={materials["Material.1964"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.2, 7, -8.24]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229.geometry}
            material={materials["Material.1965"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_1.geometry}
            material={materials["Material.1966"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_2.geometry}
            material={materials["Material.1967"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_3.geometry}
            material={materials["Material.1968"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_4.geometry}
            material={materials["Material.1969"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_5.geometry}
            material={materials["Material.1970"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_6.geometry}
            material={materials["Material.1971"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_7.geometry}
            material={materials["Material.1972"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 1, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230.geometry}
            material={materials["Material.1973"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230_1.geometry}
            material={materials["Material.1974"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230_2.geometry}
            material={materials["Material.1975"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230_3.geometry}
            material={materials["Material.1976"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230_4.geometry}
            material={materials["Material.1977"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230_5.geometry}
            material={materials["Material.1978"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 4, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231.geometry}
            material={materials["Material.1979"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231_1.geometry}
            material={materials["Material.1980"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231_2.geometry}
            material={materials["Material.1981"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231_3.geometry}
            material={materials["Material.1982"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231_4.geometry}
            material={materials["Material.1983"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231_5.geometry}
            material={materials["Material.1984"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 7, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232.geometry}
            material={materials["Material.1985"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232_1.geometry}
            material={materials["Material.1986"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232_2.geometry}
            material={materials["Material.1987"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232_3.geometry}
            material={materials["Material.1988"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232_4.geometry}
            material={materials["Material.1989"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232_5.geometry}
            material={materials["Material.1990"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-30.56, 1, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder233.geometry}
            material={materials["Material.1991"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder233_1.geometry}
            material={materials["Material.1992"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder233_2.geometry}
            material={materials["Material.1993"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder233_3.geometry}
            material={materials["Material.1994"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder233_4.geometry}
            material={materials["Material.1995"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-30.56, 10, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder234.geometry}
            material={materials["Material.1996"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder234_1.geometry}
            material={materials["Material.1997"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder234_2.geometry}
            material={materials["Material.1998"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder234_3.geometry}
            material={materials["Material.1999"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder234_4.geometry}
            material={materials["Material.2000"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-30.56, 7, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder235.geometry}
            material={materials["Material.2001"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder235_1.geometry}
            material={materials["Material.2002"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder235_2.geometry}
            material={materials["Material.2003"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder235_3.geometry}
            material={materials["Material.2004"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder235_4.geometry}
            material={materials["Material.2005"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-30.56, 4, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder236.geometry}
            material={materials["Material.2006"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder236_1.geometry}
            material={materials["Material.2007"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder236_2.geometry}
            material={materials["Material.2008"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder236_3.geometry}
            material={materials["Material.2009"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder236_4.geometry}
            material={materials["Material.2010"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-30.56, 4, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder237.geometry}
            material={materials["Material.2011"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder237_1.geometry}
            material={materials["Material.2012"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder237_2.geometry}
            material={materials["Material.2013"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder237_3.geometry}
            material={materials["Material.2014"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder237_4.geometry}
            material={materials["Material.2015"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-30.56, 7, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder238.geometry}
            material={materials["Material.2016"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder238_1.geometry}
            material={materials["Material.2017"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder238_2.geometry}
            material={materials["Material.2018"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder238_3.geometry}
            material={materials["Material.2019"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder238_4.geometry}
            material={materials["Material.2020"]}
          />
          </RigidBody>
        </group>
        <group
          position={[9.94, 1, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder239.geometry}
            material={materials["Material.2021"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder239_1.geometry}
            material={materials["Material.2022"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder239_2.geometry}
            material={materials["Material.2023"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder239_3.geometry}
            material={materials["Material.2024"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder239_4.geometry}
            material={materials["Material.2025"]}
          />
          </RigidBody>
        </group>
        <group
          position={[9.94, 4, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder240.geometry}
            material={materials["Material.2026"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder240_1.geometry}
            material={materials["Material.2027"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder240_2.geometry}
            material={materials["Material.2028"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder240_3.geometry}
            material={materials["Material.2029"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder240_4.geometry}
            material={materials["Material.2030"]}
          />
          </RigidBody>
        </group>
        <group
          position={[9.94, 7, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder241.geometry}
            material={materials["Material.2031"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder241_1.geometry}
            material={materials["Material.2032"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder241_2.geometry}
            material={materials["Material.2033"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder241_3.geometry}
            material={materials["Material.2034"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder241_4.geometry}
            material={materials["Material.2035"]}
          />
          </RigidBody>
        </group>
        <group
          position={[47.14, 10, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder242.geometry}
            material={materials["Material.2036"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder242_1.geometry}
            material={materials["Material.2037"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder242_2.geometry}
            material={materials["Material.2038"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder242_3.geometry}
            material={materials["Material.2039"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder242_4.geometry}
            material={materials["Material.2040"]}
          />
          </RigidBody>
        </group>
        <group
          position={[47.14, 7, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder243.geometry}
            material={materials["Material.2041"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder243_1.geometry}
            material={materials["Material.2042"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder243_2.geometry}
            material={materials["Material.2043"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder243_3.geometry}
            material={materials["Material.2044"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder243_4.geometry}
            material={materials["Material.2045"]}
          />
          </RigidBody>
        </group>
        <group
          position={[47.14, 4, -42.5]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder244.geometry}
            material={materials["Material.2046"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder244_1.geometry}
            material={materials["Material.2047"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder244_2.geometry}
            material={materials["Material.2048"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder244_3.geometry}
            material={materials["Material.2049"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder244_4.geometry}
            material={materials["Material.2050"]}
          />
          </RigidBody>
        </group>
        <group
          position={[58.7, 1, -36.68]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder245.geometry}
            material={materials["Material.2051"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder245_1.geometry}
            material={materials["Material.2052"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder245_2.geometry}
            material={materials["Material.2053"]}
          />
          </RigidBody>
        </group>
        <group
          position={[58.7, 4, -36.68]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246.geometry}
            material={materials["Material.2054"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246_1.geometry}
            material={materials["Material.2055"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246_2.geometry}
            material={materials["Material.2056"]}
          />
          </RigidBody>
        </group>
        <group
          position={[58.7, 7, -36.68]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder247.geometry}
            material={materials["Material.2057"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder247_1.geometry}
            material={materials["Material.2058"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder247_2.geometry}
            material={materials["Material.2059"]}
          />
          </RigidBody>
        </group>
        <group
          position={[13.79, 1, -5.35]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder248.geometry}
            material={materials["Material.2060"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder248_1.geometry}
            material={materials["Material.2061"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder248_2.geometry}
            material={materials["Material.2062"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder248_3.geometry}
            material={materials["Material.2063"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder248_4.geometry}
            material={materials["Material.2064"]}
          />
          </RigidBody>
        </group>
        <group
          position={[13.79, 4, -5.35]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder249.geometry}
            material={materials["Material.2065"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder249_1.geometry}
            material={materials["Material.2066"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder249_2.geometry}
            material={materials["Material.2067"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder249_3.geometry}
            material={materials["Material.2068"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder249_4.geometry}
            material={materials["Material.2069"]}
          />
          </RigidBody>
        </group>
        <group
          position={[13.79, 7, -5.35]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder250.geometry}
            material={materials["Material.2070"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder250_1.geometry}
            material={materials["Material.2071"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder250_2.geometry}
            material={materials["Material.2072"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder250_3.geometry}
            material={materials["Material.2073"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder250_4.geometry}
            material={materials["Material.2074"]}
          />
          </RigidBody>
        </group>
        <group
          position={[11.9, 1, -25.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251.geometry}
            material={materials["Material.2075"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251_1.geometry}
            material={materials["Material.2076"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251_2.geometry}
            material={materials["Material.2077"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251_3.geometry}
            material={materials["Material.2078"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251_4.geometry}
            material={materials["Material.2079"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251_5.geometry}
            material={materials["Material.2080"]}
          />
          </RigidBody>
        </group>
        <group
          position={[11.9, 4, -25.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252.geometry}
            material={materials["Material.2081"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252_1.geometry}
            material={materials["Material.2082"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252_2.geometry}
            material={materials["Material.2083"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252_3.geometry}
            material={materials["Material.2084"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252_4.geometry}
            material={materials["Material.2085"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252_5.geometry}
            material={materials["Material.2086"]}
          />
          </RigidBody>
        </group>
        <group
          position={[11.9, 7, -25.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253.geometry}
            material={materials["Material.2087"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253_1.geometry}
            material={materials["Material.2088"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253_2.geometry}
            material={materials["Material.2089"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253_3.geometry}
            material={materials["Material.2090"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253_4.geometry}
            material={materials["Material.2091"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253_5.geometry}
            material={materials["Material.2092"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.7, 1, -27.58]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254.geometry}
            material={materials["Material.2093"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_1.geometry}
            material={materials["Material.2094"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_2.geometry}
            material={materials["Material.2095"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_3.geometry}
            material={materials["Material.2096"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_4.geometry}
            material={materials["Material.2097"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_5.geometry}
            material={materials["Material.2098"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_6.geometry}
            material={materials["Material.2099"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_7.geometry}
            material={materials["Material.2100"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_8.geometry}
            material={materials["Material.2101"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.7, 4, -27.58]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255.geometry}
            material={materials["Material.2102"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_1.geometry}
            material={materials["Material.2103"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_2.geometry}
            material={materials["Material.2104"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_3.geometry}
            material={materials["Material.2105"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_4.geometry}
            material={materials["Material.2106"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_5.geometry}
            material={materials["Material.2107"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_6.geometry}
            material={materials["Material.2108"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_7.geometry}
            material={materials["Material.2109"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_8.geometry}
            material={materials["Material.2110"]}
          />
          </RigidBody>
        </group>
        <group
          position={[4.7, 7, -27.58]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256.geometry}
            material={materials["Material.2111"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_1.geometry}
            material={materials["Material.2112"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_2.geometry}
            material={materials["Material.2113"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_3.geometry}
            material={materials["Material.2114"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_4.geometry}
            material={materials["Material.2115"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_5.geometry}
            material={materials["Material.2116"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_6.geometry}
            material={materials["Material.2117"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_7.geometry}
            material={materials["Material.2118"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_8.geometry}
            material={materials["Material.2119"]}
          />
          </RigidBody>
        </group>
        <group
          position={[42.02, 1, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257.geometry}
            material={materials["Material.2120"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_1.geometry}
            material={materials["Material.2121"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_2.geometry}
            material={materials["Material.2122"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_3.geometry}
            material={materials["Material.2123"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_4.geometry}
            material={materials["Material.2124"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_5.geometry}
            material={materials["Material.2125"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_6.geometry}
            material={materials["Material.2126"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_7.geometry}
            material={materials["Material.2127"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_8.geometry}
            material={materials["Material.2128"]}
          />
          </RigidBody>
        </group>
        <group
          position={[42.02, 4, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258.geometry}
            material={materials["Material.2129"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_1.geometry}
            material={materials["Material.2130"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_2.geometry}
            material={materials["Material.2131"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_3.geometry}
            material={materials["Material.2132"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_4.geometry}
            material={materials["Material.2133"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_5.geometry}
            material={materials["Material.2134"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_6.geometry}
            material={materials["Material.2135"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_7.geometry}
            material={materials["Material.2136"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_8.geometry}
            material={materials["Material.2137"]}
          />
          </RigidBody>
        </group>
        <group
          position={[42.02, 7, -30.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259.geometry}
            material={materials["Material.2138"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_1.geometry}
            material={materials["Material.2139"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_2.geometry}
            material={materials["Material.2140"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_3.geometry}
            material={materials["Material.2141"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_4.geometry}
            material={materials["Material.2142"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_5.geometry}
            material={materials["Material.2143"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_6.geometry}
            material={materials["Material.2144"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_7.geometry}
            material={materials["Material.2145"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_8.geometry}
            material={materials["Material.2146"]}
          />
          </RigidBody>
        </group>
        <group
          position={[15.47, 1, -35.3]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260.geometry}
            material={materials["Material.2147"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_1.geometry}
            material={materials["Material.2148"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_2.geometry}
            material={materials["Material.2149"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_3.geometry}
            material={materials["Material.2150"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_4.geometry}
            material={materials["Material.2151"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_5.geometry}
            material={materials["Material.2152"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_6.geometry}
            material={materials["Material.2153"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_7.geometry}
            material={materials["Material.2154"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_8.geometry}
            material={materials["Material.2155"]}
          />
          </RigidBody>
        </group>
        <group
          position={[15.47, 4, -35.3]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261.geometry}
            material={materials["Material.2156"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_1.geometry}
            material={materials["Material.2157"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_2.geometry}
            material={materials["Material.2158"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_3.geometry}
            material={materials["Material.2159"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_4.geometry}
            material={materials["Material.2160"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_5.geometry}
            material={materials["Material.2161"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_6.geometry}
            material={materials["Material.2162"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_7.geometry}
            material={materials["Material.2163"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_8.geometry}
            material={materials["Material.2164"]}
          />
          </RigidBody>
        </group>
        <group
          position={[15.47, 7, -35.3]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262.geometry}
            material={materials["Material.2165"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_1.geometry}
            material={materials["Material.2166"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_2.geometry}
            material={materials["Material.2167"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_3.geometry}
            material={materials["Material.2168"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_4.geometry}
            material={materials["Material.2169"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_5.geometry}
            material={materials["Material.2170"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_6.geometry}
            material={materials["Material.2171"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_7.geometry}
            material={materials["Material.2172"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_8.geometry}
            material={materials["Material.2173"]}
          />
          </RigidBody>
        </group>
        <group
          position={[-51.14, 1, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263.geometry}
            material={materials["Material.2174"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_1.geometry}
            material={materials["Material.2175"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_2.geometry}
            material={materials["Material.2176"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_3.geometry}
            material={materials["Material.2177"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_4.geometry}
            material={materials["Material.2178"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_5.geometry}
            material={materials["Material.2179"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_6.geometry}
            material={materials["Material.2180"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_7.geometry}
            material={materials["Material.2181"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_8.geometry}
            material={materials["Material.2182"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_9.geometry}
            material={materials["Material.2183"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_10.geometry}
            material={materials["Material.2184"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_11.geometry}
            material={materials["Material.2185"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_12.geometry}
            material={materials["Material.2186"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_13.geometry}
            material={materials["Material.2187"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_14.geometry}
            material={materials["Material.2188"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_15.geometry}
            material={materials["Material.2189"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_16.geometry}
            material={materials["Material.2190"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_17.geometry}
            material={materials["Material.2191"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_18.geometry}
            material={materials["Material.2192"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_19.geometry}
            material={materials["Material.2193"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1329.geometry}
          material={materials["Material.2194"]}
          position={[39.8, 1, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody >
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1330.geometry}
          material={materials["Material.2195"]}
          position={[38.4, 1, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1331.geometry}
          material={materials["Material.2196"]}
          position={[39.8, 4, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1332.geometry}
          material={materials["Material.2197"]}
          position={[38.4, 4, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1333.geometry}
          material={materials["Material.2198"]}
          position={[39.8, 7, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1334.geometry}
          material={materials["Material.2199"]}
          position={[38.4, 7, 1.77]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
        </RigidBody>
        <group
          position={[-58.7, 1, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder264.geometry}
            material={materials["Material.2200"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder264_1.geometry}
            material={materials["Material.2201"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder264_2.geometry}
            material={materials["Material.2202"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder264_3.geometry}
            material={materials["Material.2203"]}
          />
          </RigidBody>
        </group>
        <group
          position={[43.2, 1, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265.geometry}
            material={materials["Material.2204"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_1.geometry}
            material={materials["Material.2205"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_2.geometry}
            material={materials["Material.2206"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_3.geometry}
            material={materials["Material.2207"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_4.geometry}
            material={materials["Material.2208"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_5.geometry}
            material={materials["Material.2209"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_6.geometry}
            material={materials["Material.2210"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_7.geometry}
            material={materials["Material.2211"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_8.geometry}
            material={materials["Material.2212"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_9.geometry}
            material={materials["Material.2213"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_10.geometry}
            material={materials["Material.2214"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_11.geometry}
            material={materials["Material.2215"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_12.geometry}
            material={materials["Material.2216"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_13.geometry}
            material={materials["Material.2217"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_14.geometry}
            material={materials["Material.2218"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_15.geometry}
            material={materials["Material.2219"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_16.geometry}
            material={materials["Material.2220"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_17.geometry}
            material={materials["Material.2221"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_18.geometry}
            material={materials["Material.2222"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_19.geometry}
            material={materials["Material.2223"]}
          />
          </RigidBody>
        </group>
        <group
          position={[43.2, 4, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266.geometry}
            material={materials["Material.2224"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_1.geometry}
            material={materials["Material.2225"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_2.geometry}
            material={materials["Material.2226"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_3.geometry}
            material={materials["Material.2227"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_4.geometry}
            material={materials["Material.2228"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_5.geometry}
            material={materials["Material.2229"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_6.geometry}
            material={materials["Material.2230"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_7.geometry}
            material={materials["Material.2231"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_8.geometry}
            material={materials["Material.2232"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_9.geometry}
            material={materials["Material.2233"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_10.geometry}
            material={materials["Material.2234"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_11.geometry}
            material={materials["Material.2235"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_12.geometry}
            material={materials["Material.2236"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_13.geometry}
            material={materials["Material.2237"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_14.geometry}
            material={materials["Material.2238"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_15.geometry}
            material={materials["Material.2239"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_16.geometry}
            material={materials["Material.2240"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_17.geometry}
            material={materials["Material.2241"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_18.geometry}
            material={materials["Material.2242"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_19.geometry}
            material={materials["Material.2243"]}
          />
          </RigidBody>
        </group>
        <group
          position={[43.2, 7, -4.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267.geometry}
            material={materials["Material.2244"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_1.geometry}
            material={materials["Material.2245"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_2.geometry}
            material={materials["Material.2246"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_3.geometry}
            material={materials["Material.2247"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_4.geometry}
            material={materials["Material.2248"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_5.geometry}
            material={materials["Material.2249"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_6.geometry}
            material={materials["Material.2250"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_7.geometry}
            material={materials["Material.2251"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_8.geometry}
            material={materials["Material.2252"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_9.geometry}
            material={materials["Material.2253"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_10.geometry}
            material={materials["Material.2254"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_11.geometry}
            material={materials["Material.2255"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_12.geometry}
            material={materials["Material.2256"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_13.geometry}
            material={materials["Material.2257"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_14.geometry}
            material={materials["Material.2258"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_15.geometry}
            material={materials["Material.2259"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_16.geometry}
            material={materials["Material.2260"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_17.geometry}
            material={materials["Material.2261"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_18.geometry}
            material={materials["Material.2262"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_19.geometry}
            material={materials["Material.2263"]}
          />
          </RigidBody>
        </group>
        <group
          position={[50.04, 1, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder268.geometry}
            material={materials["Material.2264"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder268_1.geometry}
            material={materials["Material.2265"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder268_2.geometry}
            material={materials["Material.2266"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder268_3.geometry}
            material={materials["Material.2267"]}
          />
          </RigidBody>
        </group>
        <group
          position={[50.04, 4, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder269.geometry}
            material={materials["Material.2268"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder269_1.geometry}
            material={materials["Material.2269"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder269_2.geometry}
            material={materials["Material.2270"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder269_3.geometry}
            material={materials["Material.2271"]}
          />
          </RigidBody>
        </group>
        <group
          position={[50.04, 7, -3.74]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder270.geometry}
            material={materials["Material.2272"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder270_1.geometry}
            material={materials["Material.2273"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder270_2.geometry}
            material={materials["Material.2274"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder270_3.geometry}
            material={materials["Material.2275"]}
          />
          </RigidBody>
        </group>
        <group
          position={[43.63, 1, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder271.geometry}
            material={materials["Material.2276"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder271_1.geometry}
            material={materials["Material.2277"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder271_2.geometry}
            material={materials["Material.2278"]}
          />
          </RigidBody>
        </group>
        <group
          position={[43.63, 4, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder272.geometry}
            material={materials["Material.2279"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder272_1.geometry}
            material={materials["Material.2280"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder272_2.geometry}
            material={materials["Material.2281"]}
          />
          </RigidBody>
        </group>
        <group
          position={[43.63, 7, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder273.geometry}
            material={materials["Material.2282"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder273_1.geometry}
            material={materials["Material.2283"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder273_2.geometry}
            material={materials["Material.2284"]}
          />
          </RigidBody>
        </group>
        <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1335.geometry}
          material={materials["Material.2340"]}
          position={[6.2, 6, -17.5]}
          scale={[6.2, 1, 6.9]}
        />
      </RigidBody >
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1336.geometry}
          material={nodes.Plane1336.material}
          position={[8.5, 12, -27.4]}
          scale={[3.9, 1, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1337.geometry}
          material={nodes.Plane1337.material}
          position={[8.5, 12, -8]}
          scale={[3.9, 1, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1338.geometry}
          material={nodes.Plane1338.material}
          position={[1.2, 12, 21.2]}
          scale={[6.2, 1, 9.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1339.geometry}
          material={nodes.Plane1339.material}
          position={[3.5, 12, 9.5]}
          scale={[3.9, 1, 2.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1340.geometry}
          material={materials["Material.2339"]}
          position={[6.2, 3, -17.5]}
          scale={[6.2, 1, 6.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1341.geometry}
          material={materials["Material.2341"]}
          position={[6.2, 9, -17.5]}
          scale={[6.2, 1, 6.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1342.geometry}
          material={nodes.Plane1342.material}
          position={[6.2, 12, -17.5]}
          scale={[6.2, 1, 6.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1343.geometry}
          material={materials["Material.2336"]}
          position={[8.5, 3, -27.4]}
          scale={[3.9, 1, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1344.geometry}
          material={materials["Material.2337"]}
          position={[8.5, 6, -27.4]}
          scale={[3.9, 1, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1345.geometry}
          material={materials["Material.2338"]}
          position={[8.5, 9, -27.4]}
          scale={[3.9, 1, 3]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1346.geometry}
          material={materials["Material.2344"]}
          position={[8.5, 9, -8]}
          scale={[3.9, 1, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1347.geometry}
          material={materials["Material.2342"]}
          position={[8.5, 3, -8]}
          scale={[3.9, 1, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1348.geometry}
          material={materials["Material.2343"]}
          position={[8.5, 6, -8]}
          scale={[3.9, 1, 2.6]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1349.geometry}
          material={materials["Material.2345"]}
          position={[3.5, 3, 9.5]}
          scale={[3.9, 1, 2.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1350.geometry}
          material={materials["Material.2346"]}
          position={[3.5, 6, 9.5]}
          scale={[3.9, 1, 2.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1351.geometry}
          material={materials["Material.2347"]}
          position={[3.5, 9, 9.5]}
          scale={[3.9, 1, 2.5]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1352.geometry}
          material={materials["Material.2328"]}
          position={[1.2, 3, 21.2]}
          scale={[6.2, 1, 9.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1353.geometry}
          material={materials["Material.2330"]}
          position={[1.2, 6, 21.2]}
          scale={[6.2, 1, 9.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1354.geometry}
          material={materials["Material.2332"]}
          position={[1.2, 9, 21.2]}
          scale={[6.2, 1, 9.2]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1355.geometry}
          material={materials["Material.2285"]}
          position={[-45.2, 1, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1356.geometry}
          material={materials["Material.2286"]}
          position={[-45.2, 4, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1357.geometry}
          material={materials["Material.2287"]}
          position={[-45.2, 7, -37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1358.geometry}
          material={materials["Material.2288"]}
          position={[-7.4, 1, 37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1359.geometry}
          material={materials["Material.2289"]}
          position={[-7.4, 4, 37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1360.geometry}
          material={materials["Material.2290"]}
          position={[-7.4, 7, 37.59]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.5, 1, 1]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder094.geometry}
          material={materials["Material.2291"]}
          position={[-25.26, 1, -5.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        />
        </RigidBody>
        <group
          position={[11.3, 10, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280.geometry}
            material={materials["Material.2297"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_1.geometry}
            material={materials["Material.1441"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_2.geometry}
            material={materials["Material.2292"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_3.geometry}
            material={materials["Material.2293"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_4.geometry}
            material={materials["Material.2294"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_5.geometry}
            material={materials["Material.2295"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_6.geometry}
            material={materials["Material.2296"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_7.geometry}
            material={materials["Material.2298"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_8.geometry}
            material={materials["Material.2299"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_9.geometry}
            material={materials["Material.2300"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_10.geometry}
            material={materials["Material.2301"]}
          />
          </RigidBody>
        </group>
        <group
          position={[11.3, 4, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285.geometry}
            material={materials["Material.2302"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_1.geometry}
            material={materials["Material.2303"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_2.geometry}
            material={materials["Material.2304"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_3.geometry}
            material={materials["Material.2305"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_4.geometry}
            material={materials["Material.2306"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_5.geometry}
            material={materials["Material.2307"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_6.geometry}
            material={materials["Material.2308"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_7.geometry}
            material={materials["Material.2309"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_8.geometry}
            material={materials["Material.2310"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_9.geometry}
            material={materials["Material.2311"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_10.geometry}
            material={materials["Material.2312"]}
          />
          </RigidBody>
        </group>
        <group
          position={[11.3, 7, 6.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.015, 0.36, 0.015]}
        >
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286.geometry}
            material={materials["Material.2313"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_1.geometry}
            material={materials["Material.2314"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_2.geometry}
            material={materials["Material.2315"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_3.geometry}
            material={materials["Material.2316"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_4.geometry}
            material={materials["Material.2317"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_5.geometry}
            material={materials["Material.2318"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_6.geometry}
            material={materials["Material.2319"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_7.geometry}
            material={materials["Material.2320"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_8.geometry}
            material={materials["Material.2321"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_9.geometry}
            material={materials["Material.2322"]}
          />
          </RigidBody>
          <RigidBody type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_10.geometry}
            material={materials["Material.2323"]}
          />
          </RigidBody>
        </group>
    </group >
  );
}

useGLTF.preload("/assets/hostel_H.glb");