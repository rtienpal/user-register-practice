import React, {useState} from "react"
import { Link } from "react-router-dom"
import Validation from "./SignUpValidation"

function SignUp() {
  const [values, setValues] = useState({
    name: "",
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
        <h2 className="mb-5">Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label htmlFor="Name">
              <strong>Name</strong>
            </label>
            <input
              className="form-control rounded-0"
              name="name"
              onChange={handleChange}
              placeholder="Enter Name"
              type="text"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div class="mb-3">
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
              onChange={handleChange}
              placeholder="Enter Password"
              type="password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button className="btn btn-success w-100">
            <strong>Sign Up</strong>
          </button>
          <p>You agree to our terms and policies.</p>
          <Link to="/" className="btn btn-default border w-100 bg-light">
            Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
