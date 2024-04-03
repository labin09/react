import React, { Fragment } from "react";
//import SingleTodo from "./SingleTodo";

function Users(){
    let users =["ram","shyam","hari","sita","xyz","abc","ijk"];
    let mappedUsers = users.map((el)=>{
        return <li>{el}</li>
    });
    return(
        <>
    <h3>Users</h3>
        <ul>
            {users.map(el=>{
                return <li>{el}</li>
            })}
        </ul>
        </>
        );
}
export default Users; 