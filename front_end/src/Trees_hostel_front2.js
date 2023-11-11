import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Front_tree_two(props) {
    const { nodes, materials } = useGLTF("/assets/Front_tree_two.glb");
    return (
        <>
            <group {...props} dispose={null} position={[100, 0, 10]} scale={[0.3, 0.3, 0.3]}>
                <group position={[0, 0, 50]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_bark_0.geometry}
                        material={materials.bark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_leaves_0.geometry}
                        material={materials.leaves}
                    />
                </group>
            </group>

            <group {...props} dispose={null} position={[100, 0, 210]} scale={[0.3, 0.3, 0.3]}>
                <group position={[0, 0, 50]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_bark_0.geometry}
                        material={materials.bark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_leaves_0.geometry}
                        material={materials.leaves}
                    />
                </group>
            </group>

            <group {...props} dispose={null} position={[100, 0, -190]} scale={[0.3, 0.3, 0.3]}>
                <group position={[0, 0, 50]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_bark_0.geometry}
                        material={materials.bark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_leaves_0.geometry}
                        material={materials.leaves}
                    />
                </group>
            </group>

            <group {...props} dispose={null} position={[170, 0, 210]} scale={[0.3, 0.3, 0.3]}>
                <group position={[0, 0, 50]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_bark_0.geometry}
                        material={materials.bark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_leaves_0.geometry}
                        material={materials.leaves}
                    />
                </group>
            </group>

            <group {...props} dispose={null} position={[170, 0, 10]} scale={[0.3, 0.3, 0.3]}>
                <group position={[0, 0, 50]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_bark_0.geometry}
                        material={materials.bark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tree4_leaves_0.geometry}
                        material={materials.leaves}
                    />
                </group>
            </group>
        </>
    );
}

useGLTF.preload("/assets/Front_tree_two.glb");