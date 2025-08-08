import { useEffect, useRef } from 'react';

export function ParticlesBackground() {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Dynamically import particles.js
    const loadParticles = async () => {
      try {
        // Load particles.js from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = () => {
          if (window.pJSDom && window.pJSDom.length > 0) {
            // Destroy existing particles if any
            window.pJSDom.forEach(particle => {
              if (particle.pJS && particle.pJS.fn && particle.pJS.fn.vendors) {
                particle.pJS.fn.vendors.destroypJS();
              }
            });
          }
          
          // Initialize particles
          window.particlesJS('particles-js', {
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#a855f7'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 5
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#a855f7',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
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
          });
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading particles.js:', error);
      }
    };

    loadParticles();

    // Cleanup function
    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach(particle => {
          if (particle.pJS && particle.pJS.fn && particle.pJS.fn.vendors) {
            particle.pJS.fn.vendors.destroypJS();
          }
        });
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={particlesRef}
      className="absolute inset-0 z-0"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent'
      }}
    />
  );
}
