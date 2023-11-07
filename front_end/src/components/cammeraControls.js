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

    camera.position.add(moveDirection.current);
    
    if (rigidBodyRef.current) {
      const position = vec3(camera.position);
      rigidBodyRef.current.setTranslation(position, true);
    }
    if(rigidBodyVel.current)
    {
      const velocity = new Vector3(moveDirection.current.x, 0, moveDirection.current.z);
    rigidBodyRef.current.setLinvel(velocity);

    }
    

  });

  const handleKeyDown = (event) => {
    const move = new Vector3();

    switch (event.code) {
      case "KeyW":
        move.copy(forward).multiplyScalar(moveSpeed);
        break;
      case "KeyS":
        move.copy(forward).multiplyScalar(-moveSpeed); // Move backward
        break;
      case "KeyA":
        move.copy(right).multiplyScalar(-moveSpeed); // Move left
        break;
      case "KeyD":
        move.copy(right).multiplyScalar(moveSpeed); // Move right
        break;
      default:
        break;
    }

    moveDirection.current = move;

  };

  const handleKeyUp = (event) => {
    switch (event.code) {
      case "KeyW":
      case "KeyS":
      case "KeyA":
      case "KeyD":
        moveDirection.current = new Vector3(0, 0, 0); // Stop moving
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
  };



  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <group>
  <RigidBody position={[10, 0, 34]} ref={rigidBodyRef}  enabledRotations={[false, false, false]} setLinvel={rigidBodyVel} >
    <CuboidCollider args={[1, 1, 1]} >
      <group>
        <primitive object={camera}   />
      </group>
    </CuboidCollider>
  </RigidBody>
</group>
  );
}

export { Animate };
