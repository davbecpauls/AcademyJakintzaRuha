interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 modal-backdrop" onClick={onClose}>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div 
          className="rune-border rounded-3xl max-w-2xl w-full p-8 md:p-12 relative" 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-silver-mist text-2xl magical-hover"
            onClick={onClose}
          >
            ×
          </button>
          
          {/* Mystical sacred geometry background with ethereal light */}
          <div className="mb-8 text-center">
            <img 
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=200" 
              alt="Sacred geometry with ethereal golden light" 
              className="w-full h-32 object-cover rounded-2xl opacity-60" 
            />
          </div>
          
          <div className="text-center mb-8">
            <h2 className="font-cinzel text-3xl font-bold text-soft-gold mb-4 tracking-wider">
              📜 About the Academy
            </h2>
          </div>
          
          <div className="space-y-6 font-garamond text-silver-mist leading-relaxed">
            <p className="text-lg italic text-center text-silver-mist/90">
              "A sacred academy of magic, memory, and mastery for both children and adults."
            </p>
            
            <p>
              <span className="font-bold text-amethyst">Jakintza Ruha: Academy of Remembrance</span> is rooted in ancient knowing and cosmic remembrance. We guide souls across <span className="text-soft-gold font-semibold">7 Realms of awakening</span>, each designed to unlock the sacred memories that live within your eternal essence.
            </p>
            
            <p>
              Through elemental wisdom, ancestral threads, and sacred rites, you'll remember who you are and why you came to this magnificent Earth. Our pathways honor both the wonder of childhood discovery and the depth of adult spiritual awakening.
            </p>
            
            <div className="border-t border-silver-mist/30 pt-6 mt-8">
              <p className="text-center italic text-silver-mist/80">
                "When souls remember their cosmic origins, magic naturally flows through their being."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
