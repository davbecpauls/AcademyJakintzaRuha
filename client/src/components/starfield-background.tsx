import { useEffect } from "react";

export default function StarfieldBackground() {
  useEffect(() => {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;

    // Clear existing stars
    const existingStars = starfield.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());

    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + 's';
      starfield.appendChild(star);
    }
  }, []);

  return (
    <div className="starfield" id="starfield">
      {/* Aurora effects */}
      <div className="aurora"></div>
      
      {/* Drifting Sigils */}
      <div className="drifting-sigil" style={{ top: '20%', animationDelay: '0s' }}>✦</div>
      <div className="drifting-sigil" style={{ top: '60%', animationDelay: '10s' }}>◊</div>
      <div className="drifting-sigil" style={{ top: '80%', animationDelay: '20s' }}>⟐</div>
      <div className="drifting-sigil" style={{ top: '40%', animationDelay: '15s' }}>☾</div>
    </div>
  );
}
