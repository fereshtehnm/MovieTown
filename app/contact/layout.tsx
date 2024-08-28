import React from "react";


export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {  return (
    <div className="w-full">
      <div className="contact-layout"></div>
      <div className="contact-layout-wrapper">
        {children}
      </div>
    </div>
  );
};