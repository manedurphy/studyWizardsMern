require('./data/dataBase')();
const express = require('express');
const tutorsRoute = require('./routes/tutors');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const blogRoute = require('./routes/blog');

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/tutors', tutorsRoute);
app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/blog', blogRoute);

app.get('/', (req, res) => res.send('working'));

app.listen(5000, () => console.log('Listening on port 5000...'));

//change
