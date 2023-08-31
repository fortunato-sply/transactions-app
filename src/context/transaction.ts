import React, { useState } from "react"

export interface Transaction {
    date: Date,
    reason: String,
    value: Number
}

interface TransactionContextType {
    transactions: Transaction[],
    newDate: Date,
    setNewDate: () => void,
    newReason: String,
    setNewReason: () => void,
    newValue: Number,
    setNewValue: () => void
}

export const TransactionContext = React.createContext<TransactionContextType | null>(null);

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const [newDate, setNewDate] = useState(new Date());
    const [newReason, setNewReason] = useState('');
    const [newValue, setNewValue] = useState(0);

    return(
        <Transac
    )
}