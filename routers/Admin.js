const router = require("express").Router();
const Event = require("../models/Events");
const sendcustomMail = require("../controllers/sendmail");
const Praticipation = require("../models/Participatin");
const Eventgroup = require("../models/Eventgroup");
router.get("/eventcode/:Ecode", async (req, res) => {
  let Data = "";
  const { Ecode } = req.params;
  const Find_Event = await Event.findOne({
    EventCode: Ecode,
  });
  if (!Find_Event) {
    return res.send({
      msg: "wrong Event code",
    });
  }
  if (Find_Event.Grouped) {
    Data = `Sno. name rollnumber Pid tid \n`;
    const DBDATA_gup = await Eventgroup.find({
      eventname: Find_Event.Eventname,
    });
    DBDATA_gup.map((value, index) => {
      Data =
        Data +
        `${index} ${value.name} ${value.rollnumber} ${value.Pid} ${value.tid} \n`;
    });
  } else {
    Data = `Sno. name rollnumber Pid \n`;
    const DBDATA_par = await Praticipation.find({
      Eventname: Find_Event.Eventname,
    });
    DBDATA_par.map((value, index) => {
      Data =
        Data + `${index} ${value.name} ${value.rollnumber} ${value.Pid} \n`;
    });
  }
  // const checkmail = sendcustomMail(
  //   "tyro.srms@gmail.com",
  //   `data for event ${Find_Event.Eventname}`,
  //   Data,
  //   Data
  // );
  console.log(Data);
  // if (checkmail) {
  return res.send({
    msg: "ok",
  });
  // } else {
  //   return res.send({ msg: "internal server error" });
  // }
});

//parul 
module.exports = router;
