import React, { Suspense, useMemo, useState, useEffect ,useRef} from 'react';
import { Canvas, useThree, useFrame, useLoader,extend } from '@react-three/fiber';
import { Vector3, Quaternion} from 'three';
import {RigidBody, CuboidCollider,vec3,quat,euler} from '@react-three/rapier'

function Animate() {
  const forward = new Vector3(0, 0, -1);
  const right = new Vector3(1, 0, 0);
  const moveSpeed = 0.1;
  const mouseSensitivity = 0.01;

  const { camera } = useThree();
  const rigidBodyRef=useRef(null);
  const rigidBodyVel=useRef(null);

  const moveDirection = useRef(new Vector3(0, 0, 0));
  const pitch = useRef(0);
  const yaw = useRef(0);
  const isMouseMoving = useRef(false);

  useFrame(() => {
    camera.rotation.x = pitch.current;
    camera.rotation.y = yaw.current;

    const quaternion = new Quaternion();
    quaternion.setFromAxisAngle(right, pitch.current);
    quaternion.multiply(
      new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), yaw.current)
    );

    camera.setRotationFromQuaternion(quaternion);

    camera.position.add(moveDirection.current);
    
    

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
      isMouseMoving.current = true; // Mouse is moving
    }

    yaw.current -= deltaX * mouseSensitivity;
    pitch.current -= deltaY * mouseSensitivity;

    pitch.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch.current));

    forward.set(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
    right.set(-Math.sin(yaw.current - Math.PI / 2), 0, -Math.cos(yaw.current - Math.PI / 2));
    forward.normalize();
    right.normalize();
  };

 
  // Add event listeners
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <group>
  <RigidBody position={[10, 0, 34]}  enabledRotations={[false, false, false]} type ='fixed' >
    <CuboidCollider args={[1, 1, 1]} >
      <group>
        <primitive object={camera}   />
      </group>
    </CuboidCollider>
  </RigidBody>
</group>
  );
}

export {Animate};