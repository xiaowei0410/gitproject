(function(){
// part one

var hotel ={
name: 'hilton',
roomPrice:100,
discount:10,
finalPrice: function(){
	var result;
	result=this.roomPrice* ((100-this.discount)/100);
	return result;
  }
};
var elname,elprice,elFinalPrice;
elname = document.getElementById('hotelName');  
elprice=document.getElementById('roomRate'); 
elFinalPrice=document.getElementById('specialRate');

elname.textContent=hotel.name;
elprice.textContent='$'+hotel.roomPrice.toFixed(2);
elFinalPrice.textContent='$'+hotel.finalPrice();

// PART 2 this part is copied
  var expiryMsg,today,elEnds;

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
      }

  today = new Date();                             // Put today's date in variable
  elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today);         // Add the expiry message


} ());