import clientAPI from '.';

export const signIn = (email: string, password: string) => {
  return clientAPI.post('/sign-in', { email: email, password: password });
};

export const signOut = () => {
  return clientAPI.delete('/sign-out', { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } });
};
