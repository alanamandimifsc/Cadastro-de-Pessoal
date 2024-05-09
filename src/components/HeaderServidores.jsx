import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


import { UsuariosContext } from '../context/UsuariosContext';

function HeaderServidores() {
    const theme = useTheme();
    const { logout } = useContext(UsuariosContext);

    const { dadosClck, setDadosClck } = useState(false);

    const toogleDados = () => {
        // setDadosClck(!dadosClck);
        localStorage.setItem('dadosClck', !dadosClck);
        console.log("Clicou");
    }



    const handleLogout = async () => {
        const id = localStorage.getItem('id');
        await logout(id);
        localStorage.clear();
        window.location.href = '/login';
    }



    return (
        <AppBar style={{ marginTop: '120px', backgroundColor: '#b3e5fc' }} >
            <Toolbar>

                <>
                    <Button onClick={toogleDados} component={Link} to="/registerservidores/cadastro" color="inherit" sx={{ mr: 2 }} >
                        Cadastro
                    </Button>

                    <Button component={Link} to="/registerservidores/data" color="inherit" sx={{ mr: 2 }}>
                        Dados
                    </Button>
                    <Button component={Link} to="/registerservidores/otherinfo" color="inherit" sx={{ mr: 2 }}>
                        Outros Dados
                    </Button>
                    <Button component={Link} to="/registerservidores/units" color="inherit" sx={{ mr: 2 }} >
                        Unidade SJ
                    </Button>
                    <Button component={Link} to="/registerservidores/education" color="inherit" sx={{ mr: 2 }} >
                        Escolaridade
                    </Button>

                </>
                {/* )} */}
            </Toolbar>

        </AppBar>
    );
}

export default HeaderServidores;
