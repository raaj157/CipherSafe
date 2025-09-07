import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    setPasswordArray(passwords ? JSON.parse(passwords) : []);
  }, []);

  const showToast = (message, type = "success") => {
    const id = uuidv4();
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const copyText = (text) => {
    showToast("Copied to clipboard!", "success");
    navigator.clipboard.writeText(text);
  };

  const togglePasswordVisibility = () => {
    const passwordInput = passwordRef.current;
    passwordInput.type = passwordInput.type === "text" ? "password" : "text";
  };

  const savePassword = () => {
    const { site, username, password } = form;
    if (site.length > 3 && username.length > 3 && password.length > 5) {
      const newPassword = { ...form, id: uuidv4() };
      const updatedPasswords = [...passwordArray, newPassword];
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      setPasswordArray(updatedPasswords);
      setForm({ site: "", username: "", password: "" });
      showToast("Password saved successfully!", "success");
    } else {
      showToast("Error: Ensure all fields meet the requirements", "error");
    }
  };

  const deletePassword = (id) => {
    const confirmed = window.confirm("Do you really want to delete this password?");
    if (confirmed) {
      const updatedPasswords = passwordArray.filter((item) => item.id !== id);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      setPasswordArray(updatedPasswords);
      showToast("Password deleted successfully!", "success");
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

  const EyeIcon = ({ isOpen, onClick }) => (
    <svg 
      onClick={onClick}
      className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
      )}
    </svg>
  );

  const CopyIcon = () => (
    <svg className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  const EditIcon = () => (
    <svg className="w-4 h-4 text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );

  const DeleteIcon = () => (
    <svg className="w-4 h-4 text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );

  const SaveIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
  );

  const Toast = ({ toast }) => (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium transform transition-all duration-300 ${
      toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`}>
      {toast.message}
    </div>
  );

  return (
    <>
      {/* Toast notifications */}
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
      
      {/* Background */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent)] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              🔒 CipherSafe 🗝️
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Secure Your Secrets: Meet Your Password Guardian
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Add Password Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Password</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <input
                  value={form.site}
                  onChange={handleChange}
                  className="w-full rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-gray-400 bg-white/70 px-6 py-4 text-lg font-medium shadow-lg hover:shadow-xl"
                  type="text"
                  placeholder="🌐 Enter website URL"
                  name="site"
                  id="site"
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    value={form.username}
                    onChange={handleChange}
                    className="rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-gray-400 bg-white/70 px-6 py-4 text-lg font-medium shadow-lg hover:shadow-xl"
                    type="text"
                    name="username"
                    placeholder="👤 Enter Username"
                    id="username"
                  />
                  
                  <div className="relative">
                    <input
                      ref={passwordRef}
                      value={form.password}
                      onChange={handleChange}
                      className="w-full rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 placeholder-gray-400 bg-white/70 px-6 py-4 pr-12 text-lg font-medium shadow-lg hover:shadow-xl"
                      type="password"
                      name="password"
                      placeholder="🔑 Enter Password"
                      id="password"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <EyeIcon 
                        isOpen={passwordRef.current?.type === "text"} 
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={savePassword}
                  className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <SaveIcon />
                  Save Password
                </button>
              </div>
            </div>
          </div>

          {/* Password List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              My Passwords
              {passwordArray.length > 0 && (
                <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                  {passwordArray.length}
                </span>
              )}
            </h2>
            
            {passwordArray.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔐</div>
                <p className="text-xl text-gray-500 font-medium">
                  No passwords saved yet
                </p>
                <p className="text-gray-400 mt-2">
                  Add your first password above to get started
                </p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <th className="px-6 py-4 text-left font-bold text-lg">Website</th>
                        <th className="px-6 py-4 text-left font-bold text-lg">Username</th>
                        <th className="px-6 py-4 text-left font-bold text-lg">Password</th>
                        <th className="px-6 py-4 text-center font-bold text-lg">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {passwordArray.map((item, index) => (
                        <tr key={item.id} className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200 ${
                          index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                        }`}>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <a
                                href={item.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-2 hover:decoration-blue-800 transition-colors duration-200"
                              >
                                {item.site}
                              </a>
                              <div onClick={() => copyText(item.site)}>
                                <CopyIcon />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium text-gray-700">{item.username}</span>
                              <div onClick={() => copyText(item.username)}>
                                <CopyIcon />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <span className="font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
                                {"•".repeat(item.password.length)}
                              </span>
                              <div onClick={() => copyText(item.password)}>
                                <CopyIcon />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center space-x-4">
                              <div 
                                onClick={() => editPassword(item.id)}
                                className="p-2 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                              >
                                <EditIcon />
                              </div>
                              <div 
                                onClick={() => deletePassword(item.id)}
                                className="p-2 hover:bg-red-100 rounded-lg transition-colors duration-200"
                              >
                                <DeleteIcon />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;