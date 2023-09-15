import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Show from "./pages/show";
import Video from "./pages/video";
const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
    errorElement: <p>404 !</p>,
    }, {
        path: "/show",
        element: <Show />
  },{
        path: "/video",
        element: <Video />
  }
]);
export default routers;