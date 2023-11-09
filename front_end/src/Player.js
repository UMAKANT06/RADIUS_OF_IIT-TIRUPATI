import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef,useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"

const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

export function Player({ lerp = THREE.MathUtils.lerp }) {
  const ref = useRef()
  const rapier = useRapier()
  const [, get] = useKeyboardControls()
  const force = [0, 0, -10]

  useFrame((state) => {
    const { forward, backward, left, right, jump } = get()
    const velocity = ref.current.linvel()
    
    state.camera.position.copy(ref.current.translation())
  
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
    ref.current.addForce({ x: -0.1, y: -0.1, z: 0 }, true);
    // ref.current.setLinDamping(0);
  })


  // useEffect(() => {
  //   // Set linear damping to zero to reduce friction.
  //   const rigidBody = ref.current;
  //   if (rigidBody) {
  //     rigidBody.setLinDamping(0.05);
  //     // You may also want to set other parameters like angular damping to zero.
  //     // rigidBody.setAngDamping(0);
  //   }
  // }, []);
  

  return (
    <>
      <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[21, 10, 153]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  )
}
