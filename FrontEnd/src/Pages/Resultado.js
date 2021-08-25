import React from 'react';
import { MainContainer } from '../components/MainContainer';
import '../styles/Resultado.css'

export const Resultado = (props) => {
    return (
        <MainContainer className="mainContainerResultado">
            <h1>Seu cadastro foi concluído com sucesso</h1>
            <h4>Obrigada por suas informações</h4>
            <h4>Agora é só aguardar que entraremos em contato com você pelo e-mail informado</h4>
        </MainContainer>
    )
}

