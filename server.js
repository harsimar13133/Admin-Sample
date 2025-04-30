const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'streaming-flix-secret',
  resave: false,
  saveUninitialized: true
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');
const tvShowRoutes = require('./routes/tvshows');
const myListRoutes = require('./routes/mylist');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

app.use('/', indexRoutes);
app.use('/movies', movieRoutes);
app.use('/tvshows', tvShowRoutes);
app.use('/mylist', myListRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/streamingflix', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});