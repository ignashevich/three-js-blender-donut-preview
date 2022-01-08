import React, {Suspense} from 'react'
import './App.css';
import {Canvas} from '@react-three/fiber'
import Model from "./Model";

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
