import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubinforloader } from "./components/Github/Github.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider

// ✅ Correctly Define Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubinforloader} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  
    <ThemeProvider>
      <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  
);
