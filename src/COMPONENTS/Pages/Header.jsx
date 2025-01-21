import React from "react";
import { CiSearch, CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Header = () => {

  return (
    <>
      <section className="m-3  w-full  z-[1000] max-w-[1200px]">
        <div className="flex flex-row justify-between items-center ">
          <div>
            <h1>MOODY STUDIO</h1>
          </div>

          <div className="hidden md:flex text-black flex-row gap-1">
            {" "}
            <CiSearch />
            <CiUser />
            <CiShoppingCart />
            <CiHeart />
          </div>
        </div>
        <div className="text-black border-black py-2">
          {" "}
          <hr />{" "}
        </div>
        <div className="text-black hidden md:flex flex-row justify-evenly  items-center ">
          <a>
            <h1>HOME</h1>
          </a>
          <a>
            <h1>STORE</h1>
          </a>
          <a>
            <h1>ACCESORIES</h1>
          </a>
          <a>
            <h1>BRAND</h1>
          </a>
          <a>
            <h1>PAGES</h1>
          </a>
          <a>
            <h1>ABOUT US</h1>
          </a>
          <a>
            <h1>NEWS</h1>
          </a>
          <a>
            <h1>CONTACT US</h1>
          </a>
        </div>
        <div className="text-black border-black py-5">
          {" "}
          <hr />{" "}
        </div>
        <div className=" text-[#F2C94C] hidden  md:flex flex-row items-center justify-around ">
          <div className="flex flex-row items-center">
            <MdOutlineLocalShipping />
            <p className="text-[#00000080] items-center">FREE SHIPPING</p>
          </div>
          <div className="flex flex-row items-center">
            {" "}
            <FaMoneyBillTransfer />
            <p className="text-[#00000080]">100% MONEY BACK</p>{" "}
          </div>
          <div className="flex flex-row items-center">
            <BiSupport />
            <p className="text-[#00000080]">SUPPORRT TEAM</p>
          </div>
        </div>
      </section>
      <section>
         <div>
          <div>
            
          </div>
         </div>


         {/* for mobile */}

      </section>
    </>
  );
};
export default Header;
