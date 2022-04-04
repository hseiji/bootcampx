SELECT cohorts.name as cohort, COUNT(assignment_submissions.*) as total_submissions
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
GROUP BY cohort
ORDER BY COUNT(assignment_submissions.*) DESC;