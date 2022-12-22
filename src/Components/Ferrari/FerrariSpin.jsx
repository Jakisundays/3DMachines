import { CubeCamera, Environment, Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Ferrari from './Ferrari'

const FerrariSpin = () => {
  return (
    <>
    //ScreenLoader que esconde todo el app.
    <Loader />
        {/* Creates Scene and a Camera */}
        <Canvas shadows>

        {/* mecanismo para buscar datos de librerias para comunicarse con React y decirle que el componente que esta leyendo no esta listo */}

        <Suspense fallback={null}>
        
            <PerspectiveCamera
            makeDefault
            fov={65}
            position={[2,1,3]}
            />


            {/* <ambientLight
            color={'#fff'}
            intensity={5}
            /> */}

{/* Create a Spotlight and turn on shadows for the light */}
<spotLight 
        color={[1,0.25,0.7]}
        intensity={6}
        angle={0.6}
        // Porcentaje del cono de foco que se atenúa debido a la penumbra.
        penumbra={0.5}
        position={[5, 5, 0]}
        //spotlight.castShadow.true
        //Permite que la luz castee sombras a los objs.
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

            {/* Es el background */}
            <color
            args={[0,0,0]}
            attach='background'
            />

            <OrbitControls />

            {/* returns its texture as a render-prop */}
            {/* Hace que los niños sean invisibles mientras se procesan en el búfer interno para que no se incluyan en el reflejo. */}
        <CubeCamera resolution={256} frames={Infinity}>
            {/* used for effects like dynamic reflections */}
            {/* Resolution porque los objetos se estan moviendo */}
            {(texture) => (
            <>
            {/* Ya hizo el cubemap la camara asi que le pasamos esto */}
            {/* Sets up a global cubemap, which affects the default scene.environment, and optionally scene.background, unless a custom scene has been passed. */}
                <Environment map={texture} />
                <Ferrari />
            </>
            )}

        </CubeCamera>

        </Suspense>
    </Canvas>
    
    </>
    
  )
}

export default FerrariSpin
