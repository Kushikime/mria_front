import clientAPI from '.';
import { WithdrawalCreate, WithdrawalUpdate } from '../types/withdrawals';

export const getWithdrawals = (page = 1, perPage = 5) => {
  return clientAPI.get(`/withdrawals?page=${page}&perPage=${perPage}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` },
  });
};

export const createWithdrawal = (withdrawal: WithdrawalCreate) => {
  return clientAPI.post(
    '/withdrawals',
    { ...withdrawal },
    { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } }
  );
};

export const updateWithdrawal = (withdrawal: WithdrawalUpdate) => {
  return clientAPI.patch(
    `/withdrawals/${withdrawal.id}`,
    { ...withdrawal },
    { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } }
  );
};

export const deleteWithdrawal = (id: number) => {
  return clientAPI.delete(`/withdrawals/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` },
  });
};
