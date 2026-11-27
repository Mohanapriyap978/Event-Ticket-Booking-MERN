
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Ticket,
  ShieldCheck,
} from "lucide-react";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      setError("Please enter both email and password.");
      return;
    }

    let users = [];

    try {
      users = JSON.parse(
        localStorage.getItem("eventease_users") || "[]"
      );
    } catch {
      setError("Unable to read registered accounts. Please sign up again.");
      return;
    }

    if (!Array.isArray(users)) {
      setError("Account data is invalid. Please register again.");
      return;
    }

    const user = users.find(
      (item) =>
        item.email?.trim().toLowerCase() === cleanEmail &&
        item.password === password
    );

    if (!user) {
      setError("Incorrect email or password. Please check your details.");
      return;
    }

    const currentUser = {
      name: user.name,
      email: user.email,
      phone: user.phone || "",
    };

    localStorage.setItem(
      "eventease_current_user",
      JSON.stringify(currentUser)
    );

    if (rememberMe) {
      localStorage.setItem("eventease_remember_email", cleanEmail);
    } else {
      localStorage.removeItem("eventease_remember_email");
    }

    navigate("/dashboard");
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
          <span className="auth-tag">
            <Ticket size={14} /> YOUR EVENT JOURNEY STARTS HERE
          </span>

          <h1>Welcome Back!</h1>
          <p>Sign in to discover and book amazing events.</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="auth-input-group">
            <label htmlFor="signin-email">Email Address</label>

            <div className="auth-input">
              <Mail size={19} />

              <input
                id="signin-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="signin-password">Password</label>

            <div className="auth-input">
              <Lock size={19} />

              <input
                id="signin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          <div className="auth-options">
            <label className="auth-remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>

            <span className="auth-secure">
              <ShieldCheck size={15} />
              Secure demo login
            </span>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <button type="submit" className="auth-submit">
            Sign In
            <ArrowRight size={19} />
          </button>

        </form>

        <div className="auth-divider">
          <span>NEW TO EVENTEASE?</span>
        </div>

        <div className="auth-footer">
          Don't have an account?
          <Link to="/signup"> Create Account</Link>
        </div>

        <p className="auth-bottom-text">
          © 2026 EventEase. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default SignIn;
