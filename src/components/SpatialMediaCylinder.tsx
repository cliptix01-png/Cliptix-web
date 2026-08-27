import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Play, Sparkles, Video, Film, Camera, Monitor, Sliders, Eye } from 'lucide-react';

export const SpatialMediaCylinder: React.FC = () => {
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Smooth spring scroll response for 3D perspective
  const rawRotateY = useTransform(scrollY, [0, 1000], [0, 140]);
  const rawRotateX = useTransform(scrollY, [0, 600], [12, -8]);
  const rawTranslateZ = useTransform(scrollY, [0, 600], [-100, 150]);
  const rawScale = useTransform(scrollY, [0, 600], [1, 1.15]);

  const rotateY = useSpring(rawRotateY, { stiffness: 60, damping: 20 });
  const rotateX = useSpring(rawRotateX, { stiffness: 60, damping: 20 });
  const translateZ = useSpring(rawTranslateZ, { stiffness: 60, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Media items array representing floating studio screens around the cylinder
  const cylinderScreens = [
    {
      id: 1,
      angle: 0,
      title: 'AI Cinema Pipeline',
      tag: '4K PRO',
      img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      icon: Film,
      color: '#A018FF',
    },
    {
      id: 2,
      angle: 36,
      title: 'Spatial UI Preview',
      tag: 'VISION',
      img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80',
      icon: Monitor,
      color: '#20E6E6',
    },
    {
      id: 3,
      angle: 72,
      title: 'Studio Camera Rig',
      tag: 'LIVE',
      img: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80',
      icon: Camera,
      color: '#4A6CFF',
    },
    {
      id: 4,
      angle: 108,
      title: 'Generative Video Lab',
      tag: 'VEO 3.0',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      icon: Video,
      color: '#A018FF',
    },
    {
      id: 5,
      angle: 144,
      title: 'Motion Control Desk',
      tag: 'RENDER',
      img: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
      icon: Sliders,
      color: '#20E6E6',
    },
    {
      id: 6,
      angle: 180,
      title: 'Spatial Canvas Room',
      tag: '3D DEEP',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      icon: Eye,
      color: '#4A6CFF',
    },
    {
      id: 7,
      angle: 216,
      title: 'AI Scene Synthesis',
      tag: 'REALTIME',
      img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles,
      color: '#A018FF',
    },
    {
      id: 8,
      angle: 252,
      title: 'High-Res Color Suite',
      tag: 'HDR+',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      icon: Play,
      color: '#20E6E6',
    },
    {
      id: 9,
      angle: 288,
      title: 'Full Frame Capture',
      tag: 'RAW 8K',
      img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      icon: Camera,
      color: '#4A6CFF',
    },
    {
      id: 10,
      angle: 324,
      title: 'Holographic Display',
      tag: 'NEURAL',
      img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      icon: Monitor,
      color: '#A018FF',
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* 3D Perspective Container */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        {/* Glowing Floor Stage Spotlight */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-[100%] bg-gradient-to-t from-[#4A6CFF]/30 via-[#20E6E6]/15 to-transparent blur-[60px] transform rotate-x-[75deg]" />
        
        {/* Central Glowing Spotlight Pillar */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[240px] h-[400px] bg-gradient-to-b from-transparent via-[#4A6CFF]/20 to-[#20E6E6]/30 blur-[40px] rounded-full pointer-events-none" />

        {/* Center Standing Silhouette Icon / Focal Point */}
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#10131A]/90 border border-[#20E6E6]/50 shadow-[0_0_40px_rgba(32,230,230,0.5)] flex items-center justify-center backdrop-blur-md animate-pulse">
            <Sparkles className="w-8 h-8 text-[#20E6E6]" />
          </div>
          <div className="w-24 h-4 rounded-full bg-[#20E6E6]/40 blur-sm mt-3" />
        </div>

        {/* Orbiting 3D Cylinder Ring */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            rotateY,
            rotateX: mousePos.y * 0.2,
            scale,
            translateZ,
          }}
        >
          {cylinderScreens.map((screen) => {
            const Icon = screen.icon;
            // Radius of 3D ring cylinder
            const radius = 520;
            const x = Math.sin((screen.angle * Math.PI) / 180) * radius;
            const z = Math.cos((screen.angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={screen.id}
                className="absolute w-56 sm:w-64 h-36 sm:h-40 rounded-2xl bg-[#10131A]/85 border border-[#1C2433] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 group"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translate3d(${x}px, ${Math.sin(screen.id) * 30}px, ${z}px) rotateY(${screen.angle + 180}deg)`,
                }}
              >
                {/* Image background with overlay gradient */}
                <div className="absolute inset-0">
                  <img
                    src={screen.img}
                    alt={screen.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/40 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#05060A]/80 border border-white/10 text-white flex items-center space-x-1 backdrop-blur-sm"
                    style={{ color: screen.color }}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{screen.tag}</span>
                  </span>

                  <span className="w-2 h-2 rounded-full bg-[#20E6E6] animate-ping" />
                </div>

                {/* Bottom Title & Play Overlay */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <p className="text-xs font-semibold text-white tracking-wide truncate">
                    {screen.title}
                  </p>
                  <div className="flex items-center space-x-1.5 mt-1 text-[10px] text-[#9AA5B1]">
                    <Play className="w-2.5 h-2.5 fill-[#20E6E6] text-[#20E6E6]" />
                    <span>Interactive Stream</span>
                  </div>
                </div>

                {/* Glowing border highlight */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#20E6E6]/50 transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Grid Floor Mesh */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[radial-gradient(#1C2433_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
    </div>
  );
};
