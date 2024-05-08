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

function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [menuCadastrarOpen, setMenuCadastrarOpen] = useState(false); // Estado para controlar a exibição do menu
    const [menuRelatoriosOpen, setMenuRelatoriosOpen] = useState(false); // Estado para controlar a exibição do menu
    const { logout } = useContext(UsuariosContext);



    const handleLogout = async () => {
        const id = localStorage.getItem('id');
        await logout(id);
        localStorage.clear();
        handleMenuOptionClick();
        window.location.href = '/login';
    }



    const toogleMenuCadastrar = () => {
        setMenuCadastrarOpen(!menuCadastrarOpen);
        if (menuRelatoriosOpen) {
            setMenuRelatoriosOpen(false);
        }
    };

    const toogleMenuRelatorios = () => {
        setMenuRelatoriosOpen(!menuRelatoriosOpen);
        if (menuCadastrarOpen) {
            setMenuCadastrarOpen(false);
        }
    };

    const handleMenuOptionClick = () => {
        if (menuCadastrarOpen) {
            setMenuCadastrarOpen(false);
        }
        if (menuRelatoriosOpen) {
            setMenuRelatoriosOpen(false);
        }
    };





    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    IBSispes
                </Typography>
                {isMobile ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={toggleMenu}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <>
                        <Button component={Link} to="/dashboard" color="inherit" sx={{ mr: 2 }} onClick={handleMenuOptionClick}>
                            Página Inicial
                        </Button>

                        <Button onClick={toogleMenuCadastrar} color="inherit" sx={{ mr: 2 }}>
                            Cadastrar
                        </Button>
                        <Button onClick={toogleMenuRelatorios} color="inherit" sx={{ mr: 2 }}>
                            Relatórios
                        </Button>
                        <Button component={Link} to="/window" color="inherit" sx={{ mr: 2 }} onClick={handleMenuOptionClick}>
                            Janela
                        </Button>
                        <Button component={Link} to="/help" color="inherit" sx={{ mr: 2 }} onClick={handleMenuOptionClick}>
                            Ajuda
                        </Button>
                        <Button color="inherit" onClick={handleLogout} >
                            Sair
                        </Button>
                    </>
                )}
            </Toolbar>
            {menuCadastrarOpen && <MenuCadastrar open={menuCadastrarOpen} toggleMenu={toogleMenuCadastrar} />}
            {menuRelatoriosOpen && <MenuRelatorios open={menuRelatoriosOpen} toggleMenu={toogleMenuRelatorios} />}

        </AppBar>
    );
}

export default Header;
