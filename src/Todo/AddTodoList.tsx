import { useState } from "react";
import { Button } from "react-bootstrap";
import TodoBorder from "./TodoBorder";
import "../App.css";

const AddTodoList = () => {
  interface Todoitem {
    todolistnumber: number;
    todolisttitle: string;
  }

  const [savetxt, setsavetxt] = useState("");
  const [todolist, settodolist] = useState<Todoitem[]>([]);
  let i = 0;

  //추가(저장)
  const addItem = () => {
    const Todoitem = {
      todolistnumber: todolist.length + 1,
      todolisttitle: savetxt,
    };
    settodolist([...todolist, Todoitem]);

    console.log(todolist);
  };

  //삭제시 업데이트
  const todoupdatelist = (removeitem: any) => {
    settodolist(
      todolist.filter(
        (item: any) => item.todolistnumber !== removeitem.todolistnumber
      )
    );
  };

  //수정
  const modifytodolist = (modifyitem: any) => {
    const modifyitemlist = todolist.map((item: any) =>
      item.todolistnumber === modifyitem.todolistnumber
        ? { ...item, todolisttitle: modifyitem.todolisttitle }
        : item
    );
    settodolist(modifyitemlist);
    console.log(todolist);
  };

  return (
    <div className="todo-input">
      <h4>TODO-LIST</h4>
      <input
        value={savetxt}
        onChange={(event) => setsavetxt(event.target.value)}
      ></input>

      <Button onClick={() => addItem()} variant="warning">
        추가
      </Button>
      <hr></hr>

      <TodoBorder
        todolist={todolist}
        todoupdatelist={todoupdatelist}
        modifytodolist={modifytodolist}
      ></TodoBorder>
    </div>
  );
};
export default AddTodoList;
