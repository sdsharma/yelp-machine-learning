/*Create a usable dat format of {businessid: total checkins}*/
var fs = require('fs');

var checkIns = {};
var checkInRaw = fs.readFileSync('../data/yelp_academic_dataset_checkin.json', 'utf8').toString().split("\n");
for (var j = 0; j < checkInRaw.length -1; j++){
	checkInRaw[j] = JSON.parse(checkInRaw[j]);
	var totalCheckIns = 0;
	var keys = Object.keys(checkInRaw[j].checkin_info);
	var businessKey = checkInRaw[j].business_id;
	for(var i = 0; i < keys.length; i++){
		totalCheckIns += checkInRaw[j].checkin_info[keys[i]];
	}
	checkIns[businessKey] = totalCheckIns;
}

fs.writeFile('../data/yelp_checkins.json', JSON.stringify(checkIns, null, 2), function(err){
	if(err){
		return console.log(err);
	}
});