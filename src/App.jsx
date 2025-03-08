import { useEffect, useState } from "react";
import AddBudget from "./components/AddBudget";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
    const [budget, setBudget] = useState(0);
    const [allExpenses, setAllExpenses] = useState([]);

    useEffect(() => {
        const storedBudget = JSON.parse(localStorage.getItem("budget")) || 0;
        const storedExpenses =
            JSON.parse(localStorage.getItem("allExpenses")) || [];
        setBudget(storedBudget);
        setAllExpenses(storedExpenses);
    }, []);

    return (
        <>
            <h1 className="title">Budget Tracker System</h1>
            <div className="container">
                <div className="left-side">
                    <AddBudget setBudget={setBudget} />
                    <AddExpense setAllExpenses={setAllExpenses} />
                </div>
                <div className="right-side">
                    <ExpenseList
                        budget={budget}
                        allExpenses={allExpenses}
                        setAllExpenses={setAllExpenses}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
