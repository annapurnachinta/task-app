const nodemailer = require('../node_modules/nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'annapurnachinta1234@gmail.com',
      pass: 'rxglneigyuqccxss'
    }
  });

  function sendWelcomeEmail(email, name) {
    transporter.sendMail({
        from: 'Task Manager API <annapurnachinta1234@gmail.com>',
        to: email,
        subject: 'Thanks for joining!',
        text: `Welcome to Task manager, ${name}!`,
        html: `<b>Welcome to Task manager, ${name}!</b>`
    })
}

function sendDeleteEmail(email, name) {
    transporter.sendMail({
      from: 'Task Manager API <annapurnachinta1234@gmail.com>',
      to: email,
      subject: 'We\'re sorry to see you leave',
      text: `We hope to see you back again someday, ${name}!`,
      html: `<b>We hope to see you back again someday, ${name}!</b>`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail
}