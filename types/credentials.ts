export interface Credential {
  id: number;
  type: 'bank' | 'iban' | 'paypal' | 'crypto';
  name: string;
  address: string;
  beneficiary: string;
  bankOfBeneficiary: string;
  swiftCodeBic_1: string;
  correspondentAccount: string;
  intermediaryBank: string;
  swiftCodeBic_2: string;
  createdAt: string;
};

export interface CredentialQuery {
  id: string;
  type: 'bank' | 'iban' | 'paypal' | 'crypto';
  name: string;
  address: string;
  beneficiary: string;
  bankOfBeneficiary: string;
  swiftCodeBic_1: string;
  swiftCodeBic_2: string;
  correspondentAccount: string;
  intermediaryBank: string;
  createdAt: string;
};

export interface CredentialCreate {
  type: string;
  name: string;
  address: string;
  beneficiary: string;
  bankOfBeneficiary: string;
  swiftCodeBic_1: string;
  swiftCodeBic_2: string;
  correspondentAccount: string;
  intermediaryBank: string;
}

export interface CredentialUpdate {
  id: string;
  name: string;
  address: string;
  beneficiary: string;
  bankOfBeneficiary: string;
  swiftCodeBic_1: string;
  swiftCodeBic_2: string;
  correspondentAccount: string;
  intermediaryBank: string;
}