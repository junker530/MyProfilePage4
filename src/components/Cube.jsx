import React, {useRef} from 'react'
import {
    PerspectiveCamera,
    RenderTexture,
    Text,
    ContactShadows
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
/* import { suspend } from 'suspend-react' */

/*const inter = import('@pmndrs/assets/fonts/inter_regular.woff')*/

const Cube = () => {
    const textRef = useRef()
    useFrame(state=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime)*1.5))
    return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach={"map"} anisotropy={16}>
                <PerspectiveCamera makeDefault manual aspect={1/1} position={[0,0,5]}/>
                <color attach="background" args={["#dc9dcd"]}/>
                <Text  ref={textRef} fontSize={1} color="#555">
                    Hi!
                    I'm Shota!
                </Text>
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
                <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
    )
}

export default Cube
