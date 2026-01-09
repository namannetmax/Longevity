import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-label">Transform your body</span>
            <h1 className="hero-title">
              TRAIN<br />
              <span className="gold">BEYOND</span><br />
              YEARS.
            </h1>
            <p className="hero-description">
              The leap from fitness goals to tangible experience is finally here. Our AI-powered training will guide you to peak performance.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <span>📱</span> App Store
              </button>
              <button className="btn-secondary">
                <span>🔗</span> Google Play
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="pricing-card">
              <div className="card-header">
                <span className="badge">Trending</span>
              </div>
              <div className="card-body">
                <h3>Premium Plan</h3>
                <div className="price-section">
                  <span className="currency">$</span>
                  <span className="price">9.99</span>
                  <span className="period">/mo</span>
                </div>
                <ul className="features">
                  <li>✓ AI Training</li>
                  <li>✓ Progress Track</li>
                  <li>✓ Custom Workouts</li>
                </ul>
                <button className="btn-subscribe">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
