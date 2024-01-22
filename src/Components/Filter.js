import React from "react";
import { data } from "./Data"

const Filter =()=>{
    return(
        <div>
            {data.map((data, index)=>{
                return(    
                    <button>{data.title}</button>
                )
            })}
        </div>
    )
}
export default Filter;