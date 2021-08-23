import React
from 'react';
import { ButtonType } from './Button';
import { Input } from './Input'
import { SimpleSelect } from '../components/Dropdown';

import '../styles/Form2.css'
import { MainContainer } from './MainContainer';


const FormInputs2 = (props) => {
    const { value, onChange, changePage } = props

    async function sendInfo(event) {
        event.preventDefault()
        try {
            let formResult = await fetch(process.env.REACT_APP_API, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nomeCompleto: value.nomeCompleto,
                    email: value.email,
                    cpf: value.cpfInput,
                    rendaPrincipal: value.rendaInput,
                    dataNascimento: value.dataNascimento,
                    celular: value.celular,
                    profissao: value.profissao
                })
                
            }).then(response => response.json());
            
            console.log('Result ' + formResult)
            changePage(1)
        } catch(e) {
            console.log(e)
        }

    }

    return (
        <MainContainer>
            <h2 className='Texto-Inicial'>Me fale mais sobre você.</h2>
            <form onSubmit={sendInfo}>
                <Input
                    name="dataNascimento"
                    type="text"
                    label="Data de Nascimento"
                    value={value?.dataNascimento}
                    onChange={onChange}
                />
                <Input 
                    name="celular"
                    type="text"
                    label="Celular"
                    value={value?.celular}
                    onChange={onChange}
                />
                <div className="select">
                    <SimpleSelect name='profissao' value={value?.profissao} onChange={onChange}/>
                </div>
                <div className='buttonDiv2'>
                    <button className="botaoVoltar" onClick={() => changePage(-1)}> &larr;Voltar </button>
                    <ButtonType className="botaoFinalizar" type="submit"> Finalizar </ButtonType>
                </div>
            </form>
        </MainContainer>
    )
}

export default FormInputs2;