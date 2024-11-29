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
// import FamilyTreeComponent from "./pages/FamilyTree/FamilyTreeComponent";
// import FamilyTreeWeb from "./pages/FamilyTree/FamilyTreeWeb";
// import FamilyTreePage from "./components/FamilyTreePage/FamilyTreePage";
import AddMember from "./pages/Member/AddMember";
import FamilyTreeComponentBigFamaly from "./pages/FamilyTree/FamilyTreeComponentBigFamaly";
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
        // {
        //   path: "/tree",
        //   element: <Tree />,
        // },
        // {
        //   path: "/tree",
        //   element: <FamilyTreeWeb />,
        // },
        // {
        //   path: "/tree-app/:userId",
        //   element: <FamilyTreeComponent />,
        // },
        
        // {
        //   path: "/familyTreePage",
        //   element: <FamilyTreePage />,
        // },
        //  {
        //   path: "/add-mamber",
        //   element: <AddMember />,
        // },
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


/**
 
const [familyData, setFamily1Data] = useState([
    { id: 1, pids: [2], name: "King George VI", img: "https://cdn.balkan.app/shared/f1.png", gender: "male" },
    { id: 2, pids: [1], name: "Queen Elizabeth", title: "The Queen Mother", img: "https://cdn.balkan.app/shared/f2.png", gender: "female" },
    { id: 3, pids: [4], mid: 2, fid: 1, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png", gender: "female" },
    { id: 4, pids: [3], name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png", gender: "male" },
    { id: 5, mid: 2, fid: 1, name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png", gender: "male" },
    { id: 6, mid: 3, fid: 4, pids: [7, 8], name: "Charles", title: "Prince of Wales", img: "https://cdn.balkan.app/shared/f8.png", gender: "male" },
    { id: 7, pids: [6], name: "Diana", title: "Princess of Wales", img: "https://cdn.balkan.app/shared/f9.png", gender: "female" },
    { id: 8, pids: [6], name: "Camila", title: "Duchess of Cornwall", img: "https://cdn.balkan.app/shared/f7.png", gender: "female" },
    { id: 9, mid: 3, fid: 4, name: "Anne", title: "Princess Royal", img: "https://cdn.balkan.app/shared/f10.png", gender: "female" },
    { id: 10, mid: 3, fid: 4, name: "Prince Andrew", title: "Duke of York", img: "https://cdn.balkan.app/shared/f11.png", gender: "male" },
    { id: 11, mid: 3, fid: 4, name: "Prince Edward", title: "Earl of Wessex", img: "https://cdn.balkan.app/shared/f12.png", gender: "male" },
    { id: 12, fid: 6, mid: 7, pids: [14], name: "Prince William", title: "Duch of Cambridge", img: "https://cdn.balkan.app/shared/f14.png", gender: "male" },
    { id: 13, fid: 6, mid: 7, pids: [15], name: "Prince Harry", img: "https://cdn.balkan.app/shared/f15.png", gender: "male" },
    { id: 14, pids: [12], name: "Catherine", title: "Duchess of Cambridge", img: "https://cdn.balkan.app/shared/f13.png", gender: "female" },
    { id: 15, pids: [13], name: "Meghan Markle", img: "https://cdn.balkan.app/shared/f16.png", gender: "female" },
    { id: 16, fid: 12, mid: 14, name: "Prince George", img: "https://cdn.balkan.app/shared/f17.png", gender: "male" },
    { id: 17, fid: 12, mid: 14, name: "Prince Charlotte", img: "https://cdn.balkan.app/shared/f18.png", gender: "female" },
    { id: 18, fid: 12, mid: 14, name: "Prince Louis", img: "https://cdn.balkan.app/shared/f19.png", gender: "male" },
  ]);
 */