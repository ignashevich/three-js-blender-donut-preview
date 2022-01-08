import logo from './logo.svg';
import React, { useRef, useState, Suspense } from 'react'
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber'
import Model from "./Model";

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function App() {
  return (
      <Canvas>
          <Suspense fallback={null}>
              <Model position={[0, 0, 0]} />
          </Suspense>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

      </Canvas>
  );
}

export default App;
