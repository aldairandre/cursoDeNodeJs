CREATE DATABASE sistemaDeCadastro;  --cria um banco de dados com o nome sistemaDeCadastro

USE sistemaDeCadastro; --Entra para a DB 

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT 
); --Cria table com colunas de nome,email e idade, com os seu respetivos tipos 

DESCRIBE usuarios; --Mostra a estrutura da tabela usuarios