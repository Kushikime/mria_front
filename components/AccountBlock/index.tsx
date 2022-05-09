import { useEffect, useState, useCallback } from 'react';
import { updateCredentials } from '../../api/credentials';
import { Credential } from '../../types/credentials';
import styles from './AccountBlock.module.scss';

interface Props {
  account: Credential;
}

export const AccountBlock = ({ account }: Props) => {
  const [name, setName] = useState(account?.name || '');
  const [nameEditable, setNameEditable] = useState(false);

  const [address, setAddress] = useState(account?.address || '');
  const [addressEditable, setAddressEditable] = useState(false);

  const onChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const onClickNameEdit = (e) => {
    e.preventDefault();
    setNameEditable(!nameEditable);
  };

  const onChangeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const onClickAddressEdit = (e) => {
    e.preventDefault();
    if (addressEditable) {
      prepareAndUpdate();
    }
    setAddressEditable(!addressEditable);
  };

  const prepareAndUpdate = useCallback(() => {
    const newAccount = {
      id: account.id.toString(),
      name: name,
      address: address,
      beneficiary: account.beneficiary,
      bankOfBeneficiary: account.bankOfBeneficiary,
      swiftCodeBic_1: account.swiftCodeBic_1,
      swiftCodeBic_2: account.swiftCodeBic_2,
      correspondentAccount: account.correspondentAccount,
      intermediaryBank: account.intermediaryBank,
    };
    updateCredentials(newAccount).then((res) => {
      console.log('credentials - update', res);
    });
  }, [name, address]);

  useEffect(() => {
    const nameInput = document.getElementById('name_edit');
    const addressInput = document.getElementById('address_edit');

    nameInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        
        document.getElementById('name_btn').click();
      }
    });

    addressInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();

        document.getElementById('address_btn').click();
      }
    });
  }, []);

  const typeText =
    {
      bank: 'Банківська карта',
      iban: 'Банківський рахунок',
      paypal: 'Paypal',
      crypto: 'Криптовалюта',
    }[account.type] || '';

  return (
    <div className={styles.container}>
      <p className={styles.title}>Тип - {typeText}</p>
      <div className={styles.fieldOne}>
        <p>Імя</p>
        <input
          id='name_edit'
          type='text'
          className={nameEditable ? styles.inputEditable : ''}
          readOnly={!nameEditable}
          value={name}
          onChange={onChangeName}
        />
        <img id='name_btn' src={nameEditable ? '../assets/images/save.png' : '../assets/images/edit.svg'} alt={'edit'} onClick={onClickNameEdit} />
      </div>
      <div className={styles.fieldOne}>
        <p>Реквізити</p>
        <input
          id='address_edit'
          type='text'
          className={addressEditable ? styles.inputEditable : ''}
          readOnly={!addressEditable}
          value={address}
          onChange={onChangeAddress}
        />
        <img id='address_btn' src={addressEditable ? '../assets/images/save.png' : '../assets/images/edit.svg'} alt={'edit'} onClick={onClickAddressEdit} />
      </div>
      {account.type === 'iban' && (
        <div className={styles.fieldTwo}>
          <p>Інше</p>
          <div className={styles.description}>
            <div className={styles.line}>
              <strong>Beneficiary:&nbsp;</strong>
              <p>{account.beneficiary}</p>
            </div>
            <div className={styles.line}>
              <strong>Bank of Beneficiary:&nbsp;</strong>
              <p>{account.bankOfBeneficiary}</p>
            </div>
            <div className={styles.line}>
              <strong>SWIFT CODE/BIC:&nbsp;</strong>
              <p>{account.swiftCodeBic_1}</p>
            </div>
            <div className={styles.line}>
              <strong>Correspondent Account:&nbsp;</strong>
              <p>{account.correspondentAccount}</p>
            </div>
            <div className={styles.line}>
              <strong>Intermidiary Bank:&nbsp;</strong>
              <p>{account.intermediaryBank}</p>
            </div>
            <div className={styles.line}>
              <strong>SWIFT CODE/BIC:&nbsp;</strong>
              <p>{account.swiftCodeBic_2}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
