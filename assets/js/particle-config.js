document.addEventListener('DOMContentLoaded', () => {
  tsParticles.load('tsparticles-background', {
    fpsLimit: 60,
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#DDDDDD" // Particle color - lighter gray
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#DDDDDD", // Line color - lighter gray
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2, // Speed of particle movement
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Optional: makes particles move away from cursor
        },
        onclick: {
          enable: false, // Optional: could enable "push" or "remove"
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100
        }
      }
    },
    retina_detect: true,
    background: {
      color: "transparent" // Ensure canvas background is transparent
    }
  });
});
