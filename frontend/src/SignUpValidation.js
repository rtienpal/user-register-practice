function Validation(credentials) {
  const errors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/

  if (!credentials.name || !credentials.email.name()) {
    errors.name = "Name is required."
  }

  if (!credentials.email || !credentials.email.trim()) {
    errors.email = "Email is required."
  } else if (!credentials.email.match(emailRegex)) {
    errors.email = "Invalid email format."
  }

  if (!credentials.password || !credentials.password.trim()) {
    errors.password = "Password is required." // Set error for missing password
  } else if (
    typeof credentials.password === "string" &&
    !credentials.password.trim()
  ) {
    errors.password = "Password cannot be only whitespace."
  } else if (!credentials.password.match(passwordRegex)) {
    errors.password = "Password is weak..."
  }

  return errors
}

export default Validation
