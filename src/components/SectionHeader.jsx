import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-16 max-w-2xl mx-auto ${className}`}>
      {eyebrow && (
        <span className="text-[var(--color-accent)] font-hand text-2xl block mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl font-bold mb-4 text-[var(--color-dark)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600">{subtitle}</p>
      )}
      {/* Dekor-Linie */}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-32 bg-[var(--color-primary)] rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeader;

