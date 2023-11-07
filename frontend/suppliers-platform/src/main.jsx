import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { DataProvider } from './data/DataContext';


import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <DataProvider>
    <RouterProvider router={Router} />
    </DataProvider>
  </>
)