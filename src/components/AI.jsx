import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Brain from './Brain'
import styled from 'styled-components'

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

const AI = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Brain/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
      学士、修士を通じて機械学習、深層学習、強化学習などAIを用いたソフトウェアを開発
    </Desc>
    </>
  )
}

export default AI
