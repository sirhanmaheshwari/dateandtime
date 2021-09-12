let a;
let date;
let time;
setInterval(()=>{
a=new Date();
 time=a.getHours()+":"+a.getMinutess()+":"+a.getSeconds();
date=a.toLocalDateString();
document.getElementById('time').innerHTML=date+"on"+time;},1000)