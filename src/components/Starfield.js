import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Starfield = () => {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      fullScreen: { enable: false },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: { distance: 130, links: { opacity: 0.35, color: "#00f3ff" } },
        },
      },
      particles: {
        color: { value: ["#00f3ff", "#ffffff", "#ff2ad4"] },
        links: { enable: false },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 0.25,
          straight: false,
        },
        number: {
          density: { enable: true, area: 900 },
          value: 160,
        },
        opacity: {
          value: { min: 0.2, max: 0.9 },
          animation: { enable: true, speed: 0.6, minimumValue: 0.15, sync: false },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 0.4, max: 1.8 },
        },
      },
    }),
    []
  );

  return (
    <div className="starfield" data-testid="starfield-bg">
      <Particles id="tsparticles" init={init} options={options} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Starfield;
