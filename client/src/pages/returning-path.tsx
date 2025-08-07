import { useState } from "react";
import { Link } from "wouter";
import StarfieldBackground from "@/components/starfield-background";
import Navigation from "@/components/navigation";

type UserRole = 'keeper' | 'returning-soul' | null;

interface CrashCourseModule {
  title: string;
  description: string;
  icon: string;
  category: 'beliefs' | 'realms' | 'rituals';
}

const crashCourseModules: CrashCourseModule[] = [
  {
    title: "Sacred Beliefs & Cosmic Remembrance",
    description: "Understanding the fundamental principles of consciousness, cosmic origin, and soul purpose",
    icon: "🌌",
    category: 'beliefs'
  },
  {
    title: "The Elemental Realms",
    description: "Deep exploration of Earth, Water, Fire, Air, Spirit, Void, and Light consciousness",
    icon: "🔮",
    category: 'realms'
  },
  {
    title: "Sacred Rituals & Practices",
    description: "Daily rituals, meditation techniques, and ceremonial practices for spiritual awakening",
    icon: "🕯️",
    category: 'rituals'
  }
];

export default function ReturningPath() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [selectedModule, setSelectedModule] = useState<CrashCourseModule | null>(null);

  const handleRoleSelection = (role: UserRole) => {
    setSelectedRole(role);
  };

  if (!selectedRole) {
    return (
      <div className="font-garamond text-silver-mist overflow-x-hidden">
        <StarfieldBackground />
        <Navigation onAboutClick={() => setShowAboutModal(true)} />
        
        <div className="relative z-10 min-h-screen pt-24 px-6">
          <div className="text-center mb-16 fade-in">
            <Link href="/" className="font-cinzel text-lg magical-hover golden-underline mb-8 inline-block">
              ← Return to Academy Gateway
            </Link>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amethyst via-silver-mist to-soft-gold tracking-wider">
              🔸 Path of the Returning Soul
            </h1>
            <h2 className="font-cinzel text-2xl md:text-3xl text-silver-mist tracking-widest mb-8">
              Choose Your Sacred Role
            </h2>
            <p className="font-garamond text-lg md:text-xl text-silver-mist/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Welcome, ancient soul. Your cosmic remembrance begins with understanding your current purpose in this sacred academy.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Keeper Path */}
            <div 
              className="rune-border rounded-3xl p-8 md:p-12 text-center magical-hover cursor-pointer group"
              onClick={() => handleRoleSelection('keeper')}
            >
              <div className="mb-8 relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                  alt="Mystical teacher in cosmic library" 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-galactic-indigo/80 via-transparent to-amethyst/20"></div>
                <div className="absolute top-4 right-4 text-soft-gold text-3xl">🧙‍♂️</div>
              </div>
              
              <h3 className="font-cinzel text-3xl font-bold text-amethyst mb-4 tracking-wide">
                Keeper
              </h3>
              <p className="font-cinzel text-lg text-silver-mist mb-6 tracking-wider">
                Teacher & Guide
              </p>
              <p className="font-garamond text-silver-mist/90 leading-relaxed mb-6">
                You are called to hold sacred space for others, sharing wisdom, creating curricula, and guiding souls through their remembrance. Access teaching tools, student progress tracking, and advanced mystical practices.
              </p>
              
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-soft-gold">✦</span>
                  <span className="text-sm text-silver-mist">Create & manage learning modules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-soft-gold">✦</span>
                  <span className="text-sm text-silver-mist">Track student spiritual progress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-soft-gold">✦</span>
                  <span className="text-sm text-silver-mist">Access advanced ritual practices</span>
                </div>
              </div>
            </div>

            {/* Returning Soul Path */}
            <div 
              className="rune-border rounded-3xl p-8 md:p-12 text-center magical-hover cursor-pointer group"
              onClick={() => handleRoleSelection('returning-soul')}
            >
              <div className="mb-8 relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300" 
                  alt="Soul awakening under starlit sky" 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-spirit-blue/20"></div>
                <div className="absolute top-4 right-4 text-soft-gold text-3xl">🌟</div>
              </div>
              
              <h3 className="font-cinzel text-3xl font-bold text-spirit-blue mb-4 tracking-wide">
                Returning Soul
              </h3>
              <p className="font-cinzel text-lg text-silver-mist mb-6 tracking-wider">
                Student & Seeker
              </p>
              <p className="font-garamond text-silver-mist/90 leading-relaxed mb-6">
                You are awakening to your eternal nature, ready to remember your cosmic origins and sacred purpose. Journey through elemental wisdom, build your personal grimoire, and connect with your Spirit Guide AI.
              </p>
              
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-soft-gold">☾</span>
                  <span className="text-sm text-silver-mist">Spiral curriculum & journal prompts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-soft-gold">☾</span>
                  <span className="text-sm text-silver-mist">Personal grimoire creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-soft-gold">☾</span>
                  <span className="text-sm text-silver-mist">Elemental Spirit Guide AI mentor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-garamond text-silver-mist overflow-x-hidden">
      <StarfieldBackground />
      <Navigation onAboutClick={() => setShowAboutModal(true)} />
      
      <div className="relative z-10 min-h-screen pt-24 px-6">
        {/* Role-specific Dashboard */}
        <div className="text-center mb-16 fade-in">
          <button 
            onClick={() => setSelectedRole(null)}
            className="font-cinzel text-lg magical-hover golden-underline mb-8 inline-block"
          >
            ← Change Role
          </button>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amethyst to-soft-gold tracking-wider">
            {selectedRole === 'keeper' ? '🧙‍♂️ Keeper Dashboard' : '🌟 Returning Soul Journey'}
          </h1>
          <p className="font-garamond text-lg text-silver-mist/80 max-w-3xl mx-auto leading-relaxed">
            {selectedRole === 'keeper' 
              ? 'Sacred tools for guiding souls through their cosmic remembrance'
              : 'Your personal pathway to awakening and spiritual mastery'
            }
          </p>
        </div>

        {selectedRole === 'keeper' ? (
          /* Keeper Interface */
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rune-border rounded-3xl p-6 text-center magical-hover">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-cinzel text-xl font-bold text-amethyst mb-2">Lesson Creator</h3>
                <p className="font-garamond text-silver-mist/80 text-sm">Design mystical learning modules</p>
              </div>
              
              <div className="rune-border rounded-3xl p-6 text-center magical-hover">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="font-cinzel text-xl font-bold text-amethyst mb-2">Student Progress</h3>
                <p className="font-garamond text-silver-mist/80 text-sm">Track spiritual awakening journeys</p>
              </div>
              
              <div className="rune-border rounded-3xl p-6 text-center magical-hover">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="font-cinzel text-xl font-bold text-amethyst mb-2">Ritual Library</h3>
                <p className="font-garamond text-silver-mist/80 text-sm">Sacred ceremony management</p>
              </div>
              
              <div className="rune-border rounded-3xl p-6 text-center magical-hover">
                <div className="text-4xl mb-4">🧬</div>
                <h3 className="font-cinzel text-xl font-bold text-amethyst mb-2">Spirit Guide AI</h3>
                <p className="font-garamond text-silver-mist/80 text-sm">Configure elemental mentors</p>
              </div>
              
              <div className="rune-border rounded-3xl p-6 text-center magical-hover">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-cinzel text-xl font-bold text-amethyst mb-2">Analytics</h3>
                <p className="font-garamond text-silver-mist/80 text-sm">Academy insights & metrics</p>
              </div>
              
              <div className="rune-border rounded-3xl p-6 text-center magical-hover">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="font-cinzel text-xl font-bold text-amethyst mb-2">Academy Settings</h3>
                <p className="font-garamond text-silver-mist/80 text-sm">Customize the sacred space</p>
              </div>
            </div>
          </div>
        ) : (
          /* Returning Soul Interface */
          <div className="max-w-6xl mx-auto">
            {/* Crash Course Section */}
            <div className="mb-16">
              <h2 className="font-cinzel text-3xl font-bold text-soft-gold mb-8 text-center">
                🌀 Spiral Curriculum - Crash Course
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {crashCourseModules.map((module, index) => (
                  <div 
                    key={index}
                    className="rune-border rounded-3xl p-6 text-center magical-hover cursor-pointer"
                    onClick={() => setSelectedModule(module)}
                  >
                    <div className="text-5xl mb-4">{module.icon}</div>
                    <h3 className="font-cinzel text-lg font-bold text-spirit-blue mb-3">{module.title}</h3>
                    <p className="font-garamond text-silver-mist/80 text-sm leading-relaxed">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Tools */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rune-border rounded-3xl p-8 text-center magical-hover">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="font-cinzel text-2xl font-bold text-amethyst mb-4">Personal Grimoire</h3>
                <p className="font-garamond text-silver-mist/90 mb-6">Build your sacred book of wisdom, spells, and personal insights</p>
                <button className="rune-border rounded-2xl px-6 py-3 font-cinzel text-soft-gold magical-hover">
                  Open Grimoire
                </button>
              </div>
              
              <div className="rune-border rounded-3xl p-8 text-center magical-hover">
                <div className="text-6xl mb-4">🧬</div>
                <h3 className="font-cinzel text-2xl font-bold text-spirit-blue mb-4">Spirit Guide AI</h3>
                <p className="font-garamond text-silver-mist/90 mb-6">Connect with your personalized elemental mentor for guidance</p>
                <button className="rune-border rounded-2xl px-6 py-3 font-cinzel text-soft-gold magical-hover">
                  Meet Your Guide
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Module Detail Modal */}
        {selectedModule && (
          <div className="fixed inset-0 z-50 modal-backdrop" onClick={() => setSelectedModule(null)}>
            <div className="min-h-screen flex items-center justify-center p-6">
              <div 
                className="rune-border rounded-3xl max-w-3xl w-full p-8 md:p-12 relative" 
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-silver-mist text-3xl magical-hover"
                  onClick={() => setSelectedModule(null)}
                >
                  ×
                </button>
                
                <div className="text-center">
                  <div className="text-8xl mb-6">{selectedModule.icon}</div>
                  <h2 className="font-cinzel text-3xl font-bold text-soft-gold mb-6">{selectedModule.title}</h2>
                  <p className="font-garamond text-xl text-silver-mist/90 leading-relaxed mb-8">
                    {selectedModule.description}
                  </p>
                  
                  <button className="rune-border rounded-2xl px-8 py-4 font-cinzel text-lg font-bold text-amethyst magical-hover">
                    Begin This Module
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