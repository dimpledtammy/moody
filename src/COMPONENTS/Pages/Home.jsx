import React from "react";
import { CiStar,CiBag1,CiHeart } from "react-icons/ci";
import { PiHandbagSimple } from "react-icons/pi";
const Home = () => {
  return (
    <>
      <section className="bg-[#DBD0CCCC] p-6">
        <div>
          <div className="md:flex md:flex-row items-left md:items-center flex flex-col justify-between">
            <div>
              <img src="./Images/hero-img.png" />
            </div>
            <div className="w-[50%] items-center p-2">
              <p className="text-[black] text-[22px] py-2">
                HOT DEALS THIS WEEK
              </p>
              <h2 className="text-[#A86A3D] text-[40px] pb-2">
                SALE UP 50% MODERN FURNITURE
              </h2>
              <button className="border-2 rounded-[2px] bottom-6 border-[#262522CC] p-2 ">
                VIEW NOW
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="m-6">
        <div className="flex md:flex-row flex-col justify-between items-left md:items-center g-4">
          <div className=" bg-[#FAFAFA] md:w-[50%] p-3">
            <div className="flex flex-row gap-2 items-center ">
              <img className="w-[60%]" src="./Images/hero-img1.png" />
              <div className="flex flex-col items-right g-3">
                <h2 className="text-[22px]">INY VINTAGE CHAIR</h2>
                <div>
                  {" "}
                  <button className="border-2 mt-7 rounded-[3px] bottom-6 p-2 border-[#262522CC]">
                    VEIW DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EAE9E7]  md:w-[50%] p-3">
            <div className="flex flex-row gap-2 items-center ">
              <img className="w-[50%]  " src="./Images/hero-img2.png" />
              <div className="flex flex-col items-right g-3">
                <h2 className="text-[22px]">LARGE TERRACOTA VASE</h2>
                <div>
                  <button className="border-2 mt-7 rounded-[3px] bottom-6 border-[#262522CC] p-2 ">
                    VEIW DETAILS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-6">
        
          {/* <div className=" flex flex-col md:flex-row justify-around my-3 gap-4 items-center"> */}

          <div className="flex flex-col md:flex-row m-3  items-center justify-between ">
          <div className="  md:w-[45%] w-[100%] p-4  group">
            <div className="relative overflow-hidden ">
              <div className="flex flex-col gap-3 my-2 items-left ">
                <img  src="./Images/img1.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-4 text-white items-left">
                    {" "}
                    <p className="text-[px]">DECOR </p>
                    <div className="flex flex-col items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[12px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                    
                    
                  </div>
                </div>
                </div>
                
                 <div>
                  <h3 className="mt-3  text-[20px]">DECOR </h3>
                  <div className="hover:text-white">
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>   
                </div>
                
          </div>

          {/* <div className="flex flex-col md:flex-row m-3  items-center justify-between ">
           <div className="flex flex-col justify-center items-left">
          <div className=" w-[100%] p-4  group">
            <div className="relative overflow-hidden ">
              <div className="flex flex-col gap-3 my-2 items-left ">
                <img className="w-[100%]" src="./Images/img1.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-4 text-white items-left">
                    {" "}
                    <p className="text-[px]">DECOR </p>
                    <div className="flex flex-col items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[12px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                    
                    
                  </div>
                </div>
                </div>
                </div>
                </div>
                 <div>
                  <h3 className="mt-3  text-[20px]">DECOR </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>   
           

 */}

          <div className=" md:w-[35%] w-[100%] p-2 group">
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-3 my-2 items-left ">
                <img src="./Images/img2.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-6 text-white items-left">
                    {" "}
                    <p className="text-[px]">LINEN BEACH TOWEL </p>
                    <div className="flex items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[2px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3  text-[20px]">LINEN BEACH TOWEL </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:w-[35%] w-[100%] p-2 group">
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-3 my-2 items-left  ">
                <img src="./Images/img3.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center
                 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-6 text-white items-left">
                    {" "}
                    <p className="text-[px]">Square Clear Glass Box </p>
                    <div className="flex items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[2px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3  text-[20px]">Square Clear Glass Box </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:w-[35%] w-[100%] group">
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-3 my-2 items-left  ">
                <img src="./Images/img5.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-4 text-white items-left">
                    {" "}
                    <p className="text-[px]">Large Clear Glass Box
                    </p>
                    <div className="flex items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[2px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3  text-[20px]">Large Clear Glass Box
                  </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>
              </div>
            </div>
          </div>
          </div>


          <div className="flex flex-col md:flex-row m-3  items-center justify-between ">
          <div className=" md:w-[35%] w-[100%] p-2 group">
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-3 my-2 items-left  ">
                <img src="./Images/img6.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-4 text-white items-left">
                    {" "}
                    <p className="text-[px]">Round Jute Placemat
                    </p>
                    <div className="flex items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[2px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3   text-[20px]">Round Jute Placemat
                  </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>
              </div>
            </div>
          </div>
          

          <div className="  md:w-[35%] w-[100%] p-2 group">
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-3 my-2 items-left  ">
                <img src="./Images/img4.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-4 text-white items-left">
                    {" "}
                    <p className="text-[px]">BOHO CHIC </p>
                    <div className="flex items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[2px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3  text-[20px]">BOHO CHIC </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>
              </div>
            </div>
          </div>
          
       
          <div className="  md:w-[35%] w-[100%] p-2 group">
            <div className="relative overflow-hidden">
              <div className=" flex flex-col gap-3 my-2 items-left ">
                <img src="./Images/img7.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-4 text-white items-left">
                    {" "}
                    <p className="text-[px]">Metal Wire Basket </p>
                    <div className="flex items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[2px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mt-3  text-[20px]">Metal Wire Basket </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="  md:w-[35%] w-[100%] p-2 group">
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-3 my-2 items-left  ">
                <img src="./Images/img8.png" />
                <div className="  absolute h-full w-full  bg-black/60 flex flex-col 
                justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className=" flex flex-col gap-3 p-6 text-white items-left">
                    {" "}
                    <p className="text-[px]">Tray with Foot </p>
                    <div className="flex items-center justify-center text-white gap-3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <button className="border-2 rounded-[2px] p-2 bottom-6 border-white">
                        VIEW NOW
                      </button>
                    </div>
                    <div>
                    <button className="bg-slate-50 px-6 p-2 flex items-center text-center gap-4  rounded-[10px] text-black">
                   <p className=" border-spacing-8 border-r-2 hover:text-[#827a4b] border-[#333334]"> < PiHandbagSimple /></p> 
                   <p className=" hover:text-[#827d5f]"><CiHeart /></p> 
                    </button>
                    </div>
                  </div>
                </div>
                <div >
                  <h3 className="mt-3  text-[20px]">Tray with Foot </h3>
                  <div>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                    <button>
                      <CiStar />
                    </button>
                  </div>
                  <p>$30</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div
          className="bg-no-repeat relative "
          style={{
            backgroundImage: "url(./Images/hero-img3.png)",
            backgroundPosition: "cover",
            height: "70vh",
            width: "100%",
          }}
        >
          <div className="items-center w-[100%] md:text-left md:w-[45%] gap-5 mx-6  md:absolute right-0 top-[130px] left-[40px]">
            <div className="bg-[#FFFFFFE5] py-6 px-16 ">
              <div className="flex flex-col gap-3">
                <h3>BEDSHEET SETS</h3>
                <div>
                  <p className="text-[16px] text-[#7B5136] mt-2 ml-1 inline-block">
                    Rp 2.500.000
                  </p>
                  <del className="text-[12px] ml-1 text-[#7B5136]">
                    Rp 3.500.000
                  </del>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <div>
                  {" "}
                  <button className="border-2 rounded-[2px] bottom-6 border-[#262522CC] p-2 ">
                    VIEW NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-6 p-">
        <h3>TOP RATING</h3>
        <div className="flex flex-col md:flex-row m-3  items-center justify-between ">
          <div className="flex flex-col md:flex-row gap-3 my-2 items-center">
            <img src="./Images/top-img1.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button className="">
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row gap-3 my-2 items-center">
            <img src="./Images/top-img2.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row gap-3 my-2 items-center">
            <img src="./Images/top-img3.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row m-3 items-center justify-between ">
          <div className="flex  flex-col md:flex-row gap-3 my-2 items-center">
            <img src="./Images/top-img4.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row gap-3 my-2 items-center">
            <img src="./Images/top-img5.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row gap-3 my-2 items-center">
            <img src="./Images/top-img6.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row m-3 items-center justify-between ">
          <div className="flex  flex-col md:flex-row gap-3 my-2 items-center">
            <img src="./Images/top-img7.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>

           <div className="flex  flex-col md:flex-row gap-3 my-2 items-center  ">
            <img src="./Images/top-img8.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>

          </div> 


          <div className="flex  flex-col md:flex-row gap-3  my-2 items-center">
            <img src="./Images/top-img9.png" />
            <div>
              <p>Tray with Foot</p>
              <div>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
                <button>
                  <CiStar />
                </button>
              </div>
              <p>$30</p>
            </div>
          </div>
        </div>

        <div className=" items-center text-center "><button className="bg-black text-center items-center  text-white p-2">
          load more products
        </button></div>
      </section>
    </>
  );
};
export default Home;

                 
{/* <div>
<h3 className="mt-3  text-[20px]">DECOR </h3>
<div>
<button>
<CiStar />
</button>
<button>
<CiStar />
</button>
<button>
<CiStar />
</button>
<button>
<CiStar />
</button>
<button>
<CiStar />
</button>
</div>
<p>$30</p>
</div>
                     */}