import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const ButtonV2 = () => {
  const buttonRef = useRef(null);

  useGSAP(()=>{
    const btn = buttonRef.current;
    const overlay = btn.querySelector('.overlay');
    const text = btn.querySelector('.text-btn');

    gsap.set(overlay,{xPercent:-100});

    const timeline = gsap.timeline({paused: true});
    timeline.to(overlay,{
      xPercent: 0,
      duration: 0.5,
      ease: "power2.out"
    }).to(text,{
      color: "var(--color-background)",
      duration:0.3,
      ease: "power2.out"
    },
    "<"
  )

    const onEnter = () => timeline.play();
    const OnLeave = () => timeline.reverse();

    btn.addEventListener("mouseenter",onEnter);
    btn.addEventListener("mouseleave",OnLeave);

    return()=>{
      btn.removeEventListener("mouseenter",onEnter);
      btn.removeEventListener("mouseleave",OnLeave);
    }

  },[])

  return (
    <button ref={buttonRef} className='relative overflow-hidden h-12 w-40 text-secondary border-1 border-secondary px-3 font-semibold'>
      <span className='relative z-10 text-btn'>Contact sales</span>
      <span className='absolute overlay inset-0 bg-secondary'></span>
    </button>
  )
}

export default ButtonV2