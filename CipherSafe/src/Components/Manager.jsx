import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    setPasswordArray(passwords ? JSON.parse(passwords) : []);
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard", { position: "top-right", autoClose: 5000 });
    navigator.clipboard.writeText(text);
  };

  const togglePasswordVisibility = () => {
    const passwordInput = passwordRef.current;
    passwordInput.type = passwordInput.type === "text" ? "password" : "text";
    const eyeIcon = ref.current;
    eyeIcon.src =
      passwordInput.type === "text" ? "icons/openeye.png" : "icons/hideeye.png";
  };

  const savePassword = () => {
    const { site, username, password } = form;
    if (site.length > 3 && username.length > 3 && password.length > 5) {
      const newPassword = { ...form, id: uuidv4() };
      const updatedPasswords = [...passwordArray, newPassword];
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      setPasswordArray(updatedPasswords);
      setForm({ site: "", username: "", password: "" });
      toast("Password Saved", { position: "top-right", autoClose: 5000 });
    } else {
      toast("Error: Ensure the fields meet the requirements");
    }
  };

  const deletePassword = (id) => {
    const confirmed = window.confirm("Do you really want to delete?");
    if (confirmed) {
      const updatedPasswords = passwordArray.filter((item) => item.id !== id);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      setPasswordArray(updatedPasswords);
      toast("Password Deleted", { position: "top-right", autoClose: 5000 });
    }
  };

  const editPassword = (id) => {
    const selectedPassword = passwordArray.find((item) => item.id === id);
    if (selectedPassword) {
      setForm({ ...selectedPassword });
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="p-2 md:p-0 md:mycontainer min-h-[82.2vh]">
        <h1 className="text-4xl font-bold text-center mt-5">
          <span className="text-green-700">🔒</span>
          <span className="text-yellow-300">Cipher</span>
          <span className="text-blue-300">Safe</span>
          <span className="text-yellow-400">🗝️</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Secure Your Secrets: Meet Your Password Guardian
        </p>
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-yellow-400 focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-500 bg-gray-50 px-4 py-3 w-full shadow-md hover:shadow-lg"
            type="text"
            placeholder="Enter website URL"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border
              - border-yellow-400 focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-500 bg-gray-50 px-4 py-3 w-full shadow-md hover:shadow-lg"
              type="text"
              name="username"
              placeholder="Enter Username"
              id="username"
            />
            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-yellow-400 focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-500 bg-gray-50 px-4 py-3 w-full shadow-md hover:shadow-lg"
                type="password"
                name="password"
                placeholder="Enter Password"
                id="password"
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={30}
                  src="icons/openeye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 hover:text-blue-800 rounded-full border-2 border-yellow-400 px-8 py-3 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg"
          >
            <img
              src="icons/saveps.png"
              alt="Save Icon"
              className="w-6 h-6 mr-2"
            />
            <span className="font-bold">Save Password</span>
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-3xl text-gray-800 text-center py-4">
            My Passwords
          </h2>
          {passwordArray.length === 0 && (
            <div className="text-gray-600 text-lg text-center">
              Looks like you haven't added any passwords yet.
            </div>
          )}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10 border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4">Site</th>
                  <th className="py-2 px-4">Username</th>
                  <th className="py-2 px-4">Password</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {passwordArray.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="py-2 px-4">
                      <div className="flex items-center justify-center">
                        <a
                          href={item.site}
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                          {item.site}
                        </a>
                        <div
                          className="lordiconcopy size-7 ml-2 cursor-pointer"
                          onClick={() => copyText(item.site)}
                        >
                          <img
                            className="mt-2 w-4 h-4"
                            src="icons/copy.png"
                            alt="copy"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center justify-center">
                        <span className="text-blue-600">{item.username}</span>
                        <div
                          className="lordiconcopy size-7 ml-2 cursor-pointer"
                          onClick={() => copyText(item.username)}
                        >
                          <img
                            className="mt-2 w-4 h-4"
                            src="icons/copy.png"
                            alt="copy"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center justify-center">
                        <span className="text-blue-600">
                          {"*".repeat(item.password.length)}
                        </span>
                        <div
                          className="lordiconcopy size-7 ml-2 cursor-pointer"
                          onClick={() => copyText(item.password)}
                        >
                          <img
                            className="mt-2 w-4 h-4"
                            src="icons/copy.png"
                            alt="copy"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex justify-center items-center">
                        <span
                          className="cursor-pointer "
                          onClick={() => editPassword(item.id)}
                        >
                          <img
                            className="h-5 w-5 mr-2"
                            src="icons/pencil.png"
                            alt="edit"
                          />
                        </span>
                        <span
                          className="cursor-pointer item-center"
                          onClick={() => deletePassword(item.id)}
                        >
                          <img
                            className="h-7 w-7"
                            src="icons/trash.png"
                            alt="delete"
                          />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
