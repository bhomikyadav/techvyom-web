const router = require("express").Router();
const Jio = require("joi");
const Student = require("../models/Student");
const Numberofstudent = require("../models/Numberofstudent");

// post(name,email,rollnumber,Phonenumber)
router.post("/create", async (req, res) => {
  // body Error validation
  const productdata = Jio.object({
    name: Jio.string().required(),
    email: Jio.string().required(),
    rollnumber: Jio.string().required(),
    Phonenumber: Jio.string().required(),
  });
  const { error } = productdata.validate(req.body);
  if (error) {
    return res.send({
      status: false,
      msg: "invalid credentials 1",
    });
  }
  try {
    // checking if user allready registered
    const student_exits = await Student.exists({
      $or: [{ rollnumber: req.body.rollnumber }, { email: req.body.email }],
    });
    if (student_exits) {
      return res.status(401).send({
        status: false,
        msg: "student allready registered",
      });
    }
    // get Pid from Numberofstudent model
    const numOfStu = await Numberofstudent.findOne({
      name: "admin",
    });
    // creating new data for user

    const Pid = `22${numOfStu.numberofstudent + 1}`;
    let newuser_data = {
      Phonenumber: req.body.Phonenumber,
      email: req.body.email,
      name: req.body.name,
      rollnumber: req.body.rollnumber,
      Pid,
    };

    // create new user
    const new_User_result = await Student.create(newuser_data);
    if (!new_User_result) {
      res.send({ status: false, msg: "internal server error222" });
    }

    //  update Numberofstudent model
    await Numberofstudent.updateOne(
      {
        name: "admin",
      },
      {
        numberofstudent: numOfStu.numberofstudent + 1,
      }
    );

    // send data to client
    res.send({
      status: true,
      mas: "registered",
      data: {
        name: new_User_result.name,
        rollnumber: new_User_result.rollnumber,
        verified: new_User_result.verified,
        Pid,
      },
    });
  } catch (error) {
    res.send({
      status: false,
      msg: "internal server error1",
    });
    console.log(error);
  }
});

// ------------------------------------------
router.get("/login", async (req, res) => {
  const validatadta = Jio.object({
    rollnumber: Jio.string().required(),
    Pid: Jio.string().required(),
  });

  const { error } = validatadta.validate(req.body);
  if (error) {
    console.error(error);
    return res.send({
      status: false,
      msg: "invalid credentials 1",
    });
  }
  try {
    const student_exits = await Student.findOne({
      rollnumber: req.body.rollnumber,
    });
    if (!student_exits) {
      res.status(401).send({ status: false, msg: "please register first" });
    }
    if (student_exits.Pid != req.body.Pid) {
      res.status(401).send({ status: false, msg: "wrong Pid" });
    }
    res.send({
      status: true,
      name: student_exits.name,
      rollnumber: student_exits.rollnumber,
      verified: student_exits.verified,
      email: student_exits.email,
      Pid: student_exits.Pid,
    });
  } catch (error) {
    res.send({ status: false, msg: "internal server error" });
  }
});

module.exports = router;
