const express = require("express");
require("dotenv").config();
const { initCors } = require("./helpers/Cors/cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");


const AllRoutes = require("./routes/routes");
const sequelize = require("./db/config");



initCors(app);
app.use(express.json());


//swagger-docs
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.get("/", (req, res) => {
	res.send("Server is running.");
});


app.use("/api", AllRoutes.addressRouter);


const port = process.env.APP_PORT || 3000;
app.listen(port, async () => {
	console.log(`Server Running on Port: ${port}`);
});