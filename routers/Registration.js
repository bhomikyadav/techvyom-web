const router = require("express").Router();
const Jio = require("joi");
const CheckVerification = require("../controllers/checkVerification");
const Praticipation = require("../models/Participatin");
const Event = require("../models/Events");
const sendcustomMail = require("../controllers/sendmail");
const Student = require("../models/Student");
router.post("/event", CheckVerification, async (req, res) => {
  const verificationBody = Jio.object({
    name: Jio.string().required(),
    email: Jio.string().required(),
    eventname: Jio.string().required(),
    rollnumber: Jio.string().required(),
    Pid: Jio.string().required(),
    verified: Jio.boolean().required(),
  });
  const { error } = verificationBody.validate(req.body);
  if (error) {
    console.log(error);
    return res.send({
      status: false,
      msg: "please send email ",
    });
  }
  // =======
  try {
    const { name, rollnumber, eventname, Pid } = req.body;
    const find_event = await Event.findOne({ Eventname: eventname });
    console.log(find_event);
    if (!find_event) {
      res.send({
        status: false,
        msg: " invalid  event",
      });
    }

    const allreadyexits = await Praticipation.exists({
      $and: [{ Pid }, { Eventname: eventname }],
    });
    if (allreadyexits) {
      res.send({
        status: false,
        msg: "u allready registered",
      });
    }
    const Check_student = await Student.findOne({ rollnumber });
    if (!Check_student) {
      res.send({
        status: false,
        msg: "registered first",
      });
    }

    const newparticipation = await Praticipation.create({
      name,
      rollnumber,
      Eventname: eventname,
      Pid: Check_student.Pid,
    });
    if (!newparticipation) {
      res.send({
        status: false,
        msg: "internl error ",
      });
    }
    // 1. student ok
    // 2. mentor
    // 3.srmstechvyom email
    // 4. vanshika (optional)
    const { email } = req.body;
    // 1. student ok
    const Send_EmailTO_Student = sendcustomMail(
      email,
      "checking",
      "checking mail",
      "checking mail"
    );

    if (!return_mail) {
      res.send({
        status: false,
        msg: "internal error 009",
      });
    }
    await Event.updateOne(
      { Eventname: eventname },
      {
        Numberparticipation: find_event.Numberparticipation + 1,
      }
    );
    res.send({
      status: true,
      msg: "registered",
      pid: newparticipation.pid,
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
