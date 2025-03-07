import React, { useState } from "react";

const AddExpense = ({setAllExpenses}) => {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [amount, setAmount] = useState("");

    const handleAddExpense = () => {
        if (!expenseTitle || !amount) {
            alert("Please fill in all fields.");
            return;
        }

        const expense = {
            expenseTitle,
            amount: Number(amount),
        };

        setAllExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses, expense];
            localStorage.setItem(
                "allExpenses",
                JSON.stringify(updatedExpenses)
            );
            return updatedExpenses;
        });

        setExpenseTitle("");
        setAmount("");
    };

    return (
        <div className="add-expense" style={{ marginTop: "1.8rem" }}>
            <h1>Add Expense</h1>
            <label htmlFor="expense-title">Expense Title:</label>
            <input
                type="text"
                value={expenseTitle}
                onChange={(e) => setExpenseTitle(e.target.value)}
                id="expense-title"
                placeholder="Enter expense title"
            />
            <label htmlFor="amount">Amount:</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                id="amount"
                placeholder="Enter expense amount"
            />
            <button onClick={handleAddExpense}>Add Expense</button>
        </div>
    );
};

export default AddExpense;
