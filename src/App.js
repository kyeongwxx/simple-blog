import { useState } from "react";
import "./App.css";

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
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

  let [like, setLike] = useState(0);

  const onClickLike = () => {
    setLike(like + 1);
  };

  let [modalOpen, setModalOpen] = useState(false);

  const onClickModal = () => {
    setModalOpen((prev) => !prev);
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

      <div className="list">
        <h4>
          {title[0]} <span onClick={onClickLike}>👍</span>{" "}
          <span className="like">{like}</span>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={onClickModal}>{title[2]}</h4>
        <p>2월 19일 발행</p>
      </div>

      {modalOpen && <Modal />}
    </div>
  );
}

export default App;
