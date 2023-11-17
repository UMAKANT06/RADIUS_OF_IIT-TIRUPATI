import { Sky, PointerLockControls, KeyboardControls, Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from "./Ground"
import { CubeTextureLoader } from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { Player, Box } from "./Player"
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
import { GrassBoundary } from "./GrassBoundary";
import { Rocks, SimpleMountain, Clouds } from "./Mountains";
import { Pond } from "./Pond";
import { Achivements } from "./Achivements.js";

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





        <Physics gravity={[0, -10, 0]} >
          <Ground />
          <GrassBoundary />
          <Security />
          <Player />
          <FrontRoads />
          <Roads />
          <Achivements/>
          <Front_tree_one />
          <Front_tree_two />
          <TreesBetween1 />

          <Pond />
          <TreesBetween2 />
          <Hostel_H />
          <Rocks />
          <SimpleMountain />
          {/* <Clouds/> */}
          <Cubes />
          {/* <Grass/> */}
          {/* <Model  modelPath={modelPath}  /> */}
          {/* <Models/> */}
          <RigidBody>

          </RigidBody>
          <Skybox />
          <Environment preset="sunset" />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>

  );
}