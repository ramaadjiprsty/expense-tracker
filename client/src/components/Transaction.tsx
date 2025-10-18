import { useGlobalContext } from '../context/GlobalState';
import { formatToRupiah } from '../utils/formatters';

// Tentukan Tipe data untuk 'props'
type TransactionProps = {
    transaction: {
    _id: string;
    text: string;
    amount: number;
    };
};

export const Transaction = ({ transaction }: TransactionProps) => {
    const { deleteTransaction } = useGlobalContext();

    const sign = transaction.amount < 0 ? '-' : '+';
    const borderColor = transaction.amount < 0 ? 'border-red-600' : 'border-green-600';

    return (
        <li
            className={`bg-white shadow-md p-3 rounded-md flex justify-between items-center mb-3 relative border-r-8 ${borderColor}`}
        >
            <span>{transaction.text}</span>
            <span>
                {sign}
                {formatToRupiah(Math.abs(transaction.amount))}
            </span>
            
            <button
                onClick={() => deleteTransaction(transaction._id)} // <-- Aksi Hapus
                className="absolute -left-7 bg-red-600 text-white px-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity group-hover:opacity-100"
            >
                X
            </button>
        </li>
    );
};