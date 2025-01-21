import React from "react";
import { FaFacebookF, FaTwitter,FaPhone, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#323334] p-6">
        {/* <div className="flex flex-col md:flex-row text-[#FFFFFF] justify-between gap-6 items-left items-center ">
          <div className="flex flex-col gap-4 md:w-[20%] items-left  ">
            <h3>URBAN OUTFITTERS</h3>
            <p className="text-[#aeabab]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div><p>121 king street, Melbourne 3000</p><p>+61 3 8376 6284</p><p>contact@urbanoutfitters.com</p></div>
          <div className="flex gap-3">
          <FaFacebookF/>
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          </div>
          </div>

          <div className="md:text-left text-center">
            <div className="flex text-left flex-col gap-4 items-left  " >
                <h3 className="hidden md:flex">SHOPPING</h3>
        <div  className="text-[#aeabab] flex flex-col gap-2 ">
               
            <p>Your cart</p>
          
         
            <p>Your orders</p>
         
            <p>Compared items</p>
         
            <p>Wishlist items</p>
          
            <p>Shipping detail </p>
          
        </div>
            </div>
          </div>


          
            <div className=" hidden md:flex flex-col gap-4 items-left " >
                <h3>MORE LINK</h3>
        <div  className="text-[#aeabab] flex flex-col gap-2 ">
                
            <p>Blog</p>
         
            <p>Gift Center</p>
         
            <p>Buying Guides</p>
         
            <p>New Arrivals</p>
          
            <p>Clearance </p>
         
        </div>
            </div>
         


         <div className=" hidden md:flex flex-col gap-4  items-left " >
          <h3>FROM THE BLOG</h3>
      <div className=" flex flex-col gap-2 text-[#aeabab]">

          <div className=" ">
            <p>26 may</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>3 comments</p>
          </div>
          <hr/>
 
          <div>
            <p>27 may</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>3 comments</p>
          </div>

          </div>
          </div>

         </div>*/}
        <div className="">
          <div className="hidden md:flex md:justify-between gap-6 text-white ">
            <div className="flex flex-col w-[25%]  gap-4 ">
              {" "}
              <div>
                <h2>URBAN OUTFITTERS</h2>
              </div>
              <div>
                {" "}
                <p className="text-[#aeabab] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div>
                <p>121 king street, Melbourne 3000</p>
                <p>+61 3 8376 6284</p>
                <p>contact@urbanoutfitters.com</p>
              </div>
              <div>
                {" "}
                <p className="flex items-left md:text-left text-center  md:gap-3 gap-8">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaYoutube />
                </p>
              </div>
            </div>
            <div className=" hidden md:flex flex-col  gap-4 ">
              <div>
                <h2>SHOPPING</h2>
              </div>
              <div className="text-[#aeabab] flex flex-col gap-2 ">
                <p>Your cart</p>

                <p>Your orders</p>

                <p>Compared items</p>

                <p>Wishlist items</p>

                <p>Shipping detail </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col  gap-4">
              <div>
                {" "}
                <h2>MORE LINKS</h2>
              </div>
              <div className="text-[#aeabab] flex flex-col gap-2 ">
                <p>Blog</p>

                <p>Gift Center</p>

                <p>Buying Guides</p>

                <p>New Arrivals</p>

                <p>Clearance </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-4">
              <div>
                <h2>FROM THE BLOG</h2>
              </div>
              <div className=" flex flex-col gap-2 text-[#aeabab]">
                <div className=" ">
                  <p>26 may</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>3 comments</p>
                </div>
                <hr />

                <div>
                  <p>27 may</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p>3 comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* for small screen size */}

      <div className="md:hidden">
        <div className="flex flex-col gap-6 text-white items-center text-center">
          <div>
            <h3>URBAN OUTFITTERS</h3>
          </div>
<div >
  <div className="flex flex-row mx-16 text-center gap-2 items-center"><FaPhone  /><p>166</p></div>
  <p>121 king street, Melbourne 3000</p>
  <p>contact@urbanoutfitters.com</p>
</div>

        <div className=" flex flex-col gap-2 ">
                <p>Your cart</p>

                <p>Your orders</p>

                <p>Compared items</p>

                <p>Wishlist items</p>

                <p>Shipping detail </p>

              </div>
              <div>
              <p className="flex items-left md:text-left text-center  md:gap-3 gap-8">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaYoutube />
                </p>
              </div>

        </div>

</div>
      </div>

      <hr />
      <div className="bg-black text-white text-center items-center py-3">
        <p>Urban Outfitters © – All rights reserved </p>
      </div>
    </>
  );
};
export default Footer;
