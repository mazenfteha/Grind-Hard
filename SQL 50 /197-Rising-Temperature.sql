-- Write your PostgreSQL query statement below
SELECT w1.id 
FROM Weather AS w1, Weather AS w2
where W1.recordDate -1 = W2.recordDate and W1.temperature > W2.temperature 


