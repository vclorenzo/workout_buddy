const express = require('express');
const Workout = require('../models/workoutModel');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'Get all workouts' });
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({ msg: 'Get single workout' });
});

// POST new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }

  res.json({ msg: 'Post a new workout' });
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete a workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ msg: 'Update a workout' });
});
module.exports = router;
