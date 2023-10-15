import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Show from "./pages/show";
import Video from "./pages/video";
import Animation from "./pages/animation";
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
  },{
        path: "/animation",
        element: <Animation />
  }
]);
export default routers;