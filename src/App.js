import { useState } from "react";
import "./App.css";

function App() {
  let logo = "SimpleBlog"

  let [title1, setTitle2] = useState('모던 자바스크립트 DEEP DIVE')
  let [title2, setTitle1] = useState('리액트를 다루는 기술')
  let [title3, setTitle3] = useState('알고리즘 첫걸음')

  return (
    <div>
      <div className="nav">
        <h4 className="logo">{logo}</h4>
      </div>
      <div className="list">
        <h4>{title1}</h4>
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
