import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Reactlogo from './Reactlogo'

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 50px;
`
const WebDesign = () => {
  return (
  <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Reactlogo/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
    誰にとっても使いやすく、簡単に情報にありつけるWebデザインについて勉強中です。
    </Desc>
  </>
  )
}

export default WebDesign
