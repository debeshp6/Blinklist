import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  let myStyleClass = {
    fontSize: "18px"
  }
  return (
    <div>
      <h4 style={myStyleClass}>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
  )
}