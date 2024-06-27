import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao  from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Desing',
        'Mobile', 
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault() // preve o comportamento padrao do evento
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })
        console.log('Form foi submetido', nome, cargo, imagem, time)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={nome}
                    aoAlterado={value => setNome(value)}/>
                <CampoTexto required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={value => setCargo(value)} />
                <CampoTexto label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={imagem}
                    aoAlterado={value => setImagem(value)}/>
                <ListaSuspensa required={true} 
                    label="Time" itens={times}
                    value={time}
                    aoAlterado={value => setTime(value)}/>
                <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}

export default Formulario