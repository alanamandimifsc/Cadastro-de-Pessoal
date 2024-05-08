import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container, Paper, Typography } from '@mui/material';

function Escolaridade() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container maxWidth="sm" style={{ marginTop: '130px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper elevation={3} style={{ padding: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ padding: '10px' }}>
                                <Typography variant="h6" gutterBottom>Dados puxados</Typography>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={6}>
                                        <FormControl fullWidth>
                                            <InputLabel>Escolaridade</InputLabel>
                                            <Select {...register("Escolaridade")} defaultValue="">
                                                <MenuItem value="06 - Superior Completo">06 - Superior Completo</MenuItem>
                                                <MenuItem value="01 - Fundamental Incompleto">01 - Fundamental Incompleto</MenuItem>
                                                <MenuItem value="02 - Fundamental Completo">02 - Fundamental Completo</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px', marginLeft: '10px' }}>Censo</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ padding: '10px', marginTop: '10px' }}>
                                <Typography variant="h6" gutterBottom>Graduação</Typography>
                                <TextField {...register("Descrição")} label="Descrição" fullWidth style={{ marginBottom: '20px' }} />
                                <TextField {...register("Instituição")} label="Instituição" fullWidth style={{ marginBottom: '20px' }} />
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel>Licenciatura</InputLabel>
                                            <Select {...register("Licenciatura")} defaultValue="">
                                                <MenuItem value="Sim">Sim</MenuItem>
                                                <MenuItem value="Não">Não</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel>Tipo de Instituição</InputLabel>
                                            <Select {...register("Tipo de Instituição")} defaultValue="">
                                                <MenuItem value="Pública">Pública</MenuItem>
                                                <MenuItem value="Privada">Privada</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField {...register("Ano de Conclusão")} label="Ano de Conclusão" fullWidth />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ padding: '10px', marginTop: '10px' }}>
                                <Typography variant="h6" gutterBottom>Pós-Graduação</Typography>
                                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                                    <InputLabel>Nível</InputLabel>
                                    <Select {...register("Nível")} defaultValue="">
                                        <MenuItem value="Especialização">Especialização</MenuItem>
                                        <MenuItem value="op2">op2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>Enviar</Button>
                </Paper>
            </form>
        </Container >
    );
}

export { Escolaridade };
