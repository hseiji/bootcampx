SELECT name, email, id, cohort_id
FROM students
WHERE email <> '%@gmail%' and 
phone is NULL;