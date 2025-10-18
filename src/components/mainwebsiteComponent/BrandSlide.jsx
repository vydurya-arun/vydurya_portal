import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { branditems } from "../../constants/branditems";

const BrandSlide = () => {
  const trackRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const fullWidth = track.scrollWidth;
    const oneLoopWidth = fullWidth / 2 || fullWidth; // fallback

    // kill previous context if any
    if (ctxRef.current) {
      ctxRef.current.revert();
      ctxRef.current = null;
    }

    // Create GSAP context for safe scoping with React
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      });

      tl.to(track, {
        x: -oneLoopWidth,
        duration: 20, // adjust speed
        modifiers: {
          x: (x) => {
            // keep x in range so it seamlessly loops
            const num = parseFloat(x);
            return `${(num % oneLoopWidth)}px`;
          }
        }
      });

      // store timeline so we can kill on cleanup
      ctxRef.current = {
        revert: () => {
          tl.kill();
        }
      };
    }, track);

    // handle resize to recalc widths and restart animation
    const onResize = () => {
      if (ctxRef.current) ctxRef.current.revert();
      requestAnimationFrame(() => {

      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      // cleanup
      if (ctxRef.current) ctxRef.current.revert();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden my-10 flex flex-col items-center justify-center py-10 space-y-6 border-y border-secondary-dim">
      <h1 className="text-3xl text-center">
        Trusted by ambitious teams and product builders
      </h1>

      <div className="relative w-full overflow-hidden">
        {/* track contains two copies of branditems for seamless loop */}
        <div
          ref={trackRef}
          className="flex flex-row items-center gap-16 px-10 flex-nowrap"
          style={{ whiteSpace: "nowrap" }}
        >
          {/** first set */}
          {branditems.map((item) => (
            <img
              key={`a-${item.id}`}
              src={item.imageUrl}
              alt={item.title}
              className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
            />
          ))}

          {/** duplicated set */}
          {branditems.map((item) => (
            <img
              key={`b-${item.id}`}
              src={item.imageUrl}
              alt={item.title}
              className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;
