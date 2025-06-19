// components/dashboard/TopProducts.jsx
import React from 'react';

const products = [
  {
    name: 'Copper Sheet',
    demand: '1,200 kg',
    status: 'Approved',
  },
  {
    name: 'Aluminum Rod',
    demand: '900 kg',
    status: 'Pending',
  },
  {
    name: 'Iron Beam',
    demand: '2,000 kg',
    status: 'Rejected',
  },
];

const statusColor = {
  Approved: 'text-green-500 bg-green-100',
  Pending: 'text-yellow-500 bg-yellow-100',
  Rejected: 'text-red-500 bg-red-100',
};

export default function TopProducts() {
  return (
    <div className="bg-base-300 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Top Products</h2>
      <div className="space-y-3">
        {products.map((product, idx) => (
          <div key={idx} className="flex justify-between items-center p-2 rounded-lg">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">{product.demand}</p>
            </div>
            <span className={`px-2 py-1 text-sm rounded-full font-semibold ${statusColor[product.status]}`}>
              {product.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
