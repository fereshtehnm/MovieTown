import React from "react";


export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-dark-red to-red-500 h-96"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        {children}
      </div>
    </div>
  );
};