import { useState } from "react";
import "./App.css";

function App() {
  let logo = "SimpleBlog";

  let [title1, setTitle1] = useState("모던 자바스크립트 DEEP DIVE");
  let [title2, setTitle2] = useState("리액트를 다루는 기술");
  let [title3, setTitle3] = useState("알고리즘 첫걸음");

  let [like, setLike] = useState(0);
  const onClickLike = () => {
    setLike(like + 1);
  };

  const onClickChangeTitle = () => {
    setTitle1("모던 자바스크립트 SHALLOW DIVE");
  };

  return (
    <div>
      <div className="nav">
        <h4 className="logo">{logo}</h4>
      </div>
      <div className="list">
        <h4 onClick={onClickChangeTitle}>
          {title1} <span onClick={onClickLike}>👍</span>{" "}
          <span className="like">{like}</span>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>2월 19일 발행</p>
      </div>
    </div>
  );
}

export default App;
