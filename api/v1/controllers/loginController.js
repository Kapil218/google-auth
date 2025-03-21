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

export default router;
