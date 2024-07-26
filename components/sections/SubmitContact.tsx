"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../common/CustomButton";

const SubmitContact = () => {
  const router = useRouter();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Processing the message...");

    router.push("/contact/success");
  };

  return (
    <CustomButton
      title="Send message"
      containerStyles="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gray-700 rounded hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none"
      onClick={handleSubmit}
    />
  );
};

export default SubmitContact;
