import { useGlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'; 

export const TransactionList = () => {
  const { transaction } = useGlobalContext();

  return (
    <>
      <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 my-4">
        Riwayat Transaksi
      </h3>
      <ul className="list-none p-0 mb-10 group bg-red">
        {transaction.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
        
      </ul>
    </>
  );
};