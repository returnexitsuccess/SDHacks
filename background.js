chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({"url": "https://my.sa.ucsb.edu/gold/login.aspx"});
	});