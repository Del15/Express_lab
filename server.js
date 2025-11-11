const express = require('express');

const userRouter = require('./routes/users');
const app = express();

app.set('view engine', 'ejs');
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.render('index', { user: 'Derrek' });
});


app.listen(3030);