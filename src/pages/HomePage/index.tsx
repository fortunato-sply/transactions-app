import { useContext, useEffect } from 'react'
import styles from './styles.module.scss'
import { TransactionContext, TransactionContextType } from '../../context/transaction'

export default function HomePage() {
    const { transactions } = useContext(TransactionContext) as TransactionContextType;

    const renderTransactions = () => {
        if (transactions.length < 1) {
            return <div className={styles.notransaction}>You don't have any transactions yet</div>
        }

        return transactions.map(transaction => {
            return (
                <div className={styles.data}>
                    <p>{transaction.date.toDateString()}</p>
                    <p>{transaction.reason}</p>
                    <p>{transaction.value.toString()} USD</p>
                </div>
            )
        })
    }

    return (
        <section className={styles.transactions_container}>
            <div className={styles.box}>
                <div className={styles.table}>
                    <div className={styles.head}>
                        <h2>Date</h2>
                        <h2>Reason</h2>
                        <h2>Value</h2>
                    </div>
                    <div className={styles.content}>
                        {renderTransactions()}
                    </div>
                </div>
            </div>
        </section>
    )
}