$(document).on('ready', function() {
	var time = new Date();
	var outerShell = $('<div class="outer-shell"></div>');
 	var innerShell = $('<div class="inner-shell"></div>');
 	var clockScreen = $('<div class="clock-screen"></div>');
 	var clockText = $('<div class="clock-text">' + time.getHours() + ":" + time.getMinutes() + '</div>')
 	var pmText = $("<div class='pm-text'>PM</div>");
 	var autoText = $("<div class='auto-text'>AUTO</div>");
 	var pmDot = $("<div class='pm-dot'>*</div>");
 	var autoDot = $("<div class='auto-dot'>*</div>");
 	var amFreqText = $("<div class='am-freq-text'>AM  60  70  90  110  140  170     KHz</div>");
 	var pmFreqText = $("<div class='fm-freq-text'>FM  83  96  102  106  108     MHz</div>");
 	var setAlarmButton = $("<button class='set-alarm-button'>Set Alarm</button>")



 	clockScreen.append(pmDot);
 	clockScreen.append(clockText);
 	clockScreen.append(autoDot);

 	innerShell.append(pmText);
	innerShell.append(clockScreen);
	innerShell.append(amFreqText)
	innerShell.append(pmFreqText)
	innerShell.append(autoText)

 	outerShell.append(innerShell);
 	outerShell.append(setAlarmButton);

 	var time = new Date();

 	var timer =setInterval(function(){myTimer()}, 1000);

	function myTimer() {
		time = new Date();
	    clockText.text(time.getHours() + ":" + time.getMinutes());
	    if (alarmTime === time.getHours() + ":" + time.getMinutes()) {
	    	alert("Wake up bitch!")
	    }
	}
 	$('.container').append(outerShell);

 	$('.set-alarm-button').on('click', function() {
 		window.alarmTime = prompt("When do you want to set the alarm?");
 	})

});