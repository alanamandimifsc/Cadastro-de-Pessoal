import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useBuscaCep } from '../hook/useBuscaCep';
import { ServidoresContext } from '../context/ServidoresContext';
import { useContext, useState } from 'react';

export const Dados = () => {
    const { id } = useParams(); //quando vier da página cadastro
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { atualizaServidor } = useContext(ServidoresContext);

    const [servidorData, setServidorData] = useState(null);


    const handleBlurCEP = async (cep) => {
        const dados = await useBuscaCep(cep);
        setValue('rua', dados.logradouro);
        setValue('bairro', dados.bairro);
        setValue('cidade', dados.localidade);
        setValue('estado', dados.uf);
    };

    const onSubmit = (data) => {
        atualizaServidor(data, id);


    };

    useEffect(() => {
        const fetchData = async () => {
            console.log('id:', id);
            if (id) {
                try {
                    const response = await fetch(`http://localhost:3000/servidores/${id}`);
                    const data = await response.json();
                    if (data) {
                        console.log('data:', data);
                        setServidorData(data);
                        setValue('matricula', data.matricula);
                        setValue('nome', data.nome);
                        setValue('nome_mae', data.nome_mae);
                        setValue('nome_pai', data.nome_pai);
                        setValue('data_nasc', data.data_nasc);
                        setValue('estado_civil', data.estado_civil);
                        setValue('sexo', data.sexo);
                        setValue('conjugue', data.conjugue);
                        setValue('cep', data.cep);
                        setValue('rua', data.rua);
                        setValue('numero_complemento', data.numero_complemento);
                        setValue('bairro', data.bairro);
                        setValue('cidade', data.cidade);
                        setValue('estado', data.estado);
                        setValue('telefone', data.telefone);
                        setValue('celular', data.celular);
                    }
                } catch (error) {
                    console.log('Erro ao obter servidor:', error);
                }
            }

        };
        fetchData();

    }, [id]);

    const estadoCivilDefaultValue = servidorData ? servidorData.estado_civil : "";
    const sexoDefaultValue = servidorData ? servidorData.sexo : "";

    return (
        <Container maxWidth="sm" style={{ marginTop: '170px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField {...register("matricula", { required: true, maxLength: 7, minLength: 7 })} label="Matrícula" fullWidth InputLabelProps={{ shrink: true }} error={errors.matricula ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("nome", { required: true, maxLength: 100 })} label="Nome" fullWidth InputLabelProps={{ shrink: true }} error={errors.nome ? true : false} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("nome_mae", { required: true, maxLength: 100 })} label="Nome da Mãe" fullWidth InputLabelProps={{ shrink: true }} error={errors.nome_mae ? true : false} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("nome_pai", { required: true, maxLength: 100 })} label="Nome do Pai" fullWidth InputLabelProps={{ shrink: true }} error={errors.nome_pai ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("data_nasc", { required: true })} type='date' label="Data de Nascimento" fullWidth InputLabelProps={{ shrink: true }} error={errors.data_nasc ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Estado Civil</InputLabel>
                            <Select {...register("estado_civil", { required: true })} value={estadoCivilDefaultValue} error={errors.estado_civil ? true : false}>
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
                            <Select {...register("sexo", { required: true })} value={sexoDefaultValue} error={errors.sexo ? true : false}>
                                <MenuItem name="Masculino" value="Masculino">Masculino</MenuItem>
                                <MenuItem name="Feminino" value="Feminino">Feminino</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("conjugue")} label="Cônjuge" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField name='cep' {...register("cep", { onBlur: (e) => handleBlurCEP(e.target.value) })} label="CEP"
                            error={errors.cep ? true : false} fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("rua", { required: true })} label="Logradouro" fullWidth InputLabelProps={{ shrink: true }} error={errors.rua ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("numero_complemento", { required: true })} label="Número / Complemento" fullWidth InputLabelProps={{ shrink: true }} error={errors.numero_complemento ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("bairro", { required: true })} label="Bairro" fullWidth InputLabelProps={{ shrink: true }} error={errors.bairro ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register('cidade', { required: true })} label="Cidade" fullWidth InputLabelProps={{ shrink: true }} error={errors.cidade ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("estado", { required: true, maxLength: 2 })} label="Estado" fullWidth InputLabelProps={{ shrink: true }} error={errors.estado ? true : false} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("telefone", { maxLength: 10, minLength: 10 })} label="Telefone" fullWidth InputLabelProps={{ shrink: true }} error={errors.telefone ? true : false} />
                        {errors.telefone && (errors.telefone.type === "minLength" || errors.telefone.type === "maxLength") && <span style={{ color: "red" }}>O telefone deve ter 8 caracteres</span>}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("celular", { maxLength: 11, minLength: 11 })} label="Celular" fullWidth InputLabelProps={{ shrink: true }} error={errors.celular ? true : false} />
                        {errors.celular && (errors.celular.type === "minLength" || errors.celular.type === "maxLength") && <span style={{ color: "red" }}>O celular deve ter 9 caracteres</span>}
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>Enviar</Button>
            </form>
        </Container>
    );
}

export default Dados;
