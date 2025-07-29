{/* <div className = 'absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}
import { Canvas } from "@react-three/fiber"; 
import { useState, Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Bird from "../models/Bird";
import Dino from "../models/Dino";


const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // ======================================================================================================================

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };


  const [islandScale, islandPosition] = adjustIslandForScreenSize();

// ======================================================================================================================

    const adjustPlaneForScreenSize = () => {    
        let ScreenScale, ScreenPosition;

        if (window.innerWidth < 768) {
          ScreenScale = [1.5, 1.5, 1.5];
          ScreenPosition = [0, -1.5, 0];
        }
        
        else {
          ScreenScale = [3, 3, 3];
          ScreenPosition = [0, -4, -4];
        }

        return [ScreenScale, ScreenPosition];
      }

      const [planeScale, planePosition] = adjustPlaneForScreenSize();
  
// ======================================================================================================================

    const adjustDinoForScreenSize = () => {
      let screenScale, screenPosition;

      if (window.innerWidth < 768) {
        screenScale = [0.8, 0.8, 0.8];
        screenPosition = [0, -2, -5]; // Mobile: closer and lower
      } else {
        screenScale = [1.2, 1.2, 1.2];
        screenPosition = [0, -3, -8]; // Desktop: bigger and further back
      }

      return [screenScale, screenPosition];
    };

    const [dinoScale, dinoPosition] = adjustDinoForScreenSize();


// ======================================================================================================================
// ======================================================================================================================
  return (
    <section className = 'w-full h-screen relative'>
      
      {/* Canvas is the ROOT component that sets up our entire 3D scene... 
      ALL 3D will be rendered here (the "Renderer" in the guide doc) */}
      <Canvas
        className= { `w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}` }
      
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
          
          <Bird/>
          
          <Sky 
            isRotating = {isRotating}
          />
          
          {/* <Dino 
            position={dinoPosition}
            scale={dinoScale}
            rotation={[0, 0, 0]}
          /> */}

          <Island 
            // really important to adjust these scales
            setCurrentStage={setCurrentStage}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
           
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />

          <Plane
            isRotating = {isRotating}
            scale = {planeScale}
            position = {planePosition}
            rotation = {[0, 20, 0]}
          />
      
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home