
import React from "react";
import HeaderServidores from '../components/HeaderServidores'
import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import HeaderEdicao from "../components/HeaderEdicao";

export const CadastrarServidores = () => {
    return (
        <div>
            <div style={{ marginTop: '20px' }}> {/* Adiciona margem acima do HeaderServidores */}
                <HeaderEdicao />
                <HeaderServidores />
            </div>
            <h1>Página de Cadastro</h1>


            <Outlet />
        </div>
    );
}