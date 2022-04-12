const cohort = process.argv[2];
const limit = process.argv[3];

console.log(cohort, limit);

const { Pool } = require('pg');

const pool = new Pool({
  user: 'henrique',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const text =  "SELECT students.id, students.name as name, cohorts.name as cohort_id FROM students JOIN cohorts ON cohorts.id = students.cohort_id WHERE cohorts.name LIKE $1 LIMIT $2;";
const values = ['%' + cohort + '%', limit];

pool
  .query(text, values)
  .then(res => {
      res.rows.forEach(user => {
        console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
      })
  })
  .catch(err => console.error('query error', err.stack));