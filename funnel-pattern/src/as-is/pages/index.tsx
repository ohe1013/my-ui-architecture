import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterMethod } from "./RegisterMethod";
import { Address } from "./Address";
import { SecurityNumber } from "./SecurityNumber";
import { RegisterComplete } from "./RegisterComplete";
import { useNavigate } from "react-router-dom";
const Index = () => {
    const navigagte = useNavigate();
    return (
        <>
            <h1>가입하러가기</h1>
            <button onClick={() => navigagte("registerMethod")}>ㄱㄱ</button>
        </>
    );
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/registerMethod",
        element: <RegisterMethod />,
    },
    {
        path: "/address",
        element: <Address />,
    },
    {
        path: "/securityNumber",
        element: <SecurityNumber />,
    },
    {
        path: "/registerComplete",
        element: <RegisterComplete />,
    },
]);

export const RegisterRoutes = () => {
    return <RouterProvider router={router} />;
};
