import React, { useEffect, useState } from "react";

const ExpenseList = ({ budget, allExpenses, setAllExpenses }) => {
    const [totalExpense, setTotalExpense] = useState(0);
    const [budgetLeft, setBudgetLeft] = useState(0);

    useEffect(() => {
        const totalAmount = allExpenses.reduce(
            (sum, expenses) => sum + expenses.amount,
            0
        );

        setTotalExpense(totalAmount);

        setBudgetLeft(budget - totalAmount);
    }, [budget, allExpenses]);

    const handleRemoveExpense = (index) => {
        const updatedExpenses = allExpenses.filter((_, i) => index !== i);
        localStorage.setItem("allExpenses", JSON.stringify(updatedExpenses));
        setAllExpenses(updatedExpenses);
    };

    return (
        <div className="expense-list">
            <div className="budget-detail">
                <h3>Total Budget: {budget.toLocaleString()}</h3>
                <h3>Total Expense: {totalExpense.toLocaleString()}</h3>
                <h3>Budget Left: {budgetLeft.toLocaleString()}</h3>
            </div>

            <h2 className="expense-history">Expense History:</h2>

            <div className="header">
                <h2 style={{ width: "30%" }}>No</h2>
                <h2>Expense Name</h2>
                <h2>Amount</h2>
                <h2>Action</h2>
            </div>

            <div className="list-container">
                {allExpenses.map((expense, i) => (
                    <div className="list" key={i}>
                        <h3 style={{ width: "30%" }}>{i + 1}</h3>
                        <h3>{expense.expenseTitle}</h3>
                        <h3>{(expense.amount).toLocaleString()}</h3>
                        <h3>
                            <button
                                className="remove-btn"
                                onClick={() => handleRemoveExpense(i)}
                            >
                                Remove
                            </button>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpenseList;
