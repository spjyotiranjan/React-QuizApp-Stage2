import React from "react";
import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import QuizComponent from "./Components/QuizComponent";
import ResultComponent from "./Components/ResultComponent";

function App() {
  return (
    <>
      {/* <div className="App">
        <HomeComponent />
      </div> */}
      <div className="App">
        <QuizComponent />
      </div>
      {/* <div className="App">
        <ResultComponent />
      </div> */}
    </>
  );
}

export default App;
