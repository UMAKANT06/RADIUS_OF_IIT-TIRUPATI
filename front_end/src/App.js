import { Sky, PointerLockControls, KeyboardControls,Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from "./Ground"
import { CubeTextureLoader } from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { Player } from "./Player"
import { Cubes } from "./Cubes";
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { Hostel_H } from "./Hostel_H";
import { Roads } from "./Roads";
import { Front_tree_one } from "./Trees_hostel_front1";
import { Front_tree_two } from "./Trees_hostel_front2";
import { TreesBetween1 } from "./TreesBetween1";
import { TreesBetween2 } from "./TreesBetween2";
import { FrontRoads } from "./FrontRoads";
import { Security } from "./Security";

function Skybox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const sunset = loader.load([
    '/assets/sky/skybox_px.jpg',
    '/assets/sky/skybox_nx.jpg',
    '/assets/sky/skybox_py.jpg',
    '/assets/sky/skybox_ny.jpg',
    '/assets/sky/skybox_pz.jpg',
    '/assets/sky/skybox_nz.jpg',
  ]);
  scene.background = sunset;
  return null;
}




 function Box(props) {
  
  return (
    <>
      <mesh receiveShadow position={[1.702, 1.134, 52.611]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10,10]} />
        <meshStandardMaterial color={"red"}/>
      </mesh>
      {/* <CuboidCollider args={[1, 1, 1]} position={[1.702, 1.134, 52.611]} /> */}
      </>
      
  
  )
}


export default function App() {
  const modelPath = '/assets/output.glb';
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      <Canvas shadowMap >

      <ambientLight intensity={0.5} />


      
        <Sky sunPosition={[100, 20, 100]} />

        <Physics  debug="true "  gravity={[0, -10, 0]} >
          <Ground />
          <Security/>
          <Player />
          <FrontRoads/>
          <Roads/>
          {/* <Achivements/> */}
          <Front_tree_one/>
          <Front_tree_two/>
          <TreesBetween1/>
    
          {/* <Pond/> */}
          {/* <TreesBetween2/> */}
          <Hostel_H/>
          <Cubes/>
          {/* <Grass/> */}
          {/* <Model  modelPath={modelPath}  /> */}
          {/* <Models/> */}
          <RigidBody>
          {/* <Box/> */}
          </RigidBody>
          <Skybox/>
          <Environment preset="sunset" />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  
  );
}