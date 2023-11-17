import { CuboidCollider, RigidBody } from "@react-three/rapier"


export function Ground(props) {

  return (
    <>
      <RigidBody type="fixed" linearDamping={100} angularDamping={100}>
        <mesh receiveShadow position={[0, -0.5, 0]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[5000, 5000]} />
          <meshStandardMaterial color={"springgreen"} />
        </mesh>
        <CuboidCollider args={[5000, 2, 5000]} position={[0, 0, 0]} />
      </RigidBody>
    </>
  )
}