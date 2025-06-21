// components/dashboard/LatestTickets.jsx
import React from 'react';

const tickets = [
  {
    id: 1,
    user: 'Ali M.',
    product: 'Iron Sheet',
    quantity: '100kg',
    date: '2025-06-14',
    status: 'Pending',
  },
  {
    id: 2,
    user: 'Sara H.',
    product: 'Copper Pipe',
    quantity: '50kg',
    date: '2025-06-13',
    status: 'Approved',
  },
  {
    id: 3,
    user: 'Reza K.',
    product: 'Aluminum Rod',
    quantity: '70kg',
    date: '2025-06-13',
    status: 'Rejected',
  },
  {
    id: 4,
    user: 'Maryam Z.',
    product: 'Steel Plate',
    quantity: '200kg',
    date: '2025-06-12',
    status: 'Pending',
  },
];

export default function LatestTickets() {
  const statusColors = {
    Pending: 'text-yellow-600 bg-yellow-100',
    Approved: 'text-green-600 bg-green-100',
    Rejected: 'text-red-600 bg-red-100',
  };

  return (
    <div className="bg-base-300 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Latest Tickets</h2>

      {/* حالت دسکتاپ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-white border-b">
            <tr>
              <th className="py-2">User</th>
              <th className="py-2">Product</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id} className="border-b last:border-0">
                <td className="py-2">{ticket.user}</td>
                <td className="py-2">{ticket.product}</td>
                <td className="py-2">{ticket.quantity}</td>
                <td className="py-2">{ticket.date}</td>
                <td className="py-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`}>
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* حالت موبایل */}
      <div className="md:hidden space-y-4">
        {tickets.map(ticket => (
          <div key={ticket.id} className="bg-base-100 p-4 rounded-xl shadow border border-base-200">
            <div className="text-sm"><span className="font-semibold">User:</span> {ticket.user}</div>
            <div className="text-sm"><span className="font-semibold">Product:</span> {ticket.product}</div>
            <div className="text-sm"><span className="font-semibold">Quantity:</span> {ticket.quantity}</div>
            <div className="text-sm"><span className="font-semibold">Date:</span> {ticket.date}</div>
            <div className="text-sm mt-1">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`}>
                {ticket.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}