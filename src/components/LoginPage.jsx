import React from 'react';
import useLoginPage from '../hooks/useLoginPage';
import './LoginPage.css';

const LoginPage = () => {
  const {
    email,
    password,
    rememberMe,
    showPassword,
    emailError,
    passwordError,
    generalError,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    handleRememberMeChange,
    handleTogglePassword,
    handleForgotPassword,
    handleSignUp,
    handleSubmit,
  } = useLoginPage();

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="left-panel-content">
          <div className="logo-section">
            <svg className="network-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <circle cx="50" cy="20" r="8" fill="#FFFFFF" />
              <circle cx="75" cy="50" r="8" fill="#FFFFFF" />
              <circle cx="50" cy="80" r="8" fill="#FFFFFF" />
              <circle cx="25" cy="50" r="8" fill="#FFFFFF" />
              <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
              <line x1="50" y1="20" x2="75" y2="50" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="25" y2="50" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="75" y1="50" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="25" y1="50" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="50" y2="50" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="75" y2="50" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="25" y2="50" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />
            </svg>
          </div>
          <h1 className="left-panel-title">Discovery Platform</h1>
          <p className="left-panel-subtitle">Powered by CHANGEPOND</p>
          <div className="geometric-pattern">
            <div className="circle circle-1" />
            <div className="circle circle-2" />
            <div className="circle circle-3" />
            <div className="line line-1" />
            <div className="line line-2" />
          </div>
        </div>
      </div>

      <div className="login-right-panel">
        <div className="right-panel-content">
          <div className="header-section">
            <svg className="header-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#0066FF" strokeWidth="2" />
              <circle cx="50" cy="20" r="8" fill="#0066FF" />
              <circle cx="75" cy="50" r="8" fill="#0066FF" />
              <circle cx="50" cy="80" r="8" fill="#0066FF" />
              <circle cx="25" cy="50" r="8" fill="#0066FF" />
              <circle cx="50" cy="50" r="6" fill="#0066FF" />
              <line x1="50" y1="20" x2="75" y2="50" stroke="#0066FF" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="25" y2="50" stroke="#0066FF" strokeWidth="1.5" />
              <line x1="75" y1="50" x2="50" y2="80" stroke="#0066FF" strokeWidth="1.5" />
              <line x1="25" y1="50" x2="50" y2="80" stroke="#0066FF" strokeWidth="1.5" />
              <line x1="50" y1="20" x2="50" y2="50" stroke="#0066FF" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="75" y2="50" stroke="#0066FF" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="25" y2="50" stroke="#0066FF" strokeWidth="1.5" />
              <line x1="50" y1="50" x2="50" y2="80" stroke="#0066FF" strokeWidth="1.5" />
            </svg>
            <h2 className="header-title">Discovery Platform</h2>
            <p className="header-subtitle">Powered by CHANGEPOND</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="form-heading">Login</h1>
            <p className="welcome-text">Welcome to Discovery Platform</p>

            {generalError && (
              <div className="error-alert" role="alert" aria-live="polite">
                {generalError}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#6C757D" />
                </svg>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  onBlur={handleEmailBlur}
                  autoComplete="email"
                  className={emailError ? 'input-error' : ''}
                  aria-invalid={emailError ? 'true' : 'false'}
                  aria-describedby={emailError ? 'email-error' : undefined}
                />
              </div>
              {emailError && (
                <span id="email-error" className="inline-error" role="alert" aria-live="polite">
                  {emailError}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="#6C757D" />
                </svg>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  onBlur={handlePasswordBlur}
                  autoComplete="current-password"
                  className={passwordError ? 'input-error' : ''}
                  aria-invalid={passwordError ? 'true' : 'false'}
                  aria-describedby={passwordError ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={handleTogglePassword}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#6C757D" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.83 9L15.23 12.39c.75-1.48.72-3.21-.06-4.78-.79-1.57-2.18-2.74-3.85-3.16-1.67-.42-3.38-.14-4.69.73l2.55 2.96c.48-.35 1.07-.53 1.67-.48.59.05 1.12.34 1.48.85.36.51.48 1.15.42 1.78zM19.58 16.08L23 19.5c1.06-1.81 1.76-3.88 1.76-6.12 0-2.24-.7-4.31-1.76-6.12l-2.44 2.8c.1 1.08.03 2.14-.35 3.12l.37.48zM9 6.3L6.21 3.5C4.25 5.28 2.89 7.6 2.89 10.2c0 2.6 1.36 4.92 3.32 6.7l2.77-3.21c-.1-1.08-.03-2.14.35-3.12l-.34-.27zM12 2C6.48 2 1.54 5.08.63 9.36c1.24 3.95 4.82 6.64 9.37 6.64 1.32 0 2.6-.23 3.82-.66L15.5 20.5c1.06-1.81 1.76-3.88 1.76-6.12 0-2.24-.7-4.31-1.76-6.12l-3.58 4.14c.36-.51.6-1.1.64-1.74.04-.64-.08-1.28-.35-1.88l3.95-4.56C14.6 2.23 13.32 2 12 2z" fill="#6C757D" opacity="0.5" />
                    </svg>
                  )}
                </button>
              </div>
              {passwordError && (
                <span id="password-error" className="inline-error" role="alert" aria-live="polite">
                  {passwordError}
                </span>
              )}
            </div>

            <div className="remember-forgot-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => handleRememberMeChange(e.target.checked)}
                  aria-label="Keep me logged in"
                />
                <span>Keep me logged In</span>
              </label>
              <button
                type="button"
                className="forgot-password-link"
                onClick={handleForgotPassword}
                aria-label="Go to forgot password page"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="signup-section">
            <span>Don't have an account? </span>
            <button
              type="button"
              className="signup-link"
              onClick={handleSignUp}
              aria-label="Go to sign up page"
            >
              Sign up
            </button>
          </div>

          <footer className="footer">
            © Copyright 2025 Changepond. All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
