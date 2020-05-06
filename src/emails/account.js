const sgMail = require('@sendgrid/mail')
const sendgridApiKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridApiKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'misak.svobo@gmail.com',
        subject: 'My first email',
        text: `AHOJ VITEJ ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'misak.svobo@gmail.com',
        subject: 'Cancel email',
        text: `CANCEL ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}