import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef, useEffect } from "react"
import React from 'react';
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { BallCollider, CapsuleCollider, CuboidCollider, RigidBody, useRapier } from "@react-three/rapier"

let SPEED = 50
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

export function Box(props) {

  return (

    <RigidBody type="fixed" position={[100, 1, 0]}>
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <CuboidCollider args={[2, 5, 2]} />
    </RigidBody>
  )
}


export function Player({ lerp = THREE.MathUtils.lerp }) {
  const ref = useRef()
  const rapier = useRapier()
  const [, get] = useKeyboardControls()
  var raycaster = new THREE.Raycaster();

  useFrame((state) => {
    const { forward, backward, left, right, jump } = get()
    const velocity = ref.current.linvel()

    state.camera.position.copy(ref.current.translation())

    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
    ref.current.addForce({ x: 0, y: -0.1, z: 0 }, true);
    // ref.current.setLinDamping(0);

    const world = rapier.world
    const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -9, z: 0 }))
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75
    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 17.5, z: 0 })
  })




  return (
    <>
      <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[120, 10, 0]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[3.2, 1.2]} friction={[-0.3]} />
      </RigidBody>

    </>
  )
}
