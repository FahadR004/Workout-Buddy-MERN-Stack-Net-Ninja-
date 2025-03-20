const express = require("express");
const router = express.Router(); // We use router since we can't use app.get, app.delete here because we don't have access to app here.
const {createWorkout, getWorkouts, getWorkoutById, updateWorkout, deleteWorkout} = require("..//controller/workoutController")

// GET request
router.get('/', getWorkouts);

// GET a single request
router.get('/:id', getWorkoutById);

// POST request
router.post('/', createWorkout)

// DELETE request 
router.delete('/:id', deleteWorkout);

// PUT request. router.patch can also be used.
router.patch('/:id', updateWorkout);

module.exports = router;