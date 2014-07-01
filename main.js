$(document).on('ready', function() {
	var outerShell = $('<div class="outer-shell"></div>');
 	var innerShell = $('<div class="inner-shell"></div>');
 	var clockScreen = $('<div class="clock-screen"></div>');
 	var clockText = $('<div class="clock-text">12:34</div>')
 	var pmText = $("<div class='pm-text'>PM</div>");
 	var autoText = $("<div class='auto-text'>AUTO</div>");
 	var pmDot = $("<div class='pm-dot'>*</div>");
 	var autoDot = $("<div class='auto-dot'>*</div>");
 	var amFreqText = $("<div class='am-freq-text'>AM  60  70  90  110  140  170     KHz</div>");
 	var pmFreqText = $("<div class='fm-freq-text'>FM  83  96  102  106  108     MHz</div>");



 	clockScreen.append(pmDot);
 	clockScreen.append(clockText);
 	clockScreen.append(autoDot);

 	innerShell.append(pmText);
	innerShell.append(clockScreen);
	innerShell.append(amFreqText)
	innerShell.append(pmFreqText)
	innerShell.append(autoText)

 	outerShell.append(innerShell);
 	
 	$('.container').append(outerShell);
});