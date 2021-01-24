export const BASE_URL = 'https://api.mgreen.students.nomoredomains.rocks';

// export const BASE_URL = 'http://localhost:3001';

export const register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password, name }),
})
  .then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      }
      else {
        return response;
      };
    } catch (err) {
      return (err)
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));

export const authorize = (email, password, token) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ password, email }),
})
  .then(((response) => response.json()))
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data.token;
    } else {
      throw new Error('wrong!');
    }
  })
  .catch((err) => console.log(err));

export const getContent = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((data) => data)



