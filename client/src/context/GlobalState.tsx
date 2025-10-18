/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';
import { createContext, useReducer, useContext } from 'react';
import type { ReactNode } from 'react';

type Transaction = {
    _id: string,
    text: string,
    amount: number
};

type State = {
    transactions: Transaction[];
    error: any;
    loading: boolean;
}

type Action = 
    | { type: 'GET_TRANSACTIONS'; payload: Transaction[] }
    | { type: 'ADD_TRANSACTION'; payload: Transaction }
    | { type: 'DELETE_TRANSACTION'; payload: string } // payload-nya ID
    | { type: 'TRANSACTION_ERROR'; payload: any };

// reducer utk mengatur logic perubahan state
const AppReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction._id !== action.payload
                )
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    };
}

// state awal
const initialState: State = {
    transactions: [],
    error: null,
    loading: true
};

type GlobalContextType = State & {
    getTransaction: () => Promise<void>
    deleteTransaction: (id: string) => Promise<void>;
    addTransaction: (transaction: Omit<Transaction, '_id'>) => Promise<void>;
};

const GlobalContext = createContext<GlobalContextType>({
    ...initialState,
    getTransaction: async () => {},
    deleteTransaction: async () =>  {},
    addTransaction: async () => {},
});

// provider component utk membungkus aplikasi
export const GlobalProvider = ({ children }: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    async function getTransaction() {
        try {
            const res = await axios.get('/api/v1/transactions')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (err: any) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response?.data.error || 'Server 500'
            })
        }
    }

    async function deleteTransaction(id: string) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (err: any) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response?.data?.error || 'Server Error'
            })
        }
        
    }

    async function addTransaction(transaction: Omit<Transaction, '_id'>) {
        try {
            const res = await axios.post('api/v1/transactions', transaction, {
                headers: { 'Content-Type': 'application/json'},
            })
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (err: any) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response?.data?.error || 'Server Error'
            })
        }
    }

    return (
        <GlobalContext.Provider
        value={{
            transactions: state.transactions,
            loading: state.loading,
            error: state.error,
            getTransaction,
            deleteTransaction,
            addTransaction
        }}        
        >
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}