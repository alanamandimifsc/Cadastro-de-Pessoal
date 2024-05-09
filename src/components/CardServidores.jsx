import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ServidoresContext } from "../context/ServidoresContext";
import { Typography, Grid } from '@mui/material';

export function CardServidores() {
    const { servidores, getServidores } = useContext(ServidoresContext);

    return (
        <Grid container spacing={2} sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
            {servidores.map(servidor => (
                <Grid item xs={12} sm={12} md={12} key={servidor.id}>
                    <Link to={`/registerservidores/data/${servidor.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="card" style={{ padding: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                            <Typography variant="h3">{servidor.nome}</Typography>
                            <Typography>{servidor.matricula}</Typography>
                        </div>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}
