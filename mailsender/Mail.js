const nodemailer = require('nodemailer');

const mailsender = async (email) => {
    // Create a transporter object using SMTP transport
    console.log("email for sending", email);
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        // port: 587,
        auth: {
            user: 'ms569624@gmail.com', // Your email address
            pass: 'ctwdkajjeczwgvma' // Your email password
        }
    });

    // Define email options
    let mailOptions = {
        from: 'ms569624@gmail.com', // Sender email address
        to: 'manish.frontenddeveloper@gmail.com', // Recipient email address
        subject: 'Test Email', // Subject line
        text: 'This is a test email sent from Node.js using nodemailer.' // Plain text body
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
            // console.log('Preview', nodemailer.getTestMessageUrl(info));
        }
    });
}

module.exports = mailsender;