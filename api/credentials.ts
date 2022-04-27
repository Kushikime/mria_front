import clientAPI from '.';
import { CredentialCreate, CredentialUpdate } from '../types/credentials';

export const getCredentials = () => {
  return clientAPI.get('/credentials', {
    headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` },
  });
};

export const createCredentials = (credential: CredentialCreate) => {
  return clientAPI.post(
    '/credentials',
    { ...credential },
    { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } }
  );
};

export const updateCredentials = (credential: CredentialUpdate) => {
  return clientAPI.patch(
    `/credentials/${credential.id}`,
    { ...credential },
    { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } }
  );
};

export const deleteCredentials = (id: number) => {
  return clientAPI.delete(`/credentials/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` },
  });
};
