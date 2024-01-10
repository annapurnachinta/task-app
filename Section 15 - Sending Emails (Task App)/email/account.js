const nodemailer = require('../node_modules/nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'annapurnachinta1234@gmail.com',
      pass: 'rxglneigyuqccxss'
    }
  });
  
  var mailOptions = {
    from: 'annapurnachinta1234@gmail.com',
    to: 'annapurnachinta23@gmail.com',
    subject: 'Node.js',
    text: 'first email from Nodejs'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });