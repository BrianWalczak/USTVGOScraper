const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const readline = require('readline');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const app = express();
app.use(express.static(__dirname + "/"))

app.get('/', function(req, res){
	res.send(`<html style='font-family:system-ui'><center>To generate an M3U from USTVGO.TV, search for the channel by visiting /get/ (It must be the channels code)<br><br>Example: ${req.protocol + '://' + req.get('host')}/get/FoodNetwork<br><br></center></html>`)
});
app.use('/', router);

app.get('/get/:providedName', function(req, res){
	if(req.params.providedName != null) {
	var theChannel;
	fs.readFile('channels.txt', 'utf8', function(err, channel){
		var individualChannel = channel.split('\n')
		
		for(var i = 0;i < individualChannel.length;i++){
			if(individualChannel[i].split(' | ')[1] == req.params.providedName) {
				theChannel = individualChannel[i]

				name = theChannel.split(' | ')[0];
				code = theChannel.split(' | ')[1];
				logo = theChannel.split(' | ')[2];
				id = theChannel.split(' | ')[3];

				fetch(`https://ustvgo.tv/player.php?stream=${code}`, {
					method: 'GET',
					headers: {'Referer':'https://ustvgo.tv/'}
				}).then(response => response.text())
					.then(src => {
						if(src.includes('.m3u8') == true) {
							link = src.split("hls_src='")[1].split("'")[0]
						}else{
							link=`https://raw.githubusercontent.com/benmoose39/YouTube_to_m3u/main/assets/moose_na.m3u`
						}
						m3uTXT = `#EXTINF:-1 tvg-id="${code}" group-title="ustvgo" tvg-logo="${logo}", ${name}\n${link}`

						var fileName = `${name.trim()}.m3u`
						fs.writeFile(fileName, m3uTXT, (err) => {
							if (err) throw err;

							res.send(`<html style='font-family:system-ui'>File was saved as ${req.protocol + '://' + req.get('host') + '/' + fileName}<br><br><br>File Contents:<br>${m3uTXT}</html>`)
						}); 
				});
			}
		}
		
		if(typeof theChannel === 'undefined') {
			var channelList;
			
			for(var i = 0;i < individualChannel.length;i++){
				channelList = channelList+`${individualChannel[i].split(' | ')[1]} (${individualChannel[i].split(' | ')[0]})`+"<br>"
			}
			res.send(`<html style='font-family:system-ui'>The channel that you searched for (${req.params.providedName}) was not found on USTVGO's directory<br><br>Here is the list of channels to search for:<br>${channelList.replace('undefined', '')}</html>`)
		}
	});
	}
});
app.use('/get/:providedName', router);

app.use(function(req, res, next) {
    res.status(404);
    res.redirect('/')
});

let server = app.listen(3000, function(){
  console.log("USTVGO Scraper is at localhost:3000 (port 3000)");
});

//Code made by Brian Walczak. You are free to modify this code without a license. view the LICENSE file for more details
