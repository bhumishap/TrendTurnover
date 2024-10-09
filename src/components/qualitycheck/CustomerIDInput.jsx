import React, { useState } from 'react';
import "./CustomerIDInput.css";

const CustomerIDInput = ({ customerId, setCustomerId, onCheckStatus }) => {
    const [error, setError] = useState('');

    const validateCustomerId = (id) => {
        // Regular expression to match one alphabet followed by three digits
        const regex = /^[A-Za-z]\d{3}$/;
        return regex.test(id);
    };

    const handleCheckStatus = () => {
        if (validateCustomerId(customerId)) {
            setError(''); // Clear any previous error
            onCheckStatus(); // Call the status check function
        } else {
            setError('Customer ID must start with one letter followed by three digits (e.g., A123).');
        }
    };

    return (
        <div className="customer-id-input">
            <input
                className="input-field"
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Customer ID"
            />
            <button onClick={handleCheckStatus} className="check-status-button">
                Check Status
            </button>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </div>
    );
};

export default CustomerIDInput;
