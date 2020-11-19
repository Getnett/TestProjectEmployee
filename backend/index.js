import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import employeesRouter from "./routes/employees.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/employees", employeesRouter);

// database connection
// const CONNECTION_DB_URL =
//   "mongodb+srv://getnet_mongodb:13danfik@cluster0.rclbf.mongodb.net/employees_db?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;
// process.env.CONNECTION_URL
mongoose
  .connect(process.env.CONNECTION_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port 4000"))
  )
  .catch((error) => {
    console.log(error);
  });
mongoose.set("useFindAndModify", false);
