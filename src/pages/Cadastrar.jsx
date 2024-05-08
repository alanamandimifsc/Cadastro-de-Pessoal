
import React from "react";
import HeaderServidores from '../components/HeaderServidores'
import { Outlet } from "react-router-dom"
import Header from "../components/Header";

export const Cadastrar = () => {
    return (
        <div>
            <div style={{ marginTop: '20px' }}> {/* Adiciona margem acima do HeaderServidores */}
                <HeaderServidores />
            </div>
            {/* <h1>Página de Cadastro</h1> */}


            <Outlet />
        </div>
    );
}