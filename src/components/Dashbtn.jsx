import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Dashbtn = () => {
  const buttonref = useRef(null);

  useGSAP(() => {
    const btn = buttonref.current;
    const overlay = btn.querySelector(".overlay");
    const text = btn.querySelector(".btn-text");

    gsap.set(overlay, {
      xPercent: -100,
    });

    const timeLine = gsap.timeline({ paused: true });
    timeLine
      .to(overlay, {
        xPercent: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        text,
        {
          color: "var(--color-secondary)",
          duration: 0.3,
          ease: "power2.out",
        },
        "<" // start at same time as overlay animation
      );

    const onEnter = () => timeLine.play();
    const onLeave = () => timeLine.reverse();

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={buttonref}
      className="relative overflow-hidden hidden md:flex bg-secondary text-background h-full w-36 items-center justify-center text-sm lg:text-lg"
    >
      <span className="btn-text relative z-10">Contact</span>
      <span className="overlay absolute inset-0 bg-primary"></span>
    </div>
  );
};

export default Dashbtn;
