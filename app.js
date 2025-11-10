const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'kastro',
    database: 'cricket_db'
});

db.connect(err => {
    if (err) console.error('Database connection failed:', err);
    else console.log('Connected to MySQL database');
});

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { cricketerName, countryName } = req.body;
    const sql = 'INSERT INTO cricketers (name, country) VALUES (?, ?)';
    db.query(sql, [cricketerName, countryName], (err) => {
        if (err) res.status(500).send('Error inserting data');
        else res.send('Congratulations, you have successfully deployed');
    });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
