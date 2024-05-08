import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container } from '@mui/material';

function Dados() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container maxWidth="sm" style={{ marginTop: '130px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField {...register("Matricula", { required: true, maxLength: 7, minLength: 7 })} label="Matrícula" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Nome", { required: true, maxLength: 100 })} label="Nome" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("Nome da Mãe", { required: true, maxLength: 100 })} label="Nome da Mãe" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("Nome do Pai", { required: true, maxLength: 100 })} label="Nome do Pai" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Data de Nascimento", { required: true })} label="Data de Nascimento" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Estado Civil</InputLabel>
                            <Select {...register("Estado Civil", { required: true })} defaultValue="">
                                <MenuItem value="Solteiro(a)">Solteiro(a)</MenuItem>
                                <MenuItem value="Divorsiado(a)">Divorsiado(a)</MenuItem>
                                <MenuItem value="Casado(a)">Casado(a)</MenuItem>
                                <MenuItem value="Viuvo(a)">Viuvo(a)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Sexo</InputLabel>
                            <Select {...register("Sexo", { required: true })} defaultValue="">
                                <MenuItem value="Masculino">Masculino</MenuItem>
                                <MenuItem value="Feminino">Feminino</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Conjugue")} label="Cônjuge" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("Endereço", { required: true })} label="Endereço" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Numero / Complemento", { required: true })} label="Número / Complemento" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Bairro", { required: true })} label="Bairro" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Cidade ", { required: true })} label="Cidade" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Estado", { required: true, maxLength: 2 })} label="Estado" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Telefone", { maxLength: 8, minLength: 8 })} label="Telefone" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Celular", { maxLength: 9 })} label="Celular" fullWidth />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>Enviar</Button>
            </form>
        </Container>
    );
}

export { Dados };
