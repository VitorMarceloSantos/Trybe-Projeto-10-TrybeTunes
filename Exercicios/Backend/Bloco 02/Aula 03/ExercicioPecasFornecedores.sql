-- Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Pecas
-- WHERE
--     name LIKE 'Gr%';

-- Agora, escreva uma query para retornar todos os fornecimentos em que a coluna peca possua o valor 2.
-- Organize o resultado por ordem alfabética de fornecedor.
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecimentos
-- WHERE
--     peca = 2;

-- Em seguida, faça uma consulta para exibir as peças, preço e
-- fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecimentos
-- WHERE
--     Fornecedor LIKE '%N%';
    
-- Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA).
-- Ordene esses resultados em ordem alfabética decrescente.
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecedores
-- WHERE
--     name LIKE '%LTDA'
-- ORDER BY name DESC;

-- Agora, faça uma consulta para exibir o número de
-- empresas (fornecedores) que contém a letra F no código.
-- SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecedores
-- WHERE
--     code LIKE '%F%';
--     
--     -- Quase lá! Agora escreva uma query para exibir os fornecimentos
--     -- onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
--     SELECT 
--     *
-- FROM
--     PecasFornecedores.Fornecimentos
-- WHERE
--     Preco BETWEEN 15 AND 40
-- ORDER BY Preco ASC;

-- Ufa! Por fim, faça uma query para exibir o número de vendas feitas
-- entre o dia 15/04/2018 e o dia 30/07/2019.
SELECT 
    *
FROM
    Vendas
WHERE
    DATE(order_date) BETWEEN '2018/04/15' AND '2019/07/30';