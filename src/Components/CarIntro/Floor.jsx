import { MeshReflectorMaterial } from '@react-three/drei'
import React from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three'
import { useEffect } from 'react'


const Floor = () => {

    // useTexture es mejor
    // const normal = useTexture('./textures/metal-normal.jpeg')
    const normal = useLoader(TextureLoader,'./textures/metal-normal.jpeg')
    const roughness = useLoader(TextureLoader,'./textures/metal-rough.jpeg')


useEffect(() => {
    
    [normal, roughness].forEach((t) => {
        //la envolturas verticales y horizontales las envuekven infinitamente.
        // Esto define cómo la textura se envuelve horizontalmente y corresponde a U en el mapeo UV.
        t.wrapS = RepeatWrapping;
        // Esto define cómo la textura se envuelve verticalmente y corresponde a U en el mapeo UV.
        t.wrapT = RepeatWrapping;
        // RepeatWrapping the texture will simply repeat to infinity


        //repeat es un valor del objeto
        // Cuántas veces se repite la textura en la superficie, en cada dirección U y V. = .repeat
        t.repeat.set(5, 5);
        //offset es un valor del objeto
        // Cuánto se compensa una sola repetición de la textura desde el principio, en cada dirección U y V.
        t.offset.set(0, 0);
    })
    normal.encoding = LinearEncoding
    // El codificador lineal es un sensor, emparejado con una escala que codifica la posición.
    }, [normal, roughness])

    // mueve el piso
    useFrame((state, delta) => {
        let t = -state.clock.getElapsedTime() * 0.128;
        roughness.offset.set(0, t % 1);
        normal.offset.set(0, t % 1);
      });


  return (
    <mesh
    rotation-x={-Math.PI * 0.5}
    castShadow
    receiveShadow
    >
        <planeBufferGeometry args={[30, 30]} />
    {/* Agregue fácilmente reflejos y/o desenfoque a cualquier mesh. Tiene en cuenta la rugosidad de la superficie para un efecto más realista. */}
        <MeshReflectorMaterial
            envMapIntensity={0}
            normalMap={normal}
            roughnessMap={roughness}
            dithering={true}
            color={[0.015, 0.015, 0.015]}
            normalScale={[0.15, 0.15]}
            roughness={0.7}
            blur={[1000, 400]} // Blur ground reflections (width, heigth), 0 skips blur
            mixBlur={30} // How much blur mixes with surface roughness (default = 1)
            mixStrength={80} // Strength of the reflections
            mixContrast={1} // Contrast of the reflections
            resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
            mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
            depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
            minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
            maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
            depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
            debug={0}
            reflectorOffset={0.2}
            />

            
    </mesh>
  )
}

export default Floor
