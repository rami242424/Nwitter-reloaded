import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />,
      },
      {
        path:"profile",
        element: <Profile />,
      },
      {
        path:"login",
        element: <Login />,
      },
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
