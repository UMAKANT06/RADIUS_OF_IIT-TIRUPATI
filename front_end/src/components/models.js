import { useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Scene(){
    const hostels=useLoader(GLTFLoader,'./assets/hostel_a.glb');
    return <primitive object={hostels.scene} />
}

export default Scene;