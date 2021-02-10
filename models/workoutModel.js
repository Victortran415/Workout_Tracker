const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	exercises: [
		{
			name: {
				type: String,
				trim: true,
			},
			type: {
				type: String,
				trim: true,
			},
			weight: {
				type: Number,
			},
			sets: {
				type: Number,
			},
			reps: {
				type: Number,
			},
			distance: {
				type: Number,
			},
			duration: {
				type: Number,
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;
