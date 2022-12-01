const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const http =  require("http")
const router =  require("./routes/index.js")
const seeders =  require("./seeders/admin.js") 
dotenv.config();

//express code
const app = express();
app.use(express.json());

//connect router
app.use('/v1', router);

//mongodb connnection code
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database connected successfully"))
  seeders()
  .catch(console.log);

//create a server code
const server =  http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});