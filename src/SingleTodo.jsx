// component
function SingleTodo(props){
    console.log("props",props);
    return(
<div className="todo">
        <h3 className="capitalize">
{props.title}
        </h3>
        <p>
        {props.description}</p>
</div>
    )
}

export default SingleTodo;