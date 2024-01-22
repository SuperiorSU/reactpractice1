import { useEffect, useState } from "react";

// useEffect hook takes a callback function & the code written inside the useEffect block is executed only after the the component is rendered under which the hook is used.

function UseEffect(){
    const [text, setText] = useState('');
    function changeHandler(event){
        setText(event.target.value)
        console.log(text)
    }
    // variation-1
    // useEffect(()=>{
    //     console.log("UI Rendering done")
    //     // everytime the UI is rendered, the callback functio will run after it. We are using useState, so everytime the value is changing, the ui is rendering. This method may result in performance issue.
    // })

    // variation -2
    // useEffect(()=>{
    //     console.log("UI is rendered once")

    // },[])
    //  the empty array is a depicting the list of dependencies which is empty. This will work only once i.e after the first render as their is no dependency given
    
    // variation-3
    // this will run on the first render and then according to the dependencies given. If the changes are not done according to the dependencies then also it will run once during the first render. 
    // useEffect(()=>{
    //     console.log("change is done due to text dependency given");

    // },[text])
    // variation-4
    // add event listener-> say we have created a method for a component such that everytime it renders, an event listener is added. After the 100th rendering we would have a total of 100 listeners on the component but it will affect the performance.
    
    // before adding the event listener why not remove the previous one. We can do the same using useEffect() using the syntax given
    
    useEffect(()=>{
        console.log("listener added");
        return ()=>{
            console.log("Listener Removed!");
        }
        // first the listener is removed then a listener is added
         
    },[text])
    return(
        <div>
            <input type="text" onChange={changeHandler}/>
        </div>
    )
}

export default UseEffect;