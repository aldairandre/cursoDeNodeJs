INSERT INTO usuarios(nome,email,idade) VALUES(
    "Aldair Andre",
    "aldairandre99@gmail.com",
    21
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Vissolela Dombolo",
    "vissolela@gmail.com",
    25
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Macrina Andre",
    "macrina@gmail.com",
    19
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Wene Malembe",
    "Wene@gmail.com",
    5
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Wene Malembe",
    "Wene@gmail.com",
    5
)
--Comando para inserir valores numa DB, o valores precisam ser posto de acordo com a tabela da DB

SELECT * FROM usuarios --Mostra todos os dados de tabela usuarios

SELECT * FROM usuarios WHERE idade > 18; --seleciona todos os usuarios maiores de 18 anos

SELECT * FROM usuarios WHERE idade < 18; --seleciona todos os usuarios menores de 18 anos