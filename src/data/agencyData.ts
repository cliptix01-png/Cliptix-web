import { Partner, Metric, Project, Service } from '../types';

export const HERO_PARTNERS: Partner[] = [
  { id: '1', name: 'zantic' },
  { id: '2', name: 'BookStore' },
  { id: '3', name: 'Wager' },
  { id: '4', name: 'Crono' },
  { id: '5', name: 'Mercury' },
];

export const AGENCY_METRICS: Metric[] = [
  { label: '86+', value: '86+', sublabel: 'Project Done' },
  { label: '98%', value: '98%', sublabel: 'Successful Rating' },
  { label: '223m', value: '$223m', sublabel: 'Growth Net Worth' },
];

export const EXPERIENCE_BUBBLES: Partner[] = [
  { id: 'p1', name: 'GitHub', category: 'Platform', icon: 'github' },
  { id: 'p2', name: 'archin', category: 'Architecture', icon: 'archin' },
  { id: 'p3', name: 'archin', category: 'Studio', icon: 'archin-2' },
  { id: 'p4', name: 'matthew', category: 'Co.', icon: 'matthew' },
  { id: 'p5', name: 'ZUMAR CONS', category: 'Consulting', icon: 'zumar' },
  { id: 'p6', name: 'Cronos', category: 'FinTech', icon: 'cronos' },
  { id: 'p7', name: 'Mercury', category: 'Capital', icon: 'mercury' },
];

export const AGENCY_SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    tagline: 'Identity & Vision',
    description: 'We build comprehensive visual identity systems, brand positioning, and logo guidelines that command authority.',
    capabilities: ['Brand Architecture', 'Logo & Visual Identity', 'Brand Guidelines', 'Typography & Color Systems'],
    icon: 'Sparkles',
  },
  {
    id: 'art-direction',
    title: 'ART DIRECTION',
    tagline: 'Visual Narrative',
    description: 'Crafting expressive art concepts, 3D worlds, and cohesive visual direction for product launches and global campaigns.',
    capabilities: ['Campaign Concepts', '3D Visuals & CGI', 'Creative Strategy', 'Content Direction'],
    icon: 'Palette',
  },
  {
    id: 'motion',
    title: 'MOTION & INTERACTION',
    tagline: 'Kinetic Design',
    description: 'Bringing interfaces and brand storytelling to life through high-precision micro-interactions, webGL, and 3D motion.',
    capabilities: ['UI Micro-Interactions', '3D Animation', 'Interactive WebGL', 'Video Production'],
    icon: 'Zap',
  },
  {
    id: 'digital-product',
    title: 'DIGITAL PRODUCT DESIGN',
    tagline: 'User-Centered Systems',
    description: 'Designing intuitive web applications, mobile platforms, and complex SaaS products crafted for scale and delight.',
    capabilities: ['UX Research & Strategy', 'UI/UX Design', 'Design Systems', 'Prototyping & Testing'],
    icon: 'Layers',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Spatial Vision Pro',
    category: 'Spatial UI & AR Hardware',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    description: 'A revolutionary spatial computing interface for next-gen AR headsets, combining gesture controls with contextual 3D widgets.',
    deliverables: ['Spatial UI System', 'Motion Guidelines', '3D Interaction Design'],
    client: 'Aether Optics',
    impact: '+240% User Engagement',
  },
  {
    id: '2',
    title: 'Aura Sound Identity',
    category: 'Acoustic & Brand Experience',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    description: 'Complete brand overhaul and interactive web app for audiophile hardware ecosystem with real-time waveform visuals.',
    deliverables: ['Visual Identity', '3D Product Configurator', 'Design System'],
    client: 'Aura Labs',
    impact: '1.2m Active Users',
  },
  {
    id: '3',
    title: 'Cronos Capital Ecosystem',
    category: 'FinTech Platform',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    description: 'Dark-mode high-frequency trading terminal and institutional dashboard designed for lightning fast execution.',
    deliverables: ['Web Application', 'Design System', 'Data Visualization'],
    client: 'Cronos Financial',
    impact: '$4.2B Volume Processed',
  },
  {
    id: '4',
    title: 'Neuron AI Workspace',
    category: 'AI Interface & Product',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    description: 'Human-centered workspace for multi-modal AI models featuring spatial canvases and neural node graph editor.',
    deliverables: ['Product Architecture', 'UI/UX Design', 'Design Tokens'],
    client: 'Neuron Inc.',
    impact: '85k Enterprise Seats',
  },
];
