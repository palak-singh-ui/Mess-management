import React, { useState } from 'react'
import '../Pages/CSS/Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md"
import { FiLock } from "react-icons/fi"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"

const Login = () => {
 const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const login = async () => {
    if (!email || !password || !role) {
      alert("Please fill all fields")
      return
    }

    try {
      const res = await axios.get('/Data/User.json')

      const user = res.data.find(
        (u) =>
          u.email === email &&
          u.password === password &&
          u.role === role
      )

      if (user) {
        localStorage.setItem("role", user.role)
        localStorage.setItem("name", user.name)
        localStorage.setItem("token", user.token)

        navigate("/dashboard")
      } else {
        alert("Invalid Email, Password or Role")
      }
    } catch (error) {
      alert("JSON file not found")
    }
  }
  return (
    <div className="mess-login-container">
      <div className="login-outer">
        <div className="login-sidebar-img">
          <img   src="/Images/login-side.png"   alt="Mess Management"/>
       </div>
        <div className="login-form">

          <div className="login-heading">
            <h2>Welcome Back!</h2>
            <p>Login to your Mess Management Account</p>
          </div>

          <div className="input-box">
            <MdOutlineEmail className="input-icon" />

            <input
              type="text"
              placeholder="Enter Email or Student ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FiLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
            </span>
          </div>

          <div className="role-section">

            <label>
              <input
                type="radio"
                value="Admin"
                checked={role === "Admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              Admin
            </label>

            <label>
              <input
                type="radio"
                value="Manager"
                checked={role === "Manager"}
                onChange={(e) => setRole(e.target.value)}
              />
              Manager
            </label>

            <label>
              <input
                type="radio"
                value="Student"
                checked={role === "Student"}
                onChange={(e) => setRole(e.target.value)}
              />
              Student
            </label>

          </div>

        <div className="forgot-password">
            <span>
              <input type="checkbox" />
              Remember Me
            </span>
            <NavLink to="/forgot-password">
              Forgot Password?
            </NavLink>

          </div>

          <button
            className="loginbtn"
            onClick={login}
          >
            Login
          </button>

          <p className="login-footer">
            Don't have an account? Contact your mess manager
          </p>

        </div>
      </div>
    </div>
  )
}

export default Login

