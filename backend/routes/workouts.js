const express = require('express');

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
router.post('/', (req, res) => {
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