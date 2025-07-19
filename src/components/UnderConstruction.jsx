import React, { useState, useEffect } from "react";



const ToteBagSVG = () => (
  <svg
    className="w-24 h-24 mx-auto stroke-gray-400 animate-pulse"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="14" y="20" width="36" height="32" rx="4" ry="4" />
    <path d="M20 20v-6a6 6 0 0 1 12 0v6" />
    <path d="M44 20v-6a6 6 0 0 0-12 0v6" />
    <line x1="14" y1="44" x2="50" y2="44" />
    <line x1="14" y1="52" x2="50" y2="52" />
  </svg>
);

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation state
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Email and phone validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net|org|co)$/i;
  const phoneRegex = /^\d{10}$/;

  // Debounced email validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (email && !emailRegex.test(email)) {
        setEmailError("Enter a valid email address");
      } else {
        setEmailError("");
      }
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [email]);

  // Debounced phone validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (phone && !phoneRegex.test(phone)) {
        setPhoneError("Enter a valid 10-digit phone number");
      } else {
        setPhoneError("");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [phone]);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setIsSubmitting(true);

    if (!name || !email || !phone) {
      setStatusMessage("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    if (!emailRegex.test(email)) {
      setStatusMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (!phoneRegex.test(phone)) {
      setStatusMessage("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }

    const GOOGLE_SHEET_WEB_APP_URL =
      "https://script.google.com/macros/s/AKfycbyIeUJMqVff13vPCsWvCZbBdAfXscO-BTFxFYpOtaOSfpp69hv21VEhu8Bzv89nw49E/exec";

    try {
      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          phone,
          timestamp: new Date().toLocaleString(),
          token: "SAVVYS123", // secret shared token
        }).toString(),
      });

      setStatusMessage("Thank you for subscribing! We will notify you.");
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181818] px-4 text-gray-300 font-mono animate-fadeIn">
      <div className="max-w-xs w-full text-center flex flex-col gap-10">
        <div
          className="text-center text-[40px] font-normal tracking-wide text-[#a6a6a6]"
          style={{ fontFamily: "Anonymous Pro" }}
        >
          Savvy’s
        </div>
        <h2 className="text-2xl font-bold tracking-widest text-gray-400 select-none">
          UNDER CONSTRUCTION!
        </h2>

        <ToteBagSVG />

        {statusMessage && (
          <div
            className={`py-2 px-4 rounded-md text-sm ${
              statusMessage.includes("Thank you")
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {statusMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#2c2c2c] text-white text-base placeholder-gray-500 transform translate-z-0"
          />

          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#2c2c2c] text-white text-base placeholder-gray-500 transform translate-z-0"
            />
            {emailError && (
              <span className="text-red-500 text-sm text-left">
                {emailError}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 bg-[#2c2c2c] text-white text-base placeholder-gray-500 transform translate-z-0"
            />
            {phoneError && (
              <span className="text-red-500 text-sm text-left">
                {phoneError}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-gray-100 text-[#181818] font-bold py-3 px-7 rounded-md hover:bg-gray-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-100 ease-out w-full transform"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </button>
        </form>

        <div className="text-base" style={{ fontFamily: "Holiday, cursive" }}>
          <p>Designed by Yachana Verma</p>
        </div>
      </div>
    </div>
  );
}
