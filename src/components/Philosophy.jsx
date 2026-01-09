import './Philosophy.css'

export default function Philosophy() {
  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-header">
          <h2 className="philosophy-title">THE LONGEVITY PHILOSOPHY</h2>
        </div>

        <div className="pillars">
          <div className="pillar">
            <span className="pillar-icon">💪</span>
            <h3>Absolute Strength</h3>
            <p>Build unshakable physical power</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">🧠</span>
            <h3>Mental Clarity</h3>
            <p>Cultivate mental resilience</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">⚡</span>
            <h3>Energized Future</h3>
            <p>Sustain vitality for life</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">🎯</span>
            <h3>Consistent Growth</h3>
            <p>Never stop evolving</p>
          </div>
        </div>
      </div>
    </section>
  )
}
