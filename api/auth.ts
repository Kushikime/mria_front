import clientAPI from '.';

export const signIn = (email: string, password: string) => {
  return clientAPI.post(
    '/sign-in',
    { email: email, password: password },
    { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } }
  );
};

export const signOut = () => {
  return clientAPI.delete('/sign-out', {
    headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` },
  });
};
