const Workout = require("../models/workoutModel");
const router = require('express').Router()

//Find all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

//create a new workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Find an existing workout and update by adding another exercise

router.put("/api/workouts/:id", (req, res) => {
    let exerciseID = req.params.id;
    Workout.findOneAndUpdate(
        {
            _id: exerciseID,
        },
        {
            $push: {
                exercises: req.body,
            },
        },
        {
            new: true,
        }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router