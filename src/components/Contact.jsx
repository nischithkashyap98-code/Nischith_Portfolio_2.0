import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_pinfust", // ✅ Your Service ID
        "template_dfsslk8", // ✅ Your Template ID
        formRef.current,
        "NDssydaVA3lu6XrTd" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setIsSending(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-black text-gray-200 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-[#b8912b] mb-10"
        >
          Get In Touch
        </motion.h2>

        {/* Quick Contact CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <a
            href="https://wa.me/919880794294?text=Hi%20Nischith!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#b8912b] text-black px-5 py-3 rounded-lg font-semibold hover:scale-[1.05] transition-all"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="mailto:nischithkashyap98@gmail.com"
            className="flex items-center gap-2 border border-[#b8912b] px-5 py-3 rounded-lg hover:bg-[#b8912b]/20 transition-all"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href="tel:+919880794294"
            className="flex items-center gap-2 border border-[#b8912b] px-5 py-3 rounded-lg hover:bg-[#b8912b]/20 transition-all"
          >
            <FaPhoneAlt /> Call
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-[#b8912b]/30 rounded-2xl p-8 text-left max-w-lg mx-auto shadow-lg"
        >
          <label className="block mb-2 text-[#b8912b] font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-md mb-4 bg-black/50 text-gray-200 border border-[#b8912b]/30 focus:outline-none focus:border-[#b8912b]"
          />

          <label className="block mb-2 text-[#b8912b] font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-md mb-4 bg-black/50 text-gray-200 border border-[#b8912b]/30 focus:outline-none focus:border-[#b8912b]"
          />

          <label className="block mb-2 text-[#b8912b] font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-md mb-4 bg-black/50 text-gray-200 border border-[#b8912b]/30 focus:outline-none focus:border-[#b8912b]"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className="bg-[#b8912b] text-black font-semibold px-6 py-3 rounded-lg hover:scale-[1.05] transition-transform w-full"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-[#b8912b]">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
