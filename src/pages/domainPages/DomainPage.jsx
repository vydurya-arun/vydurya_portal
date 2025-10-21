import React from "react";
import PixelBlast from "../../components/ui/PixelBlast";

const DomainPage = () => {
  return (
    <div>
      <div className="w-full h-[50vh] relative bg-secondary mb-8">
        <PixelBlast
          variant="square"
          pixelSize={5}
          color="#00AEEE"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
    </div>
  );
};

export default DomainPage;
