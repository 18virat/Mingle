// const nodemailer = require("nodemailer");
// const dotenv=require('dotenv');
// dotenv.config();

// const mailSender = async (email, title, body) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//       secure: false,
//     });

//     let info = await transporter.sendMail({
//       from: `"Mingle" <${process.env.MAIL_USER}>`, // sender address
//       to: `${email}`, // recipient
//       subject: `${title}`, // Subject
//       html: `${body}`, // HTML content
//     });

//     // console.log(info.response);
//     return info;
//   } catch (error) {
//     // console.log(error.message);
//     return error.message;
//   }
// };

// // ✅ Correct export
// module.exports = mailSender;

const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,          // standard TLS port
      secure: false,      // true only for port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Mingle" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    return info; // ✅ MUST RETURN
  } catch (error) {
    console.error("Mail sending failed:", error);
    throw error; // ✅ THROW, DON'T RETURN STRING
  }
};

module.exports = mailSender;
