var express = require('express')
var app = express()
var unirest = require('unirest')


app.get('/', function (req, res) {


var text =
"Shot 72 people and killed 12 in a movie theatre and was subdued and arrested unharmed. CrimingWhileWhite http://t.co/1V0EG2qVPk"+
"#CrimingWhileWhite &amp; #AliveWhileBlack illustrate two different Americas that exist but shouldn't. Take the time to read some of the tweets\n"+
"BREAKING NEWS: Police are upset about the #CrimingWhileWhite trend on social media, but they've decided to let everyone off with a warning.\n"+
"Jay Cutler once stole $126 million from the Chicago Bears and didn't see so much as a court summons #CrimingWhileWhite\n"+
"George Zimmerman, murdered a kid who was on his way home with a pack of skittles. #CrimingWhileWhite http://t.co/9hOAWyR8N3\n"+
"Important: have a read of #CrimingWhileWhite and #AliveWhileBlack. Then try telling me that institutional racism doesn't exist.\n"+
"Stealing all the land marked purple on this map. #CrimingWhileWhite http://t.co/7gNfDxTG9h\n"+
"At 13 I stole a car with my friends &amp; drove it 2wks before we got busted. Only one charged was black. #CrimingWhileWhite\n"+
"Lil' Kim served 1 year in jail for lying under oath. Lindsay Lohan served 14 days for lying/stealing/assault/DUI/drugs. #CrimingWhileWhite\n"+
"Compare the #CrimingWhileWhite tweets to the #LivingWhileBlack tweets. The difference is stark and disturbing. #DoBetterAmerica\n"+
"Do white people get away w/ more crimes? #CrimingWhileWhite shows racial disparity is real: http://t.co/bHquNGEjsO http://t.co/154eDHZhz7\n"+
"Wesley Snipes served 3 years for tax evasion. Nicholas Cage owes IRS 14 million, is filming National Treasure 3. #CrimingWhileWhite\n"+
"White man completely unharmed after shooting BB gun AT POLICE. #CrimingWhileWhite #TamirRice http://t.co/kA4oWqj624 http://t.co/4x0QgxAqpf\n"+
"This #CrimingWhileWhite hashtag is welcomed. Thanks for being honest re: #WhitePrivilege. It's not a hard process, it's a healing process.\n"+
"One time I sold weapons to Iranian terrorists, used the $ to illegally fund the contras, then said I forgot.   #CrimingWhileWhite";

  
	// These code snippets use an open-source library.
	unirest.get("https://aylien-text.p.mashape.com/queue?uuid=6ad6266f-0653-4b50-9994-8466576484fd")
	.header("X-Mashape-Key", "e6jk7742uzmshc1Q6Bmyi2nZstr9p1wHmTNjsnE72AAsdf5FhP")
	.end(function (result) {
	  console.log(result.status, result.headers, result.body);
	  res.send(result.body)
	});

// // These code snippets use an open-source library. http://unirest.io/nodejs
// unirest.post("https://aylien-text.p.mashape.com/batch")
// .header("X-Mashape-Key", "e6jk7742uzmshc1Q6Bmyi2nZstr9p1wHmTNjsnE72AAsdf5FhP")
// .header("Content-Type", "multipart/form-data")
// .field("data", text)
// .field("endpoints", "sentiment")
// .field("entities_type", "text")
// .field("output_format", "json")
// .end(function (result) {
//   //res.send(result.body);


// });




})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})