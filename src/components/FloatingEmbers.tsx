import React, { useMemo } from 'react';

interface Ember {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingEmbers: React.FC = () => {
  // Generate a fixed set of subtle golden glowing ember particles
  const embers = useMemo<Ember[]>(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle radial ambient warmth from bottom and top */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-600/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 right-10 w-[500px] h-[400px] bg-amber-500/8 rounded-full blur-[140px]" />
      
      {embers.map((ember) => (
        <span
          key={ember.id}
          className="ember-particle"
          style={{
            left: `${ember.left}%`,
            bottom: '-10px',
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            animationDuration: `${ember.duration}s`,
            animationDelay: `${ember.delay}s`,
            opacity: ember.opacity,
          }}
        />
      ))}
    </div>
  );
};
