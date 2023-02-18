const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
   let testAccount = await nodemailer.createTestAccount();

   const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
         user: 'mya.torp76@ethereal.email',
         pass: '56CdhgKSrhWajRRcxM',
      },
   });

   let info = transporter.sendMail({
      from: '"Turbolet" <turbolet@gmail.com>',
      to: 'bar@example.com',
      subject: 'Hello',
      html: '<h2>Sending emails with nodejs</h2>',
   });

   res.json({ info });
};
const sendEmail = async (req, res) => {
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   const msg = {
      to: 'pollysol908@gmail.com', // Change to your recipient
      from: 'anastasiia908@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
   };

   const info = await sgMail.send(msg);
   res.json(info);
};

module.exports = sendEmail;
