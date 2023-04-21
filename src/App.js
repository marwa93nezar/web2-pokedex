import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import about from "./components/about";
import "./components/style.css";
import { ReactDOM } from "react";
import { BrowserRouter, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <switch>
            <router path="/">
              <Main />
            </router>

            <router path="/about">
              <about />
            </router>
          </switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
