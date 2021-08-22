import React from 'react';
import { ButtonType } from './Button';
import { Input } from './Input'
import { MainContainer } from '../components/MainContainer';

import '../styles/Form1.css'

const FormInputs1 = (props) => {

    const { changePage, onChange, value } = props
    return (
        <MainContainer>
            <form onSubmit={() => changePage(1)}>
                <Input
                    name='nomeCompleto'
                    type="text"
                    label='Nome Completo'
                    autoComplete='off'
                    value={value?.nomeCompleto}
                    onChange={onChange}
                />
                <Input
                    name='email'
                    type="text"
                    label='Email'
                    value={value?.email}
                    onChange={onChange}
                />
                <div className="formDivider">
                    <Input
                        className='cpfInput'
                        type="text"
                        name='cpfInput' 
                        label='CPF'
                        value={value?.cpfInput}
                        onChange={onChange}
                    />
                    <Input
                        className='rendaInput'
                        type="text"
                        name='rendaInput' 
                        label='Renda Principal'
                        value={value?.rendaInput}
                        onChange={onChange}
                    />
                </div>
                <div className='buttonDiv'>
                    <ButtonType className="botaoTipo" type="submit"> Próximo </ButtonType>
                </div>
            </form>
        </MainContainer>
    )
}


export default FormInputs1;
