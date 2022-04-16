import axios from 'axios';
// import {BASE_URL} from '@env';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const clientAPI = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

/**
 * Function to check if response
 * with this path should not show error message
 *
 * @param {string} path - path of the response
 */
const checkForPath = (response: { data: { path: string | string[] }; config: { method: string } }) => {
  const excludePaths = ['/sign-in', '/refresh'];
  return excludePaths.find((value) => response?.data?.path.includes(value) && response?.config?.method !== 'get');
};

export const handleError = (error: any) => {
  if (error?.response?.status !== 403 && error?.response?.status !== 401 && !checkForPath(error?.response)) {
    console.log(error?.response);
  }

  if (error?.response?.status === 403) {
    return clientAPI
      .post('/refresh', { refreshToken: localStorage.getItem('refreshToken') })
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        localStorage.clear();
        // navigate to home
      });
  }

  return Promise.reject(error?.response);
};

clientAPI.interceptors.response.use(
  (response) => {
    if (response.status > 399) {
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    return handleError(error);
  }
);

export default clientAPI;