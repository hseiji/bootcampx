const { Pool } = require('pg');

const pool = new Pool({
  user: 'henrique',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const text = "SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort FROM teachers JOIN assistance_requests ON teacher_id = teachers.id JOIN students ON students.id = student_id JOIN cohorts ON cohorts.id = cohort_id WHERE cohorts.name LIKE $1;";
const values = ['%' + process.argv[2] + '%'];

pool
  .query(text, values)
  .then(res => {
      res.rows.forEach(data => {
        console.log(`${data.cohort}: ${data.teacher}`);
      })
  })
  .catch(err => console.error('query error', err.stack));