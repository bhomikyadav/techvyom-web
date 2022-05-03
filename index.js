const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const app = express();
const Event = require("./models/Events");
const Numberofstudent = require("./models/Numberofstudent");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
require("./mongodb")();
app.use(express.json()); //this middleware used to get req.body
app.use(cors());

// check
app.use("/user", require("./routers/LoginNsighup"));
// check
app.use("/otp", require("./routers/otpverification"));
//check
app.use("/add", require("./routers/Registration"));
// check
app.use("/group", require("./routers/groupregisteration"));
// ADMIN
app.use("/info", require("./routers/Infouser"));
app.use("/forgot", require("./routers/Forgot"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`server in runing :${port}`);
});

// // -----------------------------------------------------
