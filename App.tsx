import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedVideos from './components/FeaturedVideos';
import FreeDownloads from './components/FreeDownloads';
import Shop from './components/Shop';
import Footer from './components/Footer';
import type { Product } from './types';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Crystal Caverns',
    type: 'Beat',
    price: 29.99,
    coverArtUrl: 'https://picsum.photos/seed/crystal/500/500',
  },
  {
    id: 2,
    name: 'Aero Drums Vol. 1',
    type: 'Sample Pack',
    price: 19.99,
    coverArtUrl: 'https://picsum.photos/seed/aero/500/500',
  },
  {
    id: 3,
    name: 'Liquid Sunshine',
    type: 'Beat',
    price: 34.99,
    coverArtUrl: 'https://picsum.photos/seed/sunshine/500/500',
  },
  {
    id: 4,
    name: 'Sky High Synths',
    type: 'Sample Pack',
    price: 24.99,
    coverArtUrl: 'https://picsum.photos/seed/skyhigh/500/500',
  },
    {
    id: 5,
    name: 'Flow State',
    type: 'Beat',
    price: 29.99,
    coverArtUrl: 'https://picsum.photos/seed/flow/500/500',
  },
  {
    id: 6,
    name: 'Aqua Grooves',
    type: 'Sample Pack',
    price: 22.99,
    coverArtUrl: 'https://picsum.photos/seed/aqua/500/500',
  },
];


