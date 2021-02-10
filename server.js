const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();


//PORT
const PORT = process.env.PORT || 8080;



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//ROUTES
const router = require("./routes/apiRoutes")
app.use(router)
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
	console.log(`Running on port http://localhost:${PORT}`);
});
