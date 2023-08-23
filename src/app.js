import "dotenv/config.js";
import express from "express";
import cors from "cors";
import "./config/database.js"
import indexRouter from "./router/index.router.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.listen(process.env.PORT, () => {
    console.log('Server up! PORT :'+ process.env.PORT);   
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.use('/api', indexRouter)
app.use(notFoundHandler)
app.use(errorHandler)