import { Credential } from '../../types/credentials'
import styles from './AccountBlock.module.scss';

interface Props {
  account: Credential;
}

export const AccountBlock = ({ account }: Props) => {
  const typeText = {
    'bank': 'Банківська карта',
    'iban': 'Банківський рахунок',
    'paypal': 'Paypal',
    'crypto': 'Криптовалюта',
  }[account.type] || '';

  return (
    <div className={styles.container}>
      <p className={styles.title}>Тип - {typeText}</p>
      <div className={styles.fieldOne}>
        <p>Заголовок</p>
        <input type='text' readOnly value={'Реквізити ПриватБанк:'} />
        <img src={'../assets/images/edit.svg'} alt={'edit'} />
      </div>
      <div className={styles.fieldOne}>
        <p>Заголовок</p>
        <input type='text' readOnly value={'5168459234124567'} />
        <img src={'../assets/images/edit.svg'} alt={'edit'} />
      </div>
      {account.type === 'iban' && (
        <div className={styles.fieldTwo}>
          <p>Інше</p>
          <div className={styles.description}>
            <div className={styles.line}><strong>Beneficiary:&nbsp;</strong><p>{account.beneficiary}</p></div>
            <div className={styles.line}><strong>Account:&nbsp;</strong><p>{}</p></div>
            <div className={styles.line}><strong>Bank of Beneficiary:&nbsp;</strong><p>{account.bankOfBeneficiary}</p></div>
            <div className={styles.line}><strong>SWIFT CODE/BIC:&nbsp;</strong><p>{account.swiftCodeBic_1}</p></div>
            <div className={styles.line}><strong>Correspondent Account:&nbsp;</strong><p>{account.correspondentAccount}</p></div>
            <div className={styles.line}><strong>Intermidiary Bank:&nbsp;</strong><p>{account.intermediaryBank}</p></div>
            <div className={styles.line}><strong>SWIFT CODE/BIC:&nbsp;</strong><p>{account.swiftCodeBic_2}</p></div>
          </div>
        </div>
      )}
    </div>
  );
};
