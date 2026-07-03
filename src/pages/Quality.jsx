import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck2, Truck } from 'lucide-react';

export default function Quality() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-semibold text-center mb-6 text-background-dark">Uncompromising Quality</h1>
        <p className="text-center text-gray-600 font-body text-lg max-w-2xl mx-auto mb-20 italic">
          Trust is built grain by grain. Our modern milling infrastructure ensures that every bag meets the highest standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
            <ShieldCheck className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-semibold mb-4">Quality Assurance</h3>
            <p className="text-gray-600 font-body leading-relaxed">
              We employ strict quality control measures to guarantee the purity of our PR 131 and Govinda cultivars. Our 5 cyclone polishers and high-performance dryers ensure an immaculate grain finish and optimal moisture levels.
            </p>
          </div>

          <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
            <FileCheck2 className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-semibold mb-4">Certified Safe</h3>
            <p className="text-gray-600 font-body leading-relaxed">
              We proudly operate under an FSSAI license, strictly adhering to India's food safety regulations. Our advanced mill and spacious godowns maintain rigorous hygiene standards for every single batch we process.
            </p>
          </div>

          <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
            <Truck className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-semibold mb-4">Reliable Supply</h3>
            <p className="text-gray-600 font-body leading-relaxed">
              From careful harvesting in the agrarian district to safe, hygienic storage in our expansive godowns, we maintain full oversight. This ensures consistent, premium quality for all our domestic distributors.
            </p>
          </div>

        </div>

        <div className="mt-24 bg-surface text-text-inverse p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-heading font-semibold mb-6">Ready to Experience the Heritage?</h2>
            <p className="text-lg font-body text-text-inverse/80 max-w-2xl mx-auto mb-10">
              Request samples or a complete product catalog. Our team is ready to facilitate your domestic supply requirements.
            </p>
            <Link to="/contactus" className="btn-hover-fill inline-flex items-center justify-center border border-primary text-primary px-8 py-4 text-[13px] font-medium uppercase tracking-button bg-transparent rounded-none cursor-pointer">
              Contact Us
            </Link>
          </div>
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center z-0"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1200')" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
