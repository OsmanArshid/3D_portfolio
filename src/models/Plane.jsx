import { useRef, useEffect } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useGLTF, useAnimations } from "@react-three/drei" ;


const Plane = ({isRotating, ...props}) => {
  const ref = useRef();

  const { scene, animations } = useGLTF(planeScene); // taking out the animations from the model
  const { actions } = useAnimations(animations, ref) // actions is directly taking in the animations from the model

  useEffect(() => {
    if (isRotating) 
    {
      actions["Take 001"].play();
    } 
    
    else 
    {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating])
  

  return (
    // passing in ref = {ref} will give us aces to "actions" which are the alr animations 
    // present in the model 
    <mesh {...props}  ref={ref} >
      <primitive object = {scene} />
    </mesh>
  )
}

export default Plane