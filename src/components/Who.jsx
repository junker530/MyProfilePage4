import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Cube from "./Cube"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Line = styled.img`
  height: 5px;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Left = styled.div`
  flex:1;

`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5,5,5]}}>
              <OrbitControls enableZoom={false} autoRotate={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />

              <ambientLight intensity={0.5}/>
              <directionalLight position={[10,10,5]}/>
              <Cube/>

          </Canvas>
        </Left>
        <Right>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Who I Am</Subtitle>
          </WhatWeDo>
          <Desc>
            an engineer with passion for creating interesting things
          </Desc>
          <Button>See my History</Button>

        </Right>
      </Container>
    </Section>
  )
}

export default Who
