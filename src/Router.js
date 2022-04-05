import { useRoutes } from "react-router-dom";
import LayoutModule from "./components/layouts/LayoutModule";
import Login from "./components/layouts/Login";
import NotFound from "./components/layouts/NotFound";
import Register from "./components/layouts/Register";
import ChatModule from "./modules/chat";
import ProfileModule from "./modules/profile";
import Home from "./modules/profile/pages/Home";

export default function Router() {

  const routes = [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      path: "/app",
      element: <LayoutModule />,
      children: [
        { index: true, element: (<div>Home</div>) },
        {
          path: "chat",
          element: <ChatModule />,
          children: [
            { index: true, element: (<div>Welcome to Chat App!</div>) },
            { path: "t/:id", element: (<div>Thread view</div>) },
          ],
        },
        {
          path: "profile",
          element: <ProfileModule />,
          children: [
            { index: true, element: <Home /> },
          ]
        }
      ],
    },
    { path: "*", element: <NotFound /> },
  ];

  return useRoutes(routes)
}