import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      parallaxBgs.forEach(bg => {
        const speed = 0.5;
        const parent = bg.parentElement;
        if (parent) {
          const parentOffset = parent.offsetTop;
          const yPos = (scrolled - parentOffset) * speed;
          bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-end parallax-wrapper overflow-hidden bg-background-dark pt-32 pb-12">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782988891/Rice_mill_main_pvqmd5.jpg"
          alt="Goel Brothers Rice Mill Interior"
          className="parallax-bg object-cover w-full h-[140%] absolute top-[-20%] left-0 z-0"
        />

        {/* Main Hero Content */}
        <div className="relative z-20 w-full px-6 md:px-12 max-w-[1440px] mx-auto flex-grow flex flex-col justify-center">
          <div className="max-w-2xl text-left">
            <h1 className="text-white text-5xl md:text-7xl font-heading font-semibold leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
              From Our Mill <br /> To Your Table
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-body leading-relaxed mb-10 drop-shadow-md max-w-lg">
              Premium quality rice, processed with care and advanced technology.
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center justify-center bg-[#c79c3d] hover:bg-[#a8822f] text-white px-8 py-4 text-[15px] font-semibold tracking-wide transition-colors cursor-pointer rounded-sm"
            >
              Explore Our Products
            </Link>
          </div>
        </div>

        {/* Feature Cards (Bottom of Hero) */}
        <div className="relative z-20 w-full px-6 md:px-12 max-w-[1440px] mx-auto mt-16 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-[#242424]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-[#1a1a1a] transition-colors flex flex-col gap-4">
              <div className="text-[#c79c3d]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <div>
                <h3 className="text-white font-heading font-medium text-lg mb-2">Advanced Infrastructure</h3>
                <p className="text-white/70 text-[13px] font-body leading-relaxed">Well-equipped rice mill with modern machinery and spacious facilities.</p>
              </div>
            </div>

            <div className="bg-[#242424]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-[#1a1a1a] transition-colors flex flex-col gap-4">
              <div className="text-[#c79c3d]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div>
                <h3 className="text-white font-heading font-medium text-lg mb-2">3 High-Performance Dryers</h3>
                <p className="text-white/70 text-[13px] font-body leading-relaxed">Efficient drying systems ensure optimum moisture control and grain quality.</p>
              </div>
            </div>

            <div className="bg-[#242424]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-[#1a1a1a] transition-colors flex flex-col gap-4">
              <div className="text-[#c79c3d]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-white font-heading font-medium text-lg mb-2">5 Cyclone Polishers</h3>
                <p className="text-white/70 text-[13px] font-body leading-relaxed">Advanced polishing technology for superior quality, shine and consistency.</p>
              </div>
            </div>

            <div className="bg-[#242424]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-[#1a1a1a] transition-colors flex flex-col gap-4">
              <div className="text-[#c79c3d]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <div>
                <h3 className="text-white font-heading font-medium text-lg mb-2">Spacious Godowns</h3>
                <p className="text-white/70 text-[13px] font-body leading-relaxed">Safe and hygienic storage solutions to preserve quality and meet bulk demands.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legacy Statement */}
      <div className="bg-background-light min-h-screen pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-heading font-semibold text-center mb-6 text-background-dark">About Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="bg-white p-12 shadow-xl border-l-4 border-primary relative">
            <p className="drop-cap text-xl font-body leading-loose text-gray-700 mb-8">
              Founded in 1985, Goel Brothers began as a humble milling operation servicing local estates. Today, we stand as a premier domestic supplier to Food Corporation of India in state of Uttar Pradesh, delivering premium quality paddy & rice across the various states of India.
            </p>
            <p className="text-xl font-body leading-loose text-gray-700">
              We are not merely merchants; we are millers. By maintaining direct control over our infrastructure, from the Harvesting to Procurement to Precise De-Husking and Optimal Sorting to the packing lines, we ensure that the integrity of our brand is never diluted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">
            <div className="text-center p-8 bg-surface text-text-inverse">
              <h3 className="text-4xl font-heading font-bold text-primary mb-4">PAN India</h3>
              <p className="font-ui uppercase tracking-widest text-xs">Delivery</p>
            </div>
            <div className="text-center p-8 bg-surface text-text-inverse">
              <h3 className="text-4xl font-heading font-bold text-primary mb-4">50,000</h3>
              <p className="font-ui uppercase tracking-widest text-xs">Metric Tons Annually</p>
            </div>
            <div className="text-center p-8 bg-surface text-text-inverse">
              <h3 className="text-4xl font-heading font-bold text-primary mb-4">1985</h3>
              <p className="font-ui uppercase tracking-widest text-xs">Year Established</p>
            </div>
            <div className="text-center p-8 bg-surface text-text-inverse">
              <h3 className="text-4xl font-heading font-bold text-primary mb-4">6 MT/hr</h3>
              <p className="font-ui uppercase tracking-widest text-xs">Hulling capacity</p>
            </div><div className="text-center p-8 bg-surface text-text-inverse">
              <h3 className="text-4xl font-heading font-bold text-primary mb-4">10 MT/hr</h3>
              <p className="font-ui uppercase tracking-widest text-xs">Drying Capacity</p>
            </div>
          </div>
        </div>
      </div>

      {/* High-Impact Image Section */}
      <section className="py-32 bg-background-dark text-white relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden h-[600px] shadow-2xl">
              <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1783066449/rice-mill-paddy-dryer_xerokg.jpg" alt="Precision at Scale" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              <div className="absolute inset-0 border-2 border-primary/30 m-4 pointer-events-none"></div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-heading text-5xl md:text-6xl font-semibold text-primary mb-6">Precision at Scale</h2>
                <p className="font-body text-xl text-white/80 leading-relaxed">
                  Our advanced milling technology reduces waste while maximizing yield and quality. We believe that a strong national food supply chain starts with operational efficiency right here in Uttar Pradesh.
                </p>
              </div>

              <div className="space-y-8 mt-4">
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">check_circle</span>
                  <div>
                    <h4 className="font-heading text-2xl font-semibold mb-2">Advanced Sortex Quality</h4>
                    <p className="font-body text-white/70 leading-relaxed text-lg">High-tech optical sorting ensuring completely clean and consistent grain batches for the domestic market.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-primary text-3xl mt-1">check_circle</span>
                  <div>
                    <h4 className="font-heading text-2xl font-semibold mb-2">Sustainable Milling</h4>
                    <p className="font-body text-white/70 leading-relaxed text-lg">Utilizing paddy husk for biomass co-generation, making our infrastructure energy-efficient and eco-friendly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Operational Pillars */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-heading text-5xl md:text-6xl text-background-dark font-semibold mb-4">Operational Pillars</h2>
            <div className="h-1 w-24 bg-primary mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plant */}
            <div className="bg-background-light border border-primary/20 rounded-none group hover:border-primary transition-colors overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782974781/rice_production_plant_with_5_cyclone_polisher_nti1ot.png" alt="Rice Production Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="font-heading text-3xl font-semibold mb-4 text-background-dark">Rice Production Plant</h3>
                <p className="font-body text-gray-700 mb-8 flex-grow leading-relaxed">
                  Utilizing 5 advanced cyclone polishers and high-tech polishing precision to deliver superior grain quality and finish.
                </p>
                <Link to="/process" className="text-sm font-medium uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                  Technical Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Dryers */}
            <div className="bg-background-light border border-primary/20 rounded-none group hover:border-primary transition-colors overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782974341/Rice_Dryer_wj7txj.png" alt="Industrial Drying Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="font-heading text-3xl font-semibold mb-4 text-background-dark">Industrial Drying Systems</h3>
                <p className="font-body text-gray-700 mb-8 flex-grow leading-relaxed">
                  Featuring 3 high-capacity dryers designed for optimal grain moisture control and long-term storage stability.
                </p>
                <Link to="/process" className="text-sm font-medium uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                  Drying Capacity <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Logistics */}
            <div className="bg-background-light border border-primary/20 rounded-none group hover:border-primary transition-colors overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1783074110/Rice_mill_Godownn_wkdox7.jpg" alt="Warehouse & Godowns" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="font-heading text-3xl font-semibold mb-4 text-background-dark">Warehouse & Godowns</h3>
                <p className="font-body text-gray-700 mb-8 flex-grow leading-relaxed">
                  Showcasing large-scale storage and integrated logistics infrastructure directly on the mill campus for maximum efficiency.
                </p>
                <Link to="/collections" className="text-sm font-medium uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                  Logistics Hub <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}
