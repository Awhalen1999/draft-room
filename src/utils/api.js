const apiUrl = 'http://localhost:3000';

export async function registerUser(username, email, password) {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message.message);
    }

    const data = await response.json();
    return data; // Return the registered user data
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function loginUser(email, password) {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message.message);
    }

    const data = await response.json();
    return data; // You may return the token or user data as needed
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function logoutUser() {
  try {
    const response = await fetch(`${apiUrl}/users/logout`, {
      method: 'POST',
      credentials: 'include', // Include credentials to ensure session cookie is sent
    });

    if (!response.ok) {
      const message = await response.json();
      console.error('API: logoutUser error', message);
      throw new Error(message.message);
    }

    console.log('API: logoutUser response', await response.clone().json());
    return response.json();
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
}
