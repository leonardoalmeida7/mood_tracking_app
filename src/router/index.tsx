import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthPage } from "../pages/AuthPage";
import { HomePage } from "../pages/HomePage";
import App from "../App";
import { OnBoardingPage } from "../pages/OnBoardingPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <App />,
        index: true,
      },
    ],
  },
  {
    path: "/auth",
    element: <PublicRoute />,
    children: [
      { path: "login", element: <AuthPage /> },
      { path: "register", element: <AuthPage /> },
      { path: "register/onboarding", element: <OnBoardingPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/Mood_Tracking_App/",
});
