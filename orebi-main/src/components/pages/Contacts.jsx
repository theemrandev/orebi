import React, { useState } from 'react';
import Container from '../../common/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="bg-white min-h-screen font-dm pb-24">
      {/* Breadcrumb Header */}
      <div className="py-12 bg-[#F5F5F3] border-b border-gray-200">
        <Container>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#262626]">Contacts</h1>
            <div className="flex items-center gap-2 text-xs text-[#767676]">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <FaAngleRight size={10} />
              <span className="text-[#262626] font-bold">Contacts</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#262626]">Fill up a Form</h2>
            <p className="text-xs text-[#767676] mt-2">
              Have a question about an order, custom shipment, or partnership? Send us a message and our support team will reply within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <FaCheckCircle className="text-emerald-500 text-3xl mx-auto" />
              <h4 className="text-base font-bold text-[#262626]">Message Sent Successfully!</h4>
              <p className="text-xs text-[#767676]">
                Thank you for contacting Orebi. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div>
                <label className="block text-xs font-bold text-[#262626] uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Insert your full name"
                  className="w-full pb-3 pt-1 border-b border-gray-300 outline-none text-[#262626] focus:border-[#262626] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#262626] uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Insert your email address"
                  className="w-full pb-3 pt-1 border-b border-gray-300 outline-none text-[#262626] focus:border-[#262626] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#262626] uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Insert your message here"
                  className="w-full pb-3 pt-1 border-b border-gray-300 outline-none text-[#262626] focus:border-[#262626] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="px-10 py-3.5 bg-[#262626] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors rounded cursor-pointer"
              >
                Post Message
              </button>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
