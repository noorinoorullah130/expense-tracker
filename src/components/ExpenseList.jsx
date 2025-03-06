import React from "react";

const ExpenseList = () => {
    return (
        <div className="expense-list">
            <div className="budget-detail">
                <h3>Total Budget: 10,000</h3>
                <h3>Total Expense: 10,000</h3>
                <h3>Budget Left: 10,000</h3>
            </div>

            <h2 className="expense-history">Expense History:</h2>

            <div className="header">
                <h2 style={{ width: "30%" }}>No</h2>
                <h2>Expense Name</h2>
                <h2>Amount</h2>
                <h2>Action</h2>
            </div>

            <div className="list-container">
                <div className="list">
                    <h3 style={{ width: "30%" }}>1</h3>
                    <h3>Grocerys</h3>
                    <h3>1,000</h3>
                    <h3>
                        <button className="remove-btn">Remove</button>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ExpenseList;
