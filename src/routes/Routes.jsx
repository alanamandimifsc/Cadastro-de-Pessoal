import { createBrowserRouter } from "react-router-dom";
import { App } from "../App"
import { Login } from "../pages/Login"
import { PaginaInicial } from "../pages/PaginaInicial"
// import { RegisterPlace } from "../pages/RegisterPlace"
// import { RegisterUser } from "../pages/RegisterUser"
// import { PlaceList } from "../pages/PlaceList"
// import { DashBoard } from "../pages/DashBoard"
// import Menu from "../components/menu";

import { Navigate } from "react-router-dom";
import { Cadastrar } from "../pages/Cadastrar";
import { Relatorios } from "../pages/Relatorios";
import { Janela } from "../pages/Janela";
import { Ajuda } from "../pages/Ajuda";
import { Dados } from "../components/Dados";
import { Cadastro } from "../components/Cadastro";
import { OutrosDados } from "../components/OutrosDados";
import { UnidadesSJ } from "../components/UnidadesSJ";
import { Escolaridade } from "../components/Escolaridade";

let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false;

const PrivateRoute = ({ children }) => {
    return isAutenticado ? children : <Navigate to="/login" replace={true} />;
};


export const Routes = createBrowserRouter([

    {

        path: "/login",
        element: <Login />
    },
    // {
    //     path: "/registerUser",
    //     element: <RegisterUser />
    // },
    {
        path: "/",
        element:
            <PrivateRoute>
                <App />
            </PrivateRoute>,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" replace={true} />
            },

            {
                path: "/register",
                element: <Cadastrar />,
                children: [
                    {
                        path: 'cadastro',
                        element: <Cadastro />
                    },
                    {
                        path: 'data',
                        element: <Dados />
                    },
                    {
                        path: 'otherinfo',
                        element: <OutrosDados />
                    },
                    {
                        path: 'units',
                        element: <UnidadesSJ />
                    },
                    {
                        path: 'education',
                        element: <Escolaridade />
                    }
                ]
            },

            // {
            //     path: "/register/data",
            //     element: <Dados />
            // },
            // {
            //     path: "/register/cadastro",
            //     element: <Cadastro />
            // },
            {
                path: "/report",
                element: <Relatorios />
            },
            {
                path: "/dashboard",
                element: <PaginaInicial />
            },
            {
                path: "/window",
                element: <Janela />
            },
            {
                path: "/help",
                element: <Ajuda />
            }
            // {
            //     path: "/registerPlace/:id",
            //     element: <RegisterPlace />
            // },
            // {
            //     path: "/menu",
            //     element: <Menu />
            // }
        ],

    },
]);