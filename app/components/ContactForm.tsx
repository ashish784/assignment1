"use client"; 

import React, { useState } from 'react';
import Notification from './Notification';

const ContactForm: React.FC = () => {
  const initialFormData = {
    fullName: '',
    phoneNumber: '',
    businessName: '',
    businessEmail: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [notification, setNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setNotification(true);
    setTimeout(() => setNotification(false), 3000);
    setFormData(initialFormData); // Reset the form fields
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-green-400 p-8 flex flex-col items-center justify-center min-h-screen rounded-[16px] py-[56px] px-[32px] mt-16">
      <div className="text-center mb-4 py-4 px-[32px]">
        <h2 className="text-3xl text-white text-[32px] font-medium lg:text-[56px] leading-[64px]">Let discuss Your project</h2>
        <p className="text-white mt-2">Lets figure out how to create an effective application, its cost and terms of its development</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full mt-4">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-gray-700">Business name</label>
          <input
            type="text"
            name="businessName"
            id="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="businessEmail" className="block text-gray-700">Business mail</label>
          <input
            type="email"
            name="businessEmail"
            id="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
          Discuss the project
        </button>
      </form>
      <Notification
        message="Form submitted successfully!"
        show={notification}
        onClose={() => setNotification(false)}
      />
    </div>
  );
};

export default ContactForm;
