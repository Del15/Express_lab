const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const app = express();

app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.render('index', { user: 'Derrek' });
});


app.listen(3030);