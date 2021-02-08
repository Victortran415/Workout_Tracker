const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	exercises: [
		{
			name: {
				type: String,
				trim: true,
				require: "Enter the exercise you are doing",
			},
			type: {
				type: String,
				trim: true,
				require: "Enter what type of exercise you are doing",
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

module.exports = Workout