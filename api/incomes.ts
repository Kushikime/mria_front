import clientAPI from '.';
import { IncomeUpdate } from '../types/incomes';

export const getIncomes = (page = 1, perPage = 5) => {
  return clientAPI.get(`/incomes?page=${page}&perPage=${perPage}`);
};

export const createIncome = (owner: string, amount: number, currency: string) => {
  return clientAPI.post(
    '/incomes',
    { owner, amount, currency },
    { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } }
  );
};

export const updateIncome = (income: IncomeUpdate) => {
  return clientAPI.patch(
    `/incomes/${income.id}`,
    { ...income },
    { headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` } }
  );
};

export const deleteIncome = (id: number) => {
  return clientAPI.delete(`/incomes/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('@accessToken')}` },
  });
};
