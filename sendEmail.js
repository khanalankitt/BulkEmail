//express install -> npm i express
//nodemailer install -> npm i nodemailer
//cors install -> npm i cors

//suruma html file lai liveserver ma kholne(liveserver extension vscode)
//ani server start garne -> node sendEmail.js
//ani file upload garne 
//file must be in the same format as that of demoFile.txt 
//roll number 1 lai pathaune content must be on line 1 and so on as shown in demoFile.txt
//only 1 line for 1 person
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); 


app.post('/sendEmail', async (req, res) => {
    const { recipient, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "your@gmail.com",      //   <------------------------Afno Email
            pass: "aafno app password"  //   <------------------------ Password xai email ko passowrd haina naya app password banaune
            //How to create app password || Follow this link -> https://youtube.com/shorts/WDfvVRVV8Js?si=V95kxNnL0Vxvew0U
        }
    });

    const mailOptions = {
        from: "your@gmail.com",   //   <------------------------Afno Email
        to: recipient,
        subject: 'This is a test message',
        text: message
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Message sent to ${recipient}: ${info.messageId}`);
        res.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(`Error sending message to ${recipient}: ${error}`);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const PORT = 2999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Finally sabai configuration vayesi send bulk email button thichne console kholne and watch as the magic happens ;)