

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Achivements(props) {
  const { nodes, materials } = useGLTF("./assets/NewAchivements.glb");
  return (
    <group {...props} dispose={null} position={[242,0,450]} scale={[6,5,6]} rotation={[0, -Math.PI , 0]}>
      <group
        position={[16.014, 0, 3.425]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.014]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_column_0.geometry}
            material={materials.column}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[50, 50, 20]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.005"]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[12.5, 1, 12.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.003"]}
        position={[0, 5, -12.3]}
        scale={[12.5, 5, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[-12.509, 5, 0]}
        rotation={[0, 1.571, 0]}
        scale={[12.5, 5, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.004"]}
        position={[0, 5, 12.3]}
        scale={[12.5, 5, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[0, 10, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[12.5, 1, 12.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.016"]}
        position={[-0.209, 5, 9.25]}
        scale={[12.5, 0.2, 3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.014"]}
        position={[-0.209, 5, -9.25]}
        scale={[12.5, 0.2, 3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.015"]}
        position={[-9.209, 5, 0.044]}
        rotation={[0, 1.571, 0]}
        scale={[12.4, 0.2, 3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.017"]}
        position={[2.78, 7.125, -6.614]}
        scale={[9.5, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Material.019"]}
        position={[7.077, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050.geometry}
        material={materials["Material.070"]}
        position={[7.577, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051.geometry}
        material={materials["Material.071"]}
        position={[11.5, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder058.geometry}
        material={materials["Material.078"]}
        position={[11.5, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder059.geometry}
        material={materials["Material.079"]}
        position={[7.577, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder072.geometry}
        material={materials["Material.092"]}
        position={[7.077, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.104"]}
        position={[2.892, 7.13, 6.615]}
        scale={[9.5, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder084.geometry}
        material={materials["Material.106"]}
        position={[-6.604, 6.15, -6.066]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder096.geometry}
        material={materials["Material.118"]}
        position={[-6.601, 6.15, -5.505]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.131"]}
        position={[-6.567, 7.127, -0.005]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[6.72, 0.1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder112.geometry}
        material={materials["Material.135"]}
        position={[-6.395, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[12.31, 5, -7.4]}
        scale={[0.2, 5, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.007"]}
        position={[12.31, 5, 7.4]}
        scale={[0.2, 5, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={materials["Material.136"]}
        position={[8, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials["Material.137"]}
        position={[8.5, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027.geometry}
        material={materials["Material.138"]}
        position={[9, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials["Material.139"]}
        position={[9.5, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials["Material.140"]}
        position={[10, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={materials["Material.141"]}
        position={[10.5, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials["Material.142"]}
        position={[11, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032.geometry}
        material={materials["Material.143"]}
        position={[8, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033.geometry}
        material={materials["Material.144"]}
        position={[8.5, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034.geometry}
        material={materials["Material.145"]}
        position={[9, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035.geometry}
        material={materials["Material.146"]}
        position={[9.5, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder036.geometry}
        material={materials["Material.147"]}
        position={[10, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037.geometry}
        material={materials["Material.148"]}
        position={[10.5, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder038.geometry}
        material={materials["Material.149"]}
        position={[11, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[12.31, 7.494, 0]}
        scale={[0.2, 2.5, 2.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.150"]}
        position={[12.55, 7.159, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 4, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.151"]}
        position={[12.55, 1.592, -8.851]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 4, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.153"]}
        position={[12.55, 1.583, 8.893]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 4, 1.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.154"]}
        position={[14.419, 4.806, 0]}
        scale={[2, 0.2, 5]}
      />
      <group
        position={[16.014, 0, -3.958]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.014]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_column_0001.geometry}
            material={materials["column.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[50, 50, 20]}
          />
        </group>
      </group>
      <group
        position={[16.014, 0, -0.489]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.014]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_column_0002.geometry}
            material={materials["column.002"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[50, 50, 20]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.053"]}
        position={[14.003, 0, 0]}
        scale={[0.89, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder039.geometry}
        material={materials["Material.054"]}
        position={[6.572, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder040.geometry}
        material={materials["Material.055"]}
        position={[6.107, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder041.geometry}
        material={materials["Material.056"]}
        position={[5.523, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder042.geometry}
        material={materials["Material.057"]}
        position={[5.015, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder043.geometry}
        material={materials["Material.058"]}
        position={[4.477, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder044.geometry}
        material={materials["Material.059"]}
        position={[4.015, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder045.geometry}
        material={materials["Material.060"]}
        position={[3.513, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder046.geometry}
        material={materials["Material.061"]}
        position={[3.092, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder047.geometry}
        material={materials["Material.062"]}
        position={[2.704, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder048.geometry}
        material={materials["Material.063"]}
        position={[2.292, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder049.geometry}
        material={materials["Material.064"]}
        position={[1.931, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder071.geometry}
        material={materials["Material.065"]}
        position={[1.481, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder073.geometry}
        material={materials["Material.066"]}
        position={[1, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder064.geometry}
        material={materials["Material.067"]}
        position={[0.527, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder065.geometry}
        material={materials["Material.068"]}
        position={[0.083, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder066.geometry}
        material={materials["Material.069"]}
        position={[-0.377, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder067.geometry}
        material={materials["Material.105"]}
        position={[-0.89, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder068.geometry}
        material={materials["Material.152"]}
        position={[-1.441, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055.geometry}
        material={materials["Material.155"]}
        position={[-2.01, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder056.geometry}
        material={materials["Material.156"]}
        position={[-2.575, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder057.geometry}
        material={materials["Material.157"]}
        position={[-3.043, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder060.geometry}
        material={materials["Material.158"]}
        position={[-3.555, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder061.geometry}
        material={materials["Material.159"]}
        position={[-3.929, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder062.geometry}
        material={materials["Material.160"]}
        position={[-4.429, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063.geometry}
        material={materials["Material.161"]}
        position={[-4.862, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder069.geometry}
        material={materials["Material.162"]}
        position={[-5.237, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder070.geometry}
        material={materials["Material.163"]}
        position={[-5.606, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder074.geometry}
        material={materials["Material.164"]}
        position={[-5.912, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder075.geometry}
        material={materials["Material.165"]}
        position={[-6.373, 6.125, 6.615]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder076.geometry}
        material={materials["Material.166"]}
        position={[-6.495, 6.125, 6.27]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder077.geometry}
        material={materials["Material.167"]}
        position={[-6.495, 6.125, 5.884]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder078.geometry}
        material={materials["Material.168"]}
        position={[-6.495, 6.125, 5.42]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder079.geometry}
        material={materials["Material.169"]}
        position={[-6.495, 6.125, 5.002]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder080.geometry}
        material={materials["Material.170"]}
        position={[-6.495, 6.125, 4.576]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder081.geometry}
        material={materials["Material.171"]}
        position={[-6.495, 6.125, 4.138]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder082.geometry}
        material={materials["Material.172"]}
        position={[-6.495, 6.125, 3.682]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder083.geometry}
        material={materials["Material.173"]}
        position={[-6.495, 6.125, 3.304]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder102.geometry}
        material={materials["Material.174"]}
        position={[-6.495, 6.125, 2.93]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder085.geometry}
        material={materials["Material.175"]}
        position={[-6.495, 6.125, 2.529]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder086.geometry}
        material={materials["Material.176"]}
        position={[-6.495, 6.125, 2.117]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder097.geometry}
        material={materials["Material.177"]}
        position={[-6.495, 6.125, 1.576]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder098.geometry}
        material={materials["Material.178"]}
        position={[-6.495, 6.125, 1.169]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder099.geometry}
        material={materials["Material.179"]}
        position={[-6.495, 6.125, 0.712]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder100.geometry}
        material={materials["Material.180"]}
        position={[-6.495, 6.125, 0.298]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder101.geometry}
        material={materials["Material.181"]}
        position={[-6.495, 6.125, -0.115]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder103.geometry}
        material={materials["Material.182"]}
        position={[-6.495, 6.125, -0.541]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder087.geometry}
        material={materials["Material.183"]}
        position={[-6.495, 6.125, -0.923]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder088.geometry}
        material={materials["Material.184"]}
        position={[-6.495, 6.125, -1.289]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder089.geometry}
        material={materials["Material.185"]}
        position={[-6.495, 6.125, -1.706]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder090.geometry}
        material={materials["Material.186"]}
        position={[-6.495, 6.125, -2.15]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder091.geometry}
        material={materials["Material.187"]}
        position={[-6.495, 6.125, -2.603]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder092.geometry}
        material={materials["Material.188"]}
        position={[-6.495, 6.125, -3.107]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder093.geometry}
        material={materials["Material.189"]}
        position={[-6.495, 6.125, -3.656]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder094.geometry}
        material={materials["Material.190"]}
        position={[-6.495, 6.125, -4.221]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder095.geometry}
        material={materials["Material.191"]}
        position={[-6.495, 6.125, -4.655]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder104.geometry}
        material={materials["Material.192"]}
        position={[-6.495, 6.125, -5.063]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["Material.193"]}
        position={[-5.914, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["Material.194"]}
        position={[-5.452, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["Material.195"]}
        position={[-4.986, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["Material.196"]}
        position={[-4.556, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials["Material.197"]}
        position={[-4.125, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials["Material.198"]}
        position={[-3.5, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials["Material.199"]}
        position={[-2.927, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={materials["Material.200"]}
        position={[-2.334, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder052.geometry}
        material={materials["Material.201"]}
        position={[-1.826, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder053.geometry}
        material={materials["Material.202"]}
        position={[-1.412, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054.geometry}
        material={materials["Material.203"]}
        position={[-0.969, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials["Material.204"]}
        position={[-0.591, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials["Material.205"]}
        position={[-0.088, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials["Material.206"]}
        position={[0.386, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials["Material.207"]}
        position={[0.832, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder105.geometry}
        material={materials["Material.208"]}
        position={[1.172, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.209"]}
        position={[1.589, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.210"]}
        position={[2.101, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.211"]}
        position={[2.664, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.212"]}
        position={[3.211, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.213"]}
        position={[3.749, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.214"]}
        position={[4.143, 6.15, -6.623]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Material.215"]}
        position={[6.568, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Material.216"]}
        position={[6.039, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.217"]}
        position={[5.55, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Material.218"]}
        position={[4.55, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Material.219"]}
        position={[4.992, 6.125, -6.614]}
        scale={[0.1, 1, 0.1]}
      />
    </group>
  );
}

useGLTF.preload("./assets/NewAchivements.glb");



