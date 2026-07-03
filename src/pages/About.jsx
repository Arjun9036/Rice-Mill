import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-background-light min-h-screen pt-32 pb-16">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-semibold text-center mb-6 text-background-dark">Our Legacy</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="bg-white p-12 shadow-xl border-l-4 border-primary relative">
          <p className="drop-cap text-xl font-body leading-loose text-gray-700 mb-8">
            Founded in the early 20th century, Heritage Export began as a humble milling operation servicing local estates. Today, we stand as a premier exporter of the world's finest rice, delivering uncompromising quality to Michelin-starred kitchens and premium retailers across five continents.
          </p>
          <p className="text-xl font-body leading-loose text-gray-700">
            We are not merely merchants; we are millers. By maintaining direct control over our infrastructure, from the silos to the packing lines, we ensure that the integrity of our brand is never diluted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-surface text-text-inverse">
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">50+</h3>
            <p className="font-ui uppercase tracking-widest text-xs">Countries Exported To</p>
          </div>
          <div className="text-center p-8 bg-surface text-text-inverse">
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">120K</h3>
            <p className="font-ui uppercase tracking-widest text-xs">Metric Tons Annually</p>
          </div>
          <div className="text-center p-8 bg-surface text-text-inverse">
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">1924</h3>
            <p className="font-ui uppercase tracking-widest text-xs">Year Established</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link to="/contactus" className="btn-hover-fill inline-flex items-center justify-center border border-primary text-primary px-8 py-4 text-[13px] font-medium uppercase tracking-button bg-transparent rounded-none cursor-pointer">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
