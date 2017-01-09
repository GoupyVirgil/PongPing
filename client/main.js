import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

import './main.html';



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

