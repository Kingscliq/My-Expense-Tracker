/** @format */

import "./App.css";
import AddTransactions from "./components/AddTransactions";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <Header title='Expense Tracker' />
        <div className='container'>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransactions />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
