import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function GrassBoundary(props) {
    const { nodes, materials } = useGLTF("/assets/GrassBoundary.glb");
    return (
        <>



            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[72, -1.5, -18]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[154, -1.5, -18]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[72, -1.5, 18]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[154, -1.5, 18]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[72, -1.5, -218]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[72, -1.5, 181]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[154, -1.5, 181]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[72, -1.5, 218]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[154, -1.5, 218]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.6, 0.6]} position={[72, -1.5, -181]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
           



            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[109, -1.5, -18]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[152, -1.5, -18]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[109, -1.5, -218]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[109, -1.5, 181]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[152, -1.5, 181]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[109, -1.5, 75]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[152, -1.5, 75]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[109, -1.5, 275]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[152, -1.5, 275]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.6, 0.6]} position={[109, -1.5, -125]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>


            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-32, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[153, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-32, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[153, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-32, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[153, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-32, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[153, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-32, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[153, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-32, -1.5, -279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            {/* <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[153, -1.5, -279]}> */}
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.Part11Mtl}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3001.geometry}
                    material={materials["Part11Mtl.001"]}
                    position={[7.28, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3002.geometry}
                    material={materials["Part11Mtl.002"]}
                    position={[14.418, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3003.geometry}
                    material={materials["Part11Mtl.003"]}
                    position={[21.179, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3004.geometry}
                    material={materials["Part11Mtl.004"]}
                    position={[28, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3005.geometry}
                    material={materials["Part11Mtl.005"]}
                    position={[34.562, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3006.geometry}
                    material={materials["Part11Mtl.006"]}
                    position={[41.057, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3007.geometry}
                    material={materials["Part11Mtl.007"]}
                    position={[47.993, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3008.geometry}
                    material={materials["Part11Mtl.008"]}
                    position={[54.185, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3009.geometry}
                    material={materials["Part11Mtl.009"]}
                    position={[60.718, 0, 0]}
                />
            </RigidBody>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3010.geometry}
                    material={materials["Part11Mtl.010"]}
                    position={[66.648, 0, 0]}
                />
            </RigidBody>
            {/* </group> */}

            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[40, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[225, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[40, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[225, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[40, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[225, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[40, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[225, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[40, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[225, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[40, -1.5, -279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[225, -1.5, -279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>

            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-105, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[290, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-105, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[290, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-105, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[290, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-105, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[290, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-105, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[290, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-105, -1.5, -279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[290, -1.5, -279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>

            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-125, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[310, -1.5, 79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-125, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[310, -1.5, 279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-125, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[310, -1.5, -121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-125, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[310, -1.5, 121]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-125, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[310, -1.5, -79]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[-125, -1.5, -279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.6, 0.6]} position={[310, -1.5, -279]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3.geometry}
                        material={materials.Part11Mtl}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3001.geometry}
                        material={materials["Part11Mtl.001"]}
                        position={[7.28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3002.geometry}
                        material={materials["Part11Mtl.002"]}
                        position={[14.418, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3003.geometry}
                        material={materials["Part11Mtl.003"]}
                        position={[21.179, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3004.geometry}
                        material={materials["Part11Mtl.004"]}
                        position={[28, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3005.geometry}
                        material={materials["Part11Mtl.005"]}
                        position={[34.562, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3006.geometry}
                        material={materials["Part11Mtl.006"]}
                        position={[41.057, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3007.geometry}
                        material={materials["Part11Mtl.007"]}
                        position={[47.993, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3008.geometry}
                        material={materials["Part11Mtl.008"]}
                        position={[54.185, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3009.geometry}
                        material={materials["Part11Mtl.009"]}
                        position={[60.718, 0, 0]}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_3010.geometry}
                        material={materials["Part11Mtl.010"]}
                        position={[66.648, 0, 0]}
                    />
                </RigidBody>
            </group>
        </>
    );
}

useGLTF.preload("/assets/GrassBoundary.glb");