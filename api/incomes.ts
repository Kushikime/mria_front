import clientAPI from '.';

export const getIncomes = () => {
  clientAPI.get('/incomes').then((resp) => console.log(resp));
};
