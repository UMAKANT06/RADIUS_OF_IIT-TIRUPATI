import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Vector3, Quaternion } from 'three';

import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier';



function Animate() {
  const rapier = useRapier();
  const [, get] = useKeyboardControls();


  const pitch = useRef(0);
  const yaw = useRef(0);



const moveSpeed = 5
const mouseSensitivity=0.01
const moveDirection = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

const isMouseMoving = useRef(false);
  const ref = useRef();

  useFrame((state) => {
    state.camera.rotation.x = pitch.current;
    state.camera.rotation.y = yaw.current;
    const velocity = ref.current.linvel()

    const quaternion = new Quaternion();
    quaternion.setFromAxisAngle(sideVector, pitch.current);
    quaternion.multiply(
      new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), yaw.current)
    );

    state.camera.setRotationFromQuaternion(quaternion);

    state.camera.position.add(moveDirection);

    

    state.camera.position.copy(ref.current.translation());

    const { forward, backward, left, right } = get();

    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)



    moveDirection.subVectors(frontVector, sideVector).normalize().multiplyScalar(moveSpeed).applyEuler(state.camera.rotation)
    ref.current.setLinvel({ x: moveDirection.x, y: velocity.y, z: moveDirection.z })


    
  });
  //mouse movement
  const handleMouseMove = (event) => {
    const deltaX = event.movementX || event.mozMovementX || 0;
    const deltaY = event.movementY || event.mozMovementY || 0;

    if (deltaX !== 0 || deltaY !== 0) {
      isMouseMoving.current = true;
    }

    yaw.current -= deltaX * mouseSensitivity;
    pitch.current -= deltaY * mouseSensitivity;
  };



  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
   
    <RigidBody
      ref={ref}
      colliders={false}
      mass={1}
      type="dynamic"
      position={[0, 11, 4]}
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[1, 0.5]}/>
    
    </RigidBody>
  
  );
}

export { Animate };
