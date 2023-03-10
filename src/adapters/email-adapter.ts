import nodemailer from "nodemailer";
export const emailAdapter = {
  async sendEmail(email: string, subject: string, message: string) {
    // create reusable transporter object using the default SMTP transport

    let transporter = await nodemailer.createTransport({
      service: "gmail",
      // host: "smtp.gmail.com",
      // port: 465,
      // secure: true,
      auth: {
        user:"alex.crane.0599@gmail.com",
        pass:"xzfcnxgxicdmqhdq"
      }
    });

    const mailOptions = {
      from: "IT-Inc admin <alex.crane.0599@gmail.com>", // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      html: message,
    }

    // send mail with defined transport object
    await transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(`E-mail sent: ${info.response}`)
      }
    });
    return
  },
};