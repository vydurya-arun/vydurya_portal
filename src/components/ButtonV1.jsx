import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ButtonV1 = () => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    const btn = buttonRef.current;
    const overlay = btn.querySelector(".overlay");

    // Initially position overlay off-screen (left)
    gsap.set(overlay, { xPercent: -100 });

    const tl = gsap.timeline({ paused: true });
    tl.to(overlay, {
      xPercent: 0, // slide overlay to fill button
      duration: 0.5,
      ease: "power2.out",
    });

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative overflow-hidden h-12 px-3 text-background bg-secondary"
    >
      <span className="relative z-10">Get start for free</span>
      <span className="overlay absolute inset-0 bg-primary"></span>
    </button>
  );
};

export default ButtonV1;
