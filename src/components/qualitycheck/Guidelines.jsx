import React from 'react';
import './Guidelines.css';

const Guidelines = () => {
    return (
        <div className="guidelines-container">
            <h2>Guidelines for Quality Check</h2>
            <p><strong>Welcome!</strong> Here’s how you can check the status of your quality check:</p>
            <ol>
                <li><strong>Enter your Customer ID:</strong> This is required to retrieve your status. Ensure it’s in the correct format. Example: <code>B234</code>.</li>
                <li><strong>Check Status:</strong> After entering your Customer ID, click the "Check Status" button to view your current status.</li>
                <li><strong>Status Descriptions:</strong> 
                    <ul>
                        <li><strong>In Review:</strong> Your request is currently under review. Please wait for further updates.</li>
                        <li><strong>Approved:</strong> Your request has been approved. You will receive further instructions via email.</li>
                        <li><strong>Rejected:</strong> Unfortunately, your request was not approved. Please contact support for more information.</li>
                    </ul>
                </li>
                <li><strong>Add Geotag Images:</strong> 
                    <p>It’s essential to add geotag images when submitting your request. This ensures that the time and date when the picture was taken can be verified. Please ensure that your device's location settings are enabled to automatically include this information in your images.</p>
                </li>
            </ol>
        </div>
    );
};

export default Guidelines;
