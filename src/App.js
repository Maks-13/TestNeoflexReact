import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import PurchasedGoods from "./pages/PurchasedGoods";

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/goods', element: <PurchasedGoods /> }
]);

const App = () => {

  return <RouterProvider router={router} />
}

export default App;
