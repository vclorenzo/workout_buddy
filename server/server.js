require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'https://workout-buddy-64ly.onrender.com',
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen to db
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening to port ', process.env.PORT);
    });
  })
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
  res.status(201).json({ message: 'Connected to Backend!' });
});
