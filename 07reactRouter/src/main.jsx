import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact-us/Contact-us.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// Two Methods for creating routers
// Method 1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [ // ✅ fixed here
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact", // ✅ lowercased for consistency
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// OR

// Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      loader={(githubInfoLoader)}
      path="github" element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
