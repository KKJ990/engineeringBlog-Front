import React, { useState } from "react";
import "./AddTodoList";
import Todo from "./Todo";
import "../App.css";

const TodoBorder = (props: any) => {
  return (
  <div style={{padding: "20px"}}>  
    <div className="posting">
      {props.todolist.map((item: any) => (
        <Todo
          items={item}
          todoupdatelist={props.todoupdatelist}
          modifytodolist={props.modifytodolist}
        />
      ))}
    </div>
  </div>
  );
};
export default TodoBorder;
