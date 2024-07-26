import React from "react";
import { SubmitContact } from "@/components/sections";

export const metadata = {
  title: "contact us",
  description: "contact our team!",
};

const page = () => {
  return (
    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
      <p className="text-3xl font-bold leading-7 text-center">Contact Our Team</p>
      <form action="" method="post">
        <div className="md:flex items-center mt-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none">Name</label>
            <input
              type="text"
              className="leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="font-semibold leading-none">Phone</label>
            <input
              type="email"
              className="leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
          </div>
        </div>
        <div className="md:flex items-center mt-8">
          <div className="w-full flex flex-col">
            <label className="font-semibold leading-none">Subject</label>
            <input
              type="text"
              className="leading-none text-gray-900 p-3 focus:outline-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"
            />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none">Message</label>
            <textarea className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <SubmitContact />
        </div>
      </form>
    </div>
  );
};

export default page;
