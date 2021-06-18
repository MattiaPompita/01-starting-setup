import Expenses from "./components/Expenses/Expenses";

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
      amount: 87.10,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 154.20,
      date: new Date(2021, 3, 2),
    },
    {
      id: "e4",
      title: "New Monitor",
      amount: 450.30,
      date: new Date(2021, 10, 28),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;