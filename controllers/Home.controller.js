const callForPaperModel = require("../models/callForPaper.model");
const steerCommMemModel = require("../models/steercommsmem.model");
const advCommMemModel = require("../models/advisorycommmem.model");
const techCommMemModel = require("../models/technicalprogramcommmem.model");
const euroCommMemModel = require("../models/eurotechboard.model");

module.exports = {
  getHome: (req, res, next) => {
    const attemptedRequest = req.query.attemptedRequest || null;
    res.render("index", { attemptedRequest: attemptedRequest });
  },

  getAbout: (req, res, next) => {
    res.render("about");
  },

  getPapers: async (req, res, next) => {
    const cfp_list = await callForPaperModel.find({});
    res.render("papers", { cfpList: cfp_list });
  },

  getSessions: (req, res, next) => {
    res.render("spl_session");
  },

  getRegistration: (req, res, next) => {
    res.render("registration", {
      strtpePublicKey: process.env.STRIPE_PUBLIC_KEY
    });
  },

  getSponsorship: (req, res, next) => {
    res.render("sponsorship");
  },

  getPublication: (req, res, next) => {
    res.render("publication");
  },

  getCommitte: async (req, res, next) => {
    const sMemList = await steerCommMemModel.find({}).sort({ $natural: 1 });
    const aMemList = await advCommMemModel.find({}).sort({ $natural: 1 });
    const tMemList = await techCommMemModel.find({}).sort({ $natural: 1 });
    const eMemList = await euroCommMemModel.find({}).sort({ $natural: 1 });

    res.render("committe", {
      steerMemList: sMemList,
      advMemList: aMemList,
      techMemList: tMemList,
      euroMemList: eMemList,
    });
  },

  getVenue: (req, res, next) => {
    res.render("venue");
  },

  getDownloads: (req, res, next) => {
    res.render("downloads");
  },

  getPreviousConference: (req, res, next) => {
    res.render("prev_conf");
  },
  getUILA:(req,res,next)=>{
    res.render("uila");
  },
  // getSuccess: (req,res,next)=>{
  //   res.send("Successful payment")
  // },

  getadmin: (req, res, next) => {
    res.render("adminroutes");
  },

  getsteeradmincomm: async (req, res, next) => {
    res.render("admin_committe");
  },
  getvisit:async (req,res,next)=>{
    res.render("visit")
  },

  getAllData: async (req, res, next) => {
    const sMemList = await steerCommMemModel.find({}).sort({ $natural: 1 });
    const aMemList = await advCommMemModel.find({}).sort({ $natural: 1 });
    const tMemList = await techCommMemModel.find({}).sort({ $natural: 1 });
    const eMemList = await euroCommMemModel.find({}).sort({ $natural: 1 });

    res.json({
      sMemList,
      aMemList,
      tMemList,
      eMemList
    })
  },

  // Post Routes

  postPapersCallForPapers: (req, res, next) => {
    const paperSubHeading = req.body;
    callForPaperModel.create(paperSubHeading, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },

  postSteeringCommitteeMembers: async (req, res, next) => {
    try {
      const SterrMember = req.body;
      if (Object.values(req.body) == undefined || Object.values(req.body) == null) {
        return res.status(500).json({ msg: 'Body is Empty. Check your request' });
      }

      steerCommMemModel.create(SterrMember, (err, data) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.status(201).send(data);
        }
      });
    } catch (error) {
      res.status(500).json({ msg: 'Some Unkown Error Occured' })
    }
  },

  postAdvisoryCommitteeMembers: (req, res, next) => {
    const AdvMember = req.body;
    advCommMemModel.create(AdvMember, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },

  postTechinicalCommitteeMembers: (req, res, next) => {
    const TechMember = req.body;
    techCommMemModel.create(TechMember, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },

  postEuropeanCommitteeMembers: (req, res, next) => {
    const EuroMember = req.body;
    euroCommMemModel.create(EuroMember, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },
};
