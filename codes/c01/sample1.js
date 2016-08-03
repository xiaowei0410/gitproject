var today= new Date();
var hour=today.getHours();
var greeting;
if (hour>19){
	greeting="good night";
}
else if (hour>12){
greeting= "good afternoon";
}
else if(hour>0){
	greeting="good morning";
}
else {
	greeting="welcome";
}

document.write('<h3>'+greeting+'<h3/>')