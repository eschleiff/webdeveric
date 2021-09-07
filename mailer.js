const nodemailer = require('nodemailer');
require('dotenv').config({ path: 'variables.env'})

exports.send = async function main(userInfo) {

    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    let info = await transporter.sendMail({
        from: `'${userInfo.firstName}' <${userInfo.email}>`,
        to: 'ericschleiff@gmail.com',
        subject: 'Web Dev Eric Message',
        text: `${userInfo.message}`,
        html: `<h1>${userInfo.message}</h1>`,
    });
};