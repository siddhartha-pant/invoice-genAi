import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = 4000;
//Middlewares
//DB
//Routes
app.get("/", (req, res) => {
  res.send("API is working");
});
app.listen(port, () => {
  console.log(`Server started at http://localhost${port}`);
});
