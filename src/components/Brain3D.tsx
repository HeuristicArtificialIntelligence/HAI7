"use client";

import { Brain } from 'threejs-brain-animation';

const Brain3D = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Brain
        style={{
          width: '90%',
          height: '90%',
          maxWidth: '800px',
          maxHeight: '800px',
        }}
      />
    </div>
  );
};

export default Brain3D;