import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container, Paper, Typography } from '@mui/material';
import { ServidoresContext } from '../context/ServidoresContext';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Escolaridade() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    // const onSubmit = data => console.log(data);
    const { atualizarEscolaridade } = useContext(ServidoresContext);
    const { id } = useParams();
    const id_serv = localStorage.getItem('id_serv');
    const [escolaridadeData, setEscolaridadeData] = useState(null);

    useEffect(() => {
        const fetchEscolaridade = async () => {
            if (id) {
                try {
                    const response = await fetch(`http://localhost:3000/escolaridade/${id}`);
                    const data = await response.json();
                    if (data) {
                        console.log('data:', data);
                        setEscolaridadeData(data);
                        setValue('escolaridade', data.escolaridade);
                        setValue('descricao', data.descricao);
                        setValue('instituicao', data.instituicao);
                        setValue('licenciatura', data.licenciatura);
                        setValue('tipo_instituicao', data.tipo_instituicao);
                        setValue('ano_conclusao', data.ano_conclusao);
                        setValue('nivel', data.nivel);
                    }
                } catch (error) {
                    console.log('Erro ao obter escolaridade:', error);
                }
            }
        }
        fetchEscolaridade();
    }, [id]);


    const escolaridadeDefaultValue = escolaridadeData ? escolaridadeData.escolaridade : "";
    const licenciaturaDefaultValue = escolaridadeData ? escolaridadeData.licenciatura : "";
    const tipoinstituicaoDefaultValue = escolaridadeData ? escolaridadeData.tipo_instituicao : "";
    const nivelDefaultValue = escolaridadeData ? escolaridadeData.nivel : "";


    const onSubmit = (data) => {
        atualizarEscolaridade(data, id, id_serv);

    }

    return (
        <Container maxWidth="sm" style={{ marginTop: '140px' }}>
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
                                            <Select {...register("escolaridade")} value={escolaridadeDefaultValue}>
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
                                <TextField {...register("descricao")} label="Descrição" fullWidth InputLabelProps={{ shrink: true }} style={{ marginBottom: '20px' }} />
                                <TextField {...register("instituicao")} label="Instituição" fullWidth InputLabelProps={{ shrink: true }} style={{ marginBottom: '20px' }} />
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel>Licenciatura</InputLabel>
                                            <Select {...register("licenciatura")} value={licenciaturaDefaultValue}>
                                                <MenuItem value="Sim">Sim</MenuItem>
                                                <MenuItem value="Não">Não</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControl fullWidth>
                                            <InputLabel>Tipo de Instituição</InputLabel>
                                            <Select {...register("tipo_instituicao")} value={tipoinstituicaoDefaultValue}>
                                                <MenuItem value="Pública">Pública</MenuItem>
                                                <MenuItem value="Privada">Privada</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField {...register("ano_conclusao")} label="Ano de Conclusão" fullWidth />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper elevation={3} style={{ padding: '10px', marginTop: '10px' }}>
                                <Typography variant="h6" gutterBottom>Pós-Graduação</Typography>
                                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                                    <InputLabel>Nível</InputLabel>
                                    <Select {...register("nivel")} value={nivelDefaultValue}>
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
