import React from 'react';
import './OrderHistory.css';

function OrderHistory() {
  // Add logic for displaying order history

  return (
    <div className="box">
      <h2 className="account-heading">Order History</h2>
      <div className="rectangleline1" />
      <div className="rectangle-order-details">
        {/* Empty container */}
      </div>
      <div className="rectangle" />
      <div className="content">
        <div className="order-details-info">
          <p>
            <span className="description-label">December 21, 2023</span> Description
            <span className="item-ids">
              <span className="Unit">Item IDs</span>
            </span>
            <span className="UnitPrice">Unit Price</span>
            <span className="Qty">Qty</span>
            <span className="Total">Total:</span>
          </p>
          <p>
            Order # 1585422897{' '}
            <span className="product-description">Cable Organizer Bag</span>
            <span className="product-code">506698092</span>
            <span className="order-total">P100</span>
            <span className="order-quantity">1</span>
            <span className="order-total-p100">P100</span>
          </p>
          <p>
            Order Status: Dispatched{' '}
            <span className="sold-by">Sold by CSS</span>
          </p>
          <p>
            Total Item: 1{' '}
            <a href="link-to-store" className="visit-store-link" target="_blank" rel="noopener noreferrer">
              Visit the Store
            </a>
          </p>
          {/* Order Total remains in place */}
          <p>
            Order Total: P100
          </p>
          <p>
            Recipients: John Doe{' '}
            <span className="delivery-info">1 item has been delivered</span>
            <span className="order-total-text">Total:</span>
            <span className="order-total--p100">P100</span>
          </p>
        </div>
        {/* Add your content for order history here */}
      </div>
    </div>
  );
}

export default OrderHistory;