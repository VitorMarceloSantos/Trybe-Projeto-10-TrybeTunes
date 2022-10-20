
-- 1. Escreva uma query que exiba o maior salário da tabela.
-- SELECT MAX(salary) FROM	hr.employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
-- SELECT (MAX(salary) - MIN(salary)) FROM hr.employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID,
-- ordenando pela média salarial em ordem decrescente.
-- SELECT 
--     ((max_salary + min_salary) / 2) AS media_salary
-- FROM
--     hr.jobs
-- ORDER BY media_salary DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar
-- o pagamento de todas as pessoas funcionárias.
-- SELECT SUM(salary) FROM hr.employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor 
-- salário, a soma de todos os salários e a média dos salários. Todos os valores devem 
-- ser formatados para ter apenas duas casas decimais.
-- SELECT 
--     ROUND(MAX(salary), 2) AS 'max_salary',
--     ROUND(MIN(salary), 2) AS 'min_salary',
--     ROUND(SUM(salary), 2) AS 'sum_salary',
--     ROUND(AVG(salary), 2) As 'med_salary'
-- FROM
--     hr.employees;
SELECT * FROM hr.employees;
-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham
-- como pessoas programadoras (IT_PROG).
-- SELECT 
--     COUNT(job_id)
-- FROM
--     hr.employees
-- WHERE
--     job_id = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o 
-- pagamento de cada profissão (JOB_ID).
-- SELECT 
--     AVG(salary) AS 'department_salary', job_id
-- FROM
--     hr.employees
-- GROUP BY job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a 
-- quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas
-- programadoras (IT_PROG).
-- SELECT 
--     SUM(salary) AS 'IT_PROG_salary', job_id
-- FROM
--     hr.employees
-- GROUP BY job_id
-- HAVING job_id = 'IT_PROG'; -- USADO PARA FILTRAR QUANDO SE UTILIZA O GROUP BY

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os
-- cargos, exceto das pessoas programadoras (IT_PROG).

