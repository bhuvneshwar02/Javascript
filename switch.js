//let dayNumber = new Date().getDate();
//console.log(dayNumber);

// based on day number , give the day 
let dayNumber = 5;
 console.log('Day Number:',dayNumber);
let day;
let msg;

switch(dayNumber){
    case 0:
      day = 'Sunday';
      break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day ='Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
            msg = 'Invalid day';
            break;
} 
if(msg){
    console.log('Message:',msg);
} else {
console.log('Today is',day);
}