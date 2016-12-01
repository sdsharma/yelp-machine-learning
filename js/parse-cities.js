/*Create a usable dat format of {city name: total occurences}*/
var fs = require('fs');

var cities = {};

var citiesRaw = fs.readFileSync('../data/yelp_academic_dataset_business.json', 'utf8').toString().split("\n");
for (var j = 0; j < citiesRaw.length -1; j++){
	citiesRaw[j] = JSON.parse(citiesRaw[j]);
	if(cities[citiesRaw[j].city] == null){
		cities[citiesRaw[j].city] = 1;
	}
	else{
		cities[citiesRaw[j].city]++;
	}
}

fs.writeFile('../data/yelp_cities.json', JSON.stringify(cities, null, 2), function(err){
	if(err){
		return console.log(err);
	}
});