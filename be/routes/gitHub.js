const express = require("express");
const gitHub = express.Router();
const strategy = require("passport-github2").Strategy;
const passport = require("passport");
require("dotenv").config();
const session = require("express-session");
const jwt = require("jsonwebtoken");

gitHub.use(
  session({
    secret: "nonsosemispiego",
    resave: false,
    saveUninitialized: false,
  })
);

gitHub.use(passport.initialize());
gitHub.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    }
  )
);

gitHub.get(
  "/auth/gitHub",
  passport.authenticate("github", { scope: ["user:email"] })
);

gitHub.get(
  "/auth/gitHub/callback",
  passport.authenticate("github", { failureRedirect: "/home" }),
  (request, response) => {
    const user = request.user;
    const token = jwt.sign(user, process.env.SECRET_KEY);
    const redirectUrl = `http://localhost:3000/success?token=${token}`;
    response.redirect(redirectUrl);
  }
);

gitHub.get("/success", (request, response) => {
  response.redirect("/home");
});

module.exports = gitHub;

//Pagina per potersi collegare e fare il login con GitHub. Il bottone per accedervi lo troviamo nella pag.
//FE di LoginForm
