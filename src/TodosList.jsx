import React,{useState} from "react";

export default function TodosList(){
    let todos =["react","css"];
    // convert to state using useState

    function handleSubmit(e){
        e.preventDefault();
        todos.push(e.target.title.value);
        console.log(todos);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input name="title" type="text" />
                <button>Create New</button>
            </form>
            
<ul>
    {/* mapping */}
    <li>react</li>
    <li>css</li>
</ul>

        </div>
    )
}