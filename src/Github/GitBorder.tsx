import "moment/locale/ko";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import GitAddModal from "./GitAddModal";
import GitUpdateModal from "./GitUpdateModal";

//Modal 창에서 넘어오는 JSON형식 값
const GitBorder = () => {
  const [message, setMessage] = useState<any[]>([]);
  const [deletebt, setdeletebt] = useState<boolean>(false);

  //체크된 게시글

  //삭제 게시글
  const [deleteckpost, setdeletecheckpost] = useState<any>([]);
  //모달 on off
  const [modalShow, setmodalShow] = useState<boolean>();
  const [UpdateModalShow, setUpdateModalShow] = useState<boolean>();

  const [testChecked, setTestChecked] = useState<any>([]);
  const [CheckedAll, SetCheckedAll] = useState<boolean>(false);
  const [test, settest] = useState<any>(false);
  // const [checkbtlist, setcheckbtlist] = useState<any[]>([]);
  type checkPost = {
    id?: number;
    checked: boolean;
  };

  const [checkinglist, setcheckinglist] = useState<checkPost[]>([]);

  useEffect(() => {
    console.log("글 읽기 실행");
    fetch("/post")
      .then((response) => {
        return response.json();
      })
      .then(function (data) {
        setMessage(data);
      });
  }, []);

  const changeHandler = (checked: boolean, id: number) => {
    if (checked) {
      setcheckinglist((prev) => {
        let cp = [...prev];
        cp.push({ id: id, checked: checked });
        console.log(cp);
        return cp;
      });
    } else {
      setcheckinglist((prev) => {
        let cp = [...prev];
        cp = cp.filter((d) => d.id !== id);
        console.log(cp);
        return cp;
      });
    }
  };

  //delete
  const deletetest = () => {
    if (checkinglist.some((d) => d.id !== undefined)) {
      const postid = checkinglist.map((d) => d.id);
      for (let i = 0; i < postid.length; i++) {
        console.log(postid[i]);
        fetch(`/deletepost/${postid[i]}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then(function (data) {
            setMessage(data);
          });
      }
    } else {
      alert("선택하지았습니다");
    }
  };

  //read
  const ReadPost = () => {
    return (
      <div>
        {message.map((msg: any, idx: number) => (
          <div key={msg.postid}>
            <div className="posting">
              <div>
                <input
                  type="checkbox"
                  id={"checkbox" + msg.postid}
                  checked={checkinglist.some((d) => d.id === msg.postid)}
                  onChange={(e) => changeHandler(e.target.checked, msg.postid)}
                />
              </div>

              <div className="posttitle">
                <a onClick={() => UpdateModalState(true, idx)}>
                  <div className="posttitledb">{msg.posttitle}</div>
                </a>
              </div>

              <div className="postdetail">
                <a onClick={() => UpdateModalState(true, idx)}>
                  <div className="postdetaildb">{msg.postdetail}</div>
                </a>
              </div>

              <div className="postdate">
                <a onClick={() => UpdateModalState(true, idx)}>
                  <div className="postdatedb">{msg.postdate}</div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  //update

  //모달 on,off
  const ModalState = (check: boolean) => {
    setmodalShow(check);
  };

  const [idx, setIdx] = useState<Number>();
  const UpdateModalState = (check: boolean, idx: number) => {
    setIdx(idx); 
    setUpdateModalShow(check);

  };

  return (
    <div style={{padding:"30px"}}>
      <div>
        <h3 className="menuTitle">GitHub</h3>
      </div>
        <hr></hr>
      <div className="posting">
      
        <div>
          <input type="checkbox"></input>
        </div>
        <div className="posttitle" style={{ fontWeight: "bold" }}>
          제목
        </div>
        <div className="postdetail" style={{ fontWeight: "bold" }}>
          내용
        </div>
        <div className="postdate" style={{ fontWeight: "bold" }}>
          날짜
        </div>
      </div>
      <hr></hr>

      <ReadPost />

      <div className="postbottom">
        <Button className="postbutton" onClick={() => ModalState(true)}>
          등록
        </Button>
        <GitAddModal
          modalShow={modalShow}
          ModalState={ModalState}
          setMessage={setMessage}
        ></GitAddModal>
        <GitUpdateModal
          UpdateModalShow={UpdateModalShow}
          UpdateModalState={UpdateModalState}
          setMessage={setMessage}
          message={message}
          idx = {idx}
        ></GitUpdateModal>

        <Button className="deletebutton" onClick={() => deletetest()}>
          삭제
        </Button>
      </div>
    </div>
  );
};
export default GitBorder;
