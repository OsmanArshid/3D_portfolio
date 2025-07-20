{/* <div className = 'absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}
import { Canvas } from "@react-three/fiber"; 

const Home = () => {
  return (
    <section className = 'w-full h-screen relative'>
      {/* Canvas is the ROOT component that sets up our entire 3D scene... 
      ALL 3D will be rendered here (the "Renderer" in the guide doc) */}
      <Canvas>

      </Canvas>
    </section>
  )
}

export default Home