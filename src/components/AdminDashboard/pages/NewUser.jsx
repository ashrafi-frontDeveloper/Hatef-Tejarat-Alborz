import React, { useState } from "react";

export default function NewUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "customer",
    status: "active",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // شبیه‌سازی ارسال فرم
    console.log("✅ New User Created:", form);
    setSuccess(true);
    setForm({
      name: "",
      email: "",
      role: "customer",
      status: "active",
    });

    setTimeout(() => setSuccess(false), 3000); // پاک شدن پیام بعد ۳ ثانیه
  };

  return (
    <div className="p-6 max-w-xl mx-auto shadow-2xl mt-5 border border-white/10 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-white">Add New User</h2>

      {success && (
        <div className="alert alert-success mb-4 shadow-lg">
          <span>User created successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-white">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-white">Role</span>
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="admin">Admin</option>
            <option value="broker">Broker</option>
            <option value="customer">Customer</option>
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text text-white">Status</span>
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn btn-success">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
