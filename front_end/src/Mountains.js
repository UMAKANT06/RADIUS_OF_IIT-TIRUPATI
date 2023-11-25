import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


// Mountain Range
export function Rocks(props) {
    const { nodes, materials } = useGLTF("/assets/rocks.glb");
    return (
        <>
            <group {...props} dispose={null} scale={[0.5, 2, 2]} position={[1100, 0, -1000]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_bake_0.geometry}
                        material={materials.bake}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_bake_0001.geometry}
                        material={materials.bake}
                    />
                </RigidBody>
            </group>
            <group {...props} dispose={null} scale={[0.5, 2, 2]} position={[1100, 0, 1000]}>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_bake_0.geometry}
                        material={materials.bake}
                    />
                </RigidBody>
                <RigidBody type="fixed">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_bake_0001.geometry}
                        material={materials.bake}
                    />
                </RigidBody>
            </group>
        </>
    );
}

useGLTF.preload("/assets/rocks.glb");


// Single Mountain
export function SimpleMountain(props) {
    const { nodes, materials } = useGLTF("/assets/SimpleMountain.glb");
    return (
        <group {...props} dispose={null} position={[-1500, 0, 0]} scale={[1, 1, 1]}>
            <RigidBody type="fixed">
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane__0.geometry}
                    material={materials["Scene_-_Root"]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </RigidBody>
        </group>
    );
}

useGLTF.preload("/assets/SimpleMountain.glb");


// Clouds
export function Clouds(props) {
    const { nodes, materials } = useGLTF("/assets/Clouds.glb");
    return (
        <group {...props} dispose={null} scale={[0.5, 0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]} position={[100, 100, 100]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloud_06_Cloud_01_0.geometry}
                material={materials.Cloud_01}
                position={[-8.686, 57.284, -40.086]}
                rotation={[0, 1.483, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloud_05_Cloud_01_0.geometry}
                material={materials.Cloud_01}
                position={[317.986, 124.535, -77.504]}
                rotation={[-Math.PI, 0.721, -Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloud_04_cloud_00_0.geometry}
                material={materials.cloud_00}
                position={[317.986, 91.447, -77.504]}
                rotation={[-Math.PI, 1.514, -Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloud_03_cloud_00_0.geometry}
                material={materials.cloud_00}
                position={[-52.426, 91.447, -40.086]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloud_02_cloud_00_0.geometry}
                material={materials.cloud_00}
                position={[-75.577, 91.447, 236.784]}
                rotation={[0, -1.318, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cloud_01_cloud_00_0.geometry}
                material={materials.cloud_00}
                position={[0, 68.745, 325.035]}
            />
        </group>
    );
}

useGLTF.preload("/assets/Clouds.glb");