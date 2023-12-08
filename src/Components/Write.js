import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Write() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [peom, setPeom] = useState("");
  const navigate = useNavigate();
  function sendInfo() {
    fetch(
      `https://apex.oracle.com/pls/apex/rupinikatwo/poems/post?title=${title}&author=${author}&peom=${peom}`,
      { method: "POST" }
    );
    navigate("/");
  }
  function titleSend(event) {
    setTitle(event.target.value);
  }
  function authorSend(event) {
    setAuthor(event.target.value);
  }
  function peomSend(event) {
    setPeom(event.target.value);
  }

  return (
    <>
      <div className="container bg-success p-5 my-5 rounded-3">
        <div className="input-group mb-3">
          <input
            type="text"
            value={title}
            onChange={titleSend}
            className="form-control"
            placeholder="title of poem"
            aria-label="title of poem"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            value={author}
            onChange={authorSend}
            className="form-control"
            placeholder="Author name"
            aria-label="Author name"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group">
          <textarea
            className="form-control"
            placeholder="peom"
            aria-label="peom"
            defaultValue={peom}
            onChange={peomSend}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={sendInfo}
            className="btn btn-outline-warning w-75 my-3"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Write;
