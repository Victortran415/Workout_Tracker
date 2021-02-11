const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
const router = require("./routes/apiRoutes.js");

//PORT
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
	console.log(`Running on port http://localhost:${PORT}`);
});
