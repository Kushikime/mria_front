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
  const [beneficiary, setBeneficiary] = useState(account?.beneficiary || '');
  const [bankOfBeneficiary, setBankOfBeneficiary] = useState(account?.bankOfBeneficiary || '');
  const [swiftCodeBic_1, setSwiftCodeBic_1] = useState(account?.swiftCodeBic_1 || '');
  const [correspondentAccount, setCorrespondentAccount] = useState(account?.correspondentAccount || '');
  const [intermediaryBank, setIntermediaryBank] = useState(account?.intermediaryBank || '');
  const [swiftCodeBic_2, setSwiftCodeBic_2] = useState(account?.swiftCodeBic_2 || '');
  const [isSaveActive, setIsSaveActive] = useState(false);

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

  const onChangeWrapper = (e, callBackFn) => {
    e.preventDefault();
    callBackFn();
    setIsSaveActive(true);
  };

  const prepareAndUpdate = useCallback(() => {
    const newAccount = {
      id: account.id.toString(),
      name: name,
      address: address,
      beneficiary: beneficiary,
      bankOfBeneficiary: bankOfBeneficiary,
      swiftCodeBic_1: swiftCodeBic_1,
      swiftCodeBic_2: swiftCodeBic_2,
      correspondentAccount: correspondentAccount,
      intermediaryBank: intermediaryBank,
    };
    updateCredentials(newAccount).then((res) => {
      console.log('credentials - update', res);
    });
    setIsSaveActive(false);
  }, [
    account.id,
    name,
    address,
    beneficiary,
    bankOfBeneficiary,
    swiftCodeBic_1,
    swiftCodeBic_2,
    correspondentAccount,
    intermediaryBank,
  ]);

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
        <img
          id='name_btn'
          src={nameEditable ? '../assets/images/save.png' : '../assets/images/edit.svg'}
          alt={'edit'}
          onClick={onClickNameEdit}
        />
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
        <img
          id='address_btn'
          src={addressEditable ? '../assets/images/save.png' : '../assets/images/edit.svg'}
          alt={'edit'}
          onClick={onClickAddressEdit}
        />
      </div>
      {account.type === 'iban' && (
        <div className={styles.fieldTwo}>
          <p>Інше</p>
          <div className={styles.description}>
            {isSaveActive && (
              <img
                className={styles.saveImg}
                src={'../assets/images/save.png'}
                alt={'edit'}
                onClick={() => prepareAndUpdate()}
              />
            )}
            <div className={styles.line}>
              <strong>Beneficiary:&nbsp;</strong>
              <input
                type='text'
                value={beneficiary}
                onChange={(e) => onChangeWrapper(e, () => setBeneficiary(e.target.value))}
              />
            </div>
            <div className={styles.line}>
              <strong>Bank of Beneficiary:&nbsp;</strong>
              <input
                type='text'
                value={bankOfBeneficiary}
                onChange={(e) => onChangeWrapper(e, () => setBankOfBeneficiary(e.target.value))}
              />
            </div>
            <div className={styles.line}>
              <strong>SWIFT CODE/BIC:&nbsp;</strong>
              <input
                type='text'
                value={swiftCodeBic_1}
                onChange={(e) => onChangeWrapper(e, () => setSwiftCodeBic_1(e.target.value))}
              />
            </div>
            <div className={styles.line}>
              <strong>Correspondent Account:&nbsp;</strong>
              <input
                type='text'
                value={correspondentAccount}
                onChange={(e) => onChangeWrapper(e, () => setCorrespondentAccount(e.target.value))}
              />
            </div>
            <div className={styles.line}>
              <strong>Intermidiary Bank:&nbsp;</strong>
              <input
                type='text'
                value={intermediaryBank}
                onChange={(e) => onChangeWrapper(e, setIntermediaryBank(e.target.value))}
              />
            </div>
            <div className={styles.line}>
              <strong>SWIFT CODE/BIC:&nbsp;</strong>
              <input
                type='text'
                value={swiftCodeBic_2}
                onChange={(e) => onChangeWrapper(e, setSwiftCodeBic_2(e.target.value))}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
