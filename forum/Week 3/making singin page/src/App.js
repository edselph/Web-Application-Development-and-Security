// import logo from './logo.svg';
import './App.css';
import profile from './pic/profile.png'
import lock from './pic/lock.png'
import email from './pic/email.png'

function App() {
  return (
    <div className="Main">
      <div className="Sub-Main">
        <div>
          <div className="image">
            <div className="image-container">
              <img src={profile} alt="profile" className="profile"></img>
              </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"></img>
              <input type="text" placeholder="Email" className="user-mail"></input>
            </div>
            
            <div>
              <img src={lock} alt="lock" className="lock"></img>
              <input type="text" placeholder="password" className= "user-password"></input>
            </div>

            <div className="the-button">
              <button>Login</button>
            </div>
            <p className="forgot">
              <a> forgot your password? </a> Or <a href="#"> sign up</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
