import { createContext, useEffect, useState } from "react";
import Axios from "axios";
import { useForm } from 'react-hook-form';
import { Escolaridade } from "../components/Escolaridade";

export const ServidoresContext = createContext();

export const ServidoresProvider = ({ children }) => {
    const [servidores, setServidores] = useState([]);
    const [outrosdados, setOutrosDados] = useState([]);
    const [unidadessj, setUnidadesSJ] = useState([]);
    const [escolaridade, setEscolaridade] = useState([]);
    const [id_serv, setIdServ] = useState(0);

    useEffect(() => {
        const fetchEscolaridade = async () => {
            try {
                const response = await Axios.get('http://localhost:3000/escolaridade');
                const escolaridade = response.data;
                setEscolaridade(escolaridade);
            } catch (error) {
                console.log('Erro ao obter último ID de servidor:', error);
            }
        }
        fetchEscolaridade();
    }, []);


    useEffect(() => {
        const fetchUnidadesSJ = async () => {
            try {
                const response = await Axios.get('http://localhost:3000/unidadessj');
                const unidadessj = response.data;
                setUnidadesSJ(unidadessj);
            } catch (error) {
                console.log('Erro ao obter último ID de servidor:', error);
            }
        };
        fetchUnidadesSJ();
    }, []);


    useEffect(() => {
        const fetchOutrosDados = async () => {
            try {
                const response = await Axios.get('http://localhost:3000/outrosdados');
                const outrosdados = response.data;
                setOutrosDados(outrosdados);
            } catch (error) {
                console.log('Erro ao obter último ID de servidor:', error);
            }
        };
        fetchOutrosDados();
    }, []);



    useEffect(() => {
        const fetchServidores = async () => {
            try {
                const response = await Axios.get('http://localhost:3000/servidores');
                const servidores = response.data;
                setServidores(servidores);

                const lastServidor = servidores[servidores.length - 1];
                setIdServ(lastServidor ? parseInt(lastServidor.id) + 1 : 1);
            } catch (error) {
                console.log('Erro ao obter último ID de servidor:', error);
            }
        };
        fetchServidores();
    }, []);


    function atualizaServidor(data, id) {
        console.log(id);
        const requestConfig = {
            method: id ? 'PUT' : 'POST',
            body: JSON.stringify({
                id: (id !== undefined ? id : String(id_serv)),
                matricula: String(data.matricula),
                nome: data.nome,
                nome_mae: data.nome_mae,
                nome_pai: data.nome_pai,
                data_nasc: data.data_nasc,
                estado_civil: data.estado_civil,
                sexo: data.sexo,
                conjugue: data.conjugue,
                cep: data.cep,
                rua: data.rua,
                numero_complemento: data.numero_complemento,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.estado,
                telefone: data.telefone,
                celular: data.celular,

            }),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        fetch(`http://localhost:3000/servidores${id ? `/${id}` : ''}`, requestConfig)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    setIdServ(prevId => parseInt(prevId) + 1);
                    alert('Servidor cadastrado com sucesso!');
                    localStorage.setItem('id_serv', id_serv);
                    if (id) {
                        window.location.href = `/registerservidores/otherinfo/${id}`;
                    } else {
                        //mudar de pagina
                        window.location.href = '/registerservidores/otherinfo';
                        // window.location.reload();
                    }
                } else {
                    throw new Error('Erro ao cadastrar servidor.');
                }
            })
            .catch(error => {
                console.error("Erro ao cadastrar servidor:", error);
                alert('Erro ao cadastrar servidor!');
            });
    };

    function atualizarOutrosDados(data, id, id_serv) {
        console.log(id);
        const requestConfig = {
            method: id ? 'PUT' : 'POST',
            body: JSON.stringify({
                id: (id !== undefined ? id : String(id_serv)),
                cpf: String(data.cpf),
                identidade: data.identidade,
                org_exp: data.org_exp,
                data_exp: data.data_exp,
                titulo_eleitor: data.titulo_eleitor,
                secao: data.secao,
                zona: data.zona,
                data_titulo: data.data_titulo,
                cert_reservista: data.cert_reservista,
                serie: data.serie,
                data: data.data,
                tipo_sanguineo: data.tipo_sanguineo,

            }),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        fetch(`http://localhost:3000/outrosdados${id ? `/${id}` : ''}`, requestConfig)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    setIdServ(prevId => parseInt(prevId) + 1);
                    alert('Servidor cadastrado com sucesso!');
                    localStorage.setItem('id_serv', id_serv);
                    //mudar de pagina
                    if (id) {
                        window.location.href = `/registerservidores/units/${id}`;
                    } else {
                        window.location.href = '/registerservidores/units';
                        // window.location.reload();
                    }
                } else {
                    throw new Error('Erro ao cadastrar servidor.');
                }
            })
            .catch(error => {
                console.error("Erro ao cadastrar servidor:", error);
                alert('Erro ao cadastrar servidor!');
            });
    };


    function atualizarUnidadesSJ(data, id, id_serv) {
        console.log(id);
        console.log(id_serv)
        const requestConfig = {
            method: id ? 'PUT' : 'POST',
            body: JSON.stringify({
                id: (id !== undefined ? id : String(id_serv)),
                serv_ativo: data.serv_ativo,
                emit_freq: data.emit_freq,
                ramal: data.ramal,
                data_admissao: data.data_admissao,
                cargo: data.cargo,
                funcao: data.funcao,
                lotacao: data.lotacao,
                titulacao_nivel: data.titulacao_nivel,
                classe: data.classe,
                padrao: data.padrao,
                regime: data.regime,
                professor: data.professor,
                area: data.area,

            }),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        fetch(`http://localhost:3000/unidadessj${id ? `/${id}` : ''}`, requestConfig)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    setIdServ(prevId => parseInt(prevId) + 1);
                    alert('Servidor cadastrado com sucesso!');
                    localStorage.setItem('id_serv', id_serv);
                    //mudar de pagina
                    if (id) {
                        window.location.href = `/registerservidores/education/${id}`;
                    } else {
                        window.location.href = '/registerservidores/education';
                        // window.location.reload();
                    }
                } else {
                    throw new Error('Erro ao cadastrar servidor.');
                }
            })
            .catch(error => {
                console.error("Erro ao cadastrar servidor:", error);
                alert('Erro ao cadastrar servidor!');
            });
    };


    function atualizarEscolaridade(data, id, id_serv) {
        console.log(id);
        console.log(id_serv)
        const requestConfig = {
            method: id ? 'PUT' : 'POST',
            body: JSON.stringify({
                id: (id !== undefined ? id : String(id_serv)),
                escolaridade: data.escolaridade,
                descricao: data.descricao,
                instituicao: data.instituicao,
                licenciatura: data.licenciatura,
                tipo_instituicao: data.tipo_instituicao,
                ano_conclusao: data.ano_conclusao,
                nivel: data.nivel



            }),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        fetch(`http://localhost:3000/escolaridade${id ? `/${id}` : ''}`, requestConfig)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    setIdServ(prevId => parseInt(prevId) + 1);
                    alert('Servidor cadastrado com sucesso!');
                    // const id = localStorage.getItem('id')
                    localStorage.removeItem('id_serv');
                    //mudar de pagina

                    window.location.href = '/registerservidores/cadastro';
                    // window.location.reload();

                } else {
                    throw new Error('Erro ao cadastrar servidor.');
                }
            })
            .catch(error => {
                console.error("Erro ao cadastrar servidor:", error);
                alert('Erro ao cadastrar servidor!');
            });
    };



    return (
        <ServidoresContext.Provider value={{ servidores, atualizaServidor, atualizarOutrosDados, atualizarUnidadesSJ, atualizarEscolaridade }}>
            {children}
        </ServidoresContext.Provider>
    );
}