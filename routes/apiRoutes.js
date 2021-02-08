const Workout = require("../models/workoutModel")

module.exports = (app) => {
    
    app.get('/api/workout', (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    })



}