import React from "react";
import Student from "./Student";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Create a Component <b>Student</b>
          </li>
          <li>
            You Component should be call with this form:{" "}
            {'<Student name="John Doe">'} and should display{" "}
            <b>Hello John Doe!</b>
          </li>
        </ul>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/components-and-props.html"
        >
          Help
        </a>
      </div>
      <div className="block">
        <Student name="John Doe" />
      </div>
    </div>
  );
}
