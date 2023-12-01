export const sample = {
    // background: {
    //     color: {
    //         value: "#0d47a1",
    //     },
    // },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#333",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 12,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};
export const hezagon={
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: false, mode: "push" },
        onhover: {
          enable: false,
          mode: "attract",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 5 }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "bottom",
        enable: true,
        out_mode: "out",
        random: true,
        speed: 4,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: {
          height: 1000,
          replace_color: true,
          src: "images/github.svg",
          width: 100
        },
        polygon: { nb_sides: 3 },
        stroke: { color: "#000000", width: 0 },
        type: "circle"
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  };
export const fake={
  
    

    
      particles: {
        color: {
          value: "#FF0000",
          animation: {
            enable: true,
            speed: 10
          }
        },
        move: {
          attract: {
            enable: false,
            distance: 100,
            rotate: {
              x: 2000,
              y: 2000
            }
          },
          direction: "none",
          enable: true,
          outModes: {
            default: "destroy"
          },
          path: {
            clamp: false,
            enable: true,
            delay: {
              value: 0
            },
            generator: "polygonPathGenerator",
            options: {
              sides: 6,
              turnSteps: 30,
              angle: 30
            }
          },
          random: false,
          speed: 3,
          straight: false,
          trail: {
            fillColor: "#000",
            length: 20,
            enable: true
          }
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 0
        },
        opacity: {
          value: 1
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 2
        }
      },
      background: {
        color: "#000"
      },
      fullScreen: {
        zIndex: -1
      },
      emitters: {
        direction: "none",
        rate: {
          quantity: 1,
          delay: 0.25
        },
        size: {
          width: 0,
          height: 0
        },
        position: {
          x: 50,
          y: 50
        }
      }
    };