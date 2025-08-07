import { useState } from "react";
import { Link } from "wouter";
import StarfieldBackground from "@/components/starfield-background";
import Navigation from "@/components/navigation";

interface AdminTool {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'content' | 'users' | 'analytics' | 'settings';
}

const adminTools: AdminTool[] = [
  {
    id: 'lesson-manager',
    title: 'Lesson & Realm Manager',
    description: 'Create, edit, and organize learning modules across all 7 realms',
    icon: '📚',
    category: 'content'
  },
  {
    id: 'character-editor',
    title: 'Character & AI Editor',
    description: 'Configure Spirit Guide AI personalities and elemental mentors',
    icon: '🧬',
    category: 'content'
  },
  {
    id: 'permissions',
    title: 'Permissions & Tracking',
    description: 'Manage user roles, access levels, and learning progress',
    icon: '🔑',
    category: 'users'
  },
  {
    id: 'portal-builder',
    title: 'Visual Portal Builder',
    description: 'Customize the academy interface and mystical elements',
    icon: '🌀',
    category: 'settings'
  },
  {
    id: 'ritual-calendar',
    title: 'Ritual & Ceremony Calendar',
    description: 'Schedule sacred events, ceremonies, and group activities',
    icon: '🕯️',
    category: 'content'
  },
  {
    id: 'grimoire-templates',
    title: 'Grimoire Templates',
    description: 'Design templates for student personal grimoires',
    icon: '📖',
    category: 'content'
  },
  {
    id: 'analytics',
    title: 'Academy Analytics',
    description: 'Track engagement, progress, and spiritual awakening metrics',
    icon: '📊',
    category: 'analytics'
  },
  {
    id: 'content-library',
    title: 'Sacred Content Library',
    description: 'Manage images, audio, videos, and mystical resources',
    icon: '🗃️',
    category: 'content'
  }
];

export default function AdminDashboard() {
  const [selectedTool, setSelectedTool] = useState<AdminTool | null>(null);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Tools', icon: '⚡' },
    { id: 'content', name: 'Content', icon: '📚' },
    { id: 'users', name: 'Users', icon: '👥' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const filteredTools = activeCategory === 'all' 
    ? adminTools 
    : adminTools.filter(tool => tool.category === activeCategory);

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
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-soft-gold via-amethyst to-silver-mist tracking-wider">
            🔑 Admin Dashboard
          </h1>
          <h2 className="font-cinzel text-2xl md:text-3xl text-silver-mist tracking-widest mb-4">
            Sacred Academy Management
          </h2>
          <p className="font-garamond text-lg md:text-xl text-silver-mist/80 max-w-3xl mx-auto leading-relaxed">
            Tools for Keepers to manage the mystical learning experience, guide souls through their cosmic remembrance, and maintain the sacred academy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rune-border rounded-2xl px-6 py-3 font-cinzel text-sm font-bold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amethyst/20 text-amethyst border-amethyst'
                    : 'text-silver-mist magical-hover'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Admin Tools Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTools.map((tool, index) => (
              <div 
                key={tool.id}
                className="rune-border rounded-3xl p-6 text-center magical-hover cursor-pointer group"
                onClick={() => setSelectedTool(tool)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-amethyst mb-3 tracking-wide">
                  {tool.title}
                </h3>
                <p className="font-garamond text-silver-mist/90 text-sm leading-relaxed">
                  {tool.description}
                </p>
                
                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-block bg-galactic-indigo/50 text-soft-gold text-xs font-semibold px-3 py-1 rounded-full">
                    {tool.category.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="font-cinzel text-2xl font-bold text-soft-gold mb-8 text-center">
            Academy Overview
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="rune-border rounded-2xl p-6 text-center">
              <div className="text-3xl text-spirit-blue mb-2">127</div>
              <div className="font-cinzel text-sm text-silver-mist">Active Souls</div>
            </div>
            <div className="rune-border rounded-2xl p-6 text-center">
              <div className="text-3xl text-amethyst mb-2">45</div>
              <div className="font-cinzel text-sm text-silver-mist">Learning Modules</div>
            </div>
            <div className="rune-border rounded-2xl p-6 text-center">
              <div className="text-3xl text-soft-gold mb-2">7</div>
              <div className="font-cinzel text-sm text-silver-mist">Sacred Realms</div>
            </div>
            <div className="rune-border rounded-2xl p-6 text-center">
              <div className="text-3xl text-ritual-rose mb-2">89%</div>
              <div className="font-cinzel text-sm text-silver-mist">Awakening Rate</div>
            </div>
          </div>
        </div>

        {/* Tool Detail Modal */}
        {selectedTool && (
          <div className="fixed inset-0 z-50 modal-backdrop" onClick={() => setSelectedTool(null)}>
            <div className="min-h-screen flex items-center justify-center p-6">
              <div 
                className="rune-border rounded-3xl max-w-4xl w-full p-8 md:p-12 relative" 
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 text-silver-mist text-3xl magical-hover"
                  onClick={() => setSelectedTool(null)}
                >
                  ×
                </button>
                
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{selectedTool.icon}</div>
                  <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-amethyst tracking-wider">
                    {selectedTool.title}
                  </h2>
                  <p className="font-garamond text-xl text-silver-mist/90 leading-relaxed mb-6">
                    {selectedTool.description}
                  </p>
                  <div className="inline-block bg-galactic-indigo/50 text-soft-gold text-sm font-semibold px-4 py-2 rounded-full mb-8">
                    {selectedTool.category.toUpperCase()} TOOL
                  </div>
                </div>

                {/* Tool-specific interface preview */}
                <div className="rune-border rounded-2xl p-6 mb-8">
                  <h3 className="font-cinzel text-xl font-bold text-silver-mist mb-4 text-center">
                    Tool Interface Preview
                  </h3>
                  <div className="bg-galactic-indigo/30 rounded-xl p-8 text-center">
                    <p className="font-garamond text-silver-mist/80 italic">
                      Advanced {selectedTool.title} interface would be implemented here with full CRUD operations, 
                      mystical UI elements, and sacred workflow management.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <button className="rune-border rounded-2xl px-8 py-4 font-cinzel text-lg font-bold text-soft-gold magical-hover">
                    Launch {selectedTool.title}
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