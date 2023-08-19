import React, { useState } from "react";
import "./AddTodoList";
import Todo from "./Todo";
import "../App.css";
import Test from "./test";

const TodoBorder = (props: any) => {
  return (
    <div className="todo-border">
      {props.todolist.map((item: any) => (
        <Todo
          items={item}
          todoupdatelist={props.todoupdatelist}
          modifytodolist={props.modifytodolist}
        />
      ))}
      <div></div>
    </div>
  );
};
export default TodoBorder;
