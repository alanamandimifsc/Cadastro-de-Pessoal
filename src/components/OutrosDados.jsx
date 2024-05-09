import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ServidoresContext } from '../context/ServidoresContext';
import { useContext, useState } from 'react';

function OutrosDados() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const id_serv = localStorage.getItem('id_serv');
    const { id } = useParams();
    const { atualizarOutrosDados } = useContext(ServidoresContext);

    const [OutrosDados, setOutrosDados] = useState(null);


    useEffect(() => {
        const fetchOutrosDados = async () => {
            if (id) {
                try {
                    const response = await fetch(`http://localhost:3000/outrosdados/${id}`);
                    const data = await response.json();
                    if (data) {
                        console.log('data:', data);
                        setOutrosDados(data);
                        setValue('cpf', data.cpf);
                        setValue('identidade', data.identidade);
                        setValue('org_exp', data.org_exp);
                        setValue('data_exp', data.data_exp);
                        setValue('titulo_eleitor', data.titulo_eleitor);
                        setValue('secao', data.secao);
                        setValue('zona', data.zona);
                        setValue('data_titulo', data.data_titulo);
                        setValue('cert_reservista', data.cert_reservista);
                        setValue('serie', data.serie);
                        setValue('data', data.data);
                        setValue('tipo_sanguineo', data.tipo_sanguineo);
                    }
                } catch (error) {
                    console.log('Erro ao obter outros dados:', error);
                }
            }
        }
        fetchOutrosDados();
    }, [id]);


    const tiposanguineoDefaultValue = OutrosDados ? OutrosDados.tipo_sanguineo : "";


    const onSubmit = (data) => {
        atualizarOutrosDados(data, id, id_serv);

    }
    return (
        <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField {...register("cpf", { required: true, maxLength: 11 })} label="CPF" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("identidade", { required: true })} label="Identidade" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("org_exp", { required: true })} label="Org. Exp" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("data_exp", { required: true })} type="date" label="Data Exp" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("titulo_eleitor", { required: true })} label="Titulo de Eleitor" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("secao", { required: true })} label="Seção" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("zona")} label="Zona" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("data_titulo", { required: true })} type="date" label="Data do Título" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("cert_reservista")} label="Cert Reservista" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("serie")} label="Série" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("data")} type="date" label="Data Exp" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Tipo Sanguíneo</InputLabel>
                            <Select {...register("tipo_sanguineo", { required: true })} value={tiposanguineoDefaultValue}>
                                <MenuItem value="A+">A+</MenuItem>
                                <MenuItem value="A-">A-</MenuItem>
                                <MenuItem value="O+">O+</MenuItem>
                                <MenuItem value="O-">O-</MenuItem>
                                <MenuItem value="AB+">AB+</MenuItem>
                                <MenuItem value="AB-">AB-</MenuItem>
                                <MenuItem value="B+">B+</MenuItem>
                                <MenuItem value="B-">B-</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>Enviar</Button>
            </form>
        </Container>
    );
}

export { OutrosDados };
