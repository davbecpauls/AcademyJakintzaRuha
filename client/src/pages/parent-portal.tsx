import { useState } from "react";
import { Link } from "wouter";
import StarfieldBackground from "@/components/starfield-background";
import Navigation from "@/components/navigation";

interface Child {
  id: string;
  name: string;
  age: number;
  currentRealm: number;
  realmProgress: number;
  totalModulesCompleted: number;
  favoriteElement: string;
  journalEntries: number;
  lastActivity: string;
  avatar: string;
}

// Mock data for demonstration
const mockChildren: Child[] = [
  {
    id: '1',
    name: 'Luna',
    age: 8,
    currentRealm: 2,
    realmProgress: 65,
    totalModulesCompleted: 18,
    favoriteElement: 'Water',
    journalEntries: 12,
    lastActivity: '2 hours ago',
    avatar: '🌙'
  },
  {
    id: '2', 
    name: 'Orion',
    age: 11,
    currentRealm: 4,
    realmProgress: 40,
    totalModulesCompleted: 31,
    favoriteElement: 'Air',
    journalEntries: 25,
    lastActivity: 'Yesterday',
    avatar: '⭐'
  }
];

const realmNames = [
  '', // 0 index placeholder
  'Realm of Origins',
  'Realm of Awakening', 
  'Realm of Expression',
  'Realm of Connection',
  'Realm of Transformation',
  'Realm of Wisdom',
  'Realm of the Ascendants'
];

