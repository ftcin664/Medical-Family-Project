import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import UpdatePassword from "./pages/Update-password/UpdatePassword";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage/HomePage";
import Tree from "./components/Tree/Tree";
import Notifications from "./components/Notifications/Notifications";
import CreatePost from "./pages/CreatePost/CreatePost";
import Chat from "./components/Chat/Chat";
import Profile from "./components/Profile/Profile";
import ReportedAccounts from "./components/ReportedAccounts/ReportedAccounts";
import HelpAndSupport from "./components/HelpAndSupport/HelpAndSupport";
import ManageNotication from "./components/ManageNotication/ManageNotication";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import AuthWarapper from "./components/AuthWarapper/AuthWarapper";
import Policy from "./components/Policy/Policy";
import Calender from "./components/Calendar/Calender";
import Family from "./pages/FamilyTree/Family";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/tree",
          element: <Tree />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/post",
          element: <CreatePost />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/reported-accounts",
          element: <ReportedAccounts />,
        },
        {
          path: "/help-and-support",
          element: <HelpAndSupport />,
        },
        {
          path: "/manage-notifations",
          element: <ManageNotication />,
        },
        {
          path: "/terms-of-use",
          element: <TermsOfUse/>,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy/>,
        },
        {
          path: "/calender",
          element: <Calender/>,
        },
      ],
    },
    {
      path: "/",
      element: <AuthWarapper />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/verify-otp",
          element: <VerifyOtp />,
        },
        {
          path: "/update-password",
          element: <UpdatePassword />,
        },
      ],
    },
    {
      path: "/cookie-policy",
      element: <Policy />,
    },
    {
      path: "/tree-app/:userId",
      element: <Family />,
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;