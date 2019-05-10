function updateTime(){
  var timeHolder =
  document.querySelector("#time")

  var now = new Date()
  var time = now.toTimeString();

  var s1 = document.querySelector(".s1")
  //var s2 = document.querySelector(".s2")
 

  //timeHolder.innerHTML =time;
  if(now.getSeconds()%2 !=1){
    s1.style.borderColor = "#FDC84F";

  }else{
    s1.style.borderColor = "bisque";
  }

  //if(now.getSeconds()%2 !=1){
    //s2.style.borderColor = "#FDC84F";

  //}else{
   // s2.style.borderColor = "bisque";
  //}

  var bombay = calcTime('Buenos aires', '-3');
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