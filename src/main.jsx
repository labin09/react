/*escmascript module(react) v/s common js (express) */
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import App from './App';

/* react router dom */
/*redux */
/*configuration */

// let title="NAGARJUNA COLLGE OF IT";
// let description ="Lorem ipsum dolor sit amet consectetur adipisicing elit.\
// Lorem ipsum dolor sit amet consectetur adipisicing elit. \
// Lorem ipsum dolor sit amet consectetur adipisicing elit.  nostrum quibusdam placeat.";

let todos =[  {
  title:"html",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
  status:true,
},
// {
//   title:"css",
//   description:"NON of above to decide the code for anywh this adipisielit",
//   status:true,

// },
// {
  //   title:"React",
  //   description:"Golden war in the world sit amet consectetur adipisicing ",
  //   status:false,
  // }
];
// function Todo(){
  //   return(
    
//     <div class="todo">
// <h3>
//   {todos[0].title}({todos[0].status ? "completed✅": "pending❌"})

// </h3>
// <p>
// {todos[0].description}
// </p>
// </div>
//   );
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<App />
  </React.StrictMode>

)
    {/* <div className="todo">
      <h3 className="capitalize">
      react
      </h3>
      <p>
    Lorem ipsum dolor, explicabo quisquam natus assumenda quasi esse fugiat dicta saepe suscipit expedita.  nostrum reprehenderit maiores dolores?
</p>
</div> */}

{/* <div className="todo">
      <h3 className='capitalize'>
        express
      </h3>
      <p>
  
    Lorem ipsum dolor, explicabo quisquam natus assumenda quasi esse fugiat dicta saepe suscipit expedita.  nostrum reprehenderit maiores dolores?
</p>
</div>

<div className='todo'>
      <h3 className='capitalize'>
        html
      </h3>
      <p>
  
    Lorem ipsum dolor, explicabo quisquam natus assumenda quasi esse fugiat dicta saepe suscipit expedita.  nostrum reprehenderit maiores dolores?
</p>
</div> */}
