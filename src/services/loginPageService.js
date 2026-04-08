export const loginUser = async (email, password) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Login failed. Please try again.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'An error occurred during login. Please check your connection and try again.');
  }
};
