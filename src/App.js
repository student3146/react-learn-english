import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/elements/Header/Header";
import words  from "../src/data/words.json";
import Main from "./components/elements/Main/Main";
import TestForm from "./components/elements/Main/TestWord/TestForm";


function App() {

  return (
    <Router>
          <Routes>
          <Route path="/" element={<Header words={words} />} />
          <Route path="/main" element={<Main />} />
          <Route path="/test" element={<TestForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
