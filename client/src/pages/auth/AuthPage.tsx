import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AuthPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
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
          const { token } = await response.json();
          sessionStorage.setItem("auth_token", token);

          const userResponse = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/current-user`, {
            method: 'GET',
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });

          if (userResponse.ok) {
            const userData = await userResponse.json();
            setToastMessage("Login successful!");

            setTimeout(() => {
              setToastMessage(null);
              if (userData.role === 'admin') {
                navigate("/dashboard");
              } else {
                navigate("/");
              }
            }, 1000);
          } else {
            setToastMessage("Failed to retrieve user data!");
            setTimeout(() => {
              setToastMessage(null);
            }, 1000);
          }
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
      <Header />
      
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-700">
              {isRegistering ? "Register" : "Login"}
            </h1>
          </div>

          <form 
            onSubmit={isRegistering ? handleRegister : handleLogin} 
            className="space-y-4"
          >
            {isRegistering && (
              <div>
                <label className="block text-gray-600">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button 
              onClick={() => setIsRegistering(!isRegistering)} 
              className="text-indigo-500 hover:text-indigo-600"
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
