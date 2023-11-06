import { createBrowserRouter } from "react-router-dom";



import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const Router = createBrowserRouter([
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/supplier/:id",
                element: <DetailPage />,
            }
]);

export default Router;