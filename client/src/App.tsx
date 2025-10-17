// (Daftar import Anda tetap sama)
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl m-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <Balance />
            <IncomeExpenses />
            <AddTransaction />
          </div>
          <div>
            <TransactionList />
          </div>
        </div>
      </div> 
    </div> 
  );
}

export default App;