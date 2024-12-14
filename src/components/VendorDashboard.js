import React from "react";

const VendorDashboard = ({ vendorName, stats }) => {
  return (
    <div className="vendor-dashboard">
      <h2>Welcome, {vendorName}</h2>
      <div className="dashboard-stats">
        <div>
          <h3>Products Sold</h3>
          <p>{stats.sold}</p>
        </div>
        <div>
          <h3>Revenue</h3>
          <p>${stats.revenue}</p>
        </div>
        <div>
          <h3>Pending Orders</h3>
          <p>{stats.pendingOrders}</p>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
