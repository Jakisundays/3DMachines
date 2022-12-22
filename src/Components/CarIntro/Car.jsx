import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { Mesh } from 'three';

const Car = () => {
  // useLoader and GLTFLoader
    const gltf = useGLTF('./models/ChevroletCorvette(C7)/scene.gltf')

    useEffect(() => {
        gltf.scene.scale.set(0.005, 0.005, 0.005);
        gltf.scene.position.set(0, -0.035, 0);
        //Cambia cada mesh (only) castea y receibe shadows
        gltf.scene.traverse((object) => {
          if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            // Scales the effect of the environment map by multiplying its color.
            object.material.envMapIntensity = 20;
          }
        });
      }, [gltf]);

      useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();
        
        let group = gltf.scene.children[0].children[0].children[0];
        //Mueve las ruedas 
        group.children[0].rotation.x = t * 2;
        group.children[2].rotation.x = t * 2;
        group.children[4].rotation.x = t * 2;
        group.children[6].rotation.x = t * 2;
      });
    

      //Primitive permite poner objetos como el carro en scenas
  return <primitive object={gltf.scene} />; 
    
}

export default Car
