var schedule = require('node-schedule');
var User = require('../db/schema/user');
var Consulting = require('../db/schema/consulting');
var moment = require('moment');

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  requireTLS: true,
  secure: true,
  auth: {
    user: 'mejortesteemail@gmail.com',
    pass: 'm3jort3st'
  }
});

function send_email_notice() {
  var j = schedule.scheduleJob('*/2 7-17 1-30 12 5', () => {
    var _24HrsAfter = moment().add(1, 'd');

    Consulting.find({
        date: {
          $gte: _24HrsAfter.subtract(1, 'm').toDate(),
          $lt: _24HrsAfter.add(1, 'm').toDate()
        }
      })
      .populate('user')
      .exec((err, consultings) => {
        if (err) console.log(err);
        for (var i = 0, len = consultings.length; i < len; i++) {
          sendEmail(consultings[i].user.email, consultings[i].user.username);
        };
      });
  });
}

function sendEmail(emailTo, username) {
  if (emailTo) {
    var mailOptions = {
      to: emailTo, // list of receivers
      subject: 'Happy Birthday', // Subject line
      text: `Hello ${username}, you hava consulting in 24 hours`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Message sent: ' + info.response);
      }
    });
  }
}

module.exports.init = send_email_notice;
