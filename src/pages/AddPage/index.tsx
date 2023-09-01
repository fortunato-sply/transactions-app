import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { Transaction, TransactionContext, TransactionContextType } from '../../context/transaction';
import { clearTimeout } from 'timers';

export default function AddPage() {
    const { addTransaction } = useContext(TransactionContext) as TransactionContextType;

    const [newDate, setNewDate] = useState(new Date());
    const [newReason, setNewReason] = useState('');
    const [newValue, setNewValue] = useState(0);

    const [flagAdded, setFlagAdded] = useState(false);

    const resetStates = () => {
        setNewReason('');
        setNewValue(0);
    }

    const onHandleNewTransaction = () => {
        const transaction = {
            date: newDate,
            reason: newReason,
            value: newValue
        };

        addTransaction(transaction);
        resetStates();
        setFlagAdded(true);
    }

    useEffect(() => {
        if(flagAdded)
        {
            const timeout = setTimeout(() => { setFlagAdded(!flagAdded) }, 3000)
        }
    }, [flagAdded])

    return (
        <section className={styles.transactions_container}>
            <div className={styles.box}>
                <h2>add new transaction</h2>
                {flagAdded ? <p>added successfully!</p> : ''}
                <div className={styles.inputs}>
                    <div>
                        <label>date</label>
                        <input type="date" onChange={(e) => setNewDate(new Date(e.target.value))}/>
                    </div>
                    <div>
                        <label>reason</label>
                        <input value={newReason} name='d' type="text" onChange={(e) => setNewReason(e.target.value)}/>
                    </div>
                    <div>
                        <label>value (USD)</label>
                        <input value={newValue} name='d' type="text" onChange={(e) => setNewValue(Number.parseFloat(e.target.value))}/>
                    </div>
                </div>
                <button className={styles.submit} onClick={() => onHandleNewTransaction()}>confirm</button>
            </div>
        </section>
    )
}