import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import DateCounter from "../src/components/DateCounter";
import { QuizProvider } from "./contexts/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
      <DateCounter />
    </QuizProvider>
  </React.StrictMode>
);
