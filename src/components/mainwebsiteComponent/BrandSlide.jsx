import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { branditems } from "../../constants/branditems";

const BrandSlide = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Function to initialize animation
    const initAnimation = () => {
      // Clear existing animation
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }

      const trackWidth = track.scrollWidth;
      const firstSetWidth = trackWidth / 2;
      
      // Reset position before starting new animation
      gsap.set(track, { x: 0 });

      // Create seamless loop animation
      animationRef.current = gsap.to(track, {
        x: -firstSetWidth,
        duration: 40, // Adjust speed as needed
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => {
            const xNum = parseFloat(x);
            // Reset position when first set moves completely out of view
            if (xNum <= -firstSetWidth) {
              return "0px";
            }
            return x;
          })
        },
        onRepeat: () => {
          // Force reset to prevent cumulative errors
          gsap.set(track, { x: 0 });
        }
      });
    };

    // Alternative approach using more reliable method
    const initAnimationV2 = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      const firstSetWidth = track.scrollWidth / 2;
      
      animationRef.current = gsap.to(track, {
        x: -firstSetWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          // Jump back to start instantly for seamless loop
          gsap.set(track, { x: 0 });
        }
      });
    };

    // Use the more reliable V2 approach
    initAnimationV2();

    // Handle resize - restart animation with new dimensions
    const handleResize = () => {
      // Debounce resize handler
      setTimeout(initAnimationV2, 100);
    };

    // Use ResizeObserver for better resize handling
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(track);
    } else {
      // Fallback to window resize
      window.addEventListener('resize', handleResize);
    }

   
  }, []);

  return (
    <div className="relative overflow-hidden my-10 flex flex-col items-center justify-center py-10 space-y-6 border-y border-secondary-dim">
      <h1 className="text-3xl text-center">
        Trusted by ambitious teams and product builders
      </h1>

      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-row items-center gap-16 px-10 flex-nowrap"
          style={{ 
            whiteSpace: "nowrap",
            width: "fit-content" // Ensure proper width calculation
          }}
        >
          {/* First set */}
          {branditems.map((item) => (
            <img
              key={`a-${item.id}`}
              src={item.imageUrl}
              alt={item.title}
              className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              loading="lazy"
            />
          ))}
          
          {/* Duplicated set for seamless loop */}
          {branditems.map((item) => (
            <img
              key={`b-${item.id}`}
              src={item.imageUrl}
              alt={item.title}
              className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;