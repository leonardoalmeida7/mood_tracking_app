import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthPage } from "../pages/AuthPage";
import App from "../App";
import { OnBoardingPage } from "../pages/OnBoardingPage";

const routes: RouteObject[] = [
  { path: "/auth/login", element: <AuthPage /> },
  { path: "/auth/register", element: <AuthPage /> },
  { path: "/auth/register/onboarding", element: <OnBoardingPage /> },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [{ element: <App />, index: true }],
  },
];

export const router = createBrowserRouter(routes);
