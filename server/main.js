import { Meteor } from 'meteor/meteor';
// var nodemail = require('nodemailer');
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport'

var smtpConfig = {
    host: 'Gmail',
    port : 465,
    secure: true,
    auth: {
        user: 'tototest321@gmail.com',
        pass: 'Azerty@1'
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
    from: 'tototest321@gmail.com',
    to: 'quentin.ruy@gmail.com',
    subject: 'yo',
    text: 'Yo niggae',
    html: '<p>Yo niggae</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }
    else {
	    console.log('Message sent: ' + info.response);
	}
});

Meteor.startup(() => {
    // code to run on server at startup
});


// USE IT WHEN YOU WANT TO DELETE ALL THE USERS
// Meteor.users.remove({});