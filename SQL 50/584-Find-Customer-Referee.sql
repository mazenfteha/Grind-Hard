-- Write your PostgreSQL query statement below
SELECT name 
From Customer 
WHERE referee_id IS Null OR referee_id <> 2;