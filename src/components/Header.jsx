import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">longevity</span>
          </div>

          <nav className="nav">
            <a href="#home">home</a>
            <a href="#about">features</a>
            <a href="#plan">plans</a>
            <a href="#community">community</a>
          </nav>

          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </header>
  )
}
