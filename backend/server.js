const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const DB = require("./config/db");
DB();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoute"));
app.use(errorHandler);
app.listen(port, () => console.log(`listen!! server started on ${port}`));
