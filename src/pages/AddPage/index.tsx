import styles from './styles.module.scss'

export default function AddPage() {
    return (
        <section className={styles.transactions_container}>
            <div className={styles.box}>
                <h2>add new transaction</h2>
                <div className={styles.inputs}>
                    <div>
                        <label>date</label>
                        <input id='d' type="date" />
                    </div>
                    <div>
                        <label>reason</label>
                        <input id='d' type="text" />
                    </div>
                    <div>
                        <label>value (USD)</label>
                        <input id='d' type="text" />
                    </div>
                </div>
                <button className={styles.submit}>confirm</button>
            </div>
        </section>
    )
}