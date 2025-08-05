import React from "react";
import oops from "../../assets/404-error-page-templates.jpg";

export default function Notfound() {
  return (
    <>
      <img src={oops} alt="oops" className="w-full block mt-1" />
    </>
  );
}
