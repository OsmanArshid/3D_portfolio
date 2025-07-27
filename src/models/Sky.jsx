import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
      if (isRotating) {
        skyRef.current.rotation.y += 0.15 * delta;
      }
    });
  



    return (
    // our sky will be Primitive, we cant interact with it, 
    // it's just going to be there for the BG
    <mesh ref={skyRef}>
     <primitive object={sky.scene}/> 
    {/*didn't use a 2D image so that when we rotate island, the clouds rotate too */}
    </mesh>
  )
}

export default Sky