interface NavigationProps {
  onAboutClick: () => void;
}

export default function Navigation({ onAboutClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          <a href="#" className="font-cinzel text-lg magical-hover golden-underline">
            🌌 Home
          </a>
          <button 
            className="font-cinzel text-lg magical-hover golden-underline"
            onClick={onAboutClick}
          >
            📜 About the Academy
          </button>
          <a href="#" className="font-cinzel text-lg magical-hover golden-underline hidden">
            🔑 Admin Dashboard
          </a>
        </div>
        <div>
          <a href="#" className="font-cinzel text-lg magical-hover golden-underline">
            👪 Parent Portal
          </a>
        </div>
      </div>
    </nav>
  );
}
