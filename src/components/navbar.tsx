// import './navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="profile">
        <div className="profilePhotoContainer">
          <img className="profilePhoto" src="./profile.jpeg" alt="HaithamPP" />
        </div>
        <span>Haitham BENHAMMOUDA</span>
      </div>
      <div className='menu'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}