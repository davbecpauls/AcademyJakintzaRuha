export default function ComingSoonFeatures() {
  const features = [
    {
      icon: "🪄",
      title: "Advanced Degrees",
      description: "Deeper mastery paths for advanced practitioners",
      delay: "0s"
    },
    {
      icon: "🪞",
      title: "Mirrors of the Soul",
      description: "Expansion modules for inner reflection",
      delay: "0.5s"
    },
    {
      icon: "🌱",
      title: "Grimoire Library",
      description: "Sacred texts and mystical resources",
      delay: "1s"
    },
    {
      icon: "🧬",
      title: "Community Spaces",
      description: "Gathering circles for shared wisdom",
      delay: "1.5s"
    },
    {
      icon: "🧭",
      title: "Pilgrimage Maps",
      description: "Sacred journeys and labyrinth rites",
      delay: "2s"
    },
    {
      icon: "🎭",
      title: "Ritual Theatre",
      description: "Sacred ceremonies and celebrations",
      delay: "2.5s"
    }
  ];

  return (
    <section className="py-24 px-6 fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-soft-gold mb-16 tracking-wider">
          ✨ Manifesting Into Being ✨
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="coming-soon-pulse rune-border rounded-2xl p-6 text-center"
              style={{ animationDelay: feature.delay }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-cinzel text-xl font-bold text-amethyst mb-2">{feature.title}</h3>
              <p className="font-garamond text-silver-mist/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
