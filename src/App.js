import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 87.11,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 154.23,
      date: new Date(2021, 3, 2),
    },
    {
      id: "e4",
      title: "New Monitor",
      amount: 450.35,
      date: new Date(2021, 10, 28),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;