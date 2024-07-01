import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Robot from './Robot'

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

const Teleoperation = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Robot/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
      ロボットを遠隔操作するための誰にでも直感的に操作できるインターフェースを開発
    </Desc>
    </>
  )
}

export default Teleoperation
