import { useState, useEffect } from "react";
import StarfieldBackground from "@/components/starfield-background";
import Navigation from "@/components/navigation";
import PortalGateway from "@/components/portal-gateway";
import PathwaySelection from "@/components/pathway-selection";
import AboutModal from "@/components/about-modal";
import ComingSoonFeatures from "@/components/coming-soon-features";

export default function Home() {
  const [showPathways, setShowPathways] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleEnterPortal = () => {
    setShowPathways(true);
  };

  const handleReturnToPortal = () => {
    setShowPathways(false);
  };

  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();

    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  return (
    <div className="font-garamond text-silver-mist overflow-x-hidden">
      <StarfieldBackground />
      
      <Navigation onAboutClick={() => setShowAboutModal(true)} />
      
      <div className="relative z-10 min-h-screen">
        {!showPathways ? (
          <>
            {/* Welcome Section */}
            <section className="min-h-screen flex flex-col justify-center items-center px-6">
              {/* Main Title */}
              <div className="text-center mb-12 fade-in">
                <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-soft-gold via-amethyst to-silver-mist tracking-wider">
                  Jakintza Ruha
                </h1>
                <h2 className="font-cinzel text-2xl md:text-3xl text-silver-mist tracking-widest">
                  Academy of Remembrance
                </h2>
                <p className="font-garamond text-lg md:text-xl mt-4 italic text-silver-mist/80 max-w-2xl mx-auto">
                  A sacred entry into magic, memory, and mastery
                </p>
              </div>

              {/* Central Portal */}
              <PortalGateway onEnter={handleEnterPortal} />
            </section>

            {/* Coming Soon Features */}
            <ComingSoonFeatures />
          </>
        ) : (
          <PathwaySelection onReturn={handleReturnToPortal} />
        )}
      </div>

      <AboutModal 
        isOpen={showAboutModal} 
        onClose={() => setShowAboutModal(false)} 
      />
    </div>
  );
}
