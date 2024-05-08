import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container, Paper, Typography } from '@mui/material';

function UnidadesSJ() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Servidor Ativo</InputLabel>
                            <Select {...register("Servidor Ativo")} defaultValue="">
                                <MenuItem value="Sim">Sim</MenuItem>
                                <MenuItem value="Não">Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Emitir Frequência</InputLabel>
                            <Select {...register("Emitir Frequência")} defaultValue="">
                                <MenuItem value="Sim">Sim</MenuItem>
                                <MenuItem value="Não">Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Ramal")} label="Ramal" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Data da Admissão")} type="date" label="Data da Admissão" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Cargo")} label="Cargo" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Função")} label="Função" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Lotação</InputLabel>
                            <Select {...register("Lotação")} defaultValue="">
                                <MenuItem value="CTIC">CTIC</MenuItem>
                                <MenuItem value="OP2">OP2</MenuItem>
                                <MenuItem value="OP3">OP3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Titulação/Nível")} label="Titulação/Nível" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Classe</InputLabel>
                            <Select {...register("Classe")} defaultValue="">
                                <MenuItem value="D">D</MenuItem>
                                <MenuItem value="op1">op1</MenuItem>
                                <MenuItem value="op2">op2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Padrão")} label="Padrão" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Regime")} label="Regime" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                            <Typography variant="h6" gutterBottom>
                                Professores:
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Professor</InputLabel>
                                        <Select {...register("Professor")} defaultValue="">
                                            <MenuItem value="D">D</MenuItem>
                                            <MenuItem value="op1">op1</MenuItem>
                                            <MenuItem value="op2">op2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Área</InputLabel>
                                        <Select {...register("Área")} defaultValue="">
                                            <MenuItem value="op1">op1</MenuItem>
                                            <MenuItem value="op2">op2</MenuItem>
                                            <MenuItem value="op3">op3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>Enviar</Button>
            </form>
        </Container>
    );
}

export { UnidadesSJ };
