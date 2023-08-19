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


const GitUpdateModal=(props :any)=>{


  const adddate = moment().format("YYYY-MM-DD");

  const [Updateposttitle, setUpdateposttitle] = useState<any>(null);
  const [Updatepostdetail, setUpdatepostdetail] = useState<any>(null);


  useEffect(() =>{
    console.log(props)
  },[props])

  const UpdatePost = () => {
    if (Updateposttitle !== null) {
      if (Updatepostdetail !== null) {
        fetch("/updatepost", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },

          body: JSON.stringify({
            posttitle: Updateposttitle,
            postdetail: Updatepostdetail,
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
      } else {
        alert("내용을 입력하세요");
      }
    } else {
      alert("제목을 입력하세요");
    }
  };

  return (
    <Modal show={props.UpdateModalShow}>
      <ModalHeader>글 수정</ModalHeader>

      <ModalBody>
        <h6>글제목</h6>
        <input
          id="posttitle"
          size={40}
          onChange={(e) => {
            props.setMessage[props.idx]?.posttitle(e.target.value)
          }}
          value={props.message[props.idx]?.posttitle}
        ></input>
        <h6>글내용</h6>
        <textarea
          id="postdetail"
          style={{ height: "250px" }}
          cols={50}
          onChange={(e) => {
            setUpdatepostdetail(e.target.value);
          }}
          value={props.message[props.idx]?.postdetail}
        ></textarea>
      </ModalBody>

      <ModalFooter>
        <Button onClick={() => UpdatePost()} variant="secondary">
          수정
        </Button>
        <Button onClick={() => props.UpdateModalState(false)}>닫기</Button>
      </ModalFooter>
    </Modal>
  );
};



export default GitUpdateModal