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
        from: `'Web Dev Eric' <${process.env.EMAIL}>`,
        to: `${process.env.EMAIL}`,
        subject: 'Web Dev Eric Message',
        text: `${userInfo.message}`,
        html: `
            <h1>You've got a message from...</h1>
            <h3>${userInfo.firstName}, ${userInfo.email}</h3>
            <h4>${userInfo.message}</h4>
        `,
    });
};