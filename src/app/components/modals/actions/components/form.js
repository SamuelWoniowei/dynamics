"use client";
import React, { useEffect, useState } from "react";

const ActionForm = () => {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " " && email.includes("@")) {
      setEmails([...emails, email.trim()]);
      setEmail("");
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  return (
    <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <div className="flex flex-col md:flex-row items-baseline gap-2 ">
          <input
            type="text"
            value={email}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="border p-2 rounded-md w-full w-auto flex-grow"
            placeholder="Enter email and press space"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4 mt-4 hover:bg-blue-400 "
          >
            Allow Access
          </button>
        </div>
        <div className="flex flex-wrap mt-2">
          {emails.map((email, index) => (
            <span
              key={index}
              className="flex items-center bg-blue-100 rounded-full px-3 py-1 text-sm text-blue-600 mr-2"
            >
              {email}
              <button
                type="button"
                onClick={() => removeEmail(email)}
                className="ml-2 text-red-500"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>
    </form>
  );
};

export default ActionForm;
