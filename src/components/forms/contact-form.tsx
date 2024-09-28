"use client";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const inputStyle =
  "w-full px-[0.2rem] text-gray-700 h-[40px] border border-input-border-light-main rounded-lg focus:outline-none focus:border-green-300 border-solid text-base";
const inputTextAreaStyle =
  "w-full px-[0.2rem] py-2 text-gray-700 border border-input-border-light-main rounded-lg focus:outline-none focus:border-green-300 text-base";
const labelStyle = "block mb-2 text-sm font-medium text-input-text-title";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <form className="flex-1 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelStyle}>
            First Name
          </label>
          <input
            id="firstName"
            className={inputStyle}
            placeholder="Ex. Benito"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelStyle}>
            Last Name
          </label>
          <input
            id="lastName"
            className={inputStyle}
            placeholder="Ex. Juarez"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelStyle}>
          Email address
        </label>
        <input
          id="email"
          type="email"
          className={inputStyle}
          placeholder="Ex. you@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelStyle}>
          Phone Number
        </label>
        <PhoneInput
          defaultCountry="mx"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputStyle={{
            width: "100%",
            height: "40px",
            fontSize: "1rem",
            paddingLeft: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #d1d5db",
            borderLeft: "none",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          }}
          countrySelectorStyleProps={{
            buttonStyle: {
              height: "40px",
              borderRight: "0px",
              borderRadius: "0.5rem",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            },
          }}
        />
      </div>

      <div>
        <label htmlFor="description" className={labelStyle}>
          Description
        </label>
        <textarea
          id="description"
          className={`${inputTextAreaStyle} resize-none`}
          placeholder="Enter a description"
          rows={6}
        ></textarea>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          I accept the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms and Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full px-4 py-2 text-white bg-primary rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        disabled={!agreed}
      >
        Contact
      </button>

      <p className="text-xs text-content-base-base">
        {`Hint: We won't be spamming.`}
      </p>
    </form>
  );
}
