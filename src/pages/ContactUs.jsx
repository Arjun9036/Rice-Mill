import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Home } from 'lucide-react';

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "313244f1-adac-4381-9302-a40b92708651");
    formData.append("name", document.getElementById('name').value);
    formData.append("phone", document.getElementById('phone').value);
    formData.append("email", document.getElementById('email').value);
    formData.append("company", document.getElementById('company').value);
    formData.append("message", document.getElementById('message').value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
      } else {
        console.error("Error submitting form:", data);
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col lg:flex-row bg-surface text-text-inverse">

      {/* Left Column: Context & Map */}
      <aside className="w-full lg:w-5/12 p-12 lg:p-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden relative border-r border-white/10">
        <div className="relative z-10">
          <h1 className="font-heading text-5xl lg:text-6xl font-semibold tracking-tightest mb-6 text-primary">Get in Touch</h1>
          <p className="font-body text-lg text-text-inverse/80 leading-relaxed max-w-md">
            Initiate a dialogue with our team. Whether you are inquiring about Paddy, Rice Wheat, local supply, or our milling process, we are here to assist you.
          </p>

          <div className="mt-16 space-y-8 font-ui text-[13px] tracking-widest uppercase text-muted">
            <div>
              <div className="text-primary mb-2">Address</div>
              <div className="text-text-inverse/90 leading-relaxed flex items-start gap-2">
                <a href="https://www.google.com/maps/place/Goel+brothers+Rice+mill/@28.1620643,80.4187755,17z/data=!3m1!4b1!4m6!3m5!1s0x399f679dc07028ab:0xf03d3488db24773f!8m2!3d28.1620597!4d80.4236464!16s%2Fg%2F11j20y0rdx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors mt-[2px]" title="View on Google Maps">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                </a>
                <div>
                  <a href="https://www.google.com/maps/place/Goel+brothers+Rice+mill/@28.1620643,80.4187755,17z/data=!3m1!4b1!4m6!3m5!1s0x399f679dc07028ab:0xf03d3488db24773f!8m2!3d28.1620597!4d80.4236464!16s%2Fg%2F11j20y0rdx?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    Bankeyganj-Kukra Road, Grant No. 10, <br />
                    Tehsil Gola Gokarannath, Distt Lakhimpur Kheri,<br />
                    Uttar Pradesh, 262801
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="text-primary mb-4">Contact No.</div>

              <div className="mb-5">
                <div className="text-[11px] font-ui uppercase tracking-widest text-text-inverse font-medium mb-1.5"> Anubhav Agarwal </div>
                <div className="text-text-inverse/90 flex items-center gap-3">
                  <div className="flex gap-2">
                    <a href="tel:+918004061663" className="hover:text-primary transition-colors" title="Call">
                      <span className="material-symbols-outlined text-[16px]">call</span>
                    </a>
                    <a href="https://wa.me/918004061663" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" title="WhatsApp">
                      <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.124.553 4.195 1.605 6.012L.266 23.364l5.44-1.428A11.96 11.96 0 0012.031 24c6.646 0 12.035-5.388 12.035-12.035C24.066 5.388 18.677 0 12.031 0zm0 22.012c-1.802 0-3.565-.483-5.112-1.401l-.367-.217-3.799.997.997-3.71-.237-.378A10.021 10.021 0 011.989 12.035c0-5.549 4.512-10.061 10.042-10.061 5.548 0 10.06 4.512 10.06 10.061s-4.512 10.042-10.06 10.042zm5.516-7.534c-.302-.151-1.791-.885-2.069-.986-.277-.101-.479-.151-.681.151-.202.302-.782.986-.958 1.188-.176.202-.353.227-.655.076-2.019-1.011-3.486-2.584-4.226-3.876-.101-.176-.01-.27.066-.346.068-.068.151-.176.227-.277.076-.101.101-.176.151-.277.05-.101.025-.202-.025-.277-.05-.076-.681-1.638-.933-2.243-.245-.589-.494-.509-.681-.518-.176-.008-.378-.01-.58-.01-.202 0-.529.076-.807.378-.277.302-1.059 1.034-1.059 2.518 0 1.485 1.084 2.921 1.235 3.123.151.202 2.119 3.232 5.132 4.53 1.956.84 2.656.758 3.16.685.603-.087 1.791-.733 2.043-1.442.252-.71.252-1.314.176-1.442-.076-.126-.277-.202-.579-.353z" /></svg>
                    </a>
                  </div>
                  <a href="tel:+918004061663" className="hover:text-primary transition-colors">
                    +91 80040 61663
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-ui uppercase tracking-widest text-text-inverse font-medium mb-1.5"> Manoj Kumar Agarwal </div>
                <div className="text-text-inverse/90 flex items-center gap-3">
                  <div className="flex gap-2">
                    <a href="tel:+919451237864" className="hover:text-primary transition-colors" title="Call">
                      <span className="material-symbols-outlined text-[16px]">call</span>
                    </a>
                    <a href="https://wa.me/919451237864" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" title="WhatsApp">
                      <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.124.553 4.195 1.605 6.012L.266 23.364l5.44-1.428A11.96 11.96 0 0012.031 24c6.646 0 12.035-5.388 12.035-12.035C24.066 5.388 18.677 0 12.031 0zm0 22.012c-1.802 0-3.565-.483-5.112-1.401l-.367-.217-3.799.997.997-3.71-.237-.378A10.021 10.021 0 011.989 12.035c0-5.549 4.512-10.061 10.042-10.061 5.548 0 10.06 4.512 10.06 10.061s-4.512 10.042-10.06 10.042zm5.516-7.534c-.302-.151-1.791-.885-2.069-.986-.277-.101-.479-.151-.681.151-.202.302-.782.986-.958 1.188-.176.202-.353.227-.655.076-2.019-1.011-3.486-2.584-4.226-3.876-.101-.176-.01-.27.066-.346.068-.068.151-.176.227-.277.076-.101.101-.176.151-.277.05-.101.025-.202-.025-.277-.05-.076-.681-1.638-.933-2.243-.245-.589-.494-.509-.681-.518-.176-.008-.378-.01-.58-.01-.202 0-.529.076-.807.378-.277.302-1.059 1.034-1.059 2.518 0 1.485 1.084 2.921 1.235 3.123.151.202 2.119 3.232 5.132 4.53 1.956.84 2.656.758 3.16.685.603-.087 1.791-.733 2.043-1.442.252-.71.252-1.314.176-1.442-.076-.126-.277-.202-.579-.353z" /></svg>
                    </a>
                  </div>
                  <a href="tel:+919451237864" className="hover:text-primary transition-colors">
                    +91 94512 37864
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="text-primary mb-2">Email</div>
              <a href="mailto:contact@goelbrothers.com" className="text-white/90 hover:text-primary transition-colors text-sm font-medium mb-4">
                goelbrothersbkg@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Stylized Background */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200')" }}
        ></div>
      </aside>

      {/* Right Column: Form */}
      <section className="w-full lg:w-7/12 p-12 lg:p-24 lg:pl-32 bg-[#F5F5F5] text-text flex items-center min-h-screen lg:min-h-0">
        <div className="w-full max-w-xl">

          {!formSubmitted ? (
            <>
              <h2 className="font-heading text-4xl font-semibold tracking-tightest mb-12">Send an Inquiry</h2>
              <form className="space-y-12" onSubmit={handleSubmit}>

                {/* Step 1 */}
                <div className="space-y-8">
                  <h3 className="font-ui text-[12px] uppercase tracking-widest text-muted border-b border-muted/20 pb-4">01. Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input type="text" id="name" required placeholder="Full Name" className="custom-input w-full bg-transparent border-0 border-b border-text text-text font-body text-lg py-3 px-0 placeholder:text-muted/50 focus:ring-0 transition-colors" />
                    </div>
                    <div className="relative">
                      <input type="text" id="phone" required placeholder="Phone Number" className="custom-input w-full bg-transparent border-0 border-b border-text text-text font-body text-lg py-3 px-0 placeholder:text-muted/50 focus:ring-0 transition-colors" />
                    </div>
                    <div className="relative">
                      <input type="email" id="email" placeholder="Email Address (Optional)" className="custom-input w-full bg-transparent border-0 border-b border-text text-text font-body text-lg py-3 px-0 placeholder:text-muted/50 focus:ring-0 transition-colors" />
                    </div>

                    <div className="relative">
                      <input type="text" id="company" placeholder="Company Name (Optional)" className="custom-input w-full bg-transparent border-0 border-b border-text text-text font-body text-lg py-3 px-0 placeholder:text-muted/50 focus:ring-0 transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-8 pt-8">
                  <h3 className="font-ui text-[12px] uppercase tracking-widest text-muted border-b border-muted/20 pb-4">02. Your Message</h3>
                  <div className="relative">
                    <textarea id="message" rows="4" required placeholder="How can we help you today?" className="custom-input w-full bg-transparent border-0 border-b border-text text-text font-body text-lg py-3 px-0 placeholder:text-muted/50 focus:ring-0 transition-colors resize-none"></textarea>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-surface transition-all duration-300 font-ui text-[13px] uppercase tracking-wider font-medium min-w-[200px]"
                  >
                    <span className={isSubmitting ? 'pulse-text' : ''}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    {!isSubmitting && <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center max-w-md mx-auto py-20 animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="font-heading text-5xl font-semibold tracking-tightest mb-6">Message Sent.</h2>
              <p className="font-body text-lg text-text/80 mb-12 leading-relaxed">
                Thank you for reaching out. Your inquiry has been received, and our team will contact you shortly.
              </p>
              <Link to="/" className="inline-flex items-center gap-3 text-primary hover:text-text transition-colors font-ui text-[13px] uppercase tracking-wider font-medium border-b border-primary hover:border-text pb-1">
                <Home className="w-4 h-4" />
                Return to Home
              </Link>
            </div>
          )}

        </div>
      </section >
    </div >
  );
}
