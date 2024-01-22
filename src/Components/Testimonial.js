import React from "react";
import Card from "./Card";
import {useState} from 'react';

import { reviews } from "./Data";

const Testimonial=(props)=>{
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    let btn = ">>";
    let btn1 = "<<";
    function leftHandler(){
        console.log("left");
        if(index-1<0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1);
        }
    }
    function rightHandler(){
        console.log("right");
        if((index+1)>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    return(
        <div>
            <Card review = {reviews[index]}></Card>
            <div className="mt-10 text-center">
                    <button className="me-2 bg-purple-300 p-1 rounded-[50%] text-white font-semibold" onClick={leftHandler}>{btn1}</button>
                    <button onClick={rightHandler} className="ms-2 bg-purple-300 p-1 rounded-[50%] text-white font-semibold">{btn}</button>
            </div>
        </div>
        
    )
}


export default Testimonial;