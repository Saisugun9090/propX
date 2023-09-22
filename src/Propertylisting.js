// PropertyListing.js
import React from 'react';
import './Propertylisting.css'; // Import your CSS styles


function PropertyListing() {
  return (
    <section className="property-listing">
      <h2>Featured Properties</h2>
      <div className="property">
        <img src="prop1.jpg" alt="Property 1" />
        <h3>Modern Apartment</h3>
        <p>3 Bedrooms | 2 Bathrooms | 1,200 sq. ft.</p>
        <p>Price: $300,000</p>
        {/* Additional property details */}
      </div>
      <div className="property">
        <img src="prop2.jpg" alt="Property 2" />
        <h3>Luxury Villa</h3>
        <p>4 Bedrooms | 3 Bathrooms | 2,500 sq. ft.</p>
        <p>Price: $600,000</p>
        {/* Additional property details */}
      </div>
      <div className="property">
        <img src="prop3.jpg" alt="Property 3" />
        <h3>Cozy Townhouse</h3>
        <p>2 Bedrooms | 2 Bathrooms | 1,000 sq. ft.</p>
        <p>Price: $200,000</p>
        {/* Additional property details */}
      </div>
      <div className="property">
        <img src="prop4.jpg" alt="Property 4" />
        <h3>Spacious Condo</h3>
        <p>3 Bedrooms | 2 Bathrooms | 1,800 sq. ft.</p>
        <p>Price: $400,000</p>
        {/* Additional property details */}
      </div>
    </section>
  );
}

export default PropertyListing;
