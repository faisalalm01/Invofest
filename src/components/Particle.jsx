import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"

const Particle = () => {

  const particlesInit = async (main) => {

    await loadFull(main);
  };
  
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    // loaded={particlesLoaded}
    options={{
      background: {
        color: {
          value: "#808080",
        },
      },
      style:{
        width:"100%",
        height:"100%",
        background:"cover",
        position: "absolute"
      },
      fpsLimit: 120,
      interactivity: {
        detect_on: "windows",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
           distance: 150,
           line_linked: {
            opacity: 1
           }
          },
          push: {
            // quantity: 4,
            particles_nb:4
          },
          repulse: {
            distance: 200,
            duration: 1.4,
          },
          remove: {
            particles_nb: 2
          }
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        collisions: {
          enable: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          straight: false,
          random: false,
          outModes: "out",
          bounce: true,
          attract: {
            enable:false,
            rotateX:600,
            rotateY: 1200
          }
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 2.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0, max: 3 },
        },
      },
      retina_detect:true,
      // detectRetina: true,
    }}
    />
  )
}

export default Particle;