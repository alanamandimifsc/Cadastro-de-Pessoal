import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Container } from '@mui/material';

function OutrosDados() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField {...register("CPF", { required: true, maxLength: 11 })} label="CPF" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Identidade", { required: true })} label="Identidade" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Org. Exp", { required: true })} label="Org. Exp" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Data Exp", { required: true })} type="date" label="Data Exp" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Titulo de Eleitor", { required: true })} label="Titulo de Eleitor" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Seção", { required: true })} label="Seção" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Zona")} label="Zona" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Data do Título", { required: true })} type="date" label="Data do Título" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Cert Reservista")} label="Cert Reservista" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Série")} label="Série" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField {...register("Data")} type="date" label="Data Exp" fullWidth InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Tipo Sanguíneo</InputLabel>
                            <Select {...register("Tipo Sanguíneo", { required: true })} defaultValue="">
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
