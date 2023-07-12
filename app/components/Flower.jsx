

import React from 'react';

const Flower = () => {
  return (
    <div>
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/V9nWHwNFqb-PGiae/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default Flower;

