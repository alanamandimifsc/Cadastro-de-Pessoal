import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UsuariosContext } from '../context/UsuariosContext';

const menuOptions = [
    { text: 'Servidores', link: '/registerservidores' },
    { text: 'Escolaridades', link: '/register' },
    { text: 'Siglas', link: '/register' },
    { text: 'Cidades', action: '/register' },
    { text: 'Gerar Frequência', link: '/register' }
];

const MenuCadastrar = ({ open, toggleMenu }) => {
    const { logout } = useContext(UsuariosContext);

    const handleOptionClick = async (action) => {
        toggleMenu();
        if (action === 'logout') {
            try {
                const id = localStorage.getItem('id');
                console.log('id', id);
                await logout(id);
                localStorage.clear();
                window.location.href = '/login';
            } catch (error) {
                console.error('Error logging out:', error);
            }
        }
    };

    return (
        <div style={{ zIndex: open ? 9999 : -1, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: open ? 'block' : 'none' }}>
            <List style={{ backgroundColor: '#333', color: '#fff', width: 250 }}>
                {menuOptions.map((option, index) => (
                    <ListItem
                        button
                        key={index}
                        component={Link}
                        to={option.link}
                        onClick={() => handleOptionClick(option.action)} // manipular a ação de logout
                    >
                        <ListItemText primary={option.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );
}

export default MenuCadastrar;
