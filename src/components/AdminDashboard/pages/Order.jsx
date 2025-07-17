import React, { useState } from "react";

const initialOrders = [
  {
    id: 1,
    userName: "Ali Rezaei",
    product: "Cold Rolled Carbon Steel Sheet",
    delivery: "FOB",
    quantity: 100,
    status: "pending",
  },
  {
    id: 2,
    userName: "Sara Moradi",
    product: "Galvanized Coil",
    delivery: "CFR",
    quantity: 50,
    status: "approved",
  },
  {
    id: 3,
    userName: "Nima Khosravi",
    product: "Stainless Steel Rebar",
    delivery: "EXW",
    quantity: 70,
    status: "rejected",
  },
  {
    id: 4,
    userName: "Ali Rezaei",
    product: "Cold Rolled Carbon Steel Sheet",
    delivery: "FOB",
    quantity: 100,
    status: "pending",
  },
    {
    id: 1,
    userName: "Ali Rezaei",
    product: "Cold Rolled Carbon Steel Sheet",
    delivery: "FOB",
    quantity: 100,
    status: "pending",
  },
  {
    id: 2,
    userName: "Sara Moradi",
    product: "Galvanized Coil",
    delivery: "CFR",
    quantity: 50,
    status: "approved",
  },
  {
    id: 3,
    userName: "Nima Khosravi",
    product: "Stainless Steel Rebar",
    delivery: "EXW",
    quantity: 70,
    status: "rejected",
  },
  {
    id: 4,
    userName: "Ali Rezaei",
    product: "Cold Rolled Carbon Steel Sheet",
    delivery: "FOB",
    quantity: 100,
    status: "pending",
  },
];

export default function OrdersTable() {

const [orders, setOrders] = useState(initialOrders); // اول تعریف state اصلی

const itemsPerPage = 4;
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastOrder = currentPage * itemsPerPage;
const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

const totalPages = Math.ceil(orders.length / itemsPerPage);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Orders Management</h2>

      <div className="overflow-x-auto rounded-xl border border-base-300 shadow-2xl">
        <table className="table w-full min-w-[700px]">
          <thead className="text-secondary">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>User</th>
              <th>Delivery</th>
              <th>Qty</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, idx) => (
              <tr key={order.id} className="hover:bg-base-300 transition">
                <td>{indexOfFirstOrder + idx + 1}</td>
                <td>{order.product}</td>
                <td>{order.userName}</td>
                <td>{order.delivery}</td>
                <td>{order.quantity} t</td>
                <td>
                  <span className={`badge text-xs font-semibold px-2 py-1 ${
                    order.status === "pending" ? "badge-warning" :
                    order.status === "approved" ? "badge-success" :
                    "badge-error"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="flex gap-2">
                  {order.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleStatusChange(order.id, "approved")}
                        className="btn btn-xs btn-success"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(order.id, "rejected")}
                        className="btn btn-xs btn-warning"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`btn btn-sm ${currentPage === index + 1 ? "btn-primary" : "btn-ghost"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
