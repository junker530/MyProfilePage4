import React, { useState } from 'react';
import styled from 'styled-components';
import AI from './AI';
import Teleoperation from './Teleoperation';
import Telepresence from './Telepresence';
import Videogame from './Videogame';
import WebDesign from './WebDesign';


const data = [
  "AI",
  "Teleoperation",
  "Telepresence",
  "Videogame",
  "Web Design",
];

const color =[
  "#4158D0",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const List = styled.ul`
  list-style: none;
  display-flex: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;
`
const ListItem = styled.li`
  font-size: 95px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, ${(props)=>("#"+(0x4158C0+50*props.index**props.index).toString(16).replace(/^0x/, ''))},${(props)=>("#"+(0xC850C0+50*props.index**props.index).toString(16).replace(/^0x/, ''))} 30%, ${(props)=>("#"+(0xFFCC70+50*props.index**props.index).toString(16).replace(/^0x/, ''))});
    /* background: -webkit-linear-gradient(0deg, #4158D0, #C850C0 30%, #FFCC70); */
    -webkit-background-clip: text;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &::after{
      animation: moveText 0.25s linear both;

      @keyframes moveText{
        to{
          width: 100%;

        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;

`

const Works = () => {
  const [work,setWork] = useState("AI")
  return (
    <Section>
      <Container>
        <Left>
          <List>
              {data.map((item,index)=>(
                <ListItem key={item} text={item} index={index} onClick={()=>setWork(item)}>{item}</ListItem>
              ))}
          </List>
        </Left>
        <Right>
            {work === "AI" ? (
              <AI/>
            ) : work === "Teleoperation" ? (
              <Teleoperation/>
            ) : work === "Telepresence" ? (
              <Telepresence/>
            ) : work === "Videogame" ? (
              <Videogame/>
            ) : (
              <WebDesign/>
            )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works
