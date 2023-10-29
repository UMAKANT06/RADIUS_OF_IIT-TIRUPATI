import React, {useRef,useState} from 'react';
import {  useThree, useFrame} from '@react-three/fiber';
import { Vector3, Quaternion} from 'three';
import {RigidBody, CuboidCollider} from '@react-three/rapier';
import * as THREE from 'three';
// import { R3RapierBranding } from "r3-rapier-branding";



function Animate() {
  const forward = new Vector3(0, 0, -1);
  const right = new Vector3(1, 0, 0);
  const moveSpeed = 0.1;
  const mouseSensitivity = 0.01;

  const { camera } = useThree();
  const moveDirection = useRef(new Vector3(0, 0, 0));
  const pitch = useRef(0);
  const yaw = useRef(0);
  const isMouseMoving = useRef(false);
  const rigidBodyVector = new THREE.Vector3(0, 0, 0);
  const rigidBodyRef=useRef();

  const [colliderPosition, setColliderPosition] = useState([10, 0, 34]);

  

  useFrame((state) => {
    camera.rotation.x = pitch.current;
    camera.rotation.y = yaw.current;

    const quaternion = new Quaternion();
    quaternion.setFromAxisAngle(right, pitch.current);
    quaternion.multiply(
      new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), yaw.current)
    )

    camera.setRotationFromQuaternion(quaternion)

    camera.position.add(moveDirection.current);
    setColliderPosition([camera.position.x*30, camera.position.y, camera.position.z*10]);
    console.log("Camera Position:", camera.position.x,camera.position.y,camera.position.z);
  //   rigidBodyVector.copy(camera.position);
  //   rigidBodyRef.current=rigidBodyVector;
  
  //  console.log("rigidBody Position",rigidBodyRef.current.x,rigidBodyRef.current.y,rigidBodyRef.current.z,);
   console.log("collider position" ,colliderPosition);

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
  <RigidBody position={[10,0,34]}   shape= 'ball' ref={colliderPosition}  enabledRotations={[false, false, false]}type='dynamic'>
    <CuboidCollider args={[1, 1, 1]} position={colliderPosition} ref={colliderPosition} moveSpeed={1}>
      <group>
        <primitive object={camera}   />

      </group>
      
    </CuboidCollider>
  </RigidBody>
</group>
  );
}

export {Animate};