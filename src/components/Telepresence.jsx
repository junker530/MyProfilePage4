import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Meta from './Meta'

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  right: 50px;
  top: 100px;
`

const Telepresence = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Meta/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
      「離れた人々にも体験を届け、生活を豊かに」をモットーにリモートでもリアルな体験を提供
    </Desc>
    </>
  )
}

export default Telepresence
