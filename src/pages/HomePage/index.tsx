import styles from './styles.module.scss'

export default function HomePage() {
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
                        <div className={styles.data}>
                            <p>07/07/2017</p>
                            <p>Enterprise evaluation</p>
                            <p>239.990,00 USD</p>
                        </div>
                        <div className={styles.data}>
                            <p>23/05/2023</p>
                            <p>Commitment</p>
                            <p>1.199.992,00 USD</p>
                        </div><div className={styles.data}>
                            <p>23/05/2023</p>
                            <p>Commitment</p>
                            <p>1.199.992,00 USD</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}