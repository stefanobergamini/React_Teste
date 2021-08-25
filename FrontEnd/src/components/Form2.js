import { useState } from 'react'
import { ButtonType } from './Button';
import { Input } from './Input'
import { SimpleSelect } from '../components/Dropdown';

import '../styles/Form2.css'
import { MainContainer } from './MainContainer';
import { validation } from '../Helper/Validation'


const FormInputs2 = (props) => {
    const { value, onChange, changePage } = props
    const [ errors, setErrors ] = useState({
        dataNascimento: "",
        celular: "",
        profissao: ""
    })
    
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
        const form2Doc = {
            dataNascimento: value.dataNascimento,
            celular: value.celular,
            profissao: value.profissao
        }
        event.preventDefault()
        console.log(Object.values(value).every(value => value))
        console.log(Object.values(value).length)
        if (!(Object.values(form2Doc).every(value => value))) {
            return
        }
        if (Object.values(errors).some(error => error)) {
            return
        } else {
            sendInfo(event)
        } 
    }

    return (
        <MainContainer>
            <h2 className='Texto-Inicial'>Me fale mais sobre você.</h2>
            <form onSubmit={handleChangePage}>
                <Input
                    name="dataNascimento"
                    type="text"
                    label="Data de Nascimento"
                    value={value?.dataNascimento}
                    helperText={errors?.dataNascimento}
                    onChange={onChange}
                    onClick={handleOnClick}
                    onBlur={handleOnBlur}
                />
                <Input 
                    name="celular"
                    type="text"
                    label="Celular"
                    value={value?.celular}
                    helperText={errors?.celular}
                    onChange={onChange}
                    onClick={handleOnClick}
                    onBlur={handleOnBlur}
                />
                <div className="select">
                    <SimpleSelect
                        name='profissao' 
                        value={value?.profissao} 
                        onChange={onChange}
                        onClick={handleOnClick}
                        onBlur={handleOnBlur}
                    />
                    <p className="profissaoError">{errors?.profissao}</p>
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