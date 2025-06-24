import Quote from "../components/Quote";
import { Link } from "react-router-dom";
import heroImage from '/src/assets/hero5.jpg';
import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState } from "react";
import residentialIcon from "../assets/residential-icon.png";
import commericalIcon from "../assets/commercial-icon.png";
import femaIcon from "../assets/FEMA-icon.png";




export default function Home() {

  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = headingRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>South Florida Home Appraisals | Wachtstetter Enterprises Inc</title>
        <meta
          name="description"
          content="38+ years of certified home appraisal expertise in South Florida. Fast turnaround, FEMA 50% Rule appraisals, and legal-ready reports."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wachtstetter Enterprises Inc",
              "image": "https://honestappraiser.com/logoVector.svg",
              "@id": "https://honestappraiser.com/",
              "url": "https://honestappraiser.com/",
              "telephone": "954-791-4667",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4200 Davie Rd",
                "addressLocality": "Davie",
                "addressRegion": "FL",
                "postalCode": "33314",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.0795,
                "longitude": -80.2324
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/wachtstetterappraisals"
                "https://www.google.com/maps/place/Wachtstetter+Enterprises+Inc/@26.1546469,-81.1077241,9z/data=!3m1!4b1!4m6!3m5!1s0x88d9a84ef424eb1f:0xd8d040967946ca56!8m2!3d26.1561484!4d-80.4482804!16s%2Fg%2F1tg_xwwl"
              ]
            }
          `}
        </script>
      </Helmet>

      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <main id="main-content" role="main">
        {/* Hero */}
        <section
          className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] pt-32 pb-[10rem] flex items-start justify-center text-white bg-cover bg-center font-playfair"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0"></div>

          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            {/* Animated Heading */}
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-wide mb-10 opacity-0 translate-y-6 animate-fade-up delay-[0ms]">
              <span className="block">Home Appraisals</span>
              <span className="block">in South Florida</span>
            </h1>

            {/* Animated Buttons */}
            <div className="flex justify-center gap-4 opacity-0 translate-y-6 animate-fade-up delay-[150ms]">
              <Link
                to="/services"
                className="bg-[#F5F1EA] hover:bg-[#C3A36B] text-black text-lg px-6 py-3 rounded font-work font-semibold uppercase tracking-wide transition"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="border border-white hover:bg-white hover:text-black text-white text-lg px-6 py-3 rounded font-work font-semibold uppercase tracking-wide transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Promo Feature Highlights Floating Section */}
        <section className="relative z-10 -mt-24 lg:-mt-36">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">

              {/* Promo 1 */}
              <div className="p-8 animate-fade-up delay-[0ms]">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-neutral-900">Local Expertise Since 1987  </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Deep appraisal knowledge across Broward & South Florida communities.
                </p>
              </div>

              {/* Promo 2 — Blue Accent */}
              <div className="p-8 bg-[#1E3A5F] text-white animate-fade-up delay-[100ms]">
                <h3 className="font-playfair text-2xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-xl leading-relaxed">
                  Transparent and fair rates — no hidden fees, ever.
                </p>
              </div>

              {/* Promo 3 */}
              <div className="p-8 animate-fade-up delay-[200ms]">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-neutral-900">Certified, Multi‑Scope Appraisals  </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Residential, Commercial, FEMA 50% Rule coverage—with court‑ready reports.
                </p>
              </div>

            </div>
          </div>
        </section>




      {/* Our Appraisal Services Section */}
      <section className="py-28 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Heading */}
<div className="relative mb-20" ref={headingRef}>
  <p className={`text-xl uppercase tracking-widest text-[#C3A36B] font-semibold relative z-50 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
    Our Service
  </p>
  <h2 className={`text-[10rem] font-extrabold text-neutral-200 leading-none -mb-6 z-10 transition-all duration-700 ease-out delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
    —SERVICES—
  </h2>
  <h3 className={`text-7xl md:text-6xl font-playfair font-bold text-neutral-900 relative z-50 transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
    What We Do
  </h3>
</div>

  {/* Service Cards */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-5">
      {/* Residential */}
      <div className="group bg-white rounded-xl shadow-md h-[280px] w-[280px] flex flex-col items-center justify-between p-8 border border-neutral-200 transition duration-300 ease-in-out hover:bg-[#FAF4EB] hover:border-[#D4AF37] hover:-translate-y-1 hover:shadow-xl translate-y-6 opacity-0 animate-fade-up delay-[0ms]">
        <span className="text-4xl transition-colors duration-300 group-hover:text-[#D4AF37]">
          <img
            src={residentialIcon}
            alt="Residential home icon"
            className="w-12 h-12 mb-4"
            loading="lazy"
          />

        </span>
        <h3 className="text-3xl font-playfair font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-[#D4AF37] mt-4">
          Residential Appraisals
        </h3>
        <a href="/service/residential" className="text-lg font-semibold text-[#C3A36B] mt-4 group-hover:underline group-hover:text-[#D4AF37] transition">Read More →</a>
      </div>

      {/* Commercial */}
      <div className="group bg-white rounded-xl shadow-md h-[280px] w-[280px] flex flex-col items-center justify-between p-8 border border-neutral-200 transition duration-300 ease-in-out hover:bg-[#FAF4EB] hover:border-[#D4AF37] hover:-translate-y-1 hover:shadow-xl translate-y-6 opacity-0 animate-fade-up delay-[100ms]">
        <span className="text-4xl transition-colors duration-300 group-hover:text-[#D4AF37]">
            <img
            src={commericalIcon}
            alt="Commercial home icon"
            className="w-12 h-12 mb-4"
            loading="lazy"
          />
        </span>
        <h3 className="text-3xl font-playfair font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-[#D4AF37] mt-4">
          Commercial Appraisals
        </h3>
        <a href="/service/commercial" className="text-lg font-semibold text-[#C3A36B] mt-4 group-hover:underline group-hover:text-[#D4AF37] transition">Read More →</a>
      </div>

      {/* FEMA */}
      <div className="group bg-white rounded-xl shadow-md h-[280px] w-[280px] flex flex-col items-center justify-between p-8 border border-neutral-200 transition duration-300 ease-in-out hover:bg-[#FAF4EB] hover:border-[#D4AF37] hover:-translate-y-1 hover:shadow-xl translate-y-6 opacity-0 animate-fade-up delay-[200ms]">
        <span className="text-4xl transition-colors duration-300 group-hover:text-[#D4AF37]">
            <img
            src={femaIcon}
            alt="FEMA home icon"
            className="w-12 h-12 mb-4"
            loading="lazy"
          />
        </span>
        <h3 className="text-3xl font-playfair font-semibold text-sneutral-900 transition-colors duration-300 group-hover:text-[#D4AF37] mt-4">
          FEMA 50% Rule Appraisals
        </h3>
        <a href="/service/fema" className="text-lg font-semibold text-[#C3A36B] mt-4 group-hover:underline group-hover:text-[#D4AF37] transition">Read More →</a>
      </div>
    </div>
  </div>
</section>





        {/* Who We Are */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-playfair">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <p className="text-base text-gray-700">
              With over 38 years of appraisal experience in South Florida, Wachtstetter Enterprises Inc provides accurate, fast, and court-defensible appraisals for residential and commercial properties. We're proud to serve clients ranging from attorneys to homeowners and banks—with the professionalism and responsiveness they expect.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder_2.jpg" alt="South Florida property" className="rounded shadow object-cover" />
              <img src="/placeholder_3.jpg" alt="Appraisal process in action" className="rounded shadow object-cover" />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 font-playfair">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-4 text-base text-gray-700">
            <li>Over 38 years of appraisal experience across South Florida</li>
            <li>Certified in residential, commercial, and FEMA 50% Rule appraisals</li>
            <li>Quick turnaround — typically within 24–48 hours</li>
            <li>Accepted as an expert witness in court proceedings</li>
            <li>Responsive, transparent communication with every client</li>
            <li>Appraisals formatted for lending, legal, and tax use</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 font-playfair">What Our Clients Say</h2>

          <div className="space-y-12">
            {/* Review 1 */}
            <blockquote className="bg-white border border-neutral-200 p-6 rounded-lg shadow-md animate-fade-up delay-[0ms]">
              <p className="text-gray-800 italic">
                “I have used Tom Wachtstetter for many years. He is always professional and courteous. Highly recommend him for all your appraisal needs.”
              </p>
              <footer className="mt-4 text-sm font-semibold text-[#C08552]">— Maria G. (Google Review)</footer>
            </blockquote>

            {/* Review 2 */}
            <blockquote className="bg-white border border-neutral-200 p-6 rounded-lg shadow-md animate-fade-up delay-[100ms]">
              <p className="text-gray-800 italic">
                “Prompt service, extremely detailed, and gave us peace of mind during our home renovation process. We trust Tom’s judgment completely.”
              </p>
              <footer className="mt-4 text-sm font-semibold text-[#C08552]">— Jason T. (Google Review)</footer>
            </blockquote>

            {/* Review 3 */}
            <blockquote className="bg-white border border-neutral-200 p-6 rounded-lg shadow-md animate-fade-up delay-[200ms]">
              <p className="text-gray-800 italic">
                “Great communication, fast turnaround, and reports that are accepted without issue. Best appraiser in Broward County.”
              </p>
              <footer className="mt-4 text-sm font-semibold text-[#C08552]">— Danielle M. (Google Review)</footer>
            </blockquote>
          </div>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/place/Wachtstetter+Enterprises+Inc/@26.1546469,-81.1077241,9z/data=!3m1!4b1!4m6!3m5!1s0x88d9a84ef424eb1f:0xd8d040967946ca56!8m2!3d26.1561484!4d-80.4482804!16s%2Fg%2F1tg_xwwl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-700 underline font-semibold"
            >
              Read all reviews on Google →
            </a>
          </div>
        </section>


        <Quote />
      </main>
    </>
  );
}