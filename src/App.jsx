import SingleTodo from "./SingleTodo";
import Todos from "./Todos";
import Users from "./Users";
import Products from "./Products";
import Counter from "./Counter";
//import { Component } from "react";
// import ProductList from "./ProductList";
import featureProducts from "./data/featureProducts";
import TodosList from "./TodosList";



let title="NAGARJUNA COLLGE OF IT";
let description ="Lorem ipsum dolor sit amet consectetur adipisicing elit.\
Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Lorem ipsum dolor sit amet consectetur adipisicing elit.  nostrum quibusdam placeat.";

function App(){
return(
    
    <div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {/* <SingleTodo /> */}
            {/* <Todos />
            <Users /> */}
            {/* <Courses /> */}
            {/* <Products /> */}
            {/* <ProductList /> */}
            {/* <featureProducts /> */}
            {/* <Counter /> */}
            <TodosList /> 
        </div>
    </div>
)
//     return <div>
//         <h1>{title}</h1>
//     <hr />
//     <p>{description}</p>

//     <h2>TODOS</h2>

//     <div id='todo' className='todos'>
//     <SingleTodo 
//     status="completed" 
//         title="react" 
//     description="react description" />
    
//     <SingleTodo 
//     status="completed" 
//     title="git" 
//     description="git description" />

// </div>
//     </div>
}

export default App;