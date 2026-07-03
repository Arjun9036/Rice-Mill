import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, the header is always "scrolled" (solid background)
  const headerClass = (isHome && !isScrolled)
    ? 'bg-transparent text-text-inverse drop-shadow-sm'
    : 'bg-background-light text-background-dark border-b border-black/5 shadow-sm';

  const linkClass = (isHome && !isScrolled)
    ? 'text-text-inverse hover:text-primary transition-colors'
    : 'text-background-dark hover:text-primary transition-colors';

  const logoIconClass = (isHome && !isScrolled) ? 'text-primary' : 'text-primary'; // always primary

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex items-center justify-center">
            <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782990182/Untitled_-_02_July_2026_at_16.32.05_zlk7zu.png" alt="Goel Brothers Logo" className="h-16 w-auto object-contain" />
          </div>
          <h2 className="text-lg font-bold leading-tight uppercase tracking-widest font-heading mt-1">
            Goel Brothers
          </h2>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-xs font-semibold uppercase tracking-widest ${linkClass}`}>Home</Link>
          <Link to="/process" className={`text-xs font-semibold uppercase tracking-widest ${linkClass}`}>Process</Link>
          <Link to="/collections" className={`text-xs font-semibold uppercase tracking-widest ${linkClass}`}>Collections</Link>
          <Link to="/quality" className={`text-xs font-semibold uppercase tracking-widest ${linkClass}`}>Quality</Link>
          <Link to="/contactus" className={`text-xs font-semibold uppercase tracking-widest ${linkClass}`}>Contact Us</Link>
        </div>

        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light text-background-dark shadow-lg border-t border-black/5 flex flex-col p-4 gap-4">
          <Link to="/" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">The Heritage</Link>
          <Link to="/process" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Process</Link>
          <Link to="/collections" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Collections</Link>
          <Link to="/quality" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Quality</Link>
          <Link to="/about" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">About Us</Link>
          <Link to="/contactus" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
