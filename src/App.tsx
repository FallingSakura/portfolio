import avatar from '/avatar.jpg'
import './App.css'

function App() {
  return (
    <>
      <div className="home flex">
        <div className="container">
          <div className="about flex">
            <div className="img-container">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="title">
              <h1>Hi, I'm <span className="name">FallingSakura</span>.</h1>
            </div>
          </div>
          <div className="social"></div>
        </div>
        {/* <div className="test">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div> */}
      </div>
    </>
  )
}

export default App
