import {Html} from '@react-three/drei'


const Loader = () => {
  return (
    // wrapping this in "Html" component so that this loader doesn't trouble us when put inside 
    // the Canvas (cause its a 3D environ) in main file 
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
      </div>
    </Html>
  )
}

export default Loader