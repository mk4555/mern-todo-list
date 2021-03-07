import "./loadEnv.js";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import listRoutes from "./routes/List.js";

const app = express();
connectDB();
const port = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/lists", listRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
