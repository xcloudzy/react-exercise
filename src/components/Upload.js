import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [copy, setCopy] = useState("");
  const codeString = `import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  return (
    <>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div>
          {file && <img src={URL.createObjectURL(file)} alt="Loading" />}
        </div>
      </div>
    </>
  );
};

export default Upload;
`;

  return (
    <>
      <div style={{ backgroundColor: "#242424", color: "white" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div>
          {file && (
            <img
              class="img-fluid"
              src={URL.createObjectURL(file)}
              alt="Loading"
            />
          )}
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
};

export default Upload;
