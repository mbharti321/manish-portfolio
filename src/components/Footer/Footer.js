import React from "react";
import "./Footer.css"; // You'll need to create this CSS file

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Manish Bharti. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
