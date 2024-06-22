const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const userRoutes = require("./config/routes/userRoutes");
const cors = require("cors");

dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server runnning on port ${PORT}`);
});
