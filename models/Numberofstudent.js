const mongoose = require("mongoose");
const NumberofstudentSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "admin",
  },
  numberofstudent: {
    type: Number,
    default: 0,
  },
});

const Numberofstudent = mongoose.model(
  "Numberofstudent",
  NumberofstudentSchema
);
module.exports = Numberofstudent;
