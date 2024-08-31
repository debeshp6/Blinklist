import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "50vh",
        paddingTop: "30px",
    }
    let styleMy = {
        paddingBottom: "6px"
    }
  return (
    <div className="container my-3" style={myStyle}>
        <h3 className="my-10" style={styleMy}>My To-Do List</h3> <hr/>
        {props.todos.length===0? "No Todos to Display":
        props.todos.map((todo) => {
            return(
            <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
            </>
            )
        })}
    </div>
  )
}
