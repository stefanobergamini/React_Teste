# Teste de Desenvolvimento 

Esse teste utilizou do comando 
```yarn create react-app my-app``` e adicionada as dependencias necessárias. Utilize do comando ```yarn install``` para baixar as dependencias utilizadas no teste, as mesmas são listadas no arquivo ```package.json```. Para inicializar o FrontEnd se utiliza do comando ```yarn start```.

## Parte da API

Para o Back-End se utilizou do Visual Studio, o qual disponibiliza templates. Foi realizado alterações no template de maneira que fosse executado que se desejava.

Com relação ao banco de dados se utilizou do SQL server, utilizando do Microsoft SQL Server Management Studio para a criação do banco e as tabelas.

Para o nome do servidor se utilizou do nome "```.```", nele se criou um banco de dados chamado ```teste```, para isso se utilizou do comando:

```SQL
create database teste
```

```teste``` possui a tabela ```dbo.Formulario```.
A tabela utilizada possui os seguintes valores ```FormularioNomeCompleto, FormularioEmail, FormularioCPF, FormularioRenda, FormularioDataNascimento, FormularioCelular, FormularioProfissao```. Para criar ela se utilizou do comando:

```SQL
create table dbo.Formulario(
    FormularioNomeCompleto varchar(500),
    FormularioEmail varchar(500),
    FormularioCPF varchar(500),
    FormularioRenda varchar(500),
    FormularioDataNascimento varchar(500),
    FormularioCelular varchar(500),
    FormularioProfissao varchar(500),
)
```
Com isso a execução do teste deve funcionar de maneira desejada.