const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F0F8FF] text-slate-700">
      {/* Frutiger Aero Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aeroSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#00BFFF" />
            </linearGradient>
            <linearGradient id="aeroHills" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#98FB98" />
              <stop offset="100%" stopColor="#3CB371" />
            </linearGradient>
             <radialGradient id="eggGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(224, 255, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(173, 216, 230, 0.5)" />
            </radialGradient>
            <filter id="futuristicWarmth">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix"
                    values="1 0 0 0 0.05
                            0 1 0 0 0.05
                            0 0 1 0 0.05
                            0 0 0 1 0" />
            </filter>
            <filter id="bubbleWarp">
              <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" stitchTiles="stitch" result="warp"/>
              <feDisplacementMap in="SourceGraphic" in2="warp" scale="15" />
            </filter>
             <filter id="realityBend">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" stitchTiles="stitch" result="turbulence">
                    <animate attributeName="baseFrequency" dur="20s" values="0.02;0.05;0.02" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="R" yChannelSelector="G" />
                 <animate attributeName="scale" dur="15s" values="0;50;0" repeatCount="indefinite" />
            </filter>
             <filter id="eggGlow">
                <feGaussianBlur stdDeviation="15" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

            {/* UFO and Cow Shapes */}
            <g id="cow-shape" transform="translate(-15, -12)">
              <path d="M20,10 C25,5 30,5 30,10 L30,15 L28,20 L24,20 L24,15 C24,10 22,10 20,15 L18,20 L14,20 L14,15 C14,10 12,10 10,15 L8,20 L4,20 L4,10 C4,5 8,5 10,10 L15,5 C18,2 22,2 25,5 Z" />
              <path d="M5,12 C2,10 0,12 0,15 C0,18 2,20 5,18" />
            </g>
            <g id="ufo-shape">
              <path d="M0,10 C20,-5 80,-5 100,10 L85,20 C60,30 40,30 15,20 Z" fill="silver" />
              <path d="M25,10 C35,-2 65,-2 75,10 Z" fill="turquoise" opacity="0.8" />
              <circle cx="10" cy="12" r="3" fill="hotpink"><animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" /></circle>
              <circle cx="50" cy="20" r="4" fill="lightyellow"><animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" /></circle>
              <circle cx="90" cy="12" r="3" fill="hotpink"><animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" /></circle>
            </g>
            <polygon id="beam-shape" points="35,22 65,22 85,150 15,150" fill="#AFEEEE" style={{transformOrigin: '50% 22px'}} />

            <style>
                {`
                @keyframes float {
                  0% { transform: translateY(0px) translateX(0px); opacity: 0; }
                  20% { opacity: 0.7; }
                  80% { opacity: 0.7; }
                  100% { transform: translateY(-700px) translateX(40px); opacity: 0; }
                }
                @keyframes float2 {
                  0% { transform: translateY(0px) translateX(0px); opacity: 0; }
                  20% { opacity: 0.7; }
                  80% { opacity: 0.7; }
                  100% { transform: translateY(-700px) translateX(-40px); opacity: 0; }
                }
                .bubble { animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
                .bubble:nth-child(odd) { animation-name: float; }
                .bubble:nth-child(even) { animation-name: float2; }
                
                @keyframes hatch {
                    0%, 100% { transform: scale(0.95); opacity: 0.8; }
                    50% { transform: scale(1); opacity: 1; }
                    80% { transform: scale(1.5); opacity: 1; filter: brightness(5); }
                    95% { transform: scale(0); opacity: 0; filter: brightness(1); }
                }
                
                @keyframes radiate {
                    0% { stroke-dashoffset: 2000; opacity: 0; }
                    80% { stroke-dashoffset: 2000; opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 0; }
                }

                #gnosticEgg {
                    animation: hatch 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    transform-origin: center;
                }
                .lightRay {
                    stroke: white;
                    stroke-width: 2;
                    stroke-dasharray: 2000;
                    animation: radiate 15s ease-out infinite;
                    transform-origin: center;
                }

                /* --- UFO Animations --- */
                @keyframes ufo-fly-1 {
                  0%, 100% { transform: translate(100px, 300px); opacity: 0; }
                  10% { transform: translate(450px, 500px); opacity: 1; }
                  50% { transform: translate(450px, 500px); }
                  65% { transform: translate(1000px, 200px); }
                  80% { transform: translate(2200px, 150px); opacity: 0; }
                }
                @keyframes beam-activate-1 {
                  0%, 20%, 45%, 100% { opacity: 0; transform: scaleY(0.1); }
                  25%, 40% { opacity: 0.6; transform: scaleY(1); }
                }
                @keyframes cow-abduct-1 {
                  0%, 25% { transform: translateY(0) rotate(0deg); opacity: 1; }
                  40% { transform: translateY(-200px) rotate(15deg) scale(0.5); opacity: 0.8; }
                  45%, 100% { transform: translateY(-250px) rotate(15deg) scale(0); opacity: 0; }
                }
                @keyframes ufo-fly-2 {
                  0%, 100% { transform: translate(2000px, 250px); opacity: 0; }
                  10% { transform: translate(1250px, 530px); opacity: 1; }
                  50% { transform: translate(1250px, 530px); }
                  65% { transform: translate(800px, 300px); }
                  80% { transform: translate(-200px, 200px); opacity: 0; }
                }
                @keyframes beam-activate-2 {
                  0%, 20%, 45%, 100% { opacity: 0; transform: scaleY(0.1); }
                  25%, 40% { opacity: 0.6; transform: scaleY(1); }
                }
                @keyframes cow-abduct-2 {
                  0%, 25% { transform: translateY(0) rotate(0deg); opacity: 1; }
                  40% { transform: translateY(-180px) rotate(-20deg) scale(0.5); opacity: 0.8; }
                  45%, 100% { transform: translateY(-220px) rotate(-20deg) scale(0); opacity: 0; }
                }
                `}
            </style>
          </defs>

          <g filter="url(#futuristicWarmth)">
            <rect width="1920" height="1080" fill="url(#aeroSky)" />
            <path d="M -100 800 C 400 600, 600 900, 1100 750 C 1600 600, 1800 850, 2020 800 V 1080 H -100 Z" fill="url(#aeroHills)" opacity="0.9" />
            <path d="M -100 850 C 300 750, 500 950, 1000 850 C 1500 750, 1700 900, 2020 850 V 1080 H -100 Z" fill="url(#aeroHills)" opacity="0.6" />
             <g id="grid" stroke="rgba(255,255,255,0.15)" strokeWidth="2">
                <path d="M-100 880 H 2020" />
                <path d="M-100 940 H 2020" />
                <path d="M-100 1020 H 2020" />
                <path d="M 960 750 L 200 1080" />
                <path d="M 960 750 L 580 1080" />
                <path d="M 960 750 L 1340 1080" />
                <path d="M 960 750 L 1720 1080" />
            </g>
             {/* Static Cows */}
            <use href="#cow-shape" fill="#2d2d2d" transform="translate(800 830) scale(0.3)" />
            <use href="#cow-shape" fill="white" transform="translate(1600 780) scale(0.25)" />
          </g>
          
          <g transform="translate(960 600)" >
            <g id="gnosticEgg" filter="url(#eggGlow)">
                <ellipse cx="0" cy="0" rx="60" ry="80" fill="url(#eggGradient)" />
            </g>
            <g>
                {Array.from({ length: 12 }).map((_, i) => (
                    <line 
                        key={i}
                        className="lightRay"
                        x1="0" y1="0" x2="0" y2="-1000" 
                        transform={`rotate(${i * 30})`}
                        style={{animationDelay: `${i * 0.05}s`}}
                    />
                ))}
            </g>
          </g>
          
          <rect x="0" y="30%" width="100%" height="20%" fill="transparent" filter="url(#realityBend)" />

          {/* Abduction Scene 1 */}
          <g style={{animation: 'cow-abduct-1 22s infinite ease-in-out', animationDelay: '2s'}}>
            <use href="#cow-shape" fill="white" transform="translate(480 770) scale(0.28)" />
          </g>
          <g style={{animation: 'ufo-fly-1 22s infinite ease-in-out', animationDelay: '2s'}}>
            <use href="#ufo-shape" transform="scale(0.8)" />
            <use href="#beam-shape" style={{animation: 'beam-activate-1 22s infinite ease-in-out', animationDelay: '2s'}} />
          </g>

          {/* Abduction Scene 2 */}
          <g style={{animation: 'cow-abduct-2 22s infinite ease-in-out', animationDelay: '13s'}}>
            <use href="#cow-shape" fill="#382e2e" transform="translate(1280 810) scale(0.26)" />
          </g>
          <g style={{animation: 'ufo-fly-2 22s infinite ease-in-out', animationDelay: '13s'}}>
            <use href="#ufo-shape" transform="scale(0.7)" />
            <use href="#beam-shape" style={{animation: 'beam-activate-2 22s infinite ease-in-out', animationDelay: '13s'}} />
          </g>


          <g filter="url(#bubbleWarp)">
              <circle className="bubble" style={{animationDuration: '12s', animationDelay: '0s'} as React.CSSProperties} cx="20%" cy="110%" r="50" fill="rgba(255,255,255,0.25)" />
              <circle className="bubble" style={{animationDuration: '15s', animationDelay: '-2s'} as React.CSSProperties} cx="40%" cy="110%" r="80" fill="rgba(255,255,255,0.25)" />
              <circle className="bubble" style={{animationDuration: '10s', animationDelay: '-5s'} as React.CSSProperties} cx="60%" cy="110%" r="40" fill="rgba(255,255,255,0.25)" />
              <circle className="bubble" style={{animationDuration: '18s', animationDelay: '-7s'} as React.CSSProperties} cx="80%" cy="110%" r="70" fill="rgba(255,255,255,0.25)" />
              <circle className="bubble" style={{animationDuration: '13s', animationDelay: '-9s'} as React.CSSProperties} cx="10%" cy="110%" r="60" fill="rgba(255,255,255,0.25)" />
              <circle className="bubble" style={{animationDuration: '11s', animationDelay: '-3s'} as React.CSSProperties} cx="90%" cy="110%" r="45" fill="rgba(255,255,255,0.25)" />
          </g>
        </svg>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Hero />
          <FeaturedVideos />
          <FreeDownloads />
          <Shop products={mockProducts} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;