import { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  ModalTitle,
} from "react-bootstrap";
import moment from "moment";
import "moment/locale/ko";
const GitAddModal = (props: any) => {
  const adddate = moment().format("YYYY-MM-DD");



  const [addposttitle, setaddposttitle] = useState<any>(null);
  const [addpostdetail, setaddpostdetail] = useState<any>(null);

  const addPost = () => {

    if(addposttitle!==null){
      if(addpostdetail!==null){
    fetch("/addpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({
        posttitle: addposttitle,
        postdetail: addpostdetail,
        postdate: adddate,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        props.setMessage(data);
      });
    
    props.ModalState(false);
    }
    else{
      alert("내용을 입력하세요")
    }
    
  }
  else{

    alert("제목을 입력하세요")
  }
  };

  return (
    <Modal show={props.modalShow}>
      <ModalHeader>글 추가</ModalHeader>

      <ModalBody>
        <h6>글제목</h6>
        <input
          id="posttitle"
          size={40}
          onChange={(e) => {
            setaddposttitle(e.target.value);
          }}
        ></input>
        <h6>글내용</h6>
        <textarea
          id="postdetail"
          style={{ height: "250px" }}
          cols={50}
          onChange={(e) => {
            setaddpostdetail(e.target.value);
          }}
        ></textarea>
      </ModalBody>

      <ModalFooter>
        <Button onClick={() => addPost()} variant="secondary">
          저장
        </Button>
        <Button onClick={() => props.ModalState(false)}>닫기</Button>
      </ModalFooter>
    </Modal>
  );
};
export default GitAddModal;
