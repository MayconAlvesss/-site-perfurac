import { useEffect, useRef } from 'react';

const Machine3D = ({ type }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height, animationFrameId;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = [];

    const colors = {
      esteira: '#333333',
      chassis: '#A91B1B', // Vermelho
      cabine: '#555555',
      motor: '#222222',
      torre: '#444444',
      ferramenta: '#666666',
    };

    const addBox = (cx, cy, cz, w, h, d, color, count) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          lx: cx + (Math.random() - 0.5) * w,
          ly: cy + (Math.random() - 0.5) * h,
          lz: cz + (Math.random() - 0.5) * d,
          color,
          type: 'static',
        });
      }
    };

    const createLargeBase = () => {
      addBox(-40, 260, -100, 280, 50, 60, colors.esteira, 800);
      addBox(-40, 260, 100, 280, 50, 60, colors.esteira, 800);
      addBox(-50, 190, 0, 220, 80, 160, colors.chassis, 1500);
      addBox(40, 100, 60, 70, 90, 60, colors.cabine, 500);
      addBox(-120, 150, 0, 80, 130, 150, colors.motor, 800);
      addBox(50, 160, 0, 120, 40, 50, colors.chassis, 400);
      addBox(140, 0, 0, 40, 560, 50, colors.torre, 1200);
    };

    const createTieBackBase = () => {
      addBox(-20, 260, -70, 200, 40, 40, colors.esteira, 600);
      addBox(-20, 260, 70, 200, 40, 40, colors.esteira, 600);
      addBox(-30, 200, 0, 160, 70, 120, colors.chassis, 1000);
      addBox(30, 130, 40, 60, 70, 50, colors.cabine, 400);
      addBox(-80, 160, 0, 60, 100, 100, colors.motor, 600);

      const tilt = Math.PI / 4;
      for (let i = 0; i < 1000; i++) {
        const origY = (Math.random() - 0.5) * 500;
        const origX = (Math.random() - 0.5) * 30;
        const origZ = (Math.random() - 0.5) * 30;
        const lx = origX * Math.cos(tilt) - origY * Math.sin(tilt) + 120;
        const ly = origY * Math.cos(tilt) + origX * Math.sin(tilt) + 100;
        particles.push({ lx, ly, lz: origZ, color: colors.torre, type: 'static' });
      }
    };

    if (type === 'auger') {
      createLargeBase();
      for (let i = 0; i < 2500; i++) {
        const y = (Math.random() - 0.5) * 520;
        const r = 8 + Math.random() * 35;
        const a = y / 18 + (Math.random() - 0.5);
        particles.push({
          lx: r * Math.cos(a),
          ly: y,
          lz: r * Math.sin(a),
          color: colors.ferramenta,
          type: 'auger',
        });
      }
    } else if (type === 'pile') {
      createLargeBase();
      for (let i = 0; i < 1000; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * 20;
        const y = (Math.random() - 0.5) * 250;
        particles.push({
          lx: r * Math.cos(a),
          ly: y,
          lz: r * Math.sin(a),
          type: 'pile',
          color: '#888888',
        });
      }
      for (let i = 0; i < 900; i++) {
        particles.push({
          lx: (Math.random() - 0.5) * 50,
          ly: (Math.random() - 0.5) * 70,
          lz: (Math.random() - 0.5) * 50,
          type: 'hammer',
          color: '#555555',
        });
      }
    } else if (type === 'tieback') {
      createTieBackBase();
      for (let i = 0; i < 1000; i++) {
        const origY = (Math.random() - 0.5) * 550;
        const r = Math.random() * 8;
        const a = Math.random() * Math.PI * 2;
        particles.push({
          origX: r * Math.cos(a),
          origY,
          origZ: r * Math.sin(a),
          color: colors.ferramenta,
          type: 'tieback',
        });
      }
    }

    const fov = 600;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Verificação de opacidade na div pai para não processar desnecessariamente
      if (canvas.parentElement && !canvas.parentElement.classList.contains('opacity-100')) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const time = Date.now() * 0.002;

      const offsetAngle = type === 'pile' ? Math.PI : type === 'tieback' ? -Math.PI / 4 : 0;
      const angleY = time * 0.3 + offsetAngle;
      const angleX = 0.15 + Math.sin(time * 0.2) * 0.05;

      const cx = Math.cos(angleX), sx = Math.sin(angleX);
      const cy = Math.cos(angleY), sy = Math.sin(angleY);

      const drillAngle = time * 12;
      const drillOffsetY = Math.sin(time * 0.5) * 100;

      const cycle = (time * 0.8) % 2;
      let hammerY = -180;
      let isImpact = false;
      if (type === 'pile') {
        if (cycle < 1.4) {
          hammerY = -180 - (cycle / 1.4) * 250;
        } else {
          const drop = (cycle - 1.4) / 0.6;
          hammerY = -430 + drop * drop * drop * 250;
          if (drop > 0.9) isImpact = true;
        }
      }

      const tiltRad = Math.PI / 4;
      const tiebackOffset = Math.sin(time) * 40;

      const projected = particles.map((p) => {
        let wx = p.lx, wy = p.ly, wz = p.lz;

        if (p.type === 'auger') {
          wx = p.lx * Math.cos(drillAngle) - p.lz * Math.sin(drillAngle) + 140;
          wz = p.lz * Math.cos(drillAngle) + p.lx * Math.sin(drillAngle);
          wy = p.ly + drillOffsetY;
        } else if (p.type === 'hammer') {
          wx += 140;
          wy += hammerY;
        } else if (p.type === 'pile') {
          wx += 140;
          wy += 120;
        } else if (p.type === 'tieback') {
          const rx = p.origX * Math.cos(drillAngle) - p.origZ * Math.sin(drillAngle);
          const rz = p.origZ * Math.cos(drillAngle) + p.origX * Math.sin(drillAngle);
          const ry = p.origY + tiebackOffset;

          wx = rx * Math.cos(tiltRad) - ry * Math.sin(tiltRad) + 120;
          wy = ry * Math.cos(tiltRad) + rx * Math.sin(tiltRad) + 100;
          wz = rz;
        }

        const x1 = wx * cy - wz * sy;
        const z1 = wz * cy + wx * sy;
        const y2 = wy * cx - z1 * sx;
        const z2 = z1 * cx + wy * sx;

        const scale = fov / (fov + z2 + 800);

        const centerX = width > 768 ? width * 0.65 : width * 0.5;
        const centerY = height * 0.5 + 50;

        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          scale,
          z: z2,
          wy,
          type: p.type,
          color: p.color,
        };
      });

      projected.sort((a, b) => b.z - a.z);

      projected.forEach((p) => {
        if (p.scale < 0) return;

        let fill = p.color;
        let px = p.px, py = p.py;

        if (p.type === 'auger' && p.wy > 220) {
          fill = `hsl(10, 80%, 45%)`;
        }
        if (isImpact && p.type === 'pile' && p.ly < -100) {
          fill = `hsl(20, 90%, 50%)`;
          px += (Math.random() - 0.5) * 15 * p.scale;
          py += (Math.random() - 0.5) * 15 * p.scale;
        }
        if (p.type === 'tieback' && p.wy > 250) {
          fill = `hsl(15, 85%, 50%)`;
        }

        ctx.fillStyle = fill;
        const size = Math.max(1.5, 3 * p.scale);
        ctx.fillRect(px - size / 2, py - size / 2, size, size);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />;
};

export default Machine3D;
