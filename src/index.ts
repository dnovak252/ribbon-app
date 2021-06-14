import express from 'express';
import router from './api/routes/index';
require('dotenv').config();

const app = express();
const PORT = 8000;

// za slike
// app.use("uploads", express.static(""))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});