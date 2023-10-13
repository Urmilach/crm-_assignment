// import logo from "./logo.svg";
import "./App.css";
import Home from "./home";
// import Header from "./header";
import Sales from "./sales";
import Modules from "./modules";
import About from "./about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/sales",
      element: <Sales />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/modules",
      element: <Modules />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
