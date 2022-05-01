const router = require("express").Router();
const Jio = require("joi");
const Student = require("../models/Student");
const Eventgroup = require("../models/Eventgroup");
const CheckVerification = require("../controllers/checkVerification");
const Events = require("../models/Events");
router.post("/create", CheckVerification, async (req, res) => {
  const verificationBody = Jio.object({
    name: Jio.string().required(),
    email: Jio.string().required(),
    eventname: Jio.string().required(),
    rollnumber: Jio.string().required(),
    Pid: Jio.number().required(),
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
  try {
    const { name, rollnumber, eventname, Pid } = req.body;
    const event_entered = await Events.findOne({ Eventname: eventname });
    if (!event_entered) {
      return res.send({
        status: false,
        msg: "invalid event",
      });
    }
    const allreadyexits = await Eventgroup.exists({
      $and: [{ Pid }, { eventname }],
    });
    if (allreadyexits) {
      return res.send({
        status: false,
        msg: "u allready registered",
      });
    }
    const tid = `22${event_entered.EventCode}${
      event_entered.Numberparticipation + 1
    }`;
    const newEvent = await Eventgroup.create({
      rollnumber,
      name,
      Pid,
      eventname,
      tid,
    });
    if (!newEvent) {
      return res.send({
        status: false,
        msg: "internal error",
      });
    }
    const update_NOparticipate = await Events.updateOne(
      { Eventname: eventname },
      {
        Numberparticipation: event_entered.Numberparticipation + 1,
      }
    );
    console.log(update_NOparticipate);
    if (!update_NOparticipate) {
      return res.send({
        status: false,
        msg: "internal error",
      });
    }
    return res.send({
      status: true,
      msg: "registered",
      tid,
    });
  } catch (error) {
    return res.send({
      status: false,
      msg: "internal server error",
    });
  }
});

// --------------
router.post("/addme", CheckVerification, async (req, res) => {
  const verificationBody = Jio.object({
    name: Jio.string().required(),
    email: Jio.string().required(),
    eventname: Jio.string().required(),
    rollnumber: Jio.string().required(),
    tid: Jio.number().required(),
    Pid: Jio.number().required(),
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
  try {
    const { email, name, eventname, rollnumber, tid, Pid } = req.body;
    const event_entered = await Events.findOne({ Eventname: eventname });
    if (!event_entered) {
      return res.send({
        status: false,
        msg: "invalid event",
      });
    }
    const allreadyexits = await Eventgroup.exists({
      $and: [{ rollnumber }, { eventname }],
    });
    if (allreadyexits) {
      return res.send({
        status: false,
        msg: "u allready registered",
      });
    }
    const find_group = await Eventgroup.find({ tid });
    if (!find_group[0]) {
      return res.send({
        status: false,
        msg: "invalid tid or create new group",
      });
    }

    if (find_group.length > event_entered.Maxparticipation) {
      return res.send({
        status: false,
        msg: "group limit is full",
      });
    }

    const newEvent = await Eventgroup.create({
      name,
      rollnumber,
      eventname,
      Pid,
      tid,
    });
    if (!newEvent) {
      return res.send({
        status: false,
        msg: "internal error",
      });
    }

    return res.send({
      status: true,
      msg: "registered",
      yourteam: find_group,
    });
  } catch (error) {
    console.log("1" + error);
    return res.send({
      status: false,
      msg: "internal error",
    });
  }
});

module.exports = router;
