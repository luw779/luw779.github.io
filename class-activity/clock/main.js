function updateTime(){
  var timeHolder =
  document.querySelector("#time")

  var now = new Date()
  var time = now.toTimeString();

  var clock1 = document.querySelector(".clock1")
  var clock2 = document.querySelector(".clock2")

  //timeHolder.innerHTML =time;
  if(now.getSeconds()%2 !=1){
    clock1.style.borderColor = "DarkSalmon";

  }else{
    clock1.style.borderColor = "#E8A631";
  }

  if(now.getSeconds()%2 !=1){
    clock2.style.borderColor = "A11E22";

  }else{
    clock2.style.borderColor = "#FFE4C4";
  }

  }
setInterval(updateTime, 1000)
