import './Fuel.css'

export default function Fuel() {
  return (
    <section className="fuel">
      <div className="container">
        <div className="fuel-content">
          <div className="fuel-left">
            <span className="section-label">Holistic Growth</span>
            <h2 className="fuel-title">
              <span className="gold">FUEL YOUR</span><br />
              EVOLUTION
            </h2>
            <p className="fuel-description">
              Nutrition, recovery, and mindset are the pillars of sustainable transformation. We guide every aspect of your journey.
            </p>
          </div>

          <div className="fuel-right">
            <div className="feature-cards">
              <div className="feature-card">
                <div className="card-icon">🥗</div>
                <h3>Nutrition</h3>
                <p>AI-powered meal plans tailored to your goals</p>
              </div>
              <div className="feature-card">
                <div className="card-icon">😴</div>
                <h3>Recovery</h3>
                <p>Optimal rest and recovery recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
