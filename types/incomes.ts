export interface Income {
  id: number;
  owner: string;
  location: string;
  amount: number;
  amountUah: number;
  currencyName: string;
  createdAt: string;
};

export interface IncomeQuery {
  id: string;
  owner: string;
  location: string;
  amount: string;
  amountUah: string;
  currencyName: string;
  createdAt: string;
};

export interface IncomeCreate {
  amount: number;
  currency: string;
  location?: string;
  owner: string;
}

export interface IncomeUpdate {
  id: string;
  amount: number;
  currency: string;
  location: string;
  owner: string;
}
