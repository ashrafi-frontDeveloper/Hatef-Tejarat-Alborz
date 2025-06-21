import React, { useState } from "react";

const initialUsers = [
  { id: 1, name: "Ali Rezaei", email: "ali@example.com", role: "admin", status: "active" },
  { id: 2, name: "Sara Moradi", email: "sara@example.com", role: "broker", status: "inactive" },
  { id: 3, name: "Mohammad T.", email: "mohammad@example.com", role: "customer", status: "active" },
  { id: 4, name: "Javad M.", email: "javad@example.com", role: "customer", status: "inactive" },
  { id: 5, name: "Fatemeh", email: "f@example.com", role: "broker", status: "active" },
  { id: 6, name: "Nima", email: "nima@example.com", role: "broker", status: "active" },
    { id: 1, name: "Ali Rezaei", email: "ali@example.com", role: "customer", status: "active" },
  { id: 2, name: "Sara Moradi", email: "sara@example.com", role: "broker", status: "inactive" },
  { id: 3, name: "Mohammad T.", email: "mohammad@example.com", role: "customer", status: "active" },
  { id: 4, name: "Javad M.", email: "javad@example.com", role: "customer", status: "inactive" },
  { id: 5, name: "Fatemeh", email: "f@example.com", role: "broker", status: "active" },
  { id: 6, name: "Nima", email: "nima@example.com", role: "broker", status: "active" },
    { id: 1, name: "Ali Rezaei", email: "ali@example.com", role: "customer", status: "active" },
  { id: 2, name: "Sara Moradi", email: "sara@example.com", role: "broker", status: "inactive" },
  { id: 3, name: "Mohammad T.", email: "mohammad@example.com", role: "customer", status: "active" },
  { id: 4, name: "Javad M.", email: "javad@example.com", role: "customer", status: "inactive" },
  { id: 5, name: "Fatemeh", email: "f@example.com", role: "broker", status: "active" },
  { id: 6, name: "Nima", email: "nima@example.com", role: "broker", status: "active" },
];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // حذف کاربر
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (confirm) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // ذخیره ویرایش
  const handleSave = () => {
    setUsers(users.map(u => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Users Management</h2>

      {/* جدول */}
      <div className="overflow-x-auto rounded-xl border border-base-300 shadow-2xl">
        <table className="table w-full min-w-[600px]">
          <thead className="text-secondary">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, idx) => (
              <tr key={user.id} className="hover:bg-base-300 transition">
                <td className="py-3 px-4">{indexOfFirstUser + idx + 1}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 capitalize">{user.role}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    user.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={() => setEditingUser({ ...user })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`btn btn-sm ${currentPage === i + 1 ? "btn-secondary" : "btn-outline"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Edit Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-base-200 rounded-xl p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Edit User</h3>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              value={editingUser.name}
              onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
            />
            <input
              type="email"
              className="input input-bordered w-full mb-3"
              value={editingUser.email}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
            />
            <select
              className="select select-bordered w-full mb-3"
              value={editingUser.role}
              onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="broker">Broker</option>
              <option value="customer">Customer</option>
            </select>
            <select
              className="select select-bordered w-full mb-4"
              value={editingUser.status}
              onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <div className="flex justify-end gap-2">
              <button className="btn btn-sm btn-outline" onClick={() => setEditingUser(null)}>Cancel</button>
              <button className="btn btn-sm btn-success" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
