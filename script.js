const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


app.post('/receive-email', (req, res) => {
    const emailBody = req.body.body; 
    const numbers = extractNumbers(emailBody); 
    saveNumbersToDatabase(numbers); 
    res.sendStatus(200);
});


function extractNumbers(emailBody) {
    
}

function saveNumbersToDatabase(numbers) {
    
}


function sendEmail(email, subject, text) {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

   
    let mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: subject,
        text: text
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}


setInterval(() => {

}, 24 * 60 * 60 * 1000);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});