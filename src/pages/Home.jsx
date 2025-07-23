{/* <div className = 'absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}
import { Canvas } from "@react-three/fiber"; 
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";


const Home = () => {
  return (
    <section className = 'w-full h-screen relative'>
      
      {/* Canvas is the ROOT component that sets up our entire 3D scene... 
      ALL 3D will be rendered here (the "Renderer" in the guide doc) */}
      <Canvas
        className="w-full h-screen bg-transparent"
      
        // objects less than 0.1 and further from 1000 wont render
        camera={{near: 0.1, far: 1000}}> 

        <Suspense fallback={<Loader/>}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          
          <Island />
      
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home