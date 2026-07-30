import React, { useEffect, useRef } from "react";

// Parallax-tilted, animated sci-fi orb
const Orb = () => {
  const stageRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${dx * 14}px, ${dy * 14}px, 0) rotate(${dx * 6}deg)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="orb-stage" ref={stageRef} data-testid="hero-orb">
      <div className="orb-frame">
        <span className="bracket tl" />
        <span className="bracket tr" />
        <span className="bracket bl" />
        <span className="bracket br" />
      </div>
      <div className="orb-hud top">◇ TARGET: SELF ◇ FREQ 40.7 THz</div>
      <div className="orb-hud bottom">STATUS: NOMINAL ◇ Δ 0.001</div>

      <div className="orb-ring three" />
      <div className="orb-ring two" />
      <div className="orb-ring" />
      <div className="orb" ref={orbRef} />
    </div>
  );
};

export default Orb;
