import React, { useState } from "react";
import "../App.css";

import {
  ModalHeader,
  Modal,
  ModalFooter,
  ModalBody,
  Button,
} from "react-bootstrap";

const Todo = (props: any) => {
  const [ModalShow, setModalShow] = useState<boolean>(false);

  const ModalShowon = () => {
    setModalShow(true);
  };

  const ModalShowoff = () => {
    setModalShow(false);
  };

  const TodoModal = () => {
    const [modifytxt, setmodifytxt] = useState<any>("");

    const modify = () => {
      props.items.todolisttitle = modifytxt;
      props.modifytodolist(props.items);
      ModalShowoff();
    };

    return (
      <Modal show={ModalShow}>
        <ModalHeader>수정</ModalHeader>
        <ModalBody>
          <input onChange={(e) => setmodifytxt(e.target.value)}></input>
        </ModalBody>
        <ModalFooter>
          <Button className="modal-button" onClick={() => modify()}>
            수정하기
          </Button>
          <Button className="modal-button" onClick={() => ModalShowoff()}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div>
      <div>
        <hr></hr>
        <h4>{props.items.todolisttitle}</h4>
        <Button onClick={() => props.todoupdatelist(props.items)}>삭제</Button>
        <Button onClick={() => ModalShowon()}>수정</Button>
        <hr></hr>
      </div>

      <div>
        <TodoModal />
      </div>
    </div>
  );
};
export default Todo;
