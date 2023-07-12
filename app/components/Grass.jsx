import React from 'react';

const Grass = () => {
  return (
    <div
    style={{
        width: '700px',
        height: '500px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
<script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js"></script>
<spline-viewer loading-anim url="https://prod.spline.design/Qrk8lqN5sqyc4oqK/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default Grass;
