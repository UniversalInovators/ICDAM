const express = require("express");
const Router = express.Router();

const HomeControl = require("../controllers/Home.controller");

Router.get("/", HomeControl.getHome);
Router.get("/about", HomeControl.getAbout);
Router.get("/papers", HomeControl.getPapers);
Router.get("/special-sessions", HomeControl.getSessions);
Router.get("/registrations", HomeControl.getRegistration);
Router.get("/sponsorship", HomeControl.getSponsorship);
Router.get("/publication", HomeControl.getPublication);
Router.get("/committe", HomeControl.getCommitte);
Router.get("/conference-venue", HomeControl.getVenue);
Router.get("/downloads", HomeControl.getDownloads);
Router.get("/previous-conference", HomeControl.getPreviousConference);
Router.get("/visit",HomeControl.getvisit);
Router.get("/international-awards",HomeControl.getUILA);
// Router.get("/success",HomeControl.getSuccess);

// admin routes
Router.get("/admin", HomeControl.getadmin);
Router.get("/admin/committee", HomeControl.getsteeradmincomm);
Router.get("/admin/getAllData", HomeControl.getAllData);

// Post Routes
Router.post(
  "/admin/papers/call-for-paper",
  HomeControl.postPapersCallForPapers
);
Router.post(
  "/admin/committe/steering-committee",
  HomeControl.postSteeringCommitteeMembers
);
Router.post(
  "/admin/committe/advisory-committee",
  HomeControl.postAdvisoryCommitteeMembers
);
Router.post(
  "/admin/committe/technical-program-committee",
  HomeControl.postTechinicalCommitteeMembers
);
Router.post(
  "/admin/committe/european-technical-committee",
  HomeControl.postEuropeanCommitteeMembers
);

module.exports = Router;
