import { useState } from 'react';
import { loginUser } from '../services/loginPageService';
import { validateEmail, validatePassword } from '../utils/validators';

const useLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError('');
    setGeneralError('');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError('');
    setGeneralError('');
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);
    setEmailError(error || '');
  };

  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error || '');
  };

  const handleRememberMeChange = (checked) => {
    setRememberMe(checked);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    window.location.href = '/forgot-password';
  };

  const handleSignUp = () => {
    window.location.href = '/sign-up';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError('');
    setEmailError('');
    setPasswordError('');

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    if (emailValidationError) {
      setEmailError(emailValidationError);
    }
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
    }

    if (emailValidationError || passwordValidationError) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await loginUser(email, password);
      
      if (response && response.success === false) {
        setGeneralError(response.message || 'Login failed. Please try again.');
      } else if (response && response.success !== false) {
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('userEmail', email);
        }
        window.location.href = '/dashboard';
      }
    } catch (error) {
      setGeneralError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};

export default useLoginPage;
