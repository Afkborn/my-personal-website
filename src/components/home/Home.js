import React, { useEffect } from "react";
import PageNames from "../../constants/PageNames";
import { Canvas } from "@react-three/fiber";
import Box from "../common/Box";

function Home() {
  useEffect(() => {
    document.title = PageNames.home;
  }, []);

  return (
    <div>
      <div>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default Home;
