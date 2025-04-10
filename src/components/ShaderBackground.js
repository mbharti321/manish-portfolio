import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ShaderBackground = ({ opacity = 0.4 }) => {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" // Request high performance GPU
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Shader material using the provided shader code from ShaderToy
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(width, height, 1) },
    };

    // Create a full-screen quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec3 iResolution;
        
        #define AA 1  // Reduced antialiasing for better performance

        void mainImage(out vec4 fragColor, in vec2 fragCoord) {
          vec3 col = vec3(0.0);
          
          for(int m=0; m<AA; m++)
          for(int n=0; n<AA; n++) {
              
              vec2 p = (2.0*(fragCoord+vec2(float(m),float(n))/float(AA))-iResolution.xy) / iResolution.y;

              float zoo = 1.0/(350.0 - 250.0*sin(0.25*iTime-0.3));
              
              vec2 cc = vec2(-0.533516,0.526141) + p*zoo;

              vec2 t2c = vec2(-0.5,2.0);
              t2c += 0.5*vec2(cos(0.13*(iTime-10.0)), sin(0.13*(iTime-10.0)));
                  
              // iterate
              vec2 z  = vec2(0.0);
              vec2 dz = vec2(0.0);
              float trap1 = 0.0;
              float trap2 = 1e20;
              float co2 = 0.0;
              
              // Reduce iteration count for better performance on slower devices
              for(int i=0; i<100; i++) {
                  // z' -> 2·z·z' + 1
                  dz = 2.0*vec2(z.x*dz.x-z.y*dz.y, z.x*dz.y + z.y*dz.x) + vec2(1.0,0.0);
                      
                  // z -> z² + c			
                  z = cc + vec2(z.x*z.x - z.y*z.y, 2.0*z.x*z.y);
                      
                  // trap 1
                  float d1 = abs(dot(z-vec2(0.0,1.0),vec2(0.707)));
                  float ff = 1.0-smoothstep(0.6,1.4,d1);
                  co2 += ff;
                  trap1 += ff*d1;

                  //trap2
                  trap2 = min(trap2, dot(z-t2c,z-t2c));

                  if(dot(z,z)>1024.0) break;
              }

              // distance, d(c) = |z|·log|z|/|z'|
              float d = sqrt(dot(z,z)/dot(dz,dz))*log(dot(z,z));
              
              float c1 = pow(clamp(2.00*d/zoo, 0.0, 1.0), 0.5);
              float c2 = pow(clamp(1.5*trap1/co2, 0.0, 1.0), 2.0);
              float c3 = pow(clamp(0.4*trap2, 0.0, 1.0), 0.25);

              vec3 col1 = 0.5 + 0.5*sin(3.0 + 4.0*c2 + vec3(0.0,0.5,1.0));
              vec3 col2 = 0.5 + 0.5*sin(4.1 + 2.0*c3 + vec3(1.0,0.5,0.0));
              col += 2.0*sqrt(c1*col1*col2);
          }
          col /= float(AA*AA);
          
          fragColor = vec4(col, 1.0);
        }

        void main() {
          vec4 fragColor;
          mainImage(fragColor, gl_FragCoord.xy);
          gl_FragColor = fragColor;
        }
      `,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Animation using requestAnimationFrame with time delta
    const animate = (time) => {
      // Convert time to seconds and make it more smooth
      time *= 0.00004; // Convert from milliseconds to seconds
      
      // Update shader time uniform
      uniforms.iTime.value = time;
      
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    requestRef.current = requestAnimationFrame(animate);

    // Handle window resize more efficiently
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      uniforms.iResolution.value.set(width, height, 1);
      renderer.render(scene, camera);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      material.dispose();
      geometry.dispose();
      renderer.dispose();
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [opacity]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        opacity: opacity 
      }} 
    />
  );
};

export default ShaderBackground;