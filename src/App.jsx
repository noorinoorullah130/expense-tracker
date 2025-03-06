import AddBudget from "./components/AddBudget";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
    return (
        <>
            <h1 className="title">Budget Tracker System</h1>
            <div className="container">
                <div className="left-side">
                    <AddBudget />
                    <AddExpense />
                </div>
                <div className="right-side">
                    <ExpenseList />
                </div>
            </div>
        </>
    );
}

export default App;
