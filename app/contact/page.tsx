import React from "react";
import { ContactForm } from "@/components/sections";

export const metadata = {
  title: "contact us",
  description: "contact our team!",
};

const page = () => {
  return (
    <div className="contact-container__box">
      <p className="contact-p">
        Contact Our Team
      </p>
      <ContactForm />
    </div>
  );
};

export default page;
