import React, { useState } from "react";

const AddBudget = () => {
    const [budget, setBudget] = useState("");

    const handleChange = (e) => {
        setBudget(e.target.value);
    };

    return (
        <div className="add-budget">
            <h1>Add Budget</h1>
            <label htmlFor="budget">Budget:</label>
            <input
                type="number"
                value={budget}
                onChange={handleChange}
                id="budget"
                placeholder="Enter you budget"
                min={0}
            />
            <button>Add Budget</button>
        </div>
    );
};

export default AddBudget;
