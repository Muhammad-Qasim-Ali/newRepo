const express = require('express');
const app = express();
const saveRoute = require("./routes/saveroute");
const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');

env.config();

const corsAllow = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});

app.use(cors(corsAllow));

app.use(express.json());
app.use("/api/save", saveRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});