import React from "react";
import imgefooter from "../../assets/foot.png";

export default function Footer() {
  return (
    <>
      <div className=" bg-[#212529] flex justify-between items-center py-10 text-white">
        <div className="img ms-10">
          <img src={imgefooter} alt="imgefooter" className="cursor-pointer" />
        </div>
        <div className="me-10">
          <div>
            <i className="fa-brands fa-facebook px-2 cursor-pointer" />
            <i className="fa-brands fa-twitter px-2 cursor-pointer" />
            <i className="fa-brands fa-linkedin px-2 cursor-pointer" />
            <i className="fa-brands fa-youtube px-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
