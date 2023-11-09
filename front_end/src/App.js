import { Sky, PointerLockControls, KeyboardControls,Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from "./Ground"
import { CubeTextureLoader } from 'three';
import { Canvas, useThree } from '@react-three/fiber';
import { Player } from "./Player"
import { Cubes } from "./Cubes";
import { CuboidCollider, RigidBody } from "@react-three/rapier"

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
    <RigidBody {...props} type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10,10]} />
        <meshStandardMaterial color={"red"}/>
      </mesh>
      <CuboidCollider args={[10, 10, 10]} position={[0, -2, 0]} />
    </RigidBody>
  )
}


export default function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      <Canvas >
        <Sky sunPosition={[100, 20, 100]} />
        <Physics debug ="true" gravity={[0, -10, 0]}>
          <Ground />
          <Player />
          <Cubes/>
          <Skybox/>
          <Environment preset="sunset" />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  )
}
