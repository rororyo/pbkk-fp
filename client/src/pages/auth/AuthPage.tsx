import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Toast from "../../components/Toast";

const AuthPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null); 
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && password) {
      try {
        const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          if(data){
            sessionStorage.setItem('isLogin', 'true');
          }
          setToastMessage("Login successful!");
          setTimeout(() => {
            setToastMessage(null);
            navigate("/");
          }, 1000);
        } else {
          setToastMessage("Login failed. Invalid email or password!");
          setTimeout(() => {
            setToastMessage(null);
          }, 1000);
        }
      } catch (e) {
        setToastMessage("An error occurred. Please try again later.");
        console.log(e);
        setTimeout(() => {
          setToastMessage(null);
        }, 1000);
      }
    } else {
      setToastMessage("Invalid email or password!");
      setTimeout(() => {
        setToastMessage(null);
      }, 1000);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username && email && password) {
      try {
        const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          setToastMessage("Registration successful!");
          setTimeout(() => {
            setToastMessage(null);
            // navigate("/auth");
            window.location.reload();
          }, 1000);
        } else {
          setToastMessage("Registration failed. Please try again!");
          setTimeout(() => {
            setToastMessage(null);
          }, 1000);
        }
      } catch (e) {
        setToastMessage("An error occurred. Please try again later.");
        console.log(e);
        setTimeout(() => {
          setToastMessage(null);
        }, 1000);
      }
    } else {
      setToastMessage("All fields are required!");
      setTimeout(() => {
        setToastMessage(null);
      }, 1000);
    }
  };

  return (
    <>
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          duration={5000}
          onClose={() => setToastMessage(null)}
        />
      )}
      <StyledWrapper>
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input type="checkbox" className="toggle" />
              <span className="slider" />
              <span className="card-side" />
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Log in</div>
                  <form className="flip-card__form" action="">
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="flip-card__btn" onClick={handleLogin}>Let`s go!</button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Sign up</div>
                  <form className="flip-card__form" action="">
                    <input
                      className="flip-card__input"
                      placeholder="Username"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="flip-card__btn" onClick={handleRegister}>Confirm!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .wrapper {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
    margin: 0 auto;
  }

.switch {
    transform: translateY(-200px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50px;
    height: 20px;
  }

  .card-side::before {
    position: absolute;
    content: 'Log in';
    left: -70px;
    top: 0;
    width: 100px;
    text-decoration: underline;
    color: var(--font-color);
    font-weight: 600;
  }

  .card-side::after {
    position: absolute;
    content: 'Sign up';
    left: 70px;
    top: 0;
    width: 100px;
    text-decoration: none;
    color: var(--font-color);
    font-weight: 600;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color);
    transition: 0.3s;
  }

  .slider:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(30px);
  }

  .toggle:checked ~ .card-side:before {
    text-decoration: none;
  }

  .toggle:checked ~ .card-side:after {
    text-decoration: underline;
  }

  .flip-card__inner {
    width: 300px;
    height: 350px;
    position: relative;
    background-color: transparent;
    perspective: 1000px;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .toggle:checked ~ .flip-card__inner {
    transform: rotateY(180deg);
  }

  .flip-card__front, .flip-card__back {
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: lightgrey;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }

  .flip-card__back {
    width: 100%;
    transform: rotateY(180deg);
  }

  .flip-card__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .title {
    margin: 20px 0;
    font-size: 25px;
    font-weight: 900;
    color: var(--main-color);
  }

  .flip-card__input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .flip-card__btn {
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }
`;

export default AuthPage;
