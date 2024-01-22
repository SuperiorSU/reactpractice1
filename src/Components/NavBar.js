import React from "react";
function NavBar(){
    return(
        <>
            <nav className="flex justify-between ps-5 pe-5 py-3 bg-purple-950 shadow-xl">
                <div>
                    <label className="text-[24px] font-bold text-white">Kr_<span className="text-orange-500">Sujal</span></label>
                </div>
                <div>
                    <ul className="flex gap-[20px]">
                        <li><a href="#" className="font-semibold text-white text-[18px]">Home</a></li>
                        <li><a href="#" className="font-semibold text-white text-[18px]">About</a></li>
                        <li><a href="#" className="font-semibold text-white text-[18px]">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <button className="rounded-[8px] bg-orange-500 text-white ps-2 pe-2 py-1 "><a href="#">Submit Now</a></button>
                </div>

            </nav>
        </>
    )
}
export default NavBar;