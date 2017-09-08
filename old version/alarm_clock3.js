

 
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
 
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock_span').innerHTML = h + ":" + m + ":" + s;
  t = setInterval(function() {
    startTime()
  }, 500);
}
startTime();

function setv() {
    var hour2    = document.getElementById('alarmHour').value;
    var minute2   = document.getElementById('alarmMinutes').value;
    var seconds2   = document.getElementById('select_alarmeSecondes').value;
    if(hour2<10)
        hour2='0'+hour2;
    if(minute2<10)
        minute2='0'+minute2;
    if(seconds2<10)
        seconds2='0'+seconds2;
    document.getElementById('').value=hour2+'*'+minute2+'*'+second2;
    set=1;
    
function set_alarm(){
var dt_alarm= new Date();
dt_alarm.setHours(parseInt(document.getElementById('alarmHour').value));
dt_alarm.setMinutes(parseInt(document.getElementById('alarmMinutes').value));
dt_alarm.setSeconds(parseInt(document.getElementById('select_alarmeSecondes').value));
global_dt_alarm_sec=dt_alarm.getTime();
}
document.getElementById("btn_setalarm").onclick = set_alarm();
}
