const express = require('express');

const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

// Connect to the database:
const pool = new Pool(
    {
      user: 'postgres',
      password: 'lacasadelarbolCODING23',
      host: 'localhost',
      database: 'movie_db'
    },
    console.log(`Connected to the movie_db database.`)
)

pool.connect();

// movies.get('/movies', (req, res) => {
//     pool.query('SELECT * FROM movies', (err, res) => {
//         if(err) {
//             throw err;
//         } else{
//             console.log(res.rows);
//         }
//     })
// })


app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});