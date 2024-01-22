import React from "react";
import { reviews } from "./Data";

const Card=(props)=>{
    let review = props.review; 
    
    return(
        <div className="flex flex-col md:relative text-center">
            <div className="border-[2px solid] w-[420px] m-auto bg-white shadow-xl rounded-[10px] p-10">
                <div className="bg-purple-800 rounded-full w-[150px] h-[150px]">
                    <img src={review.image} className="rounded-full h-[150px] w-[150px] mt-[-10px] ms-[-10px]"/>
                </div>
                <div>
                    <h4 className="text-[20px] font-semibold p-2">{review.name}</h4>
                </div>
                <div>
                    <p className="text-purple-600 pt-4 pb-5 pe-2 ps-2">{review.job}</p>
                </div> 
                <div>
                    <p>{review.text}</p>
                </div> 
               
            </div>
        </div>
    )
}
export default Card;