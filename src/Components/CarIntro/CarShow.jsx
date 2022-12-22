import { CubeCamera, Environment, Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Aros from './Aros'


import Car from './Car'
import Floor from './Floor'
// import Sign from './Sign'


const CarShow = () => {

  return (
    <>
    <Canvas shadows>
       <Suspense fallback={null}>
        
        <OrbitControls
        target={[0,0.35,0]}
        maxPolarAngle={1.45}
        />

        <PerspectiveCamera
        makeDefault
        fov={85}
        position={[2,1,3]}
        />
       {/* Agregar color al BackGround */}
       <color args={[0,0,0]} attach='background' />

       {/* This light gets emitted from a single point in one direction */}
        <spotLight 
        color={[1,0.25,0.7]}
        intensity={6}
        angle={0.6}
        // Porcentaje del cono de foco que se atenúa debido a la penumbra.
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        />

        <spotLight
        color={[0.14, 0.5, 1]}
        intensity={4}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        />
        {/* <Sign 
        position={[-10,-5,-8]}
          scale={[0.91,1.05,0.2]}
          rotation-y={7.02}
        /> */}

        <Aros />
        {/* create more realistic reflections */}
        <CubeCamera resolution={256} frames={Infinity}>
            {(texture) => (
            <>
                <Environment map={texture} />
                <Car />
            </>
            )}
        </CubeCamera>
        <Floor />
       

    </Suspense>
      </Canvas>
    <Loader />

      
    </>
  )
}

export default CarShow
