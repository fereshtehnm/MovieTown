import React from "react";

export const metadata = {
  title: "Message Received",
  description: "Thank you for contacting us!",
};

const SuccessPage = () => {
  return (
    <div className="bg-white flex justify-center w-full shadow rounded p-8 sm:p-12 -mt-72">
      <div className="bg-white p-20 max-w-lg text-center">
        <h1 className="text-5xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-gray-700 my-8">
          We have received your message and will get back to you shortly.
        </p>
       
      </div>
    </div>
  );
};

export default SuccessPage;
