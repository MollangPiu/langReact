import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import PageComponent from "./component/PageComponent";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <BrowserRouter>

              <Routes>

                  <Route path={"/"} element={<PageComponent />}> </Route>

              </Routes>

          </BrowserRouter>
      </header>
    </div>
  );
}


export default App;
