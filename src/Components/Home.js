import React, { useState } from "react";

function Home(props) {
  const [text, setText] = useState("");
  const [totalChar, setTotalChar] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [textToCopy, settextToCopy] = useState("Copy text");

  // onChange
  const changeText = (event) => {
    setText(event.target.value);
    settextToCopy("Copy text");
  };

  // to clear the text
  const clear = (event) => {
    setText("");
    setTotalChar(0);
    setTotalWords(0);
  };

  // converting to upper case
  const toUpper = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // converting to lower case
  const toLower = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // counting total characters and words
  const countChars = () => {
    // total chars
    setTotalChar(text.length);
    // total words
    let wordLength = text.trimEnd().trimStart().split(" ");
    if (text.length === 0) setTotalWords(0);
    else setTotalWords(wordLength.length);
  };

  // copy text
  const copyText = () => {
    navigator.clipboard.writeText(text);
    settextToCopy("Copied!");
  };
  return (
    <div className="container mt-5 text-start">
      <h2
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        Enter your text below:
      </h2>
      <textarea
        cols="100"
        rows="8"
        onChange={changeText}
        onKeyUp={countChars}
        value={text}
        style={{ padding: "10px" }}
      ></textarea>
      <div className="buttons">
        <button className="btn btn-primary m-2  " onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary m-2  " onClick={toUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2  " onClick={toLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2  " onClick={copyText}>
          {textToCopy}
        </button>
      </div>

      <div className="mt-3">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Text Summry:
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Total Characters: {totalChar}
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Total Words: {totalWords}
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview:
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Home;
