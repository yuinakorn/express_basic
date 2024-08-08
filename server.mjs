import express from 'express';

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});