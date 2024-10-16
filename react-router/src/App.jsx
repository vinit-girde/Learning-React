import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./Layout/Layout";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

function App() {
  // First way to use router
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />,
  //       },
  //       {
  //         path: "contact-us",
  //         element: <Contact />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "user/:userid",
  //         element: <User />,
  //       },
  //     ],
  //   },
  // ]);

  // Second way to use router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="github" element={<Github />} loader={githubInfoLoader} />
        <Route path="user/:userid" element={<User />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
