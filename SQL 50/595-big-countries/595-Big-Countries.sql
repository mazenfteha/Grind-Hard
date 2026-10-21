-- Write your PostgreSQL query statement below

SELECT name, population, area FROM World WHERE EXISTS (SELECT population, area WHERE area >= 3000000 OR population >= 25000000);