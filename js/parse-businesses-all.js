/*Create a usable data format of {businessid: [rating, review count, checkin count]}*/
var fs = require('fs');

var businesses = {};
var businessesRaw = fs.readFileSync('../data/yelp_academic_dataset_business.json', 'utf8').toString().split("\n");
var checkins = JSON.parse(fs.readFileSync('../data/yelp_checkins.json', 'utf8'));
for (var j = 0; j < businessesRaw.length - 1; j++){
	businessesRaw[j] = JSON.parse(businessesRaw[j]);
	businesses[businessesRaw[j].business_id] = [businessesRaw[j].stars, businessesRaw[j].review_count, checkins[businessesRaw[j].business_id]];
}

fs.writeFile('../data/yelp_businesses_all.json', JSON.stringify(businesses, null, 2), function(err){
	if(err){
		return console.log(err);
	}
});