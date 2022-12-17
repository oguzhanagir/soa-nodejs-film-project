const express = require("express");
require("dotenv").config();
const sequelize = require("./db/config")
const app = express();

const AllRoutes = require("./routes/index");

app.use(express.json());
//sequelize.sync({ force: true });



app.get("/", (req, res) => {
	res.send("Server is running.");
});


app.use("/api", AllRoutes.categoryRouter);
app.use("/api", AllRoutes.authRouter);
app.use("/api", AllRoutes.commentRouter);
app.use("/api", AllRoutes.filmRouter);


const port = process.env.APP_PORT || 3000;
app.listen(port, async () => {
	console.log(`Server Running on Port: ${port}`);
});