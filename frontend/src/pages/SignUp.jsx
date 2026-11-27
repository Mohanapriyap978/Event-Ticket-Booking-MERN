
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();

    if (!name || !email || !phone || !formData.password) {
      setError("Please fill in all the fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agree) {
      setError("Please accept the terms and conditions.");
      return;
    }

    let users = [];

    try {
      users = JSON.parse(
        localStorage.getItem("eventease_users") || "[]"
      );
    } catch {
      setError("Unable to read account data. Please try again.");
      return;
    }

    if (!Array.isArray(users)) {
      users = [];
    }

    const existingUser = users.find(
      (user) => user.email?.trim().toLowerCase() === email
    );

    if (existingUser) {
      setError("This email is already registered. Please sign in.");
      return;
    }

    const newUser = {
      name,
      email,
      phone,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem(
      "eventease_users",
      JSON.stringify(users)
    );

    alert("Account created successfully! Please sign in.");

    navigate("/signin");
  };

  return (
    <div className="auth-container">
      <div className="auth-decoration auth-decoration-one"></div>
      <div className="auth-decoration auth-decoration-two"></div>

      <div className="auth-card">

        <div className="auth-brand">
          <div className="auth-logo">
            <CalendarDays size={27} />
          </div>

          <h2>Event<span>Ease</span></h2>
          <p>Your events, your experience.</p>
        </div>

        <div className="auth-heading">
          <h1>Create Account</h1>
          <p>Join EventEase and explore amazing experiences.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="auth-input-group">
            <label>Full Name</label>
            <div className="auth-input">
              <User size={19} />
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Email Address</label>
            <div className="auth-input">
              <Mail size={19} />
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Phone Number</label>
            <div className="auth-input">
              <Phone size={19} />
              <input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <div className="auth-input">
              <Lock size={19} />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <div className="auth-input">
              <Lock size={19} />
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          <label className="auth-terms">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I agree to the Terms and Conditions
          </label>

          {error && <div className="auth-error">{error}</div>}

          <button type="submit" className="auth-submit">
            <UserPlus size={19} />
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?
          <Link to="/signin"> Sign In</Link>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
