import { useGlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'; 

export const TransactionList = () => {
  const { transactions, loading, error } = useGlobalContext();

  const renderContent = () => {
    if (loading) {
      return <p className='text-center'>Memuat Data...</p>
    }
    if (error) {
      return <p className='text-center text-red-500'>Error: {error}</p>
    }
    if (transactions.length === 0) {
      return <p className='text-center'>Belum ada transaksi</p>
    }

    return transactions.map((transaction) => (
      <Transaction key={transaction._id} transaction={transaction} />
    ));
  }

  return (
    <>
      <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 my-4">
        Riwayat Transaksi
      </h3>
      <ul className="list-none p-0 mb-10 group">
        {renderContent()}
      </ul>
    </>
  );
};