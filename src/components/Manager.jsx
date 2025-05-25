"use client";
import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const [editId, setEditId] = useState(null);
  const eyeIconRef = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getPasswords = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const passwords = await res.json();
      setPasswordArray(passwords);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      eyeIconRef.current.src = "/icons/eye-crossed.png";
    } else {
      passwordRef.current.type = "password";
      eyeIconRef.current.src = "/icons/eye.png";
    }
  };

  const savePassword = async () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    if (editId) {
      // Create a copy excluding _id
      const { _id, ...formWithoutId } = form;

      await fetch(`http://localhost:3000/update/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formWithoutId),
      });
      toast.success("Password updated!");
      setEditId(null);
    } else {
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      toast.success("Password saved!");
    }

    setForm({ site: "", username: "", password: "" });
    getPasswords();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const deletePassword = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this password?"
    );
    if (!confirmDelete) return;

    await fetch(`http://localhost:3000/delete/${id}`, {
      method: "DELETE",
    });

    toast.success("Password deleted!");
    getPasswords();
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-20 mb-12 w-11/12 mx-auto">
        <h1 className="text-xl text-center font-semibold">
          <span className="text-green-700">&lt;</span>
          <span className="">Pass</span>
          <span className="text-green-700">Op/&gt;</span>
        </h1>
        <p className="text-center">Your own password manager</p>

        <div className="flex flex-col p-4 text-black gap-3 lg:gap-8">
          <input
            value={form.site}
            onChange={handleChange}
            type="text"
            name="site"
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full px-4 py-1"
          />
          <div className="flex w-full justify-content-between gap-3 lg:gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full px-4 py-1"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full px-4 py-1"
              />
              <span
                className="absolute right-0 top-2 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={eyeIconRef}
                  src="/icons/eye.png"
                  className="py-1 px-2"
                  alt="Eye"
                  width={28}
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex gap-2 justify-center items-center border border-gray-700 bg-green-500 hover:bg-green-600 rounded-full py-1 px-4 w-fit mx-auto"
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            {editId ? "Update Password" : "Add Password"}
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-semibold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length !== 0 && (
            <div className="overflow-x-scroll lg:overflow-x-hidden">
              <table className="table-auto rounded-lg overflow-hidden w-full">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item) => (
                    <tr key={item._id} className="border-b border-white px-4">
                      <td className="w-32 py-2 px-4">
                        <div className="flex items-center justify-center px-3 gap-6">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <img
                            src="/icons/copy-link-icon.svg"
                            alt="Copy Link"
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => copyText(item.site)}
                          />
                        </div>
                      </td>
                      <td className="w-32 py-2 px-4">
                        <div className="flex items-center justify-center px-3 gap-6">
                          <span>{item.username}</span>
                          <img
                            src="/icons/copy-link-icon.svg"
                            alt="Copy Username"
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => copyText(item.username)}
                          />
                        </div>
                      </td>
                      <td className="w-32 py-2 px-4">
                        <div className="flex items-center justify-center px-3 gap-6">
                          <span>{"*".repeat(item.password.length)}</span>
                          <img
                            src="/icons/copy-link-icon.svg"
                            alt="Copy Password"
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => copyText(item.password)}
                          />
                        </div>
                      </td>
                      <td className="w-20 py-2 px-4">
                        <div className="flex items-center justify-center px-3 gap-2">
                          <button
                            onClick={() => {
                              setForm(item);
                              setEditId(item._id);
                              toast.info("Password loaded for editing");
                            }}
                          >
                            <img
                              src="/icons/pencil.png"
                              alt="Edit"
                              className="w-3 h-3"
                            />
                          </button>
                          <button onClick={() => deletePassword(item._id)}>
                            <img
                              src="/icons/trash.png"
                              alt="Delete"
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
