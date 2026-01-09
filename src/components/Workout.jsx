import './Workout.css'

export default function Workout() {
  return (
    <section className="workout">
      <div className="container">
        <div className="workout-content">
          <div className="workout-left">
            <span className="section-label">Personalized</span>
            <h2 className="workout-title">
              YOUR<br />WORKOUT.<br />
              <span className="gold">YOUR RULES.</span>
            </h2>
            <p className="workout-description">
              Customizable workouts designed by AI to match your lifestyle. Build and adjust routines designed for your specific goals and schedule.
            </p>
            <button className="btn-create">Create Custom Routine</button>
          </div>

          <div className="workout-right">
            <div className="custom-card">
              <div className="card-header">
                <span className="label">Custom</span>
                <span className="icon">⚙️</span>
              </div>
              <div className="card-body">
                <div className="routine-item">
                  <span className="routine-name">Morning Run</span>
                  <span className="routine-time">30 min</span>
                </div>
                <div className="routine-item">
                  <span className="routine-name">Strength Train</span>
                  <span className="routine-time">45 min</span>
                </div>
                <div className="routine-item">
                  <span className="routine-name">Flexibility</span>
                  <span className="routine-time">15 min</span>
                </div>
                <button className="btn-add">+ Add Routine</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
