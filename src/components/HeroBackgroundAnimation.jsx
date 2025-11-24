import React, { useEffect, useRef } from 'react';

const HeroBackgroundAnimation = () => {
  const containerRef = useRef(null);
  const pathRefs = useRef([]);
  const toeRefs = useRef([]);
  const fillRefs = useRef([]);
  const energyRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const runAnimation = () => {
      // 1. Reset (Hard Reset)
      if (containerRef.current) {
        containerRef.current.style.opacity = '0.15'; // Base transparency requested
        containerRef.current.style.transition = 'opacity 1s ease-in-out';
      }

      // Reset Styles
      pathRefs.current.forEach(p => {
        if(p) {
          p.style.animation = 'none';
          p.style.opacity = '0';
          p.style.strokeDashoffset = p.getTotalLength();
          p.style.strokeDasharray = p.getTotalLength();
          void p.offsetWidth; // Trigger reflow
        }
      });

      fillRefs.current.forEach(f => f && f.classList.remove('animate-fade-in'));
      toeRefs.current.forEach(t => t && t.classList.remove('animate-pop'));
      energyRefs.current.forEach(e => e && e.classList.remove('animate-float-up'));
      textRefs.current.forEach(t => t && t.classList.remove('animate-fade-in'));

      // 2. Animation Sequence

      // Phase 1: Lines (0s)
      pathRefs.current.forEach((path) => {
        if (!path) return;
        const delay = path.getAttribute('data-delay') || 0;
        setTimeout(() => {
          path.style.animation = `dash 2s ease-out forwards`;
          path.style.opacity = '1';
        }, parseInt(delay));
      });

      // Phase 2: Toes & Head (0.8s+)
      toeRefs.current.forEach((toe, index) => {
        if (!toe) return;
        setTimeout(() => {
          toe.classList.add('animate-pop');
        }, 800 + (index * 120));
      });

      // Phase 3: Fills (1.8s)
      setTimeout(() => {
        fillRefs.current.forEach(fill => fill && fill.classList.add('animate-fade-in'));
      }, 1800);

      // Phase 4: Energy (2s)
      energyRefs.current.forEach((line, index) => {
        if (!line) return;
        setTimeout(() => {
          line.classList.add('animate-float-up');
        }, 2000 + (index * 200));
      });

      // Phase 5: Text (2.2s+) - Keep only decorative text
      textRefs.current.forEach((text, index) => {
        if (!text) return;
        setTimeout(() => {
          text.classList.add('animate-fade-in');
        }, 2200 + (index * 200));
      });

      // Phase 6: Loop (9s)
      setTimeout(loopSequence, 9000);
    };

    const loopSequence = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
        setTimeout(() => {
           runAnimation();
        }, 1000);
      }
    };

    // Initial Start
    runAnimation();

    // Styles injection for keyframes
    const style = document.createElement('style');
    style.textContent = `
      .path-draw { fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .fill-shape { opacity: 0; transition: opacity 1.5s ease-in-out; }
      .toe { opacity: 0; transform-origin: center; transform-box: fill-box; transform: scale(0); }
      .energy-line { opacity: 0; stroke-dasharray: 100; stroke-dashoffset: 100; }
      .text-fade-in { opacity: 0; transform: translateY(10px); transition: all 1s ease-out; }
      
      .animate-fade-in { opacity: 1 !important; transform: translateY(0) !important; }
      .animate-pop { animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      .animate-float-up { animation: floatUp 2s ease-out forwards; }
      
      @keyframes dash { to { stroke-dashoffset: 0; } }
      @keyframes popIn { 
        0% { opacity: 0; transform: scale(0); }
        70% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes floatUp {
        0% { stroke-dashoffset: 100; opacity: 0; }
        100% { stroke-dashoffset: 0; opacity: 0.7; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const addToRefs = (ref, array) => {
    if (ref && !array.includes(ref)) {
      array.push(ref);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      style={{ opacity: 0.15, zIndex: 0 }} // Very transparent as requested
    >
      <div className="relative w-full max-w-[1000px] h-auto opacity-50 scale-125 md:scale-100">
        <svg viewBox="0 0 600 550" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
                <style>
                    {`
                    .fill-foot { fill: #dbeff5; } 
                    .fill-body { fill: #e5ed89; } 
                    .stroke-main { fill: none; stroke: #1d1d1b; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; }
                    .stroke-detail { fill: none; stroke: #8daab5; stroke-width: 1.0; stroke-linecap: round; }
                    .stroke-detail-green { fill: none; stroke: #aeb568; stroke-width: 1.0; stroke-linecap: round; }
                    `}
                </style>
            </defs>

            {/* LEFT FOOT */}
            <g id="Left-Foot">
                <path ref={el => fillRefs.current[0] = el} className="fill-foot fill-shape" d="M355,470 C320,430 250,350 240,230 C235,190 265,175 295,185 C320,195 340,225 350,260 C355,290 355,420 355,470 Z" />
                <path ref={el => pathRefs.current[0] = el} className="stroke-main path-draw" d="M305,195 C240,170 160,190 170,280 C180,360 270,430 358,475" />
                <path ref={el => pathRefs.current[1] = el} className="stroke-detail path-draw" data-delay="400" d="M240,210 C230,280 260,370 345,460" />
                
                <g id="Toes">
                    {[
                      { cx: 138, cy: 235, rx: 9, ry: 13, rot: -40, d: "M132,225 A 9 13 -40 1 1 145,245" },
                      { cx: 160, cy: 205, rx: 10, ry: 15, rot: -30, d: "M153,195 A 10 15 -30 1 1 168,215" },
                      { cx: 195, cy: 180, rx: 11, ry: 17, rot: -20, d: "M188,170 A 11 17 -20 1 1 202,190" },
                      { cx: 240, cy: 165, rx: 12, ry: 19, rot: -10, d: "M232,155 A 12 19 -10 1 1 248,175" },
                      { cx: 290, cy: 160, rx: 13, ry: 20, rot: 5, d: "M282,150 A 13 20 5 1 1 298,170" }
                    ].map((toe, i) => (
                      <g key={i} ref={el => toeRefs.current[i] = el} className="toe">
                          <ellipse class="fill-foot" cx={toe.cx} cy={toe.cy} rx={toe.rx} ry={toe.ry} transform={`rotate(${toe.rot} ${toe.cx} ${toe.cy})`} />
                          <path class="stroke-main" d={toe.d} strokeWidth="1.2" fill="none"/>
                      </g>
                    ))}
                </g>
            </g>

            {/* RIGHT FIGURE */}
            <g id="Right-Figure">
                <path ref={el => fillRefs.current[1] = el} className="fill-body fill-shape" d="M370,475 C400,440 470,330 495,240 C510,180 515,130 515,110 C525,130 505,200 480,250 C450,310 410,410 370,475 Z" />
                <path ref={el => fillRefs.current[2] = el} className="fill-body fill-shape" d="M340,245 C370,205 440,185 470,210 L 480,230 C 440,205 390,235 360,265 Z" />
                
                <g ref={el => toeRefs.current[5] = el} className="toe" style={{ transitionDelay: '200ms' }}>
                    <circle class="fill-body" cx="490" cy="190" r="24" />
                    <circle class="stroke-main" cx="490" cy="190" r="24" fill="none"/>
                </g>

                <path ref={el => pathRefs.current[2] = el} className="stroke-main path-draw" data-delay="300" d="M372,477 C460,370 530,250 530,120 C528,135 505,175 500,210" />
                <path ref={el => pathRefs.current[3] = el} className="stroke-main path-draw" data-delay="500" d="M340,248 C375,190 470,170 500,205" />
                <path ref={el => pathRefs.current[4] = el} className="stroke-detail-green path-draw" data-delay="800" d="M470,225 C460,300 425,380 380,460" />
            </g>

            {/* CENTER LINES */}
            <g id="Center-Lines">
                <path ref={el => energyRefs.current[0] = el} className="energy-line stroke-detail" d="M355,270 C360,320 345,370 355,420 C358,440 365,450 360,470" />
                <path ref={el => energyRefs.current[1] = el} className="energy-line stroke-detail" d="M345,440 C342,455 348,465 355,475" strokeWidth="0.8"/>
            </g>
        </svg>

        {/* Text Decorations */}
        <div className="absolute top-[25%] left-[10%] w-[80%] h-[30%] pointer-events-none">
            <span ref={el => textRefs.current[0] = el} className="font-hand text-xl text-black/50 absolute bottom-0 left-[25%] rotate-[-45deg] text-fade-in">...bis Fuß</span>
            <span ref={el => textRefs.current[1] = el} className="font-hand text-2xl text-black/50 absolute top-[10%] right-[35%] rotate-[-15deg] text-fade-in">von Kopf...</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBackgroundAnimation;
