import { useState } from 'react'
import { ButtonType } from './Button';
import { Input } from './Input'
import { MainContainer } from '../components/MainContainer';

import { validation } from '../Helper/Validation'

import '../styles/Form1.css'

const FormInputs1 = (props) => {
    
    const { changePage, onChange, value } = props

    const [ errors, setErrors ] = useState({
        nomeCompleto: "",
        email: "",
        cpfInput: "",
        rendaInput: ""
    })
    

    const handleOnBlur = (event) => {
        const { name, value } = event.target;
        const mensError = validation(name, value)
       
        setErrors((prevError) => {
            const newError = { ...prevError };
            newError[name] = mensError;
            return newError
        })

    }

    const handleOnClick = (event) => {
        const { name } = event.target;
       
        setErrors((prevError) => {
            const newError = { ...prevError };
            newError[name] = '';
            return newError
        })

        onChange(event)
    }

    const handleChangePage = (event) => {
        const form1Doc = {
            nomeCompleto: value.nomeCompleto,
            email: value.email,
            cpfInput: value.cpfInput,
            rendaInput: value.rendaInput
        }
        event.preventDefault()
        console.log(Object.values(form1Doc).every(value => value))
        console.log(Object.values(value).length)
        if (!(Object.values(form1Doc).every(value => value))) {
            return
        }
        if (Object.values(errors).some(error => error)) {
            return
        } else {
            changePage(1)
        }
        
    }
    
    return (
        <MainContainer>
            <h2 className='Texto-Inicial'>Vamos Começar</h2>
            <form onSubmit={handleChangePage}>
                <Input
                    name='nomeCompleto'
                    type="text"
                    label='Nome Completo'
                    autoComplete='off'
                    value={value?.nomeCompleto}
                    helperText={errors?.nomeCompleto}
                    onChange={onChange}
                    onClick={handleOnClick}
                    onBlur={handleOnBlur}
                />
                <Input
                    name='email'
                    type="text"
                    label='Email'
                    value={value?.email}
                    helperText={errors?.email}
                    onChange={onChange}
                    onClick={handleOnClick}
                    onBlur={handleOnBlur}
                />
                <div className="formDivider">
                    <Input
                        className='cpfInput'
                        type="text"
                        name='cpfInput' 
                        label='CPF'
                        value={value?.cpfInput}
                        helperText={errors?.cpfInput}
                        onChange={onChange}
                        onClick={handleOnClick}
                        onBlur={handleOnBlur}
                    />
                    <Input
                        className='rendaInput'
                        type="text"
                        name='rendaInput' 
                        label='Renda Principal'
                        value={value?.rendaInput}
                        helperText={errors?.rendaInput}
                        onChange={onChange}
                        onClick={handleOnClick}
                        onBlur={handleOnBlur}
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
