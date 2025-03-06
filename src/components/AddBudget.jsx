import React from "react";

const AddBudget = () => {
    return (
        <div className="add-budget">
            <h1>Add Budget</h1>
            <label htmlFor="budget">Budget:</label>
            <input type="number" id="budget" placeholder="Enter you budget" />
            <button>Add Budget</button>
        </div>
    );
};

export default AddBudget;
