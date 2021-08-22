import { useState } from 'react'

import FormInputs1 from './components/Form1';
import FormInputs2 from './components/Form2';
import { Resultado } from './Pages/Resultado';

const App = () => {
    const [ page, setPage ] = useState(1);
    const [ form, setForm ] = useState({});

    const handleUpdateForm = (event) => {
            const { name, value } = event.target;
            setForm((prevValue) => {
            const newValue = { ...prevValue };
            newValue[name] = value;
            return newValue
        })
    }

    return (
        <div>
        {page === 1 && (
            <FormInputs1 
                value={form} 
                onChange={handleUpdateForm} 
                changePage={(number) => setPage(page + number)} 
            />
        )}
        {page === 2 && (
            <FormInputs2
                value={form}
                onChange={handleUpdateForm}
                changePage={(number) => setPage(page + number)}
            />
        )}
        {page === 3 && (<Resultado value={form}/>)}
        </div>
    )
}

export default App;
