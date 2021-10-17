import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/githublaure/"
            target="_blank"
            rel="noreferrer"
          >
            Laure Agrech
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/githublaure/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-laure.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
