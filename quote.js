const url = "https://zenquotes.io/api/random";
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service : 'hotmail',
    auth: {
        user: 'hm21jv@hotmail.com',
        pass: 'Prachi81@81'
    }
});

async function getQuote() {
    
    let response = await fetch(url);
    let object = await response.json();
    let quote = object[0].q;
    return quote;
} 

async function mail() {

    let quote = await getQuote();
    const mailOptions = {
        from: 'hm21jv@hotmail.com',
        to: 'malhiharry347@gmail.com',
        subject: quote,
        text: quote
    };

    transporter.sendMail(mailOptions, (error,info) => {
        if(error){
            console.log(error);
        }
        console.log(info.response);
    });
}

mail();




// fetch(url)
// .then((response) => {
//     let data = response.json();
//     return data;
// })
// .then((data) => {
//     let quote = data[0].q;
//     return quote;
// })
// .catch((err) => {console.log(err)});