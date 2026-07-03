import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background-dark pt-20 pb-8 border-t border-primary/20 mt-auto text-text-inverse">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand & CTA */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-heading font-bold text-primary uppercase tracking-widest">Goel Brothers</h2>
            <div className="flex flex-col gap-3">
              <Link to="/contactus" className="inline-block text-center border border-white text-white hover:bg-white hover:text-background-dark transition-colors px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-transparent">
                Contact Sales
              </Link>
              <Link to="/collections" className="inline-block text-center border border-white text-white hover:bg-white hover:text-background-dark transition-colors px-6 py-3 text-xs font-semibold uppercase tracking-widest bg-transparent">
                View Collections
              </Link>
            </div>
          </div>

          {/* Corporate Links */}
          <div className="flex flex-col gap-4 lg:ml-auto">
            <h3 className="font-ui font-semibold text-xs uppercase tracking-widest text-primary mb-2">Corporate</h3>
            <Link to="/#about-us" className="text-white/70 hover:text-white transition-colors text-sm font-medium">About Us</Link>
            <Link to="/process" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Our Process</Link>
            <Link to="/quality" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Quality Assurance</Link>
            <Link to="/contactus" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Reach Us</Link>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4 lg:ml-auto">
            <h3 className="font-ui font-semibold text-xs uppercase tracking-widest text-primary mb-2">Offerings</h3>
            <Link to="/collections" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Collections</Link>
            <Link to="/collections" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Jute Sacks (50kg)</Link>
            <Link to="/collections" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Bulk Wholesale</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 lg:text-right lg:ml-auto">
            <a href="tel:8004061663" className="text-3xl md:text-4xl font-Arial font-semibold text-white hover:text-primary transition-colors">
              800 406 1663
            </a>
            <a href="mailto:contact@goelbrothers.com" className="text-white/90 hover:text-primary transition-colors text-sm font-medium mb-4">
              goelbrothersbkg@gmail.com
            </a>

            <div className="flex items-center gap-4 lg:justify-end mt-2">
              {/* Social Icons using Material Symbols */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-lg">language</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-xs uppercase tracking-widest mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Goel Brothers</span>
            <span className="opacity-50 hidden sm:inline">|</span>
            <span className="material-symbols-outlined text-sm text-primary hidden sm:inline">eco</span>
            <span className="opacity-50 hidden sm:inline">|</span>
            <span>A Heritage of Perfection</span>
          </div>


        </div>
      </div>
    </footer>
  );
}
