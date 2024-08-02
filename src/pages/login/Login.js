import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar2 from "../../components/topbar2/Topbar2";
import "./login.css";
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home'); 
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="logincontainer">
      <Topbar2 />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <img src="/assets/Login in page image.png" alt="plant" className="plantimg" />
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <p className="loginLogo">Login</p>
              <span className="loginDesc">Welcome back !!</span>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="inputLabel">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="loginInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="password" className="inputLabel">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="loginInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="loginButton">Login</button>
              </form>
              <span className="signin">
                Don't have an account yet? 
                <Link to="/signup">
                  <button className="signinbutton">Sign up for free</button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
