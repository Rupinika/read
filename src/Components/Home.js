import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [recieve, setRecieve] = useState([]);

  async function getPoems() {
    let info = await fetch(
      "https://apex.oracle.com/pls/apex/rupinikatwo/poems/get"
    );

    let convertedInfo = await info.json();
    setRecieve(convertedInfo.items);
  }

  useEffect(() => {
    getPoems();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {recieve.map((element, index) => {
            return (
              <div className="col-md-3 m-auto mt-4">
                <div
                  className="card text-bg-success mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header">{element.author}</div>
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.peom}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
