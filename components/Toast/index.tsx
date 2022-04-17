import React, { useEffect, useState } from 'react'

import styles from './Toast.module.scss';

interface IncomeToast {
    amount: number
    amountUah: number
    currency: string
    createdAt: string
    owner: string
    id: string
    closed: boolean
  }

interface IToastProps {
    toastList: IncomeToast[]
    onDelete: (id: string) => void;
}

const currencies: any = {
    USD: '$',
    EUR: '€',
    UAH: '₴'
}


export default function Toast(props: IToastProps) {
    const [list, setList] = useState<Array<IncomeToast>>([]);

    useEffect(() => {
        setList(props.toastList);
    }, [props.toastList]);

  return (

<div className={styles.notificationContainer}>
    {
        list.map((item, index) => {
            return(
                <div className={`${styles.notification} ${item.closed ? styles.closed : ''}`} key={`${item.id}`} onClick={() => {
                    props.onDelete(item.id)
                }}>
                    <div className={styles.left}>
                        <div className={styles.top}>
                            <p>{item.owner ? item.owner : "Anonymous"}</p>
                        </div>

                        <div className={styles.bottom}>
                            <p className={styles.date}>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : new Date().toLocaleDateString()}</p>

                            <p className={styles.amount}>+{item.amount}{currencies[item.currency]}</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p>{currencies[item.currency]}</p>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}
