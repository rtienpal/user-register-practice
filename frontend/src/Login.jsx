import React, { useState } from "react"
import { Link } from "react-router-dom"
import Validation from "./LoginValidation"

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(Validation(values))
  }

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 vw-100">
      <div className="bg-white p-3 rounded">
        <h2 className="mb-5 d-flex justify-content-center">Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              className="form-control rounded-0"
              name="email"
              onChange={handleChange}
              placeholder="Enter Email"
              type="email"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              className="form-control rounded-0"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              type="password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100">
            <strong>Log In</strong>
          </button>
          <p>You agree to our terms and policies.</p>
          <Link to="/signup" className="btn btn-default border w-100 bg-light">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
