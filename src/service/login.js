import axios from 'axios';

const baseURL = 'https://serene-ocean-03988.herokuapp.com/api/v1/auth/login';

export const login = async credentials => {
  const { data } = await axios.post(baseURL, credentials);
  return data;
}