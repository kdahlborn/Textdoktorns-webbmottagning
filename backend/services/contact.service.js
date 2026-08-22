import { Resend } from 'resend';

console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length);

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMessage = async ({ name, email, message }) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Textdoktorn <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL],
            replyTo: email,
            subject: `Nytt meddelande från ${name}`,
            text: `Namn: ${name}

E-post: ${email}

Meddelande:
${message}`,
        });

        if (error) {
            console.error('RESEND ERROR:', error);

            return {
                success: false,
                message: error.message,
            };
        }

        console.log('EMAIL SENT:', data.id);

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
