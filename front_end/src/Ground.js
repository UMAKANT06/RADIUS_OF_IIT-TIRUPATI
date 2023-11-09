import { CuboidCollider, RigidBody } from "@react-three/rapier"


export function Ground(props) {
  
  return (
    <>
      <mesh receiveShadow position={[0, -0.5, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color={"springgreen"}/>
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, 0, 0]} />
    </>
  )
}
