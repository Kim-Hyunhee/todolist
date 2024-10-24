import React from "react";
import logo from "./logo.svg";
import "./App.css";

{
  /* 
  작성자: khh
  작성일: 2024.**.**
  내용: 기능에 대한 내용
  */
}

function App() {
  let name = "리액트";
  /* 인라인 스타일 */
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "20px",
  };

  return (
    <div className="container">
      <h1 className="test">
        Hello, {name === "리액트" ? <h1>YES</h1> : <h1>null</h1>}!!
      </h1>
      <p>반갑습니다.</p>
      <br />
      <input />
    </div>
  );
}

export default App;
