import Quote from "../components/Quote";
import { Link } from "react-router-dom";
import heroImage from '/src/assets/hero5.jpg';
import { Helmet } from "react-helmet-async";
import residentialIcon from "../assets/residential-icon.png";
import commericalIcon from "../assets/commercial-icon.png";
import femaIcon from "../assets/FEMA-icon.png";
import useSectionInView from "../hooks/useSectionInView.js";


export default function Home() {
  const { ref: servicesRef, isVisible: servicesVisible } = useSectionInView();
  const { ref: aboutRef, isVisible: aboutVisible } = useSectionInView();

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
        className="relative h-[85vh] flex flex-col items-center justify-center text-white bg-cover bg-center font-playfair"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-0"></div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-wide mb-10 opacity-0 translate-y-6 animate-fade-up delay-[0ms]">
            <span className="block">Home Appraisals</span>
            <span className="block">in South Florida</span>
          </h1>

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
        <section className="relative z-10 -mt-32 md:-mt-40 lg:-mt-48">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">
              {/* Card 1 */}
              <div className="p-8 animate-fade-up delay-[0ms]">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-neutral-900">
                  Local Expertise Since 1987
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Deep appraisal knowledge across Broward & South Florida communities.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-[#1E3A5F] text-white animate-fade-up delay-[100ms]">
                <h3 className="font-playfair text-2xl font-semibold mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-xl leading-relaxed">
                  Transparent and fair rates — no hidden fees, ever.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 animate-fade-up delay-[200ms]">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-neutral-900">
                  Certified, Multi-Scope Appraisals
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Residential, Commercial, FEMA 50% Rule coverage—with court-ready reports.
                </p>
              </div>
            </div>
          </div>
        </section>


      {/* Our Appraisal Services Section */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

      {/* Section Heading */}
      <div className="relative mb-20" ref={servicesRef}>
        <p className={`transition-all duration-700 ease-out text-xl uppercase tracking-widest text-[#C3A36B] font-semibold relative z-50 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Our Service
        </p>
        <h2 className={`transition-all duration-700 ease-out delay-150 text-[10rem] font-extrabold text-neutral-200 leading-none -mb-6 z-10 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          —SERVICES—
        </h2>
        <h3 className={`transition-all duration-700 ease-out delay-300 text-7xl md:text-6xl font-playfair font-bold text-neutral-900 relative z-50 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
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
            <Link to="/services/residential" className="text-lg font-semibold text-[#C3A36B] mt-4 group-hover:underline group-hover:text-[#D4AF37] transition">Read More →</Link>
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
            <Link to="/services/commercial" className="text-lg font-semibold text-[#C3A36B] mt-4 group-hover:underline group-hover:text-[#D4AF37] transition">Read More →</Link>
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
            <Link to="/services/fema" className="text-lg font-semibold text-[#C3A36B] mt-4 group-hover:underline group-hover:text-[#D4AF37] transition">Read More →</Link>
          </div>
        </div>
      </div>
    </section>

    {/*Who we are*/}
    <section className="py-28 px-6 bg-[#1E3A5F] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="relative mb-20" ref={aboutRef}>
          <p className={`transition-all duration-700 ease-out text-xl uppercase tracking-widest text-[#C3A36B] font-semibold relative z-50 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Who We Are
          </p>
          <h2 className={`transition-all duration-700 ease-out delay-150 text-[10rem] font-extrabold text-neutral-200 leading-none -mb-6 z-10 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            —ABOUT—
          </h2>
          <h3 className={`transition-all duration-700 ease-out delay-300 text-7xl md:text-6xl font-playfair font-bold text-black relative z-50 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Meet Your Appraiser
          </h3>
        </div>

        {/* Two-column layout */}
        <div className={`grid md:grid-cols-2 gap-20 items-start transition-all duration-700 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* LEFT column: overlapping image stack */}
        <div className="mx-auto">
          {/* BACK image (offset) */}
          <img
            src=""
            alt="South Florida property"
            className="absolute top-10 left-20 w-[580px] rounded-xl shadow-md object-cover z-0"
            loading="lazy"
          />

          {/* FRONT image (Tom) */}
          <img
            src=""
            alt="Tom Wachtstetter, Certified Residential Appraiser"
            className="relative w-[580px] rounded-xl shadow-xl object-cover z-50"
            loading="lazy"
          />

          {/* Caption */}
          <figcaption className="text-sm text-neutral-500 text-center mt-3">
            Tom Wachtstetter, SRA — Certified Residential Appraiser
          </figcaption>
        </div>


          {/* RIGHT column: bio */}
          <div className="text-lg text-white leading-relaxed space-y-6">
            <p>
              I'm Tom Wachtstetter, founder of Wachtstetter Enterprises Inc. With over 38 years of experience, I’ve built a reputation for fast, accurate, and defensible real estate appraisals across South Florida.
            </p>
            <p>
              I work directly with homeowners, attorneys, and banks, ensuring each report is prepared with precision and local expertise — from waterfront estates to inland properties.
            </p>
            <p>
              Whether it's a complex FEMA 50% Rule case or a standard home valuation, I bring clarity and professionalism to every assignment.
            </p>
          </div>
        </div>
      </div>
    </section>



        {/* Why Choose Us */}
  <section id="why-us" className="py-28 px-6 bg-white border-t border-neutral-200">
    <div className="max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="relative mb-20">
        <p className="text-xl uppercase tracking-widest text-[#C3A36B] font-semibold">
          Why Choose Us
        </p>
        <h2 className="text-[10rem] font-extrabold text-neutral-200 leading-none -mb-6">
          —TRUST—
        </h2>
        <h3 className="text-7xl md:text-6xl font-playfair font-bold text-neutral-900">
          Proven. Precise. Local.
        </h3>
    </div>

    {/* Proof / Stat Badges */}
    <div className="flex flex-wrap gap-3 mb-10">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium">
        38+ years in South Florida
      </span>
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium">
        Court-ready & lender-ready reports
      </span>
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium">
        Typical 24–48 hr turnaround
      </span>
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium">
        Broward • Miami-Dade • Palm Beach
      </span>
    </div>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Deep Local Expertise",
          desc: "Neighborhood-level comps and market nuance you can’t fake.",
          delay: "0ms",
        },
        {
          title: "Certified & Versatile",
          desc: "Residential, commercial, and FEMA 50% Rule—done right.",
          delay: "75ms",
        },
        {
          title: "Fast, Reliable Turnaround",
          desc: "Most files completed within 24–48 hours, without cutting corners.",
          delay: "150ms",
        },
        {
          title: "Defensible Reports",
          desc: "Accepted by lenders and attorneys; expert-witness experience.",
          delay: "225ms",
        },
        {
          title: "Transparent Pricing",
          desc: "Clear quotes upfront—no hidden fees, ever.",
          delay: "300ms",
        },
        {
          title: "Responsive Communication",
          desc: "You get status updates and direct access to your appraiser.",
          delay: "375ms",
        },
      ].map((item, idx) => (
        <article
          key={idx}
          className={`group h-full rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg 
            ${idx % 2 === 0 ? "bg-white" : "bg-[#FAF4EB]"}`}
        >
          <div className="flex items-start gap-4">
            {/* Accessible check icon */}
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1E3A5F] text-white shrink-0"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0L3.293 9.957a1 1 0 011.414-1.414l3.043 3.043 6.543-6.543a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-playfair text-2xl font-semibold text-neutral-900 group-hover:text-[#C3A36B] transition">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center rounded-lg bg-[#F5F1EA] px-6 py-3 font-work font-semibold uppercase tracking-wide text-black hover:bg-[#C3A36B] transition"
        aria-label="Request a quote for a home appraisal"
      >
        Get a Quote
      </Link>
      <p className="text-sm text-neutral-600">
        Need it fast? Ask about rush options when you contact us.
      </p>
    </div>
  </div>
</section>



        <Quote />
      </main>
    </>
  );
}