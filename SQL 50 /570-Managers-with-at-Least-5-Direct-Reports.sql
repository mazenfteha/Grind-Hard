-- Write your PostgreSQL query statement below
SELECT name FROM Employee WHERE id in 
(SELECT managerId FROM Employee GROUP BY managerId having (count(distinct id)>=5))