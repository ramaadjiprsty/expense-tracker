/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from 'react';
import type { ReactNode } from 'react';

type Transaction = {
    _id: string,
    text: string,
    amount: number
};

type State = {
    transaction: Transaction[];
}

type Action = 
    | { type: 'GET_TRANSACTIONS'; payload: Transaction[] }
    | { type: 'ADD_TRANSACTION'; payload: Transaction }
    | { type: 'DELETE_TRANSACTION'; payload: string }; // payload-nya ID

// reducer utk mengatur logic perubahan state
const AppReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(
                    (transaction) => transaction._id !== action.payload
                )
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.payload, ...state.transaction],
            };
        default:
            return state;
    };
}

// state awal
const initialState: State = {
    transaction: [
        {_id: '1', text: 'Gaji', amount: 5000000},
        {_id: '2', text: 'Makan Siang', amount: -25000},
        {_id: '3', text: 'Shopping', amount: -500000},
    ],
};

type GlobalContextType = State & {
    deleteTransaction: (id: string) => void;
    addTransaction: (transaction: Transaction) => void;
};

const GlobalContext = createContext<GlobalContextType>({
    ...initialState,
    deleteTransaction: () =>  {},
    addTransaction: () => {}
});

// provider component utk membungkus aplikasi
export const GlobalProvider = ({ children }: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function deleteTransaction(id: string) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }

    function addTransaction(transaction: Transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider
        value={{
            transaction: state.transaction,
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