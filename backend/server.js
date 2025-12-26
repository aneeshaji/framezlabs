require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transport Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or provide host/port for others
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify Transport
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Connection Error:', error);
    } else {
        console.log('SMTP Server Ready');
    }
});

// Subscribe Endpoint
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: 'New Newsletter Subscriber',
        text: `You have a new subscriber: ${email}`,
        html: `<h3>New Newsletter Subscriber</h3><p><strong>Email:</strong> ${email}</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent for subscriber: ${email}`);
        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error('Email Send Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Enquiry Endpoint
// Enquiry Endpoint
app.post('/api/enquiry', async (req, res) => {
    const { name, phone, message, category } = req.body;

    if (!name || !phone) {
        return res.status(400).json({ error: 'Name and Phone are required' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `New Enquiry: ${category || 'General'}`,
        text: `Name: ${name}\nPhone: ${phone}\nCategory: ${category || 'N/A'}\nMessage: ${message}`,
        html: `
            <h3>New Enquiry Received</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Category:</strong> ${category || 'N/A'}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Enquiry email sent from: ${name}`);
        res.status(200).json({ message: 'Enquiry sent successfully' });
    } catch (error) {
        console.error('Enquiry Email Send Error:', error);
        res.status(500).json({ error: 'Failed to send enquiry' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
