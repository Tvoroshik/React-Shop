import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Route>
    <div className="App">
    <Route path='/' element={<Home/>} />
      </div>
    </Route>
  );
}

export default App;
