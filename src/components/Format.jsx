// Translate Context

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
