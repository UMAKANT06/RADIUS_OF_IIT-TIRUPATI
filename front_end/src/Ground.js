// import { CuboidCollider, RigidBody } from "@react-three/rapier"


// export function Ground(props) {

//   return (
//     <>
//       <RigidBody type="fixed" linearDamping={100} angularDamping={100}>
//         <mesh receiveShadow position={[0, -0.5, 0]} rotation-x={-Math.PI / 2}>
//           <planeGeometry args={[5000, 5000]} />
//           <meshStandardMaterial color={"springgreen"} />
//         </mesh>
//         <CuboidCollider args={[5000, 2, 5000]} position={[0, 0, 0]} />
//       </RigidBody>
//     </>
//   )
// }

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export function Ground() {
  const ref = useRef()
  const texture = useLoader(TextureLoader, 'textures/grasslight-big.jpg')
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(1500, 1500)
    texture.anisotropy = 16
  }
  return (
    <mesh ref={ref} receiveShadow position={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[10000, 10000]} />
      {texture && <meshPhongMaterial attach="material" map={texture} />}
    </mesh>
  )
}