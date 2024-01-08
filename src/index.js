import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="landscape.jpg" alt="avatar" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Sodiq Ganiyu</h1>
      <p>
        This is a little paragraph intro about me. This is a little paragraph
        intro about me .This is a little paragraph intro about me.This is a
        little paragraph intro about me
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill btn="Javascript" color="red" />
      <Skill btn="Javascript" color="red" />
      <Skill btn="Javascript" color="red" />
      <Skill btn="Javascript" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <button className="skill">{props.btn}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
