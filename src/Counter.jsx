//  name import
import {useState}  from "react";
/*
function useState(initialValue){
    //code
    function stateModifier(){

    }
    return [ initialValue]
}

*/

export default function Counter() {
    let value = 0;

const [count,setCount]=useState(0);
// array destructuing
    function increment() {
    console.log("increment...");
    value++;
    // count++;
    // setCount(2232535353453)
    // console.log({ count });
    setCount(count + 1);
    console.log({count});
    console.log({value});
}
function decrement (){
    console.log("decrement...")
    setCount(count-1);
}
console.log("render");
    return (
        <>
        <h1>
    state variables Count: <span id="output">{count}</span>
        </h1>
        {/* <button onClick="increment()" >increment</button> */}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </>
    );
}