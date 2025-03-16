import "@/styles/home.css"

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>Honest Real Estate Appraisals</h1>
                <p>Accurate, reliable, and certified property evaluations.</p>
                <button className="cta-button">Get your free consultation today!</button>
            </section>

            <section className="services">
                <h2>Our Services</h2>
                <div className="service-grid">
                    <div className="service-card">Residential Appraisals</div>
                    <div className="service-card">Commercial Appraisals</div>
                </div>
            </section>

            <section className="establish">
            <h2>Why Choose Us?</h2>
                <ul>
                    <li>✔️ Certified appraisers with 30+ years of experience</li>
                    <li>✔️ Fast & accurate property evaluations</li>
                    <li>✔️ Trusted by major banks & law firms</li>
                </ul>
            </section>

            <section className="testmonials">
                <h2>What Our Clients Say</h2>

            </section>

            <section className="contact">
                <h2>Contact us</h2>
                <button className="cta-button">Get in Touch</button>
            </section>
        </div>
    )
}

export default Home;