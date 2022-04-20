export interface Withdrawal {
  id: number;
  amount: number;
  categoryName: string;
  currencyName: string;
  createdAt: string;
}

export interface WithdrawalQuery {
  id: string;
  amount: string;
  categoryName: string;
  currencyName: string;
  createdAt: string;
}

export interface WithdrawalCreate {
  amount: number;
  currency: 'UAH' | 'USD' | 'EUR';
  category: string;
}

export interface WithdrawalUpdate {
  id: string;
  amount: number;
  currency: string;
  category: string;
}
