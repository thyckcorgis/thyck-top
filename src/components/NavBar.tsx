import React from "react";
import { Corgi } from "./index";

export default function NavBar() {
  return (
    <div className="container">
      <a>About</a>
      <a>Our Team</a>
      <a>Projects</a>
      <Corgi />
      <a>Thyck Corgis</a>
    </div>
  );
}
