interface PathwaySelectionProps {
  onReturn: () => void;
}

export default function PathwaySelection({ onReturn }: PathwaySelectionProps) {
  const handlePathwaySelect = (pathType: 'children' | 'adults') => {
    if (pathType === 'children') {
      window.location.href = '/seven-realms';
    } else {
      window.location.href = '/returning-path';
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pathway-visible">
      <div className="text-center mb-16">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-soft-gold mb-6 tracking-wider">
          💫 Two Pathways Open Before You
        </h2>
        <p className="font-garamond text-xl text-silver-mist/80 italic">
          Choose your sacred journey of remembrance
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Children's Path */}
        <div 
          className="pathway-card rune-border rounded-3xl p-8 md:p-12 text-center magical-hover group cursor-pointer"
          onClick={() => handlePathwaySelect('children')}
        >
          {/* Cosmic forest landscape with fairy tale elements */}
          <div className="mb-8 relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Magical forest path with ethereal lighting" 
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-galactic-indigo/60 via-transparent to-spirit-blue/20"></div>
            <div className="absolute top-4 right-4 text-soft-gold text-2xl">🌈</div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-spirit-blue tracking-wide">
              🔹 The 7 Realms
            </h3>
            <p className="font-cinzel text-lg text-silver-mist tracking-wider">
              Children's Path
            </p>
            <p className="font-garamond text-silver-mist/90 leading-relaxed">
              A colorful journey through magical realms where young souls discover their gifts through elemental wisdom, storytelling, and sacred play. Each realm sparkles with wonder and gentle teachings.
            </p>
            
            {/* Magical trail visualization */}
            <div className="flex justify-center space-x-2 mt-6">
              <span className="w-3 h-3 rounded-full bg-soft-gold animate-pulse"></span>
              <span className="w-3 h-3 rounded-full bg-amethyst animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-3 h-3 rounded-full bg-spirit-blue animate-pulse" style={{ animationDelay: '0.4s' }}></span>
              <span className="w-3 h-3 rounded-full bg-ritual-rose animate-pulse" style={{ animationDelay: '0.6s' }}></span>
            </div>
          </div>
        </div>

        {/* Adults Path */}
        <div 
          className="pathway-card rune-border rounded-3xl p-8 md:p-12 text-center magical-hover group cursor-pointer"
          onClick={() => handlePathwaySelect('adults')}
        >
          {/* Mystical night sky with constellation patterns */}
          <div className="mb-8 relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Starry night sky with constellation patterns" 
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-galactic-indigo/40"></div>
            <div className="absolute top-4 right-4 text-soft-gold text-2xl">🕯️</div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-amethyst tracking-wide">
              🔸 Path of the Returning Soul
            </h3>
            <p className="font-cinzel text-lg text-silver-mist tracking-wider">
              Adults Journey
            </p>
            <p className="font-garamond text-silver-mist/90 leading-relaxed">
              A deeper twilight path for mature souls ready to remember their cosmic origins. Through ancestral wisdom, sacred rites, and mystical practices, awaken to your eternal nature and divine purpose.
            </p>
            
            {/* Floating candles visualization */}
            <div className="flex justify-center space-x-4 mt-6">
              <div className="w-2 h-6 bg-soft-gold rounded-full opacity-80 animate-pulse"></div>
              <div className="w-2 h-8 bg-soft-gold rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-6 bg-soft-gold rounded-full opacity-90 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Return to Portal */}
      <div className="mt-16">
        <button 
          className="font-cinzel text-lg magical-hover golden-underline text-silver-mist/80"
          onClick={onReturn}
        >
          ← Return to Portal
        </button>
      </div>
    </section>
  );
}
