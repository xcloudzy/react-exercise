import axios from "axios";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function FetchApi() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [copy, setCopy] = useState("");
  const codeString = `import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setData1(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        setData2(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <>
      <div>Fetch Multiple API using Axios</div>
      <h1>FirstData</h1>
      <div>
        <h4>ID : {data1.id}</h4>
        <h4>Title</h4>
        <p>{data1.title}</p>
        <h4>Body</h4>
        <p>{data1.body}</p>
      </div>
      <h1>SecondData</h1>
      <div>
        <h4>ID : {data2.id}</h4>
        <h4>Title</h4>
        <p>{data2.title}</p>
        <h4>Body</h4>
        <p>{data2.body}</p>
      </div>
    </>
  );
}
`;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setData1(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        setData2(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <>
      <div>
        <div>Fetch Multiple API using Axios</div>
        <h1>FirstData</h1>
        <div className="container" style={{ textAlign: "start" }}>
          <h4>ID : {data1.id}</h4>
          <h4>Title</h4>
          <p>{data1.title}</p>
          <h4>Body</h4>
          <p>{data1.body}</p>
        </div>
        <h1>SecondData</h1>
        <div className="container" style={{ textAlign: "start" }}>
          <h4>ID : {data2.id}</h4>
          <h4>Title</h4>
          <p>{data2.title}</p>
          <h4>Body</h4>
          <p>{data2.body}</p>
        </div>
      </div>
      <div
        className="mt-4"
        style={{
          display: "flex",
          textAlign: "start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minWidth: "40%",
            backgroundColor: "#29344A",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex justify-content-between px-4 text-white text-xs align-items-center">
            <p className="text-sm mt-3 ">Example Code</p>
            {copy ? (
              <button
                style={{ backgroundColor: "#29344A", outline: "none" }}
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copied!
              </button>
            ) : (
              <button
                className="mt-2 d-inline-flex align-items-center gap-1 mb-2"
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
              >
                <span className="text-base mt-1">
                  <ion-icon name="clipboard"></ion-icon>
                </span>
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              height: "100",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              marginBottom: 0,
            }}
            wrapLongLines={true}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}