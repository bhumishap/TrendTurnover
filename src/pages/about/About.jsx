// src/pages/About.jsx
import React from 'react';
import './About.css'; // Adjust to the new filename

const About = () => {
  return (
    <div className="guide-container">
      <h1 className="guide-title">What We Do & Our Policies</h1>

      {/* Section for the Process */}
      <section className="guide-section">
        <h2>Our Process</h2>
        <p>
          The first step is to decide whether you want to sell, recycle, or donate your items. Depending on your choice, you'll need to fill out a form.
        </p>
        <ul className="policy-list">
          <li><strong>Sell:</strong> Your item goes through a quality check, and geotagged images are required for verification. You can track the status of your quality check through our platform. Once the item passes the quality check, it will be uploaded to the website for resale.</li>
          <li><strong>Recycle:</strong> If your item doesn't pass the quality check or you choose to recycle it, we’ll ensure the item is repurposed sustainably. You’ll be notified when the recycling process is complete, and at that point, you can choose to donate or sell the recycled item.</li>
          <li><strong>Donate:</strong> If you decide to donate, you can either be actively involved in the process or simply hand over the item to us. We’ll make sure it reaches those in need, partnering with NGOs for distribution.</li>
        </ul>
      </section>

      {/* Section for Return Policy */}
      <section className="policy-section">
        <h2 className="typewriter">A return policy is just the start; you need a resale policy for the full circle!</h2>
        <p>
          We offer a hassle-free return policy for our sold clothes. If you're not completely satisfied with your purchase,
          you can return any undamaged item within 7 days of delivery. Please ensure the item is in its original packaging and the same condition as it was delivered.
        </p>
        <ul className="policy-list">
          <li>Items must be returned within 7 days.</li>
          <li>Original packaging required.</li>
          <li>Refunds/Store Credit will be processed within 5-7 business days.</li>
        </ul>
      </section>

      {/* Section for Resale Policy */}
      <section className="policy-section">
        <h2>Resale Policy</h2>
        <p>
          Ready to give your pre-loved clothes a second life? Our resale policy makes it easy for you to resell gently
          used items. Whether you're looking to make space in your wardrobe or want to share fashion with others, we
          support a sustainable fashion cycle.
        </p>
        <ul className="policy-list">
          <li>Items must be gently used, in good condition, and clean.</li>
          <li>Upload clear images and provide accurate descriptions of your items.</li>
          <li>Once sold, you will receive your payment within 3-5 business days.</li>
          <li>All resale transactions are final.</li>
        </ul>
      </section>

      {/* Section for Reselling Used Clothes */}
      <section className="guide-section">
        <h2>Resell Used Clothes</h2>
        <p>
          We specialize in giving pre-loved clothes a second life! We curate a collection of gently used garments that are in great condition, ensuring they are stylish, affordable, and sustainable. By choosing to resell, you help reduce fashion waste.
        </p>
      </section>

      {/* Section for Recycling Unusable Clothes */}
      <section className="guide-section">
        <h2>Recycle Unusable Clothes</h2>
        <p>
          We believe in responsible disposal of clothing items that are beyond repair. For clothes that can’t be resold, we offer recycling options to ensure fabrics are properly repurposed, reducing their environmental impact.
        </p>
      </section>

      {/* Section for Donating to NGOs */}
      <section className="guide-section">
        <h2>Donate to NGOs</h2>
        <p>
          We partner with NGOs to donate clothes to people in need. Your contributions make a difference in the lives of underprivileged communities, spreading warmth and care.
        </p>
      </section>

      {/* Section for Why Choose Us */}
      <section className="guide-section">
        <h2>Why Choose Us?</h2>
        <p>
          We are more than just a clothing reseller. By partnering with us, you become part of a community dedicated to sustainable fashion. We believe in a circular economy, where clothes don’t go to waste, but instead find new homes or are transformed into something useful.
        </p>
      </section>
    </div>
  );
};

export default About;
