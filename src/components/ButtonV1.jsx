import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ButtonV1 = ({content,classname}) => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    const btn = buttonRef.current;
    const overlay = btn.querySelector(".overlay");
    const text = btn.querySelector(".btn-text");

    // Initially position overlay off-screen (left)
    gsap.set(overlay, { xPercent: -100 });

    const tl = gsap.timeline({ paused: true });
    tl.to(overlay, {
      xPercent: 0,
      duration: 0.5,
      ease: "power2.out",
    }).to(
      text,
      {
        color: "var(--color-secondary)",
        duration: 0.3,
        ease: "power2.out",
      },
      "<" // start at same time as overlay animation
    );

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
      className={`${classname} relative overflow-hidden px-3 text-background bg-secondary`}
    >
      <span className="btn-text relative z-10 font-semibold">{content}</span>
      <span className="overlay absolute inset-0 bg-primary"></span>
    </button>
  );
};

export default ButtonV1;
