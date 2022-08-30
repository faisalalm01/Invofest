import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
// import '../LandingComponents/index.css'

const Particle = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  
  return (
    <Particles
    className='particles'
    id="tsparticles"
    init={particlesInit}
    // loaded={particlesLoaded}
    options={{
      // background: {
      //   color: {
      //     value: "#808080",
      //   },
      // },
      style:{
        width:"100%",
        height:"95%",
        // background: "cover",
        position: "absolute",

      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 7,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          // image: {
          //   src: "img/github.svg",
          //   width: 100,
          //   height: 80
          // }
        },
        opacity: {
          value: 0,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 0,
          random: true,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 100,
            rotateY: 200
          }
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 150,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true 
    }}
    />
  )
}

export default Particle;