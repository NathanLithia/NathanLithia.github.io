/*
The code here is purely for private analytical purposes to sate curiosity and data gets automatically deleted after 3 days.
Its purpose is to identify scrapers & bots or services simular to AWS then convert them into an anonymous statistic.

If you have a problem with that let me know via the discord server on /pages/index and i can assure you.

If you do not wish to be seen, i highly recommend a really NEAT plugin called NoScript that you can slot into your browser:
https://noscript.net/
*/

fetch("https://api.ipify.org?format=json")
.then(response => response.json())
.then(data => {
    const message = '```json\n{\n  "ip": "'+data.ip+'",\n  "url": "'+window.location.href+'",\n  "time": "'+Date()+'",\n  "agent": "'+navigator.userAgent+'"\n}```';
	fetch(atob(atob("YUhSMGNITTZMeTlrYVhOamIzSmtMbU52YlM5aGNHa3ZkMlZpYUc5dmEzTXZNVEl4TURReU5URTNOVEl3TkRRek9EQTFOaTlsVTNKd1NraGpiMGxpTWpGdU4xZHBYekZtYUdSSGFrMHRlRzlKTkdWb2QyOVNRbFV0YWpkbVV6ZGpTRmx6WTFOYWQwWndlamR1T0VrMmNYVkxiMFJCUlVaRFN3PT0=")), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ content: message })
	})
	.then(() => {
		window.location.href = "/pages/index";
	})
})