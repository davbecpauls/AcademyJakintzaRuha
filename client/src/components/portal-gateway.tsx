interface PortalGatewayProps {
  onEnter: () => void;
}

export default function PortalGateway({ onEnter }: PortalGatewayProps) {
  const handlePortalClick = () => {
    // Add ripple effect animation
    onEnter();
  };

  return (
    <div className="portal-container mb-16">
      <div 
        className="portal-glow rune-border rounded-full w-80 h-80 md:w-96 md:h-96 flex items-center justify-center relative ripple-effect cursor-pointer transform transition-all duration-300 hover:scale-105" 
        onClick={handlePortalClick}
      >
        {/* Portal Inner Glow */}
        <div className="absolute inset-4 border-2 border-soft-gold rounded-full opacity-60"></div>
        <div className="absolute inset-8 border border-amethyst rounded-full opacity-40"></div>
        
        {/* Portal Runes */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-soft-gold text-2xl">☽</div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-soft-gold text-2xl">☾</div>
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-soft-gold text-2xl">◊</div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-soft-gold text-2xl">✦</div>
        
        {/* Portal Center Text */}
        <div className="text-center z-10">
          <div className="font-cinzel text-xl md:text-2xl text-soft-gold font-bold mb-2 tracking-wider">
            ENTER THE
          </div>
          <div className="font-cinzel text-2xl md:text-3xl text-amethyst font-bold tracking-widest">
            ACADEMY
          </div>
        </div>
      </div>
    </div>
  );
}
