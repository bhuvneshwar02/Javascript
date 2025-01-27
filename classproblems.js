// question 1 =
//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.function evens(numbers) {
//    function evens(){
//     return numbers.filter(function(number) {
//         return number % 2 === 0;
//     });
// }


//question 2=
//  Write a function that takes an array of numbers and returns the sum of all the numbers.


// question 3 =
// let obj = {
//  a:10,
//     fn:function(){
//        console.log(this)
//     }
//  }
//  let fun = obj.fn;
//  fun()


//question 4 =
//let sam = {
// q:10
// }

// let vohra = {
// q:50,
// fn: function(){
//    console.log(`${this.q}`)
// }

// vohra.fn.apply(q)


//question 5=
// console.log(typeof NaN)
// console.log(NaN === NaN)


//question 6=
// console.log(1 < 2 < 3)
// console.log(3 > 2 > 1)

//question 7 =
// const sg = require('@sendgrid/mail');

// sg.setApiKey(process.env.SENDGRID_KEY)
// // sg.setSubstitutionWrappers('{{', '}}')

// module.exports.sendEmail = (email, messageText) => {
//   return sg.send({
//     from: "Samarth <mailer@online.samarth.com>",
//     templateId: 'd-46c6bcb04c279532f1a871d8862d',
//     to: email,
//     subject: 'Your Samarth OTP',
//     dynamic_template_data: { messageText }
//   })
// }
// const axios = require('axios')

// module.exports.sendSms = (mobile, messageText, templateId) => {
//   console.log(messageText)
//   return axios.get('http://sms.smscollection.com/sendsmsv2.asp',{
//     params: {
//       user: process.env.MOBILE_VERIFY_USERNAME,
//       password: process.env.MOBILE_VERIFY_PASS,
//       sender: 'SVOHRA',
//       text: messageText,
//       phonenumber: mobile.replace("+", "").replace("-", ""),
//       dlttemplateid: templateId
//     }
//   })
// }