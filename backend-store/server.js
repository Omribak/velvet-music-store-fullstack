const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({ path: './config.env' });

const DB = process.env.DB_CON.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB, {}).then(() => {
  console.log('DB connection successful..!');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
