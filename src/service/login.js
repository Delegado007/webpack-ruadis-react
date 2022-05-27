import axios from 'axios';

const baseURL = process.env.API;

export const login = async credentials => {
  const { data } = await axios.post(`${baseURL}/api/v1/auth/login`, credentials);
  return data;
}
export const register = async credentials => {
  const { data } = await axios.post(`${baseURL}/api/v1/users`, credentials);
  return data;
}

export const recovery = async credentials => {
  const { data } = await axios.post(`${baseURL}/api/v1/auth/recovery`, credentials);
  return data;
}

export const changePassword = async credentials => {
  const { data } = await axios.post(`${baseURL}/api/v1/auth/change-password`, credentials);
  return data;
}