import React from 'react'
import { Canvas } from '@react-three/fiber'
import Particles from './Particles.jsx'

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles count={300} />
      </Canvas>
    </div>
  )
}

export default ParticlesBackground
