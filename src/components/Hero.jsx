import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import {Canvas} from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: between-space
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 60px;
  position: relative; /*Rightを軸に相対配置(top,bottom,right,left)*/
  /* background-color: yellow; */
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
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;

`;

const Right = styled.div`
  flex:3;
  position: relative; /*Rightを軸に相対配置(top,bottom,right,left)*/
  /* background-color: yellow; */
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  function onClickHandle () {
    window.open("https://www.google.com/", '_blank');
  }

  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Connect with people all over the world!</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I am working to bring the excitement of the experience to people around the world.</Desc>
          <Button type="button" onClick={(event)=>window.location.href="https://carelab.info/ja/"}>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Sphere args={[1,100,200]} scale={2.2}>
              <MeshDistortMaterial
                color="#3d1056"
                attach="material"
                distort={0.5}
                speed={2}
              />
              </Sphere>
          </Canvas>
          <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
