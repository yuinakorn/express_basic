import express from 'express';
import db from './db.mjs';

const app = express();
const PORT = 5200;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/sayhello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}!`);
});


app.post('/api/v1/users_all', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send;
        } else {
            res.status(200).send(result);
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});