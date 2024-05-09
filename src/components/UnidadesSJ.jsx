import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container, Paper, Typography } from '@mui/material';
import { ServidoresContext } from '../context/ServidoresContext';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UnidadesSJ() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    // const onSubmit = data => console.log(data);
    const { atualizarUnidadesSJ } = useContext(ServidoresContext);
    const { id } = useParams();
    const id_serv = localStorage.getItem('id_serv');

    const [unidadesSJ, setUnidadesSJ] = useState(null);

    useEffect(() => {
        const fetchUnidadesSJ = async () => {
            if (id) {
                try {
                    const response = await fetch(`http://localhost:3000/unidadessj/${id}`);
                    const data = await response.json();
                    if (data) {
                        console.log('data:', data);
                        setUnidadesSJ(data);
                        setValue('serv_ativo', data.serv_ativo);
                        setValue('emit_freq', data.emit_freq);
                        setValue('ramal', data.ramal);
                        setValue('data_admissao', data.data_admissao);
                        setValue('cargo', data.cargo);
                        setValue('funcao', data.funcao);
                        setValue('lotacao', data.lotacao);
                        setValue('titulacao_nivel', data.titulacao_nivel);
                        setValue('classe', data.classe);
                        setValue('padrao', data.padrao);
                        setValue('regime', data.regime);
                        setValue('professor', data.professor);
                        setValue('area', data.area);
                    }
                } catch (error) {
                    console.log('Erro ao obter unidades SJ:', error);
                }
            }
        }
        fetchUnidadesSJ();
    }, [id]);

    const serv_ativoDefaultValue = unidadesSJ ? unidadesSJ.serv_ativo : "";
    const emit_freqDefaultValue = unidadesSJ ? unidadesSJ.emit_freq : "";
    const lotacaoDefaultValue = unidadesSJ ? unidadesSJ.lotacao : "";
    const classeDefaultValue = unidadesSJ ? unidadesSJ.classe : "";
    const professorDefaultValue = unidadesSJ ? unidadesSJ.professor : "";
    const areaDefaultValue = unidadesSJ ? unidadesSJ.area : "";


    const onSubmit = (data) => {
        atualizarUnidadesSJ(data, id, id_serv);

    }

    return (
        <Container maxWidth="sm" style={{ marginTop: '140px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth >
                            <InputLabel>Servidor Ativo</InputLabel>
                            <Select {...register("serv_ativo")} value={serv_ativoDefaultValue}>
                                <MenuItem value="Sim">Sim</MenuItem>
                                <MenuItem value="Não">Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Emitir Frequência</InputLabel>
                            <Select {...register("emit_freq")} value={emit_freqDefaultValue}>
                                <MenuItem value="Sim">Sim</MenuItem>
                                <MenuItem value="Não">Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("ramal")} label="Ramal" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("data_admissao")} type="date" label="Data da Admissão" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("cargo")} label="Cargo" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("funcao")} label="Função" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Lotação</InputLabel>
                            <Select {...register("lotacao")} value={lotacaoDefaultValue}>
                                <MenuItem value="CTIC">CTIC</MenuItem>
                                <MenuItem value="OP2">OP2</MenuItem>
                                <MenuItem value="OP3">OP3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("titulacao_nivel")} label="Titulação/Nível" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Classe</InputLabel>
                            <Select {...register("classe")} value={classeDefaultValue}>
                                <MenuItem value="D">D</MenuItem>
                                <MenuItem value="op1">op1</MenuItem>
                                <MenuItem value="op2">op2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("padrao")} label="Padrão" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("regime")} label="Regime" fullWidth InputLabelProps={{ shrink: true }} />
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
                                        <Select {...register("professor")} value={professorDefaultValue}>
                                            <MenuItem value="D">D</MenuItem>
                                            <MenuItem value="op1">op1</MenuItem>
                                            <MenuItem value="op2">op2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Área</InputLabel>
                                        <Select {...register("area")} value={areaDefaultValue}>
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
