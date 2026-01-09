import './Plan.css'

export default function Plan() {
  return (
    <section className="plan">
      <div className="container">
        <div className="plan-content">
          <div className="plan-left">
            <h2 className="plan-title">
              THE PLAN.<br />
              <span className="gold">STARTS NOW.</span>
            </h2>
            <p className="plan-description">
              Whether you're looking to build muscle, lose weight or simply feel better, we have a plan for you. Our plans are designed for every goal.
            </p>
          </div>

          <div className="plan-right">
            <div className="app-mockup">
              <div className="mockup-screen">
                <div className="mockup-header">
                  <span className="icon">⚡</span>
                </div>
                <div className="mockup-content">
                  <h3>Choose Your Plan</h3>
                  <div className="plan-option">
                    <div className="plan-option-header">
                      <span>Starter</span>
                      <span className="price">$9.99</span>
                    </div>
                    <p className="plan-option-desc">Basic training</p>
                  </div>
                  <div className="plan-option active">
                    <div className="plan-option-header">
                      <span>Professional</span>
                      <span className="price gold">$19.99</span>
                    </div>
                    <p className="plan-option-desc">Full AI support</p>
                  </div>
                  <div className="plan-option">
                    <div className="plan-option-header">
                      <span>Elite</span>
                      <span className="price">$29.99</span>
                    </div>
                    <p className="plan-option-desc">Premium features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
