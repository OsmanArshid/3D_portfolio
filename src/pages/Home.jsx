{/* <div className = 'absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}
import { Canvas } from "@react-three/fiber"; 
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";



const Home = () => {
  const adjustIslandForScreenSize = () => {
      let ScreenScale = null;
      let ScreenPosition = [0, -6.5, -43];
      let rotation = [0.1, 4.7, 0];

      if (window.innerWidth < 768) {
        ScreenScale = [0.9, 0.9, 0.9];
      }
      else {
        ScreenScale = [1, 1, 1];
      }

      return [ScreenScale, ScreenPosition, rotation];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();


  return (
    <section className = 'w-full h-screen relative'>
      
      {/* Canvas is the ROOT component that sets up our entire 3D scene... 
      ALL 3D will be rendered here (the "Renderer" in the guide doc) */}
      <Canvas
        className="w-full h-screen bg-transparent"
      
        // objects less than 0.1 and further from 1000 wont render
        camera={{near: 0.1, far: 1000}}> 

        <Suspense fallback={<Loader/>}>
          {/* simulates the light coming from a distance source e.g., Sun */}
          <directionalLight
          position={[2,1,1]}
          intensity={2}
          /> 

          {/* illuminates all objects in the scene *Equally without casting shadows */}
          <ambientLight 
            intensity={0.4}
          />

          {/* <pointLight /> emits light in all directions from a single point */}
          {/* <spotLight /> similar to point, but in the shape of a cone */}
          

          {/* illuminates the scene with a gradient */}
          <hemisphereLight 
            skyColor = "#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          

          <Sky />
          <Island 
          // really important to adjust these scales
            scale = {islandScale}
            position = {islandPosition}
            rotation = {islandRotation}
          />
      
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home