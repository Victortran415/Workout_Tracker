const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")


//PORT
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

//ROUTES
app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/htmlRoutes.js'))


app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`)
})