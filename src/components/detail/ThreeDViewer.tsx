'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ModelAnnotation } from '@/types/heritage';
import { Eye, RotateCw, ZoomIn, ZoomOut, Layers, Maximize2, Minimize2 } from 'lucide-react';

interface ThreeDViewerProps {
  modelType: 'bansuri' | 'temple' | 'sword' | 'wheel' | 'nataraja' | 'stupa';
  description: string;
  annotations?: ModelAnnotation[];
}

export const ThreeDViewer: React.FC<ThreeDViewerProps> = ({
  modelType,
  description,
  annotations = [],
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeAnnotation, setActiveAnnotation] = useState<ModelAnnotation | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const reqIdRef = useRef<number | null>(null);

  // Mouse interaction state
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x181513); // Deep antique charcoal

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xfff4e6, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4af37, 2.0); // Warm gold key light
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa3b899, 1.0); // Soft green-grey fill
    dirLight2.position.set(-5, -3, -5);
    scene.add(dirLight2);

    // 5. Construct Procedural Heritage 3D Asset
    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;

    // Palette materials
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc69214,
      metalness: 0.8,
      roughness: 0.3,
    });
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0xb58252,
      roughness: 0.8,
      metalness: 0.1,
    });
    const bambooMat = new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      roughness: 0.5,
      metalness: 0.1,
    });
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x9e9e9e,
      metalness: 0.9,
      roughness: 0.2,
    });
    const darkWoodMat = new THREE.MeshStandardMaterial({
      color: 0x541217,
      roughness: 0.6,
    });

    if (modelType === 'bansuri') {
      // Long bamboo cylinder
      const fluteGeo = new THREE.CylinderGeometry(0.2, 0.2, 5.5, 32);
      const fluteMesh = new THREE.Mesh(fluteGeo, bambooMat);
      fluteMesh.rotation.z = Math.PI / 2;
      modelGroup.add(fluteMesh);

      // Gold binding thread bands
      [-2.4, -1.8, 1.8, 2.4].forEach((pos) => {
        const ringGeo = new THREE.TorusGeometry(0.21, 0.02, 16, 32);
        const ringMesh = new THREE.Mesh(ringGeo, goldMat);
        ringMesh.position.x = pos;
        ringMesh.rotation.y = Math.PI / 2;
        modelGroup.add(ringMesh);
      });

      // Finger hole markers (black spheres)
      const holeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      [-1.5, -0.6, -0.2, 0.2, 0.6, 1.0, 1.4].forEach((xPos) => {
        const holeGeo = new THREE.SphereGeometry(0.04, 16, 16);
        const holeMesh = new THREE.Mesh(holeGeo, holeMat);
        holeMesh.position.set(xPos, 0.2, 0);
        modelGroup.add(holeMesh);
      });
    } else if (modelType === 'wheel') {
      // Konark Wheel / Chariot Wheel
      // Outer Rim
      const rimGeo = new THREE.TorusGeometry(2.0, 0.2, 24, 64);
      const rimMesh = new THREE.Mesh(rimGeo, stoneMat);
      modelGroup.add(rimMesh);

      // Center Hub
      const hubGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.6, 32);
      const hubMesh = new THREE.Mesh(hubGeo, goldMat);
      hubMesh.rotation.x = Math.PI / 2;
      modelGroup.add(hubMesh);

      // 8 Major Spokes
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const spokeGeo = new THREE.CylinderGeometry(0.08, 0.12, 1.8, 16);
        const spokeMesh = new THREE.Mesh(spokeGeo, stoneMat);
        spokeMesh.position.set(Math.cos(angle) * 1.0, Math.sin(angle) * 1.0, 0);
        spokeMesh.rotation.z = angle - Math.PI / 2;
        modelGroup.add(spokeMesh);

        // Medallion on major spoke
        const medalGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.15, 16);
        const medalMesh = new THREE.Mesh(medalGeo, goldMat);
        medalMesh.position.set(Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, 0.1);
        medalMesh.rotation.x = Math.PI / 2;
        modelGroup.add(medalMesh);
      }

      // 8 Minor Spokes
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8 + Math.PI / 8;
        const spokeGeo = new THREE.CylinderGeometry(0.04, 0.05, 1.8, 16);
        const spokeMesh = new THREE.Mesh(spokeGeo, stoneMat);
        spokeMesh.position.set(Math.cos(angle) * 1.0, Math.sin(angle) * 1.0, 0);
        spokeMesh.rotation.z = angle - Math.PI / 2;
        modelGroup.add(spokeMesh);
      }
    } else if (modelType === 'sword') {
      // Curved Talwar Blade
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -1.0, 0),
        new THREE.Vector3(0.1, 0.2, 0),
        new THREE.Vector3(0.4, 1.4, 0),
        new THREE.Vector3(0.8, 2.5, 0),
      ]);
      const bladeGeo = new THREE.TubeGeometry(curve, 32, 0.08, 8, false);
      const bladeMesh = new THREE.Mesh(bladeGeo, steelMat);
      modelGroup.add(bladeMesh);

      // Disc Pommel
      const pommelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.06, 32);
      const pommelMesh = new THREE.Mesh(pommelGeo, goldMat);
      pommelMesh.position.set(0, -1.6, 0);
      modelGroup.add(pommelMesh);

      // Pommel needle spike
      const spikeGeo = new THREE.ConeGeometry(0.06, 0.4, 16);
      const spikeMesh = new THREE.Mesh(spikeGeo, goldMat);
      spikeMesh.position.set(0, -1.8, 0);
      spikeMesh.rotation.x = Math.PI;
      modelGroup.add(spikeMesh);

      // Grip Handle
      const gripGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 16);
      const gripMesh = new THREE.Mesh(gripGeo, darkWoodMat);
      gripMesh.position.set(0, -1.3, 0);
      modelGroup.add(gripMesh);

      // Knuckle bow guard
      const bowCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -1.0, 0),
        new THREE.Vector3(0.35, -1.3, 0),
        new THREE.Vector3(0, -1.6, 0),
      ]);
      const bowGeo = new THREE.TubeGeometry(bowCurve, 16, 0.03, 8, false);
      const bowMesh = new THREE.Mesh(bowGeo, goldMat);
      modelGroup.add(bowMesh);
    } else if (modelType === 'nataraja') {
      // Cosmic Ring of Fire (Prabhamandala)
      const fireRingGeo = new THREE.TorusGeometry(1.8, 0.08, 16, 64);
      const fireRingMesh = new THREE.Mesh(fireRingGeo, goldMat);
      modelGroup.add(fireRingMesh);

      // 32 Flame points around the ring
      for (let i = 0; i < 32; i++) {
        const angle = (i * Math.PI * 2) / 32;
        const flameGeo = new THREE.ConeGeometry(0.06, 0.2, 8);
        const flameMesh = new THREE.Mesh(flameGeo, goldMat);
        flameMesh.position.set(Math.cos(angle) * 1.85, Math.sin(angle) * 1.85, 0);
        flameMesh.rotation.z = angle - Math.PI / 2;
        modelGroup.add(flameMesh);
      }

      // Torso & Limbs
      const torsoGeo = new THREE.CylinderGeometry(0.2, 0.15, 1.2, 16);
      const torsoMesh = new THREE.Mesh(torsoGeo, goldMat);
      torsoMesh.position.set(0, 0.2, 0);
      modelGroup.add(torsoMesh);

      // Lifted Leg
      const legGeo = new THREE.CylinderGeometry(0.08, 0.07, 1.1, 16);
      const legMesh = new THREE.Mesh(legGeo, goldMat);
      legMesh.position.set(-0.4, -0.4, 0.3);
      legMesh.rotation.z = Math.PI / 3;
      modelGroup.add(legMesh);

      // Base Pedestal (Lotus Base)
      const baseGeo = new THREE.CylinderGeometry(1.0, 1.2, 0.3, 32);
      const baseMesh = new THREE.Mesh(baseGeo, goldMat);
      baseMesh.position.set(0, -1.6, 0);
      modelGroup.add(baseMesh);
    } else {
      // Sacred Architecture Temple Vimana / Stupa
      // Stepped Tower
      [1.4, 1.1, 0.85, 0.65, 0.45, 0.3].forEach((radius, level) => {
        const tierGeo = new THREE.BoxGeometry(radius * 2, 0.45, radius * 2);
        const tierMesh = new THREE.Mesh(tierGeo, stoneMat);
        tierMesh.position.y = -1.5 + level * 0.45;
        modelGroup.add(tierMesh);
      });

      // Top Dome (Kumbam / Kalasa)
      const domeGeo = new THREE.SphereGeometry(0.4, 32, 16);
      const domeMesh = new THREE.Mesh(domeGeo, goldMat);
      domeMesh.position.y = 1.35;
      modelGroup.add(domeMesh);

      const pinnacleGeo = new THREE.ConeGeometry(0.12, 0.5, 16);
      const pinnacleMesh = new THREE.Mesh(pinnacleGeo, goldMat);
      pinnacleMesh.position.y = 1.8;
      modelGroup.add(pinnacleMesh);
    }

    scene.add(modelGroup);

    // 6. Animation Loop
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      if (autoRotate && modelGroupRef.current && !isDraggingRef.current) {
        modelGroupRef.current.rotation.y += 0.007;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Mouse Orbit Controls
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !modelGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      modelGroupRef.current.rotation.y += deltaX * 0.01;
      modelGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      if (!cameraRef.current) return;
      e.preventDefault();
      cameraRef.current.position.z = Math.max(3, Math.min(12, cameraRef.current.position.z + e.deltaY * 0.005));
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel);

    // Resize handler
    const onResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('mousedown', onMouseDown);
      dom.removeEventListener('wheel', onWheel);
      renderer.dispose();
    };
  }, [modelType, autoRotate]);

  // Handle wireframe toggle
  useEffect(() => {
    if (!modelGroupRef.current) return;
    modelGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => (m.wireframe = wireframe));
        } else if (child.material) {
          child.material.wireframe = wireframe;
        }
      }
    });
  }, [wireframe]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const factor = direction === 'in' ? -1 : 1;
    cameraRef.current.position.z = Math.max(3, Math.min(12, cameraRef.current.position.z + factor));
  };

  const resetRotation = () => {
    if (!modelGroupRef.current) return;
    modelGroupRef.current.rotation.set(0, 0, 0);
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border-2 border-heritage-sandstone/30 shadow-2xl bg-neutral-950 transition-all ${
        isFullscreen ? 'fixed inset-4 z-50 rounded-xl' : 'w-full h-[450px]'
      }`}
    >
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-wide uppercase">
            Interactive 3D Engine
          </span>
          <span className="text-[10px] text-amber-300 font-serif">Three.js</span>
        </div>

        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/10 pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
            className={`p-2 rounded-lg text-xs transition-colors ${
              autoRotate ? 'bg-heritage-maroon text-heritage-gold' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <RotateCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom('in')}
            title="Zoom In"
            className="p-2 rounded-lg text-white/80 hover:bg-white/10 text-xs"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            title="Zoom Out"
            className="p-2 rounded-lg text-white/80 hover:bg-white/10 text-xs"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setWireframe(!wireframe)}
            title="Toggle Wireframe Mesh"
            className={`p-2 rounded-lg text-xs transition-colors ${
              wireframe ? 'bg-amber-600 text-white' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={resetRotation}
            title="Reset Angle"
            className="px-2 py-1 text-[11px] font-bold text-white/80 hover:bg-white/10 rounded-lg"
          >
            Reset
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title="Toggle Fullscreen"
            className="p-2 rounded-lg text-white/80 hover:bg-white/10 text-xs"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Floating Feature Annotation Pills */}
      {annotations.length > 0 && (
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 pointer-events-auto z-10">
          <span className="text-[11px] font-bold text-amber-200/90 flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-heritage-gold" /> Inspect Features:
          </span>
          {annotations.map((ann, idx) => (
            <button
              key={idx}
              onClick={() => setActiveAnnotation(ann)}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all backdrop-blur-md shadow-sm ${
                activeAnnotation?.title === ann.title
                  ? 'bg-heritage-gold text-neutral-950 font-bold ring-2 ring-white/60'
                  : 'bg-black/70 text-white/90 hover:bg-heritage-maroon hover:text-white border border-white/20'
              }`}
            >
              {ann.title}
            </button>
          ))}
        </div>
      )}

      {/* Active Annotation Detail Card */}
      {activeAnnotation && (
        <div className="absolute top-16 right-4 max-w-xs bg-neutral-900/95 border border-heritage-gold/50 rounded-xl p-4 shadow-2xl backdrop-blur-md text-white z-20 animate-fade-in">
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="text-sm font-serif font-bold text-heritage-gold">
              {activeAnnotation.title}
            </h4>
            <button
              onClick={() => setActiveAnnotation(null)}
              className="text-white/60 hover:text-white text-lg font-bold p-1"
            >
              ×
            </button>
          </div>
          <p className="text-xs text-white/80 leading-relaxed">
            {activeAnnotation.description}
          </p>
        </div>
      )}

      {/* Touch & Drag Hint */}
      <div className="absolute bottom-16 right-4 text-[10px] text-white/50 pointer-events-none bg-black/40 px-2 py-0.5 rounded">
        Drag to orbit • Scroll to zoom
      </div>
    </div>
  );
};
