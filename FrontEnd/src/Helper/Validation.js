
export const validation = (name, value) => {
    switch(name){
        case "nomeCompleto":
            if (value === '') {
                return 'Nome Completo é obrigatório'
            } else if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(value))) {
                return 'Caracteres inválidos';
            } else if (value.trim().length < 3) {
                return 'Nome completo deve ter mais que 3 caracteres';
            }
            break
        case "email":
            if (value === '') {
                return 'e-mail é obrigatório'
            } else if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
                return 'email inválido';
            }
            break
        case "cpfInput":
            if (value === '') {
                return 'CPF é obrigatório'
            } else if (!(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value))) {
                return 'CPF inválido - Digite da seguinte forma: 123.456.789-12';
            }
            break
        case "rendaInput":
            if (value === '') {
                return 'Renda Principal é obrigatório'
            } else if (/[^0-9]/g.test(value)) {
                return 'renda inválida';
            }    
            break
        case "dataNascimento":
            if (value === '') {
                return 'Renda Principal é obrigatório'
            } else if (!(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/.test(value))) {
                return 'Data inválida - Digite dd/mm/aaaa';
            } 
            break
        case "celular":
            if (value === '') {
                return 'Celular é obrigatório'
            } else if (/[^0-9]/g.test(value)) {
                return 'Celular inválido';
            } else if (value.length > 11 || value.length < 8) {
                return 'Tamanho invalido do celular'
            }
            break
        case "profissao":
            if (value === "") {
                return 'Profissão é obrigatório'
            }
            break
        default:
            console.log("nao foi encontrado nome")
    }
}
