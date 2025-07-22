import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Node class for neural network effect
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.connections = [];
      }

      update() {
        // Gentle floating movement
        this.x += this.vx;
        this.y += this.vy;

        // Boundary bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction - subtle attraction
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - this.x, 2) + 
          Math.pow(mouseRef.current.y - this.y, 2)
        );

        if (mouseDistance < 150) {
          const force = (150 - mouseDistance) / 150;
          const angle = Math.atan2(
            mouseRef.current.y - this.y, 
            mouseRef.current.x - this.x
          );
          this.x += Math.cos(angle) * force * 0.5;
          this.y += Math.sin(angle) * force * 0.5;
        }

        // Pulsing effect
        this.pulsePhase += 0.02;
        this.currentRadius = this.radius + Math.sin(this.pulsePhase) * 0.5;
      }

      draw() {
        // Draw node with glow effect
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.currentRadius * 3
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.4)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = 'rgba(59, 130, 246, 0.9)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      findConnections(nodes) {
        this.connections = [];
        nodes.forEach(node => {
          if (node !== this) {
            const distance = Math.sqrt(
              Math.pow(this.x - node.x, 2) + Math.pow(this.y - node.y, 2)
            );
            if (distance < 120) {
              this.connections.push({ node, distance });
            }
          }
        });
      }

      drawConnections() {
        this.connections.forEach(({ node, distance }) => {
          const opacity = (120 - distance) / 120 * 0.3;
          
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)';
          ctx.lineWidth = 1;
          
          // Animated signal along connection
          const signalProgress = (Date.now() * 0.001) % 1;
          const signalX = this.x + (node.x - this.x) * signalProgress;
          const signalY = this.y + (node.y - this.y) * signalProgress;
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
          
          // Draw signal pulse
          ctx.fillStyle = 'rgba(147, 51, 234, 0.8)';
          ctx.beginPath();
          ctx.arc(signalX, signalY, 2, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        });
      }
    }

    // Initialize nodes
    const initNodes = () => {
      const nodes = [];
      const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ));
      }
      
      nodesRef.current = nodes;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and find connections
      nodesRef.current.forEach(node => {
        node.update();
        node.findConnections(nodesRef.current);
      });
      
      // Draw connections first (behind nodes)
      nodesRef.current.forEach(node => {
        node.drawConnections();
      });
      
      // Draw nodes
      nodesRef.current.forEach(node => {
        node.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Initialize and start animation
    initNodes();
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default AnimatedBackground;