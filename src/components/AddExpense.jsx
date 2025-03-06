import React from "react";

const AddExpense = () => {
    return (
        <div className="add-expense" style={{ marginTop: "1.8rem" }}>
            <h1>Add Expense</h1>
            <label htmlFor="expense-title">Expense Title:</label>
            <input
                type="text"
                id="expense-title"
                placeholder="Enter expense title"
            />
            <label htmlFor="amount">Amount:</label>
            <input
                type="text"
                id="expense-title"
                placeholder="Enter expense amount"
            />
            <button>Add Expense</button>
        </div>
    );
};

export default AddExpense;
