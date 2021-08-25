using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class FormInfo
    {
        public string nomeCompleto { get; set; }
        public string email { get; set; }
        public string cpf { get; set; }
        public string rendaPrincipal { get; set; }
        public string dataNascimento { get; set; }
        public string celular { get; set; }
        public string profissao { get; set; }
    }
}
