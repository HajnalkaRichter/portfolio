import Profile from "./Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about-me",
    element: <Aboutme />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="app">
      <Profile />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
