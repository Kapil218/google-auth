import passport from "../services/passportService.js";
import express from "express";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
  }),
  async (req, res) => {
    try {
      console.log("success", req.user);
      res.redirect(`http://localhost:5000/api/v1/employees`);
    } catch (err) {
      console.log("catch of google auth", err);
    }
  }
);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
  }),
  async (req, res) => {
    try {
      console.log("GitHub Auth Success", req.user);
      res.redirect(`http://localhost:5000/api/v1/employees`);
    } catch (err) {
      console.log("GitHub Auth Error", err);
    }
  }
);
export default router;
