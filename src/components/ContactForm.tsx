"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";

const CONTACT_EMAIL = "kronwich29715@gmail.com";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Portfolio inquiry from ${fullName}`)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-name">
        <div className="contact-form-field">
          <label htmlFor="contact-first-name">First Name</label>
          <input
            id="contact-first-name"
            name="firstName"
            autoComplete="given-name"
            placeholder="Your first name"
            required
          />
        </div>
        <div className="contact-form-field">
          <label htmlFor="contact-last-name">Last Name</label>
          <input
            id="contact-last-name"
            name="lastName"
            autoComplete="family-name"
            placeholder="Your last name"
            required
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          required
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-phone">Phone Number</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Your phone number"
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Write your message here..."
          rows={5}
          required
        />
      </div>

      <button className="contact-form-submit" type="submit">
        <Send size={17} aria-hidden="true" />
        Send Message
      </button>
      <p className="contact-form-note">Submitting opens your email app to send the message.</p>
    </form>
  );
}
