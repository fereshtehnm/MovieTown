"use client";

import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const HandleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={HandleSearch}>
      <div className="searchbar__item">
        
      </div>
    </form>
  );
};

export default SearchBar;
