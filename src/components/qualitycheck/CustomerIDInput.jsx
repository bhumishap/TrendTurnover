import React from 'react';

const CustomerIDInput = ({ customerId, setCustomerId, onCheckStatus }) => {
    return (
        <div className="customer-id-input">
            <input
                type="text"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter Customer ID"
                className="input-field"
            />
            <button onClick={onCheckStatus} className="check-status-button">
                Check Status
            </button>
        </div>
    );
};

export default CustomerIDInput;
