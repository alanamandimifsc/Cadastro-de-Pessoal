import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container } from '@mui/material';
import { CardServidores } from './CardServidores';

function Cadastro() {
    localStorage.removeItem('id_serv');

    return (
        <Container maxWidth="sm" style={{ marginTop: '130px' }}>
            <CardServidores />
        </Container>
    );
}

export { Cadastro };
