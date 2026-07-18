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
      <div className="flex items-center justify-between px-6 md:px-10 py-2 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-4 cursor-pointer group">
          <div className="flex items-center justify-center">
            <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1784402639/ChatGPT_Image_Jul_19_2026_12_53_43_AM_or9gil.png" alt="Goel Brothers Logo" className="h-16 md:h-[72px] w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold leading-tight uppercase tracking-widest font-heading mt-1">
            Goel Brothers
          </h2>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold uppercase tracking-widest ${linkClass}`}>Home</Link>
          <Link to="/process" className={`text-sm font-semibold uppercase tracking-widest ${linkClass}`}>Process</Link>
          <Link to="/collections" className={`text-sm font-semibold uppercase tracking-widest ${linkClass}`}>Collections</Link>
          <Link to="/quality" className={`text-sm font-semibold uppercase tracking-widest ${linkClass}`}>Quality</Link>
          <Link to="/contactus" className={`text-sm font-semibold uppercase tracking-widest ${linkClass}`}>Contact Us</Link>
        </div>

        <button className="lg:hidden flex items-center" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background-light text-background-dark shadow-lg border-t border-black/5 flex flex-col p-4 gap-4">
          <Link to="/" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Home</Link>
          <Link to="/process" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Process</Link>
          <Link to="/collections" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Collections</Link>
          <Link to="/quality" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Quality</Link>
          <Link to="/contactus" onClick={toggleMenu} className="text-sm font-semibold uppercase tracking-widest hover:text-primary">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
