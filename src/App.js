import { useState } from "react";
import "./App.css";

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button className="modal-title-change-btn" onClick={props.onClickChangeTitle}>title 변경</button>
    </div>
  );
};

function App() {
  let logo = "SimpleBlog";

  let [title, setTitle] = useState([
    "모던 자바스크립트 DEEP DIVE",
    "리액트를 다루는 기술",
    "알고리즘 첫걸음",
  ]);

  const onClickChangeTitle = () => {
    let copy = [...title];
    copy[0] = "모던 자바스크립트 SHALLOW DIVE";
    setTitle(copy);
  };

  const onClickSortTitle = () => {
    let copy = [...title.sort()];
    setTitle(copy);
  };

  let [like, setLike] = useState([0, 0, 0]);

  let [modalOpen, setModalOpen] = useState(false);

  const onClickModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div className="nav">
        <h4 className="logo">{logo}</h4>
      </div>

      <div className="btns">
        <button className="title-change-btn" onClick={onClickChangeTitle}>
          title 변경
        </button>
        <button className="title-sort-btn" onClick={onClickSortTitle}>
          title 정렬
        </button>
      </div>

      {title.map((el, idx) => (
        <div className="list" key={idx}>
          <h4 onClick={onClickModal}>
            {el}{" "}
            <span
              onClick={() => {
                let copy = [...like];
                copy[idx] = copy[idx] + 1;
                setLike(copy);
              }}
            >
              👍
            </span>{" "}
            <span className="like">{like[idx]}</span>
          </h4>
          <p>2월 18일 발행</p>
        </div>
      ))}

      {modalOpen && <Modal title={title} color={"#FFADBC"} onClickChangeTitle={onClickChangeTitle}/>}
    </div>
  );
}

export default App;
