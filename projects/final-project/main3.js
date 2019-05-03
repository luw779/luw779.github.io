function updateTime(){
  var timeHolder =
  document.querySelector("#time")

  var now = new Date()
  var time = now.toTimeString();

  var s1 = document.querySelector(".s1")
  var s2 = document.querySelector(".s2")
  var s3 = document.querySelector(".s3")
  var s4 = document.querySelector(".s4")
  var s5 = document.querySelector(".s5")
  var s6 = document.querySelector(".s6")
  var s7 = document.querySelector(".s7")
  var s8 = document.querySelector(".s8")
  var s9 = document.querySelector(".s9")
  var s10 = document.querySelector(".s10")
  var s11 = document.querySelector(".s11")
  var s12 = document.querySelector(".s12")
 

  //timeHolder.innerHTML =time;
  if(now.getSeconds()%2 !=1){
    s1.style.borderColor = "DarkSalmon";

  }else{
    s1.style.borderColor = "#BB4952";
  }
  
   if(now.getSeconds()%2 !=1){
    s2.style.borderColor = "DarkSalmon";

  }else{
    s2.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s3.style.borderColor = "DarkSalmon";

  }else{
    s3.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s4.style.borderColor = "DarkSalmon";

  }else{
    s4.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s5.style.borderColor = "DarkSalmon";

  }else{
    s5.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s6.style.borderColor = "DarkSalmon";

  }else{
    s6.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s7.style.borderColor = "DarkSalmon";

  }else{
    s7.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s8.style.borderColor = "DarkSalmon";

  }else{
    s8.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s9.style.borderColor = "DarkSalmon";

  }else{
    s9.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s10.style.borderColor = "DarkSalmon";

  }else{
    s10.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s11.style.borderColor = "DarkSalmon";

  }else{
    s11.style.borderColor = "#BB4952";
  }

   if(now.getSeconds()%2 !=1){
    s12.style.borderColor = "DarkSalmon";

  }else{
    s12.style.borderColor = "#BB4952";
  }


  var bombay = calcTime('Taipei', '+8');
  $('#time').html(bombay);

  }
setInterval(updateTime, 1000);


//

function calcTime(city, offset) {

    d = new Date();

    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    nd = new Date(utc + (3600000*offset));

    return "The local time in " + city + " is " + nd.toLocaleString();

}
