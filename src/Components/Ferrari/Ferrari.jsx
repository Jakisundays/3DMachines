import React from 'react'
import { useEffect } from 'react'
import * as dat from 'dat.gui'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Ferrari = () => {

    const gltf = useGLTF('./models/Ferrari/scene.gltf')
    
    // useEffect(() =>{
    //     const gui = new dat.GUI({
    //         width: 400
    //     })

    //     const debugObj = {
    //         position: {
    //             x: 0,
    //             y: 0,
    //             z: 0,
    //         },
    //         scale: {
    //             x: 0,
    //             y: 0,
    //             z: 0,
    //         },
    //         rotation: {
    //             x: 0,
    //             y: 0,
    //         }
    //     }

    //     gui
    //     .add(debugObj.position, 'x')
    //     .name('POS X')
    //     .min(-10)
    //     .max(10)
    //     .step(0.5)
    //     .onChange(() => {
    //         carro.current.position.x = debugObj.position.x
    //     })
    //     gui
    //     .add(debugObj.position, 'y')
    //     .name('POS Y')
    //     .min(-10)
    //     .max(10)
    //     .step(0.5)
    //     .onChange(() => {
    //         carro.current.position.y = debugObj.position.y
    //     })
    //     gui
    //     .add(debugObj.position, 'z')
    //     .name('POS Z')
    //     .min(-10)
    //     .max(10)
    //     .step(0.5)
    //     .onChange(() => {
    //         carro.current.position.z = debugObj.position.z
    //     })

    //     gui
    //     .add(debugObj.scale, 'x')
    //     .name('Scale X')
    //     .min(0)
    //     .max(20)
    //     .step(0.5)
    //     .onChange(() => {
    //         carro.current.scale.x = debugObj.scale.x
    //     })

    //     gui
    //     .add(debugObj.scale, 'y')
    //     .name('Scale Y')
    //     .min(0)
    //     .max(20)
    //     .step(0.5)
    //     .onChange(() => {
    //         carro.current.scale.y = debugObj.scale.y
    //     })

    //     gui
    //     .add(debugObj.scale, 'z')
    //     .name('Scale Z')
    //     .min(0)
    //     .max(20)
    //     .step(0.5)
    //     .onChange(() => {
    //         carro.current.scale.z = debugObj.scale.z
    //     })

    //     gui
    //     .add(debugObj.rotation, 'x')
    //     .name('Rot X')
    //     .min(0)
    //     .max(20)
    //     .step(0.1)
    //     .onChange(() => {
    //         carro.current.rotation.x = debugObj.rotation.x
    //     })

    //     gui
    //     .add(debugObj.rotation, 'y')
    //     .name('Rot y')
    //     .min(0)
    //     .max(20)
    //     .step(0.1)
    //     .onChange(() => {
    //         carro.current.rotation.y = debugObj.rotation.y
    //     })

    //     return () => {
    //         gui.destroy()
    //     }
    // })

    const carro = useRef()
//Hooks allow you to tie or request specific information to your component
//This hook allows you to execute code on every rendered frame, like running effects, updating controls, and so on.
    useFrame((state,delta) => {
        carro.current.rotation.y += 0.01 
    })



  return (<primitive 
    ref={carro}
    object={gltf.scene}
    castShadow
    />
  )
}

export default Ferrari
