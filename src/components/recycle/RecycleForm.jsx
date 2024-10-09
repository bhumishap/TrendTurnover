import React, { useState } from 'react'; // Import useState for managing state
import './RecycleForm.css'; // Ensure your CSS file is correctly linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faUser, faEnvelope, faTag, faFileImage, faRecycle } from '@fortawesome/free-solid-svg-icons'; // Import icons

function RecycleForm() {
  const [action, setAction] = useState(''); // State to hold the selected action

  const handleActionChange = (event) => {
    setAction(event.target.value); // Update action based on the selected radio button
  };

  return (
    <div className="main-block">
      <div className="left-part">
        <i className="fas fa-tags"></i>
        <h1>Recycle Your Product</h1>
        <p>Enter your details and let us know which product you want to recycle.</p>
      </div>
      <form action="/" className="form-container">
        <div className="title">
          <i className="fas fa-pencil-alt"></i>
          <h2>Register here</h2>
        </div>

        <div className="form-group">
          <label htmlFor="namebox" className="form-label">
            <FontAwesomeIcon icon={faUser} className="form-icon" /> Name
          </label>
          <input
            type="text"
            id="namebox"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailbox" className="form-label">
            <FontAwesomeIcon icon={faEnvelope} className="form-icon" /> Email Address
          </label>
          <input
            type="email"
            id="emailbox"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product-name" className="form-label">
            <FontAwesomeIcon icon={faTag} className="form-icon" /> Product Name 
          </label>
          <input
            type="text"
            id="product-name"
            className="form-control"
            placeholder="Product Name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <FontAwesomeIcon icon={faRecycle} className="form-icon" /> Would you like to sell or donate after recycling?
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="sell"
                checked={action === 'sell'}
                onChange={handleActionChange}
              />
              Sell
            </label>
            <label>
              <input
                type="radio"
                value="donate"
                checked={action === 'donate'}
                onChange={handleActionChange}
              />
              Donate
            </label>
            <label>
              <input
                type="radio"
                value="decide-later"
                checked={action === 'decide-later'}
                onChange={handleActionChange}
              />
              Decide Later
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="textarea" className="form-label">
            <FontAwesomeIcon icon={faFileImage} className="form-icon" /> Product Description
          </label>
          <textarea
            id="textarea"
            className="form-control"
            rows="4"
            placeholder="Enter product details"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="upload" className="form-label">
            <FontAwesomeIcon icon={faFileImage} className="form-icon" /> Upload Product Image
          </label>
          <input
            type="file"
            id="upload"
            className="form-control"
            accept="image/*"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit Recycling Request</button>
      </form>
    </div>
  );
}

export default RecycleForm; // Move export default here 
