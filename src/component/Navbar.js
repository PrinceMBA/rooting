import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      {/* <NavLink to="/item">Item</NavLink> */}
      {/* <NavLink to="/item/:id">Details</NavLink> */}
    </div>
  );
}
