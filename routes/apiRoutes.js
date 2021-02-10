const Workout = require("../models/workout");

module.exports = (app) => {
	//Find all workouts
	app.get("/api/workouts", (req, res) => {
		Workout.find({});
		Workout.aggregate([
			{
				$addFields: {
					totalDuration: {
						$sum: "$exercises.duration",
					},
				},
			},
		])
			.sort({ date: -1 })
			.then((dbWorkout) => {
				res.json(dbWorkout);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});

	// Create a new workout
	app.post("/api/workouts", (req, res) => {
		Workout.create(req.body)
			.then((dbWorkout) => {
				res.json(dbWorkout);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});

	// Find an existing workout and update by adding another exercise
	app.put("/api/workouts/:id", (req, res) => {
		Workout.findOneAndUpdate(
			{ _id: req.params.id },
			{ $push: { exercises: req.body } },
			{ new: true }
		)
			.then((dbWorkout) => {
				res.json(dbWorkout);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});

	// Range of a workout from the last 7 days
	app.get("/api/workouts/range", (req, res) => {
		Workout.find({});
		Workout.aggregate([
			{
				$addFields: {
					totalDuration: {
						$sum: "$exercises.duration",
					},
				},
			},
		])
			.sort({ day: -1 })
			.limit(7)
			.sort({ day: 1 })
			.then((dbWorkout) => {
				console.log(dbWorkout);
				res.json(dbWorkout);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
};
