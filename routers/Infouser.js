const router = require("express").Router();
const Jio = require("joi");
const Praticipation = require("../models/Participatin");
const Student = require("../models/Student");

// post(name,email,rollnumber,Phonenumber)
router.post("/single", async (req, res) => {
  const validatadta = Jio.object({
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
    const single_user = await Praticipation.find({ Pid });
    return res.send({
      status: "true",
      data: single_user,
    });
  } catch {
    return res.send({
      status: "false",
      msg: "internal server error",
    });
  }
});

// ------------------------------------------
router.post("/login", async (req, res) => {
  const validatadta = Jio.object({
    rollnumber: Jio.string().required(),
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
      return res
        .status(401)
        .send({ status: false, msg: "please register first" });
    }
    if (student_exits.Pid != req.body.Pid) {
      return res.status(401).send({ status: false, msg: "wrong Pid" });
    }
    return res.send({
      status: true,
      msg: "login successfully",
      name: student_exits.name,
      number: student_exits.Phonenumber,
      rollnumber: student_exits.rollnumber,
      verified: student_exits.verified,
      email: student_exits.email,
      Pid: student_exits.Pid,
    });
  } catch (error) {
    return res.send({ status: false, msg: "internal server error" });
  }
});

module.exports = router;
