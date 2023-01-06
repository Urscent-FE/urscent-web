import axios, { AxiosError } from 'axios';

const axiosAuth = axios.create({
  baseURL: 'https://api.urscent.co.kr/auth',
  headers: {
    'content-type': 'application/json',
  },
});

export const login = async (payload: { email: string; password: string }) => {
  try {
    const { data } = await axiosAuth.post('login', payload);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data.detail);
    }
    return false;
  }
};

export const signup = async (payload: {
  email: string;
  password: string;
  gender?: string;
  name?: string;
  birthyear?: string;
}) => {
  try {
    const { data } = await axiosAuth.post('signup', payload);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data.detail);
    }
    return false;
  }
};
