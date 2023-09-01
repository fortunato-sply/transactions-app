import React, { ReactNode, useState } from "react";

export interface Transaction {
    date: Date,
    reason: String,
    value: Number
}

export interface TransactionContextType {
    transactions: Transaction[],
    addTransaction: (transaction: Transaction) => void
}

export const TransactionContext = React.createContext<TransactionContextType | null>(null);
TransactionContext.displayName = 'TransactionContext';

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const addTransaction = (transaction: Transaction) => {
        setTransactions([...transactions, transaction]);
    }
    return(
        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}