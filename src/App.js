import { useState } from "react";
import "./App.css";

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>
        {props.titleIdx === 0 && props.title[0]}
        {props.titleIdx === 1 && props.title[1]}
        {props.titleIdx === 2 && props.title[2]}
      </h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        className="modal-title-change-btn"
        onClick={props.onClickChangeTitle}
      >
        title 변경
      </button>
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

  let [titleIdx, setTitleIdx] = useState(0);
  let [titleInput, setTitleInput] = useState("");

  const onClickChangeTitle = () => {
    let copy = [...title];
    copy[0] = "모던 자바스크립트 SHALLOW DIVE";
    setTitle(copy);
  };

  const onClickSortTitle = () => {
    let copy = [...title.sort()];
    setTitle(copy);
  };

  const onChangeTitle = (e) => {
    setTitleInput(e.target.value);
  };

  const onClickCreateBoard = () => {
    if(!titleInput) throw new Error("글 제목을 입력해주세요")
    let titleCopy = [...title];
    titleCopy.unshift(titleInput);
    setTitle(titleCopy);

    let likeCopy = [...like]
    likeCopy.unshift(0)
    setLike(likeCopy)
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
          <div>
            <h4
              onClick={() => {
                onClickModal();
                setTitleIdx(idx);
              }}
            >
              {el}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
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
          <div>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(idx, 1);
                setTitle(copy);
              }}
              className="delete-board-btn"
            >
              delete
            </button>
          </div>
        </div>
      ))}

      <div className="create-board">
        <input className="create-board-input" onChange={onChangeTitle} />
        <button onClick={onClickCreateBoard} className="create-board-btn">
          create
        </button>
      </div>

      {modalOpen && (
        <Modal
          title={title}
          titleIdx={titleIdx}
          color={"#FFADBC"}
          onClickChangeTitle={onClickChangeTitle}
        />
      )}
    </div>
  );
}

export default App;
