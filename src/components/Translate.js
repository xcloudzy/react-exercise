import React, { useState } from "react";
import { useTranslate } from "../context/TranslateContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Translate() {
  const { setLang, translate } = useTranslate();
  const [copy, setCopy] = useState("");
  const codeString = `// Translate Context

import { createContext, useContext, useState } from "react";

const TranslateContext = createContext();

export const useTranslate = () => {
  return useContext(TranslateContext);
};

export function TranslateProvider({ children }) {
  const [lang, setLang] = useState("en");
  const TranslatedString = {
    en: {
      greeting: "Hello!",
      welcome: "Welcome To My App",
    },
    es: {
      greeting: "Hola Mundo!",
      welcome: "Bienvenido a mi aplicacion",
    },
  };

  const translate = (key) => {
    return TranslatedString[lang][key];
  };

  return (
    <TranslateContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </TranslateContext.Provider>
  );
}

// Translate Main

import React from "react";
import { useTranslate } from "../context/TranslateContext";

export default function Translate() {
  const { setLang, translate } = useTranslate();

  const handleLangChange = (newLang) => {
    setLang(newLang);
  };

  return (
    <>
      <h1 className="mb-3">Translate</h1>
      <p>{translate("greeting")}</p>
      <p>{translate("welcome")}</p>
      <button onClick={() => handleLangChange("en")}>English</button>
      <button onClick={() => handleLangChange("es")}>Espanol</button>
    </>
  );
}
`;

  const handleLangChange = (newLang) => {
    setLang(newLang);
  };

  return (
    <>
      <div>
        <h1 className="mb-3">Translate</h1>
        <p>{translate("greeting")}</p>
        <p>{translate("welcome")}</p>
        <button className="mx-2" onClick={() => handleLangChange("en")}>
          English
        </button>
        <button onClick={() => handleLangChange("es")}>Espanol</button>
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
