const nodemailer = require("nodemailer");

const send = async({correo, subject = "Gracias por registrarte a petshop", html}) => {
    try {
        const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false,
        }
        });
        const info = {
            to: correo,
            subject: subject,
            html: html
        };
        const {messageId} = await transporter.sendMail(info);
        console.log(messageId);
        return messageId;
    } catch (error) {
        console.log(error);
    };
};

module.exports = {send};