export default function ParentPortal() {
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'journal' | 'calendar'>('overview');

  const getRealmColor = (realmNumber: number) => {
    const colors = [
      '',
      'text-green-400',    // Origins
      'text-blue-400',     // Awakening
      'text-red-400',      // Expression
      'text-purple-400',   // Connection
      'text-amethyst',     // Transformation
      'text-silver-mist',  // Wisdom
      'text-soft-gold'     // Ascendants
    ];
    return colors[realmNumber] || 'text-silver-mist';
  };

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
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ritual-rose via-spirit-blue to-soft-gold tracking-wider">
            👪 Parent Portal
          </h1>
          <h2 className="font-cinzel text-2xl md:text-3xl text-silver-mist tracking-widest mb-4">
            Sacred Family Connection
          </h2>
          <p className="font-garamond text-lg md:text-xl text-silver-mist/80 max-w-3xl mx-auto leading-relaxed">
            Follow your child's mystical journey through the 7 Realms, witness their spiritual growth, and celebrate their magical discoveries.
          </p>
        </div>

        {!selectedChild ? (
          /* Child Selection */
          <div className="max-w-4xl mx-auto">
            <h3 className="font-cinzel text-2xl font-bold text-soft-gold mb-8 text-center">
              Select Your Young Soul
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {mockChildren.map((child) => (
                <div 
                  key={child.id}
                  className="rune-border rounded-3xl p-8 text-center magical-hover cursor-pointer group"
                  onClick={() => setSelectedChild(child)}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {child.avatar}
                  </div>
                  <h4 className="font-cinzel text-2xl font-bold text-spirit-blue mb-2">
                    {child.name}
                  </h4>
                  <p className="font-garamond text-silver-mist/80 mb-4">
                    Age {child.age} • Currently in {realmNames[child.currentRealm]}
                  </p>
                  
                  {/* Quick Progress */}
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-silver-mist/70 mb-1">Realm Progress</div>
                      <div className="w-full bg-galactic-indigo rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getRealmColor(child.currentRealm).replace('text-', 'bg-')}`}
                          style={{ width: `${child.realmProgress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-soft-gold mt-1">{child.realmProgress}% Complete</div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-silver-mist/70">Modules: {child.totalModulesCompleted}</span>
                      <span className="text-silver-mist/70">Last Active: {child.lastActivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Child */}
            <div className="text-center">
              <button className="rune-border rounded-2xl px-8 py-4 font-cinzel text-lg font-bold text-amethyst magical-hover">
                + Enroll Another Young Soul
              </button>
            </div>
          </div>
        ) : (
          /* Child Dashboard */
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={() => setSelectedChild(null)}
              className="font-cinzel text-lg magical-hover golden-underline mb-8 inline-block"
            >
              ← Back to Children
            </button>

            {/* Child Header */}
            <div className="rune-border rounded-3xl p-8 mb-8 text-center">
              <div className="text-8xl mb-4">{selectedChild.avatar}</div>
              <h2 className="font-cinzel text-4xl font-bold text-spirit-blue mb-2">{selectedChild.name}</h2>
              <p className="font-garamond text-xl text-silver-mist/80 mb-4">
                Age {selectedChild.age} • Exploring {realmNames[selectedChild.currentRealm]}
              </p>
              <div className="text-soft-gold font-semibold">
                Favorite Element: {selectedChild.favoriteElement} ✨
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center space-x-4 mb-12">
              {[
                { id: 'overview', name: 'Overview', icon: '🌟' },
                { id: 'progress', name: 'Progress', icon: '📈' },
                { id: 'journal', name: 'Journal', icon: '📖' },
                { id: 'calendar', name: 'Calendar', icon: '📅' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`rune-border rounded-2xl px-6 py-3 font-cinzel text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-amethyst/20 text-amethyst border-amethyst'
                      : 'text-silver-mist magical-hover'
                  }`}
                >
                  {tab.icon} {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="rune-border rounded-3xl p-6 text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="font-cinzel text-lg font-bold text-amethyst mb-2">Current Achievement</h4>
                  <p className="font-garamond text-silver-mist/90 text-sm">
                    {selectedChild.realmProgress}% through {realmNames[selectedChild.currentRealm]}
                  </p>
                </div>
                
                <div className="rune-border rounded-3xl p-6 text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <h4 className="font-cinzel text-lg font-bold text-spirit-blue mb-2">Modules Completed</h4>
                  <p className="font-garamond text-silver-mist/90 text-sm">
                    {selectedChild.totalModulesCompleted} sacred lessons mastered
                  </p>
                </div>
                
                <div className="rune-border rounded-3xl p-6 text-center">
                  <div className="text-4xl mb-3">📖</div>
                  <h4 className="font-cinzel text-lg font-bold text-soft-gold mb-2">Journal Entries</h4>
                  <p className="font-garamond text-silver-mist/90 text-sm">
                    {selectedChild.journalEntries} magical reflections recorded
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-8">
                {/* Realm Progress */}
                <div className="rune-border rounded-3xl p-8">
                  <h3 className="font-cinzel text-2xl font-bold text-soft-gold mb-6 text-center">
                    Realm Journey Progress
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {realmNames.slice(1).map((realm, index) => {
                      const realmNumber = index + 1;
                      const isCompleted = realmNumber < selectedChild.currentRealm;
                      const isCurrent = realmNumber === selectedChild.currentRealm;
                      const progress = isCurrent ? selectedChild.realmProgress : (isCompleted ? 100 : 0);
                      
                      return (
                        <div key={realmNumber} className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            isCompleted ? 'bg-soft-gold text-galactic-indigo' :
                            isCurrent ? 'bg-amethyst text-white' :
                            'bg-galactic-indigo text-silver-mist/50'
                          }`}>
                            {realmNumber}
                          </div>
                          <div className="flex-1">
                            <div className={`font-cinzel text-sm ${getRealmColor(realmNumber)}`}>{realm}</div>
                            <div className="w-full bg-galactic-indigo rounded-full h-2 mt-1">
                              <div 
                                className={`h-2 rounded-full ${
                                  isCompleted ? 'bg-soft-gold' :
                                  isCurrent ? 'bg-amethyst' : 'bg-galactic-indigo'
                                }`}
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'journal' && (
              <div className="rune-border rounded-3xl p-8 text-center">
                <div className="text-6xl mb-6">📖</div>
                <h3 className="font-cinzel text-2xl font-bold text-amethyst mb-4">
                  {selectedChild.name}'s Sacred Journal
                </h3>
                <p className="font-garamond text-silver-mist/90 mb-8 leading-relaxed">
                  Your child has written {selectedChild.journalEntries} beautiful reflections about their magical journey. 
                  Journal entries are private sacred spaces, but you can see when new entries are added.
                </p>
                <div className="space-y-4">
                  <div className="text-left max-w-md mx-auto space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-silver-mist/70">Latest Entry:</span>
                      <span className="text-soft-gold">Yesterday</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-silver-mist/70">This Week:</span>
                      <span className="text-spirit-blue">3 new entries</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-silver-mist/70">Total Entries:</span>
                      <span className="text-amethyst">{selectedChild.journalEntries}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="rune-border rounded-3xl p-8 text-center">
                <div className="text-6xl mb-6">📅</div>
                <h3 className="font-cinzel text-2xl font-bold text-soft-gold mb-4">
                  Sacred Calendar & Ceremonies
                </h3>
                <p className="font-garamond text-silver-mist/90 mb-8 leading-relaxed">
                  Upcoming rituals, celebrations, and special academy events for {selectedChild.name}.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="rune-border rounded-2xl p-4">
                    <div className="text-spirit-blue font-semibold mb-2">🌙 Moon Circle Ceremony</div>
                    <div className="text-sm text-silver-mist/70">Next Friday, 7:00 PM</div>
                    <div className="text-xs text-silver-mist/60 mt-1">Monthly celebration for Realm 2 students</div>
                  </div>
                  
                  <div className="rune-border rounded-2xl p-4">
                    <div className="text-amethyst font-semibold mb-2">✨ Elemental Workshop</div>
                    <div className="text-sm text-silver-mist/70">Next Monday, 4:00 PM</div>
                    <div className="text-xs text-silver-mist/60 mt-1">Water element deep dive session</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}