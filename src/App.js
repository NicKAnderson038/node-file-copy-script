import { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import MDX from "./ENV/src";
const { TestFunc1, TestFunc2, TestFunc3, TestFunc4 } = MDX;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback="Loading...">
          <TestFunc1 />
          <TestFunc2 />
          <TestFunc3 />
          <TestFunc4 />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
