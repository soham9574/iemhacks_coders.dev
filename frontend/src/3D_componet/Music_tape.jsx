/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 .\\music_tape.glb 
Author: Philip Osborne (https://sketchfab.com/Daedron)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/music-tape-1f8abc738d7e4d74909522e06d342132
Title: Music Tape
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/music_tape.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -0.11]} scale={0.14}>
        <mesh geometry={nodes['Box001_Material_#31_0'].geometry} material={materials.Material_31} position={[-0.297, 0.019, -1.831]} />
      </group>
    </group>
  )
}

useGLTF.preload('/music_tape.glb')
