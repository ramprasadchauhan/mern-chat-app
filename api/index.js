import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5100;

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
