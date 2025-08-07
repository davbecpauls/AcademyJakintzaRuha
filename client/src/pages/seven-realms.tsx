import { useState } from "react";
import { Link } from "wouter";
import StarfieldBackground from "@/components/starfield-background";
import Navigation from "@/components/navigation";

interface Realm {
  id: number;
  name: string;
  element: string;
  description: string;
  icon: string;
  color: string;
  semesters: {
    semester1: { name: string; modules: number; };
    semester2: { name: string; modules: number; };
  };
}

const realms: Realm[] = [
  {
    id: 1,
    name: "Realm of Origins",
    element: "Earth",
    description: "Where young souls discover their roots and connection to the natural world",
    icon: "🌱",
    color: "text-green-400",
    semesters: {
      semester1: { name: "Seeds of Wonder", modules: 15 },
      semester2: { name: "Growing Wisdom", modules: 15 }
    }
  },
  {
    id: 2,
    name: "Realm of Awakening", 
    element: "Water",
    description: "Flowing into emotional awareness and intuitive gifts",
    icon: "🌊",
    color: "text-blue-400",
    semesters: {
      semester1: { name: "Flowing Dreams", modules: 15 },
      semester2: { name: "Deep Currents", modules: 15 }
    }
  },
  {
    id: 3,
    name: "Realm of Expression",
    element: "Fire", 
    description: "Igniting creativity and personal power through sacred arts",
    icon: "🔥",
    color: "text-red-400",
    semesters: {
      semester1: { name: "Spark of Creation", modules: 15 },
      semester2: { name: "Sacred Flames", modules: 15 }
    }
  },
  {
    id: 4,
    name: "Realm of Connection",
    element: "Air",
    description: "Learning communication, friendship, and community wisdom",
    icon: "💨",
    color: "text-purple-400",
    semesters: {
      semester1: { name: "Whispered Secrets", modules: 15 },
      semester2: { name: "Winds of Unity", modules: 15 }
    }
  },
  {
    id: 5,
    name: "Realm of Transformation",
    element: "Spirit",
    description: "Discovering inner strength and the power to change and grow",
    icon: "✨",
    color: "text-amethyst",
    semesters: {
      semester1: { name: "Inner Alchemy", modules: 15 },
      semester2: { name: "Sacred Metamorphosis", modules: 15 }
    }
  },
  {
    id: 6,
    name: "Realm of Wisdom",
    element: "Void",
    description: "Connecting with ancient knowledge and universal truths",
    icon: "🔮",
    color: "text-silver-mist",
    semesters: {
      semester1: { name: "Ancient Echoes", modules: 15 },
      semester2: { name: "Cosmic Knowing", modules: 15 }
    }
  },
  {
    id: 7,
    name: "Realm of the Ascendants",
    element: "Light",
    description: "Mastering gifts and preparing to guide others on their journey",
    icon: "👑",
    color: "text-soft-gold",
    semesters: {
      semester1: { name: "Crown of Stars", modules: 15 },
      semester2: { name: "Guardians Rising", modules: 15 }
    }
  }
];

export default function SevenRealms() {
  const [selectedRealm, setSelectedRealm] = useState<Realm | null>(null);
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <div className="font-garamond text-silver-mist overflow-x-hidden">
      <StarfieldBackground />
      <Navigation onAboutClick={() => setShowAboutModal(true)} />
      
      <div className="relative z-10 min-h-screen pt-24 px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <Link href="/" className="font-cinzel text-lg magical-hover golden-underline mb-8 inline-block">
            ← Return to Academy Gateway
          </Link>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-soft-gold via-spirit-blue to-amethyst tracking-wider">
            🔹 The 7 Realms
          </h1>
          <h2 className="font-cinzel text-2xl md:text-3xl text-silver-mist tracking-widest mb-4">
            Children's Sacred Journey
          </h2>
          <p className="font-garamond text-lg md:text-xl text-silver-mist/80 max-w-3xl mx-auto leading-relaxed">
            A magical path through elemental wisdom where young souls discover their gifts, connect with nature's mysteries, and learn through sacred play and storytelling.
          </p>
        </div>

        {/* Realm Selection Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {realms.map((realm, index) => (
              <div 
                key={realm.id}
                className="rune-border rounded-3xl p-6 md:p-8 text-center magical-hover cursor-pointer group"
                onClick={() => setSelectedRealm(realm)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {realm.icon}
                </div>
                <h3 className={`font-cinzel text-xl md:text-2xl font-bold mb-2 tracking-wide ${realm.color}`}>
                  Realm {realm.id}
                </h3>
                <h4 className="font-cinzel text-lg text-silver-mist mb-3 tracking-wider">
                  {realm.name}
                </h4>
                <div className="text-sm text-soft-gold font-semibold mb-3">
                  Element: {realm.element}
                </div>
                <p className="font-garamond text-silver-mist/90 text-sm leading-relaxed">
                  {realm.description}
                </p>
                
                {/* Progress indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  <span className="w-2 h-2 rounded-full bg-silver-mist/30"></span>
                  <span className="w-2 h-2 rounded-full bg-silver-mist/30"></span>
                  <span className="w-2 h-2 rounded-full bg-silver-mist/30"></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Realm Detail Modal */}
        {selectedRealm && (
          <div className="fixed inset-0 z-50 modal-backdrop" onClick={() => setSelectedRealm(null)}>
            <div className="min-h-screen flex items-center justify-center p-6">
              <div 
                className="rune-border rounded-3xl max-w-4xl w-full p-8 md:p-12 relative" 
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 text-silver-mist text-3xl magical-hover"
                  onClick={() => setSelectedRealm(null)}
                >
                  ×
                </button>
                
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{selectedRealm.icon}</div>
                  <h2 className={`font-cinzel text-3xl md:text-4xl font-bold mb-2 tracking-wider ${selectedRealm.color}`}>
                    {selectedRealm.name}
                  </h2>
                  <p className="font-garamond text-xl text-silver-mist/90 leading-relaxed mb-6">
                    {selectedRealm.description}
                  </p>
                  <div className="text-soft-gold font-semibold text-lg">
                    Sacred Element: {selectedRealm.element}
                  </div>
                </div>

                {/* Semester Structure */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="rune-border rounded-2xl p-6 text-center">
                    <h3 className="font-cinzel text-xl font-bold text-spirit-blue mb-4">
                      Semester 1
                    </h3>
                    <h4 className="font-cinzel text-lg text-silver-mist mb-3">
                      {selectedRealm.semesters.semester1.name}
                    </h4>
                    <p className="text-soft-gold font-semibold mb-4">
                      {selectedRealm.semesters.semester1.modules} Modules
                    </p>
                    <div className="space-y-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="w-full h-2 bg-galactic-indigo rounded-full">
                          <div className="w-0 h-full bg-gradient-to-r from-spirit-blue to-amethyst rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rune-border rounded-2xl p-6 text-center">
                    <h3 className="font-cinzel text-xl font-bold text-amethyst mb-4">
                      Semester 2
                    </h3>
                    <h4 className="font-cinzel text-lg text-silver-mist mb-3">
                      {selectedRealm.semesters.semester2.name}
                    </h4>
                    <p className="text-soft-gold font-semibold mb-4">
                      {selectedRealm.semesters.semester2.modules} Modules
                    </p>
                    <div className="space-y-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="w-full h-2 bg-galactic-indigo rounded-full">
                          <div className="w-0 h-full bg-gradient-to-r from-amethyst to-soft-gold rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="rune-border rounded-2xl px-8 py-4 font-cinzel text-lg font-bold text-soft-gold magical-hover">
                    Begin Journey in This Realm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}