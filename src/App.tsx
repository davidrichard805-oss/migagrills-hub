import './App.css';

function App() {
  const whatsappNumber = '2348166823986';

  const orderOnWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello MIGAGRILLS HUB, I would like to make an enquiry about your shawarma bread supply.'
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="website">
      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="logo-area">
          <div className="logo">M</div>

          <div>
            <h2>MIGAGRILLS HUB</h2>
            <p>Shawarma Bread Supply</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#supply">Our Supply</a>
          <a href="#delivery">Delivery</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="order-button" onClick={orderOnWhatsApp}>
          Order / Enquire
        </button>
      </header>

      {/* ================= HERO ================= */}

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="small-title">
              QUALITY • CONSISTENCY • RELIABILITY
            </span>

            <h1>
              Reliable Shawarma Bread
              <span>Supply for Your Business.</span>
            </h1>

            <p>
              MIGAGRILLS HUB supplies quality shawarma bread to supermarkets,
              restaurants, shawarma vendors, grill businesses and other food
              businesses across Lagos.
            </p>

            <div className="hero-buttons">
              <button onClick={orderOnWhatsApp}>📱 Order on WhatsApp</button>

              <a href="#supply" className="learn-button">
                Explore Our Supply
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>10+</strong>
                <span>Regular Supermarket Clients</span>
              </div>

              <div>
                <strong>1,000+</strong>
                <span>Breads Supplied Weekly</span>
              </div>

              <div>
                <strong>Lagos</strong>
                <span>Primary Delivery Area</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="section" id="about">
          <div className="section-heading">
            <span>WHO WE ARE</span>

            <h2>Your Reliable Shawarma Bread Supply Partner</h2>

            <p>
              MIGAGRILLS HUB is focused on dependable shawarma bread supply for
              businesses that need consistent products for their daily
              operations.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="icon">🫓</div>

              <h3>Quality Supply</h3>

              <p>
                We focus on supplying shawarma bread suitable for supermarkets,
                shawarma businesses, restaurants and grill operators.
              </p>
            </div>

            <div className="about-card">
              <div className="icon">📦</div>

              <h3>Business-Focused</h3>

              <p>
                Our service is designed around businesses that need dependable
                shawarma bread supply for their regular operations.
              </p>
            </div>

            <div className="about-card">
              <div className="icon">🤝</div>

              <h3>Reliable Partnership</h3>

              <p>
                We aim to build long-term relationships with our customers
                through dependable communication, supply consistency and
                professional service.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SUPPLY ================= */}

        <section className="supply-section" id="supply">
          <div className="section-heading light">
            <span>OUR SUPPLY</span>

            <h2>Built for Businesses That Need Reliable Supply</h2>

            <p>
              Whether you operate a supermarket or run a shawarma business,
              MIGAGRILLS HUB is positioned to support your regular bread
              requirements.
            </p>
          </div>

          <div className="supply-grid">
            <div className="supply-card">
              <div className="big-icon">🏪</div>

              <h3>Supermarkets</h3>

              <p>
                Regular supply support for supermarkets that stock shawarma
                bread for their customers and business clients.
              </p>
            </div>

            <div className="supply-card">
              <div className="big-icon">🌯</div>

              <h3>Shawarma Businesses</h3>

              <p>
                Dependable bread supply for shawarma vendors, restaurants and
                businesses preparing shawarma daily.
              </p>
            </div>

            <div className="supply-card">
              <div className="big-icon">🔥</div>

              <h3>Grill Businesses</h3>

              <p>
                Supply support for grill operators and food businesses that
                include shawarma and related products in their operations.
              </p>
            </div>
          </div>

          <div className="supply-note">
            <strong>Our current supply capacity:</strong>

            <span>
              We currently serve 10+ regular supermarket clients, with
              approximately 100 breads supplied to each client every week.
            </span>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section className="section">
          <div className="section-heading">
            <span>HOW IT WORKS</span>

            <h2>Simple Business Ordering</h2>

            <p>
              We keep the process straightforward so businesses can enquire,
              confirm their requirements and arrange supply.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>

              <h3>Make an Enquiry</h3>

              <p>
                Contact MIGAGRILLS HUB through WhatsApp or phone and tell us
                what your business needs.
              </p>
            </div>

            <div className="step">
              <div className="step-number">02</div>

              <h3>Confirm Quantity</h3>

              <p>
                Let us know the quantity and your preferred supply schedule.
              </p>
            </div>

            <div className="step">
              <div className="step-number">03</div>

              <h3>Confirm Delivery</h3>

              <p>
                We agree on the delivery arrangement and location before
                dispatch.
              </p>
            </div>

            <div className="step">
              <div className="step-number">04</div>

              <h3>Receive Your Supply</h3>

              <p>
                Your shawarma bread is delivered according to the agreed
                arrangement.
              </p>
            </div>
          </div>
        </section>

        {/* ================= DELIVERY ================= */}

        <section className="delivery-section" id="delivery">
          <div className="delivery-content">
            <span>DELIVERY</span>

            <h2>Lagos Delivery. Business Supply Made Easier.</h2>

            <p>
              Our primary delivery area is Lagos. However, we can consider
              supply outside Lagos when a suitable order arrangement is made.
            </p>

            <div className="delivery-points">
              <div>📍 Lagos — Primary Delivery Area</div>

              <div>🚚 Business & Bulk Supply</div>

              <div>📦 Regular Supply Arrangements</div>

              <div>🗺️ Outside Lagos — By Arrangement</div>
            </div>

            <button onClick={orderOnWhatsApp}>Discuss Your Delivery</button>
          </div>
        </section>

        {/* ================= WHY US ================= */}

        <section className="section">
          <div className="section-heading">
            <span>WHY MIGAGRILLS HUB</span>

            <h2>A Supply Partner You Can Build With</h2>

            <p>
              Our goal is not simply to make a delivery. We want to become a
              dependable supply partner for businesses that need shawarma bread
              consistently.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="icon">✅</div>

              <h3>Consistency</h3>

              <p>
                We understand that food businesses need reliable supply to keep
                their daily operations moving.
              </p>
            </div>

            <div className="about-card">
              <div className="icon">⚡</div>

              <h3>Responsive Service</h3>

              <p>
                Clear communication helps us understand customer requirements
                and arrange supply efficiently.
              </p>
            </div>

            <div className="about-card">
              <div className="icon">🤝</div>

              <h3>Long-Term Relationships</h3>

              <p>
                We value repeat business and professional relationships with
                supermarkets and food businesses.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section className="section" id="contact">
          <div className="section-heading">
            <span>CONTACT MIGAGRILLS HUB</span>

            <h2>Ready to Discuss Your Supply?</h2>

            <p>
              Contact us to discuss your shawarma bread requirements, quantity,
              delivery location and regular supply needs.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📱</div>

              <h3>WhatsApp / Phone</h3>

              <a href="tel:+2348166823986">+234 816 682 3986</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>

              <h3>Email</h3>

              <a href="mailto:migagrills0205@yahoo.com">
                migagrills0205@yahoo.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>

              <h3>Our Base</h3>

              <p>
                9 Princess Adeseye Crescent,
                <br />
                Lekki Phase 1,
                <br />
                Lagos State, Nigeria.
              </p>
            </div>
          </div>

          <div className="final-cta">
            <h2>Let's Talk About Your Supply Needs.</h2>

            <p>
              Supermarket supply • Shawarma businesses • Grill operators • Bulk
              orders
            </p>

            <button onClick={orderOnWhatsApp}>
              📱 Chat With MIGAGRILLS HUB
            </button>
          </div>
        </section>
      </main>
      {/* SOCIAL MEDIA */}

      <section className="social-section">
        <h2>Follow MIGAGRILLS HUB</h2>

        <p>
          Connect with us for products, updates, promotions and business supply.
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            📸 Instagram
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            📘 Facebook
          </a>

          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            🎵 TikTok
          </a>

          <a href="mailto:migagrills0205@yahoo.com">✉️ Email Us</a>

          <a href="tel:+2348166823986">📞 Call Us</a>
        </div>
      </section>
      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div>
          <h3>MIGAGRILLS HUB</h3>

          <p>Professional Shawarma Bread Supply</p>

          <p>Lagos, Nigeria</p>
        </div>

        <div>
          <p>
            Registration No: <strong>9796242</strong>
          </p>

          <p>📱 +234 816 682 3986</p>

          <p>✉️ migagrills0205@yahoo.com</p>
        </div>

        <div>
          <p>© {new Date().getFullYear()} MIGAGRILLS HUB.</p>

          <p>All rights reserved.</p>
        </div>
        {/* SOCIAL MEDIA */}
        <section className="social-section">
          <div className="section-heading">
            <span>FOLLOW US</span>
            <h2>Connect With MIGAGRILLS HUB</h2>
            <p>
              Stay connected with us for new products, updates, promotions and
              business supply opportunities.
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              📸 Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              📘 Facebook
            </a>

            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              🎵 TikTok
            </a>

            <a href="mailto:migagrills0205@yahoo.com">✉️ Email Us</a>

            <a href="tel:+2348166823986">📞 Call Us</a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
