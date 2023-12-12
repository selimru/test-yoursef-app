import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";
import Home from "../pages/Home";
import AddQuiz from "../pages/AddQuiz";
import PageFive from "../pages/PageFive";
import PageSix from "../pages/PageSix";
import PageSeven from "../pages/PageSeven";
import PageEight from "../pages/PageEight";
import PageNine from "../pages/PageNine";
import PageTen from "../pages/PageTen";
import Result from "../pages/Result/Result";
import LogIn from "../users/LogIn";
import SignUp from "../users/SignUp";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Users from "../pages/Users/Users";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'pageOne',
                element: <PrivateRoutes><PageOne /></PrivateRoutes>
            },
            {
                path: 'pageTwo',
                element: <PrivateRoutes><PageTwo /></PrivateRoutes>
            },
            {
                path: 'pageThree',
                element: <PrivateRoutes><PageThree /></PrivateRoutes>
            },
            {
                path: 'pageFour',
                element: <PrivateRoutes><PageFour /></PrivateRoutes>
            },
            {
                path: 'pageFive',
                element: <PrivateRoutes><PageFive /></PrivateRoutes>
            },
            {
                path: 'pageSix',
                element: <PrivateRoutes><PageSix /></PrivateRoutes>
            },
            {
                path: 'pageSeven',
                element: <PrivateRoutes><PageSeven /></PrivateRoutes>
            },
            {
                path: 'pageEight',
                element: <PrivateRoutes><PageEight /></PrivateRoutes>
            },
            {
                path: 'pageNine',
                element: <PrivateRoutes><PageNine /></PrivateRoutes>
            },
            {
                path: 'pageTen',
                element: <PrivateRoutes><PageTen /></PrivateRoutes>
            },
            {
                path: 'addquiz',
                element: <AddQuiz />
            },
            {
                path: 'login',
                element: <LogIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'result',
                element: <Result />
            },
            {
                path: 'users',
                element: <Users />
            },
        ]
    }
])