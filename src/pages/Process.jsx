import { Link } from 'react-router-dom';

export default function Process() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen pt-32 pb-16">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-semibold text-center mb-6 text-background-dark">The Milling Process</h1>
        <p className="text-center text-gray-600 font-body text-lg max-w-2xl mx-auto mb-20 italic">
          From the golden fields to your table, our process is a symphony of tradition and cutting-edge technology.
        </p>

        <div className="space-y-32">

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782973019/Rice_Harvesting_i1pami.jpg" alt="Harvest" className="w-full h-[400px] object-cover shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Stage 01</h3>
              <h2 className="text-4xl font-heading font-semibold">Careful Harvest</h2>
              <p className="font-body text-gray-700 leading-relaxed text-lg">
                We work intimately with our network of generational farmers. Rice is harvested only at peak maturity when the morning dew has settled, ensuring the moisture content is precisely balanced before it even reaches our facilities.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782974341/Rice_Dryer_wj7txj.png" alt="Milling" className="w-full h-[400px] object-cover shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Stage 02</h3>
              <h2 className="text-4xl font-heading font-semibold">Controlled Paddy Drying</h2>
              <p className="font-body text-gray-700 leading-relaxed text-lg">
                To preserve the integrity and distinct aroma of every grain, the freshly harvested paddy undergoes a meticulous, slow-drying process. We utilize state-of-the-art, temperature-controlled silos that gently reduce moisture levels to the exact optimal percentage. This precise environment prevents thermal shock, ensuring the grain's cellular structure remains perfectly intact for milling.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782974781/rice_production_plant_with_5_cyclone_polisher_nti1ot.png" alt="Milling" className="w-full h-[400px] object-cover shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Stage 03</h3>
              <h2 className="text-4xl font-heading font-semibold">Precision De-husking</h2>
              <p className="font-body text-gray-700 leading-relaxed text-lg">
                Using Swiss-engineered Buhler machinery, we remove the outer husk with minimal friction. This delicate process prevents grain breakage and preserves the bran layer for our brown rice variants, while preparing white variants for polishing.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img src="https://res.cloudinary.com/djpewxz4d/image/upload/v1782973024/rice_sorting_machine_brryi6.png" alt="Sorting" className="w-full h-[400px] object-cover shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Stage 04</h3>
              <h2 className="text-4xl font-heading font-semibold">Optical Sorting</h2>
              <p className="font-body text-gray-700 leading-relaxed text-lg">
                Every single grain passes through advanced optical color sorters. Any grain with a blemish, discoloration, or irregular shape is immediately removed via high-speed air jets, ensuring an export-grade batch of 100% uniformity.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-32 text-center">
          <Link to="/quality" className="btn-hover-fill inline-flex items-center justify-center border border-primary text-primary px-8 py-4 text-[13px] font-medium uppercase tracking-button bg-transparent rounded-none cursor-pointer">
            Explore Quality Assurance
          </Link>
        </div>
      </div>
    </div>
  );
}
