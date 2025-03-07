import React, { useState } from "react";

const AddBudget = ({ setBudget }) => {
    const [budgetInput, setBudgetInput] = useState("");

    const handleChange = (e) => {
        setBudgetInput(e.target.value);
    };

    const AddBudget = () => {
        const newBudget = Number(budgetInput);

        localStorage.setItem("budget", JSON.stringify(newBudget));

        setBudget(newBudget);

        setBudgetInput("");

        console.log(budgetInput);
    };

    return (
        <div className="add-budget">
            <h1>Add Budget</h1>
            <label htmlFor="budget">Budget:</label>
            <input
                type="number"
                value={budgetInput}
                onChange={handleChange}
                id="budget"
                placeholder="Enter you budget"
                min={0}
            />
            <button onClick={AddBudget}>Add Budget</button>
        </div>
    );
};

export default AddBudget;
