import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { connectdb } from "./db/index.js";
import { userRouter } from "./routes/user.route.js";
import { hospitalRouter } from "./routes/hospital.route.js";
import { doctorRouter } from "./routes/doctor.route.js";

//middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

connectdb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//api endpoints
app.use("/api/user", userRouter);
app.use("/api/hospital", hospitalRouter)
app.use("/uploads", express.static("uploads"));
app.use("/api/doctor", doctorRouter)

app.listen(process.env.PORT, () => {
  console.log(`✨ Server is running on port ${process.env.PORT}. ✨`);
});
