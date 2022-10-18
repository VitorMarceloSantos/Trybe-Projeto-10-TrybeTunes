-- INSERT

-- Vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
-- INSERT INTO sakila.staff (staff_id, first_name, last_name, address_id, email, store_id,
-- `active`, username, `password`, last_update) VALUES
-- (DEFAULT, 'Vitor', 'Marcelo', 3, 'vitor@vitor.com', 1, 1, 'Vitor', 'Vitor123', DEFAULT),
-- (DEFAULT, 'Rafaela', 'Caroline', 2, 'rafaela@rafaela.com', 1, 1, 'Rafaela', 'Rafaela123', DEFAULT);

-- SELECT * FROM sakila.staff;

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e
-- cadastre essas pessoas como atores na tabela sakila.actor.
-- INSERT INTO sakila.actor (first_name, last_name) 
-- 	SELECT sakila.customer.first_name, sakila.customer.last_name
--     FROM sakila.customer LIMIT 5;

-- SELECT * FROM sakila.actor;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
-- INSERT INTO sakila.category (category_id, `name`, last_update) VALUES
-- (DEFAULT, 'Serie', DEFAULT), 
-- (DEFAULT, 'Anime', DEFAULT),
-- (DEFAULT, 'Dorama', DEFAULT);

-- SELECT * FROM sakila.category;

-- DELETE

-- Exclua do banco de dados o ator com o nome de “KARL”.
-- Apagando as referências em outra tabela
-- DELETE FROM sakila.film_actor 
-- WHERE
--     actor_id = 12;

-- SELECT * FROM sakila.film_actor;

-- Apagando o ator com nome 'KARL'(deve ser apagado utilizando o ID)
-- DELETE FROM sakila.actor 
-- WHERE
--     actor_id = 12;
-- SELECT * FROM sakila.actor;

-- Exclua do banco de dados os atores com o nome de “MATTHEW”.
-- SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW';
-- DELETE FROM sakila.film_actor 
-- WHERE
--     actor_id IN (8, 103, 181);

-- DELETE FROM sakila.actor 
-- WHERE
--     actor_id IN (8 , 103, 181);

-- SELECT * FROM sakila.actor;

