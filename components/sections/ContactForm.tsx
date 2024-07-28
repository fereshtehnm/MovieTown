"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CustomButton } from "../common";

const ContactForm = () => {
  const router = useRouter();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Processing the message...");

    router.push("/contact/success");
  };
  return (
    <form action="" method="post">
      <div className="contact-form__div">
        <div className="w-full flex flex-col">
          <label className="contact-form__label">Name</label>
          <input
            type="text"
            className="contact-form__input"
          />
        </div>
      </div>
      <div className="contact-form__div">
        <div className="w-full flex flex-col">
          <label className="contact-form__label">Subject</label>
          <input
            type="text"
            className="contact-form__input"
          />
        </div>
      </div>
      <div>
        <div className="contact-form__div-message">
          <label className="contact-form__label">Message</label>
          <textarea className="contact-form__text"></textarea>
        </div>
      </div>
      <div className="contact-form__btn-container">
        <CustomButton
          title="Send message"
          containerStyles="contact-form__btn"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default ContactForm;
