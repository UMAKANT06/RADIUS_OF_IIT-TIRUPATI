// import { useRef ,useEffect} from "react"
// import * as THREE from "three"
// import React from "react"
// import { Vector3, Quaternion} from 'three';

// import { useFrame } from "@react-three/fiber"
// import { useKeyboardControls } from "@react-three/drei"
// import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"

// const moveSpeed = 5;
// const mouseSensitivity = 0.01;
// // const direction = new THREE.Vector3()
// // const frontVector = new THREE.Vector3()
// // const sideVector = new THREE.Vector3()
// const rotation = new THREE.Vector3()
// const forward=new THREE.Vector3(0,0,-1);
// const right=new THREE.Vector3(1,0,0);
// const moveDirection=new THREE.Vector3();
// const pitch = useRef(0);
// const yaw = useRef(0);
// const isMouseMoving = useRef(false);
// const ref = useRef()
//  function Animate({ lerp = THREE.MathUtils.lerp }) {
 
 
//   const rapier = useRapier()
//   const [, get] = useKeyboardControls()

//   useFrame((state) => {
//     state.camera.rotation.x=pitch.current();
//     state.camera.rotation.y=yaw.current();


//     const quaternion = new Quaternion();
//     quaternion.setFromAxisAngle(right, pitch.current);
//     quaternion.multiply(
//       new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), yaw.current)
//     );

//     state.camera.setRotationFromQuaternion(quaternion);

//     state.camera.position.add(moveDirection.current);

//     //update
//     state.camera.position.copy(ref.current.translation());
//     console.log(ref.current.translation());
//     // const { forward, backward, left, right, jump } = get()
//     // const velocity = ref.current.linvel()
//     // console.log(ref.current.translation());
//     // // update camera
//     // // state.camera.position.copy(ref.current.translation());

    
 
//     // frontVector.set(0, 0, backward - forward)
//     // sideVector.set(left - right, 0, 0)
//     // direction.subVectors(frontVector, sideVector).multiplyScalar(SPEED).applyEuler(state.camera.rotation)
//     // ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })


//   });
//   const handleKeyDown = (event) => {
//     const move = new Vector3();

//     switch (event.code) {
//       case "KeyW":
//         move.copy(forward).multiplyScalar(moveSpeed);
//         break;
//       case "KeyS":
//         move.copy(forward).multiplyScalar(-moveSpeed); // Move backward
//         break;
//       case "KeyA":
//         move.copy(right).multiplyScalar(-moveSpeed); // Move left
//         break;
//       case "KeyD":
//         move.copy(right).multiplyScalar(moveSpeed); // Move right
//         break;
//       default:
//         break;
//     }

//     moveDirection.current = move;

//   };

//   const handleKeyUp = (event) => {
//     switch (event.code) {
//       case "KeyW":
//       case "KeyS":
//       case "KeyA":
//       case "KeyD":
//         moveDirection.current = new Vector3(0, 0, 0); // Stop moving
//         break;
//       default:
//         break;
//     }
//   };

//   const handleMouseMove = (event) => {
//     const deltaX = event.movementX || event.mozMovementX || 0;
//     const deltaY = event.movementY || event.mozMovementY || 0;

//     if (deltaX !== 0 || deltaY !== 0) {
//       isMouseMoving.current = true; // Mouse is moving
//     }

//     yaw.current -= deltaX * mouseSensitivity;
//     pitch.current -= deltaY * mouseSensitivity;

//     pitch.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch.current));

//     forward.set(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
//     right.set(-Math.sin(yaw.current - Math.PI / 2), 0, -Math.cos(yaw.current - Math.PI / 2));
//     forward.normalize();
//     right.normalize();
//   };

 
//   // Add event listeners
//   React.useEffect(() => {
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("keyup", handleKeyUp);
//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("keyup", handleKeyUp);
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   return (
    
//       <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0,11, 0]} enabledRotations={[false, false, false]}>
//         <CapsuleCollider args={[1, 0.5]} />
//       </RigidBody>
      

//   )
// }

// export {Animate};



import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Vector3, Quaternion } from 'three';

import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier';

const moveSpeed = 0.5;
const mouseSensitivity = 0.01;

function Animate() {
  const rapier = useRapier();
  const [, get] = useKeyboardControls();

  const forward = new Vector3(0, 0, -1);
  const right = new Vector3(1, 0, 0);
  const moveDirection = new Vector3();
  const pitch = useRef(0);
  const yaw = useRef(0);
  const isMouseMoving = useRef(false);
  const ref = useRef();

  useFrame((state) => {
    state.camera.rotation.x = pitch.current;
    state.camera.rotation.y = yaw.current;

    const quaternion = new Quaternion();
    quaternion.setFromAxisAngle(right, pitch.current);
    quaternion.multiply(
      new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), yaw.current)
    );

    state.camera.setRotationFromQuaternion(quaternion);

    state.camera.position.add(moveDirection);

    // Update the position of the RigidBody to match the camera
    ref.current.setTranslation(state.camera.position);
  });

  const handleKeyDown = (event) => {
    const move = new Vector3();

    switch (event.code) {
      case 'KeyW':
        move.copy(forward).multiplyScalar(moveSpeed);
        break;
      case 'KeyS':
        move.copy(forward).multiplyScalar(-moveSpeed);
        break;
      case 'KeyA':
        move.copy(right).multiplyScalar(-moveSpeed);
        break;
      case 'KeyD':
        move.copy(right).multiplyScalar(moveSpeed);
        break;
      default:
        break;
    }

    moveDirection.copy(move);
  };

  const handleKeyUp = (event) => {
    switch (event.code) {
      case 'KeyW':
      case 'KeyS':
      case 'KeyA':
      case 'KeyD':
        moveDirection.set(0, 0, 0);
        break;
      default:
        break;
    }
  };

  const handleMouseMove = (event) => {
    const deltaX = event.movementX || event.mozMovementX || 0;
    const deltaY = event.movementY || event.mozMovementY || 0;

    if (deltaX !== 0 || deltaY !== 0) {
      isMouseMoving.current = true;
    }

    yaw.current -= deltaX * mouseSensitivity;
    pitch.current -= deltaY * mouseSensitivity;

    pitch.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch.current));

    forward.set(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
    right.set(-Math.sin(yaw.current - Math.PI / 2), 0, -Math.cos(yaw.current - Math.PI / 2));
    forward.normalize();
    right.normalize();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <RigidBody
      ref={ref}
      colliders={false}
      mass={1}
      type="dynamic"
      position={[0, 11, 0]}
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[1, 0.5]} >
      <camera/>
      </CapsuleCollider>
    </RigidBody>
  );
}

export { Animate };
