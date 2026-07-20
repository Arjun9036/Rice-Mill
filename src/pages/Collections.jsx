import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Collections() {
  const [selectedPack, setSelectedPack] = useState('Jute Sacks (60kg)');

  return (
    <div className="bg-[#F5F5F5] min-h-screen pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-background-dark text-5xl font-heading font-semibold leading-tight tracking-tightest">
              The Grains
            </h1>
            <p className="text-primary text-base font-normal leading-normal font-body italic">
              Premium product lines curated for Domestic Distributions.
            </p>
          </div>

          {/* Toggle / Filter */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-2 md:mt-0">
            <span className="text-sm font-ui uppercase tracking-widest text-primary mb-3">
              Available Packaging
            </span>
            <div className="flex h-12 items-center justify-center rounded bg-[#f3f0e7] p-1 w-full md:w-auto">
              <label className={`flex-1 flex cursor-pointer h-full items-center justify-center rounded px-2 md:px-6 transition-all ${selectedPack === 'Jute Sacks (60kg)' ? 'bg-background-light shadow-sm text-background-dark' : 'text-primary hover:text-background-dark'}`}>
                <span className="text-xs md:text-sm font-medium text-center">Jute Sacks (60kg)</span>
                <input
                  type="radio"
                  className="hidden"
                  value="Jute Sacks (60kg)"
                  checked={selectedPack === 'Jute Sacks (60kg)'}
                  onChange={(e) => setSelectedPack(e.target.value)}
                />
              </label>
              <label className={`flex-1 flex cursor-pointer h-full items-center justify-center rounded px-2 md:px-6 transition-all ${selectedPack === 'Plastic Bags (50kg)' ? 'bg-background-light shadow-sm text-background-dark' : 'text-primary hover:text-background-dark'}`}>
                <span className="text-xs md:text-sm font-medium text-center">Plastic Bags (50kg)</span>
                <input
                  type="radio"
                  className="hidden"
                  value="Plastic Bags (50kg)"
                  checked={selectedPack === 'Plastic Bags (50kg)'}
                  onChange={(e) => setSelectedPack(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Macro Photography Catalog */}
        <div className="flex flex-col gap-32 py-16">

          {/* Product Entry 1: PR 126 */}
          <article className="relative flex w-full items-center flex-col md:flex-row gap-8 md:gap-0">
            {/* Image Container */}
            <div className="w-full md:w-3/4 relative z-10 group overflow-hidden rounded-none shadow-2xl">
              <img
                className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-[1000ms] ease-in-out group-hover:scale-105"
                alt="PR 126 Paddy"
                src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782988225/PR_126_bedobr.jpg"
              />
            </div>
            {/* Overlapping Text */}
            <div className="w-full md:w-[45%] md:absolute md:right-0 z-20 md:pointer-events-none mt-[-40px] md:mt-0 px-4 md:px-0">
              <h3 className="text-5xl md:text-[64px] font-heading font-semibold text-background-dark leading-[0.9] tracking-tight drop-shadow-sm mb-4">
                PR<br />126
              </h3>
              <div className="bg-background-light/95 p-8 shadow-xl border-l-4 border-primary pointer-events-auto backdrop-blur-md">
                <p className="text-sm md:text-base italic text-gray-700 leading-relaxed font-body mb-2">
                  <strong className="font-semibold not-italic text-background-dark">Growth Time:</strong> Ready to harvest very quickly.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Harvest Size:</strong> Gives a very large amount of Paddy per acre.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Plant Health:</strong> Naturally fights off common plant diseases.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Grain Look:</strong> Thin, clear grains .<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Best For:</strong> Perfect for a quick, reliable crop.
                </p>
              </div>
            </div>
          </article>

          {/* Product Entry 2: PR 13 */}
          <article className="relative flex w-full items-center justify-end flex-col-reverse md:flex-row gap-8 md:gap-0 mt-20 md:mt-0">
            {/* Overlapping Text (Left) */}
            <div className="w-full md:w-[45%] md:absolute md:left-0 z-20 md:pointer-events-none md:text-right px-4 md:px-0 mt-[-40px] md:mt-0">
              <h3 className="text-5xl md:text-[64px] font-heading font-semibold text-background-dark leading-[0.9] tracking-tight drop-shadow-sm mb-4">
                PR<br />13
              </h3>
              <div className="bg-background-light/95 p-8 shadow-xl border-r-4 border-primary pointer-events-auto backdrop-blur-md md:text-left ml-auto">
                <p className="text-sm md:text-base italic text-gray-700 leading-relaxed font-body mb-2">
                  <strong className="font-semibold not-italic text-background-dark">Grain Shape:</strong> Thick, strong, and bold grains.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Cooking:</strong> Stays firm and doesn't turn mushy.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Everyday Use:</strong> A favorite choice for daily home meals.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Value:</strong> Very affordable and always in high demand.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Milling:</strong> Easy to process into high-quality rice flour.
                </p>
              </div>
            </div>
            {/* Image Container */}
            <div className="w-full md:w-3/4 relative z-10 group overflow-hidden rounded-none shadow-2xl">
              <img
                className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-[1000ms] ease-in-out group-hover:scale-105"
                alt="PR 13 Paddy"
                src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782992515/PR_13_lzaqu7.jpg"
              />
            </div>
          </article>

          {/* Product Entry 3: PR 131 */}
          <article className="relative flex w-full items-center flex-col md:flex-row gap-8 md:gap-0 mt-20 md:mt-0">
            {/* Image Container */}
            <div className="w-full md:w-3/4 relative z-10 group overflow-hidden rounded-none shadow-2xl">
              <img
                className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-[1000ms] ease-in-out group-hover:scale-105"
                alt="PR 131 Paddy"
                src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782988599/pr_131_paddy_wwt7nl.jpg"
              />
            </div>
            {/* Overlapping Text */}
            <div className="w-full md:w-[45%] md:absolute md:right-0 z-20 md:pointer-events-none mt-[-40px] md:mt-0 px-4 md:px-0">
              <h3 className="text-5xl md:text-[64px] font-heading font-semibold text-background-dark md:text-background-light leading-[0.9] tracking-tight drop-shadow-sm mb-4">
                PR<br />131
              </h3>
              <div className="bg-background-light/95 p-8 shadow-xl border-l-4 border-primary pointer-events-auto backdrop-blur-md">
                <p className="text-sm md:text-base italic text-gray-700 leading-relaxed font-body mb-2">
                  <strong className="font-semibold not-italic text-background-dark">Growth Time:</strong> Takes a normal, medium amount of time to grow.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Plant Strength:</strong> Strong stems that do not fall over in the wind.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Harvest Size:</strong> A very dependable plant with heavy harvests.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Grain Look:</strong> Bright white and clean after milling.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Best For:</strong> Great for large-scale farming and wholesale.
                </p>
              </div>
            </div>
          </article>

          {/* Product Entry 4: Govinda */}
          <article className="relative flex w-full items-center justify-end flex-col-reverse md:flex-row gap-8 md:gap-0 mt-20 md:mt-0">
            {/* Overlapping Text (Left) */}
            <div className="w-full md:w-[45%] md:absolute md:left-0 z-20 md:pointer-events-none md:text-right px-4 md:px-0 mt-[-40px] md:mt-0">
              <h3 className="text-5xl md:text-[64px] font-heading font-semibold text-background-dark md:text-background-light leading-[0.9] tracking-tight drop-shadow-sm mb-4">
                Govinda<br />Paddy
              </h3>
              <div className="bg-background-light/95 p-8 shadow-xl border-r-4 border-primary pointer-events-auto backdrop-blur-md md:text-left ml-auto">
                <p className="text-sm md:text-base italic text-gray-700 leading-relaxed font-body mb-2">
                  <strong className="font-semibold not-italic text-background-dark">Plant Size:</strong> Short plants that are easy to take care of.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Water Needs:</strong> Grows great even with good amount of water.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Growth Time:</strong> Matures very fast for an early harvest.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Grain Look:</strong> Nice, clean grains with a great taste.<br /><br />
                  <strong className="font-semibold not-italic text-background-dark">Best For:</strong> Ideal for dry farming areas and daily cooking.
                </p>
              </div>
            </div>
            {/* Image Container */}
            <div className="w-full md:w-3/4 relative z-10 group overflow-hidden rounded-none shadow-2xl">
              <img
                className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-[1000ms] ease-in-out group-hover:scale-105"
                alt="Govinda Paddy"
                src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782988600/govinda_paddy_wfc2qx.jpg"
              />
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}
