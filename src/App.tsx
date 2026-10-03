import './App.css';

const bakeryImages = {
  hero: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85',

  bread:
    'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=900&q=85',

  pastry:
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85',

  handmade:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85',
};

function App() {
  return (
    <div className="site-wrapper" id="top">
      <header className="navbar">
        <a
          href="#top"
          className="logo"
          aria-label="Crumb and Comb — back to top"
        >
          CRUMB <span>&</span> COMB
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#story">Our Story</a>
          <a href="#bakes">Our Bakes</a>
          <a href="#visit">Visit Us</a>
        </nav>

        <a href="#bakes" className="nav-button">
          Discover our bakes <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" aria-label="Bakery introduction">
          <div className="hero-content">
            <p className="eyebrow">A LITTLE BAKERY CONCEPT</p>

            <h1>
              Made slowly.
              <br />
              Loved <em>deeply.</em>
            </h1>

            <p className="hero-description">
              Honest ingredients, beautiful bakes, and the simple pleasure of
              something made by hand.
            </p>

            <div className="hero-actions">
              <a href="#bakes" className="primary-button">
                Explore our bakes <span>↗</span>
              </a>

              <a href="#story" className="text-link">
                Our story <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              Small moments. Freshly baked.
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-image"
              role="img"
              aria-label="Artisan bakery bread"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(35, 25, 17, 0.02), rgba(35, 25, 17, 0.30)), url("${bakeryImages.hero}")`,
              }}
            >
              <div className="image-overlay">
                <span>THE ART OF SLOW BAKING</span>
                <span>EST. WITH LOVE</span>
              </div>
            </div>

            <div className="floating-note">
              <span className="note-star">✳</span>
              <span>
                Good things
                <br />
                take time.
              </span>
            </div>

            <div className="image-caption">
              <span>01 / A TASTE OF HOME</span>
              <span>ARTISAN BAKERY</span>
            </div>
          </div>

          <div className="hero-index">01 — 03</div>
        </section>

        <section className="intro-section" id="story">
          <p className="section-label">A BAKERY WITH HEART</p>

          <h2>
            Not just bread.
            <br />
            <em>A little piece of happiness.</em>
          </h2>

          <p className="intro-text">
            There is something special about the smell of fresh bread, the
            warmth of a pastry, and taking a moment to enjoy the little things.
            This concept celebrates the beauty of thoughtful, handmade baking.
          </p>
        </section>

        <section className="bakes-section" id="bakes">
          <div className="section-heading">
            <div>
              <p className="section-label">FROM THE BAKERY</p>
              <h2>
                Made to be <em>savoured.</em>
              </h2>
            </div>

            <span className="section-number">02 / 03</span>
          </div>

          <div className="bake-grid">
            <article className="bake-card">
              <div
                className="bake-image bread-image"
                role="img"
                aria-label="Fresh artisan bread"
                style={{
                  backgroundImage: `linear-gradient(rgba(40, 25, 10, 0.05), rgba(40, 25, 10, 0.12)), url("${bakeryImages.bread}")`,
                }}
              >
                <span className="bake-number">01</span>
              </div>

              <div className="bake-info">
                <h3>Slow-made bread</h3>
                <span>THE EVERYDAY ESSENTIAL</span>
              </div>
            </article>

            <article className="bake-card">
              <div
                className="bake-image pastry-image"
                role="img"
                aria-label="Fresh pastries"
                style={{
                  backgroundImage: `linear-gradient(rgba(40, 25, 10, 0.03), rgba(40, 25, 10, 0.12)), url("${bakeryImages.pastry}")`,
                }}
              >
                <span className="bake-number">02</span>
              </div>

              <div className="bake-info">
                <h3>Little sweet things</h3>
                <span>MADE FOR THE MOMENT</span>
              </div>
            </article>

            <article className="bake-card">
              <div
                className="bake-image handmade-image"
                role="img"
                aria-label="Artisan bakery bread making"
                style={{
                  backgroundImage: `linear-gradient(rgba(40, 25, 10, 0.03), rgba(40, 25, 10, 0.12)), url("${bakeryImages.handmade}")`,
                }}
              >
                <span className="bake-number">03</span>
              </div>

              <div className="bake-info">
                <h3>Made by hand</h3>
                <span>THE BEAUTY OF SIMPLE</span>
              </div>
            </article>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <p className="section-label">COME SAY HELLO</p>

          <h2>
            Good days begin
            <br />
            with <em>good bread.</em>
          </h2>

          <p>A warm welcome, a fresh bake, and a reason to slow down.</p>

          <a href="#top" className="primary-button">
            Back to the beginning <span>↑</span>
          </a>

          <span className="visit-note">DEMONSTRATION WEBSITE CONCEPT</span>
        </section>
      </main>

      <footer className="footer">
        <a href="#top" className="footer-logo">
          CRUMB <span>&</span> COMB
        </a>

        <p>A little warmth in every bake.</p>

        <div className="footer-bottom">
          <span>BAKERY WEBSITE CONCEPT</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
