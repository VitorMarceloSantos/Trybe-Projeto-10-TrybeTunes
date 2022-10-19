-- INSERT INTO Pixar.Movies(title, director, `year`, length_minutes)
-- VALUES('Monstros SA', 'Pete Docter', '2001', '92'),
-- ('Procurando Nemo', 'John Lasseter', '2003', '107'),
-- ('Os Incríveis', 'Brad Bird', '2004', '116'),
-- ('WALL-E', 'Pete Docter', '2008', '104');

-- SELECT * FROM Pixar.Movies;

-- O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional.
-- Insira as informações à tabela BoxOffice.

-- SELECT * FROM Pixar.BoxOffice;
-- SELECT * FROM Pixar.Movies;

-- INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
-- 	VALUES (9, 6.8, 450000000, 370000000); 

-- O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Staton.
-- Corrija esse dado utilizando o comando UPDATE.

--  SELECT * FROM Pixar.Movies;
--  
--  UPDATE Pixar.Movies 
-- SET 
--     director = 'Andrew Staton'
-- WHERE
--     id = 9;

--  O título do filme “Ratatouille” está incorreto na tabela Movies. Além disso, o filme foi lançado em 2007 e não em 2010.
-- Corrija esses dados utilizando o comando UPDATE.

-- SELECT * FROM Pixar.Movies;
-- UPDATE Pixar.Movies 
-- SET 
--     title = 'Ratatouille',
--     `year` = 2007
-- WHERE
--     ID = 3;

-- Insira as novas classificações abaixo na tabela BoxOffice,
-- lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies:
-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

-- SELECT * FROM Pixar.Movies;
-- INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
-- 	VALUES 
--     (8, 8.5, 300000000, 250000000),
--     (10, 7.4, 460000000, 510000000),
--     (11, 9.9, 290000000, 280000000); 
-- SELECT * FROM Pixar.BoxOffice;

-- Exclua da tabela Movies o filme “WALL-E”.
-- SELECT * FROM Pixar.Movies;

-- DELETE FROM Pixar.BoxOffice 
-- WHERE
--     movie_id = 11;
-- DELETE FROM Pixar.Movies 
-- WHERE
--     id = 11;

