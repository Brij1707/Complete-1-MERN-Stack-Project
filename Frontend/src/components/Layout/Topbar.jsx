import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <div>
            <Link to={"#"} className="hover:text-gray-300">
              <TbBrandMeta className="h-5 w-5" />
            </Link>
          </div>
          <div>
            <Link to={"#"} className="hover:text-gray-300">
              <IoLogoInstagram className="h-5 w-5" />
            </Link>
          </div>
          <div>
            <Link to={"#"} className="hover:text-gray-300">
              <RiTwitterXLine className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
