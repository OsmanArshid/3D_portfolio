import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(skyScene);
  
    return (
    // our sky will be very Primitive, we cant interact with it, 
    // it's just going to be there for the BG
    <mesh>
     <primitive object={sky.scene}/> 
    {/*didn't use a 2D image so that when we rotate island, the clouds rotate too */}
    </mesh>
  )
}

export default Sky