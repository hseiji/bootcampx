SELECT id, name, email, cohort_id 
FROM students
where github is NULL
ORDER BY cohort_id;