const express = require("express");
const dotenv = require("dotenv");
// const path = require("path");
const cors = require("cors");
const app = express();
const Event = require("./models/Events");
const Numberofstudent = require("./models/Numberofstudent");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
require("./mongodb")();
app.use(express.json()); //this middleware used to get req.body
app.use(cors());
app.use(express.static("client/build"));
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// check
app.use("/user", require("./routers/LoginNsighup"));
// check
app.use("/otp", require("./routers/otpverification"));
//check
app.use("/add", require("./routers/Registration"));
// check
app.use("/group", require("./routers/groupregisteration"));
// ADMIN
app.use("/admin", require("./routers/Admin"));

app.listen(port, () => {
  console.log(`server in runing :${port}`);
});

// // -----------------------------------------------------
