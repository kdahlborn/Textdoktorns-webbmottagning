import nodemailer from 'nodemailer';

// console.log('EMAIL_USER:', process.env.EMAIL_USER);
// console.log('EMAIL_PASS finns:', !!process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendContactMessage = async ({ name, email, message }) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Nytt meddelande från ${name}`,
            text: `Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`,
        };

        console.log('BEFORE SEND');

        await transporter.sendMail(mailOptions);

        console.log('AFTER SEND');

        return {
            success: true,
            message: 'Message sent!',
        };
    } catch (error) {
        console.error('EMAIL ERROR:', error);

        return {
            success: false,
            message: error.message,
        };
    }
};
