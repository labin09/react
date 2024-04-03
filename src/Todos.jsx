

import React from "react";
import SingleTodo from "./SingleTodo";
let todos =[  {
    title:"html",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    status:true,
},
{
    title:"css",
    description:"NON of above to decide the code for anywh this adipisielit",
    status:true,

},
{
    title:"React",
    description:"Golden war in the world sit amet consectetur adipisicing ",
    status:false,
},
{
    title:"js",
    description:"Golden war in the world sit amet consectetur adipisicing ",
    status:false,
}
];
export default function Todos(){
    return(
        <>
        {/* fragment */}
        <h2>TODOS</h2>
        <div id="todos" className="todos">
            {
                todos.map((el,index)=>{
                    return(
                        <SingleTodo 
                        key={index}
                        status={el.status}
                        title ={el.title}
                        description ={el.description}
                        /> 
                        
                        );
                })}
{/* <SingleTodo 
            status={true}
            title ="html"
            description ={"html description"}
            />

<SingleTodo 
            status={todos[0].status}
            title ={todos[0].title}
            description ={todos[0].description}

            />

<SingleTodo 
            status={todos[1].status}
            title ={todos[1].title}
            description ={todos[1].description}

            /> */}
        </div>
        
        </>
        );
}
