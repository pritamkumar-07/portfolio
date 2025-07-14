// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static("public"));

// app.post("/send", async (req, res) => {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "kumarpritam2431@gmail.com", // <-- your Gmail
//       pass: "ztwu quxq clne ucgu",   // <-- 16-digit app password
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "yourgmail@gmail.com",
//     subject: New Contact from ${name},
//     text: Name: ${name}\nEmail: ${email}\nMessage: ${message},
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: "Email sent!" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: "Failed to send email." });
//   }
// });

// app.listen(PORT, () => {
//   console.log(Server running on http://localhost:${PORT});
// });
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kumarpritam2431@gmail.com", // your Gmail
      pass: "ztwu quxq clne ucgu", // your 16-digit Gmail App Password
    },
  });


  const mailOptions = {
    from: email,
    to: "kumarpritam2431@gmail.com", // receiver email
    subject: `New Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  });