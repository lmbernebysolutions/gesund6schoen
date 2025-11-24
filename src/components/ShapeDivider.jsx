import React from 'react';

/**
 * ShapeDivider
 * Eine einzelne, saubere Welle, die den unteren Bereich füllt.
 * Durch Rotation und Positionierung kann sie oben oder unten eingesetzt werden.
 */
const ShapeDivider = ({ color = '#1A1A1A' }) => {
  // Ein weicher, organischer Pfad, der den UNTEREN Bereich füllt (von y=30 bis y=100).
  // Startet links bei y=100, geht hoch auf y=30, wellt sich rüber und geht rechts bei y=100 zu.
  const path = "M0,100 C320,100 420,0 720,50 C1020,100 1120,0 1440,100 V100 H0 Z";
  
  // Alternative flachere Kurve für besseren Text-Flow:
  const smoothPath = "M0,100 L0,50 Q360,0 720,50 T1440,50 L1440,100 Z";

  return (
    <div className="w-full h-full">
      <svg
        className="w-full h-full block"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={smoothPath}
          fill={color}
        />
      </svg>
    </div>
  );
};

export default ShapeDivider;
