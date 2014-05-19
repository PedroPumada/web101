/**
 * 


var element = document.getElementById('wrapper');

alert(element);

element.style.display = 'none';
 */

tday  = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
tmonth= new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function GetClock() {
	d = new Date();
	nday   = d.getDay();
	nmonth = d.getMonth();
	ndate  = d.getDate();
	nyear = d.getYear();
	nhour  = d.getHours();
	nmin   = d.getMinutes();
	if(nyear<1000) {
		nyear=nyear+1900;
	}
	
	if(nhour ==  0) {
		ap = " AM";nhour = 12;
	} else if (nhour <= 11) { 
		ap = " AM";
	} 
	else if (nhour == 12) { 
		ap = " PM";
	} 
	else if (nhour >= 13) { 
		ap = " PM";
		nhour -= 12;
	}

	if(nmin <= 9) { 
		nmin = "0" +nmin; 
	}

	document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+ap+"";
	setTimeout("GetClock()", 1000);
}

window.onload=GetClock;

$(document).ready(function() {
	
	// when we click on dog, another one appears
	$('#puppy').click(function() {
		if ($('#puppy').attr('src', 'puppy.jpg')) {
			$('#puppy').attr('src', 'puppy-boston.jpg');
		} else {
			$('#puppy').attr('src', 'puppy.jpg');
		}
	});

});