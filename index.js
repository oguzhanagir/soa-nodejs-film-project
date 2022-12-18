const express = require("express");
require("dotenv").config();


const sequelize = require("./db/config")
const app = express();

const AllRoutes = require("./routes/index");
const port = process.env.APP_PORT || 3000;
app.use(express.json());
//sequelize.sync({ force: true });


app.set('view engine','ejs');

 app.use('*/css',express.static('assets/css'));
 app.use('*/js',express.static('assets/js'));
 app.use('*/img',express.static('assets/img'));
 app.use('*/fonts',express.static('assets/fonts'));

 app.use('/',AllRoutes.pageRouter);

// app.get("/",(req,res) =>{
//     res.render('../views/index');
// });
// app.get("/celebrities",(req,res) =>{
//     res.render('../views/celebrities');
// });
// app.get("/blog",(req,res) =>{
//     res.render('../views/blog');
// });
// app.get("/blog-details",(req,res) =>{
//     res.render('../views/blog-details');
// });
// app.get("/movie-details",(req,res) =>{
//     res.render('../views/movie-details');
// });
// app.get("/movies",(req,res) =>{
//     res.render('../views/movies');
// });
// app.get("/top-movies",(req,res) =>{
//     res.render('../views/top-movies');
// });
// app.get("/login",(req,res) =>{
//     res.render('../views/login');
// });






app.listen(port, async() =>{
    console.log(`port calisiyor: ${port}`);
});


app.use("/api", AllRoutes.categoryRouter);

