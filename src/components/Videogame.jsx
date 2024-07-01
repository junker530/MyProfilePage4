import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Gamecon from './Gamecon'

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

const Videogame = () => {
  return (
  <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Gamecon/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
      遊ぶ楽しさと作る楽しさの両方を追求
    </Desc>
  </>
  )
}

export default Videogame
