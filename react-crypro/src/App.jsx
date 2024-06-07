import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import Transaction from "./pages/Transaction/Transaction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/Transactions",
      element: <Transaction />,
    },
    {
      path: "/Support",
      element: <Support />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
