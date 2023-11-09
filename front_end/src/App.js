import { Sky, PointerLockControls, KeyboardControls,Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from "./Ground"
import { CubeTextureLoader } from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { Player } from "./Player"
import { Cubes } from "./Cubes";
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { Models } from "./Models";
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
        { name: "fastSpeed", keys: ["Shift"]}
      ]}>
      <Canvas >
        <Sky sunPosition={[100, 20, 100]} />

        <Physics  debug="true " gravity={[0, -10, 0]}  >
          <Ground />
          <Player />
          <Cubes/>
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
  )
}
