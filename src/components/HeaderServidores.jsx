import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'; // Importe o IconButton
import MenuIcon from '@mui/icons-material/Menu'; // Importe o ícone do menu
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuCadastrar from './MenuCadastrar';
import MenuRelatorios from './MenuRelatorios';
// import Menu from './menu'; // Importe o componente Menu
import { UsuariosContext } from '../context/UsuariosContext';

function HeaderServidores() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // const [menuCadastrarOpen, setMenuCadastrarOpen] = useState(false); // Estado para controlar a exibição do menu
    // const [menuRelatoriosOpen, setMenuRelatoriosOpen] = useState(false); // Estado para controlar a exibição do menu
    const { logout } = useContext(UsuariosContext);



    const handleLogout = async () => {
        const id = localStorage.getItem('id');
        await logout(id);
        localStorage.clear();
        window.location.href = '/login';
    }



    // const toogleMenuCadastrar = () => {
    //     setMenuCadastrarOpen(!menuCadastrarOpen);
    //     if (menuRelatoriosOpen) {
    //         setMenuRelatoriosOpen(false);
    //     }
    // };

    // const toogleMenuRelatorios = () => {
    //     setMenuRelatoriosOpen(!menuRelatoriosOpen);
    //     if (menuCadastrarOpen) {
    //         setMenuCadastrarOpen(false);
    //     }
    // };

    // const handleMenuOptionClick = () => {
    //     if (menuCadastrarOpen) {
    //         setMenuCadastrarOpen(false);
    //     }
    //     if (menuRelatoriosOpen) {
    //         setMenuRelatoriosOpen(false);
    //     }
    // };





    return (
        <AppBar style={{ marginTop: '65px', backgroundColor: '#b3e5fc' }} >
            <Toolbar>

                <>
                    <Button component={Link} to="/register/cadastro" color="inherit" sx={{ mr: 2 }} >
                        Cadastro
                    </Button>

                    <Button component={Link} to="/register/data" color="inherit" sx={{ mr: 2 }}>
                        Dados
                    </Button>
                    <Button component={Link} to="/register/otherinfo" color="inherit" sx={{ mr: 2 }}>
                        Outros Dados
                    </Button>
                    <Button component={Link} to="/register/units" color="inherit" sx={{ mr: 2 }} >
                        Unidade SJ
                    </Button>
                    <Button component={Link} to="/register/education" color="inherit" sx={{ mr: 2 }} >
                        Escolaridade
                    </Button>

                </>
                {/* )} */}
            </Toolbar>

        </AppBar>
    );
}

export default HeaderServidores;
