import './Steps.css'

export default function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <div className="steps-top">
          <span className="section-label">Your Progress</span>
          <h2 className="section-title">EVERY STEP<br/><span className="gold">COUNTS.</span></h2>
        </div>

        <div className="steps-content">
          <div className="steps-left">
            <div className="activity-card">
              <div className="card-header">
                <span className="label">Activity</span>
                <span className="close">✕</span>
              </div>
              <div className="card-body">
                <div className="activity-number">12,480</div>
                <div className="activity-bars">
                  <div className="bar" style={{height: '60%'}}></div>
                  <div className="bar" style={{height: '80%'}}></div>
                  <div className="bar" style={{height: '45%'}}></div>
                  <div className="bar" style={{height: '70%'}}></div>
                  <div className="bar" style={{height: '90%'}}></div>
                </div>
                <div className="stats">
                  <div className="stat">
                    <span className="stat-label">Steps</span>
                    <span className="stat-value">8,450</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Distance</span>
                    <span className="stat-value">6.2km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="steps-right">
            <p className="steps-description">
              Consistency is the foundation of longevity. Track every mile, every rep, and every moment of dedication to see your evolution in real time.
            </p>
            <div className="stats-display">
              <div className="stat-item">
                <span className="stat-number">14+M</span>
                <span className="stat-name">Steps Tracked</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">32M</span>
                <span className="stat-name">Calories Burned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
