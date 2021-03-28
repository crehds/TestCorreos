const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { config } = require('../config');

router.get('/', (req, res) => {
  // const body = req.body;
  console.log('aqui');
  res.status(200).json({
    message: 'todo bien en el servidor',
  });
});

router.post('/', (req, res) => {
  console.log(config);
  console.log(process.env.USER);
  console.log(process.env.PASSWORD);
  const { email, asunto, mensaje } = req.body;
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Email enviado desde React</h3>
      <ul>
        <li>Email: ${email} </li>
        <li>Asunto: ${asunto} </li>
      </ul>
      <h3>Mensaje</h3>
      <p>${mensaje}</p>
      `;
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: config.user,
        pass: config.password,
      },
    });
    let mailOptions = {
      from: 'carlos15erh@gmail.com',
      to: req.body.email,
      replyTo: 'carlos15erh@gmail.com',
      subject: req.body.asunto,
      html: htmlEmail,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log('Mensaje enviado: %s', info.mensaje);
      console.log('Url del mensaje: %s', nodemailer.getTestMessageUrl(info));
    });
  });
  res.status(200).json({
    data: req.body,
    message: 'todo bien en el servidor',
  });
});

module.exports = router;
