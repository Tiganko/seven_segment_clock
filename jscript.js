var time = document.getElementById("time");
var date = document.getElementById("date");
var info = document.getElementById("info");
var h3 = document.getElementsByTagName("h3");

function telltime(){
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	var temp1, temp2;

	if(h == 0){
				temp1 = "12:" + 
			((m - (m%10))/10) + (m%10) + ":" + ((s - (s%10))/10) + (s%10) + " AM";
		}else if(h < 10){
				temp1 = "0" + h + ":" + 
			((m - (m%10))/10) + (m%10) + ":" + ((s - (s%10))/10) + (s%10) + " AM";
		}else if(h < 12){
				temp1 = h + ":" + 
			((m - (m%10))/10) + (m%10) + ":" + ((s - (s%10))/10) + (s%10) + " AM";
		}else if(h == 12){
				temp1 = "12:" + 
			((m - (m%10))/10) + (m%10) + ":" + ((s - (s%10))/10) + (s%10)+ " PM";
			}else if(h<22){
				temp1 = "0" + (h%12) + ":" + 
			((m - (m%10))/10) + (m%10) + ":" + ((s - (s%10))/10) + (s%10) + " PM";
			}else{
				temp1 = (h%12) + ":" + 
			((m - (m%10))/10) + (m%10) + ":" + ((s - (s%10))/10) + (s%10) + " PM";
			}
	time.innerHTML = temp1;
	// time.innerHTML = h + ":" + ((m - (m%10))/10) + (m%10) + ":" + ((s - (s%10))/10) + (s%10);
	temp1 = now.toTimeString().split(' ');
	temp2 = temp1[1].substr(0, 6) + ":" + temp1[1].substr(6) + " ";
	for(i = 2; i < temp1.length; i++){
		if(temp1[i].includes('('))
			temp2 += temp1[i].substr(1,1);
		else
			temp2 += temp1[i].substr(0,1);
	}
	info.innerHTML = temp2 + "<hr>";

	var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var dd = now.getDate();
	var mm = now.getMonth();
	var yy = now.getFullYear();

	temp = days[now.getDay()] + ", "+ dd + "-" + months[mm] + "-" + yy;
	date.innerHTML = temp;
}

setInterval(telltime, "500");

var bcolor = document.querySelector("#bcolor");
var tcolor = document.querySelector("#tcolor");

bcolor.addEventListener("input", function(){
	time.style.background = bcolor.value;
	h3[0].innerHTML = "Background Color: " + bcolor.value;
})
tcolor.addEventListener("input", function(){
	time.style.color = tcolor.value;
	h3[1].innerHTML = "Text Color: " + tcolor.value;
})
