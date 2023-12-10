const nodemailer = require("nodemailer");

module.exports = ({ email, subject, message }) => {
  // Create a transporter using your SMTP details
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: appConfig.app.emailId, // Replace with your email
      pass: appConfig.app.emailPassword, // Replace with your password or use environment variables
    },
  });

  // Email content
  let mailOptions = {
    from: appConfig.app.emailId, // Sender address
    to: email, // Receiver address
    subject: subject, // Subject line
    text: message, // Plain text body
  };

  // Sending the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error occurred: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
