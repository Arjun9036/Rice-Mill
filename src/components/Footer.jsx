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
              <a href="/" title="Website" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-lg">language</span>
              </a>
              <a href="https://www.google.com/maps/place/Goel+brothers+Rice+mill/@28.1620643,80.4187755,17z/data=!3m1!4b1!4m6!3m5!1s0x399f679dc07028ab:0xf03d3488db24773f!8m2!3d28.1620597!4d80.4236464!16s%2Fg%2F11j20y0rdx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" title="Google Maps" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-lg">location_on</span>
              </a>
              <a href="https://wa.me/918004061663" target="_blank" rel="noreferrer" title="WhatsApp" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.124.553 4.195 1.605 6.012L.266 23.364l5.44-1.428A11.96 11.96 0 0012.031 24c6.646 0 12.035-5.388 12.035-12.035C24.066 5.388 18.677 0 12.031 0zm0 22.012c-1.802 0-3.565-.483-5.112-1.401l-.367-.217-3.799.997.997-3.71-.237-.378A10.021 10.021 0 011.989 12.035c0-5.549 4.512-10.061 10.042-10.061 5.548 0 10.06 4.512 10.06 10.061s-4.512 10.042-10.06 10.042zm5.516-7.534c-.302-.151-1.791-.885-2.069-.986-.277-.101-.479-.151-.681.151-.202.302-.782.986-.958 1.188-.176.202-.353.227-.655.076-2.019-1.011-3.486-2.584-4.226-3.876-.101-.176-.01-.27.066-.346.068-.068.151-.176.227-.277.076-.101.101-.176.151-.277.05-.101.025-.202-.025-.277-.05-.076-.681-1.638-.933-2.243-.245-.589-.494-.509-.681-.518-.176-.008-.378-.01-.58-.01-.202 0-.529.076-.807.378-.277.302-1.059 1.034-1.059 2.518 0 1.485 1.084 2.921 1.235 3.123.151.202 2.119 3.232 5.132 4.53 1.956.84 2.656.758 3.16.685.603-.087 1.791-.733 2.043-1.442.252-.71.252-1.314.176-1.442-.076-.126-.277-.202-.579-.353z" /></svg>
              </a>
              <a href="mailto:goelbrothersbkg@gmail.com" title="Email Us" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <button title="Share" onClick={(e) => { e.preventDefault(); navigator.share && navigator.share({ title: 'Goel Brothers', url: window.location.href }); }} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-background-dark transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
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
