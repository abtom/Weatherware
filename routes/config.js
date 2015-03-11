var data = require("../config.json");
var temp_data = require("../temp.json");
var letter_data = require("../temp.json");
var hourly_data = require("../hourly.json");
var personalize_data = require("../personalize.json");


exports.config_settings = function(req, res) { 

	var temp = req.body.temp;
	var notif = req.body.notif;
	var letter = req.body.letter;
	var personalize = req.body.personalize;
	data.temp = temp;
	data.notif = notif;
	data.letter = letter;
	data.personalize = personalize;
	if (temp == "fahrenheit")
	{
		temp_data.temp = 70;
		temp_data.temp1 = 86;
		temp_data.temp2 = 95;
		temp_data.temp3 = 76;
		temp_data.temp4 = 76;
		temp_data.temp5 = 86;
		temp_data.temp6 = 60;
		temp_data.temp7 = 86;
		temp_data.exact = 72;
		personalize_data.dusk_temp1 = 58;
		personalize_data.dusk_temp2 = 60;
		personalize_data.dusk_temp3 = 60;
		personalize_data.afternoon_temp1 = 80;
		personalize_data.afternoon_temp2 = 86;
		personalize_data.afternoon_temp3 = 83;
		personalize_data.evening_temp1 = 78;
		personalize_data.evening_temp2 = 80;
		personalize_data.evening_temp3 = 78;
		personalize_data.morning_temp1 = 69;
		personalize_data.morning_temp2 = 72;
		personalize_data.morning_temp3 = 72;
		personalize_data.letter = "F";
		hourly_data.letter = "F";
		letter_data.letter = "F"; 
	}
	else if (temp == "celsius")
	{
		temp_data.temp = 21;
		temp_data.temp1 = 32;
		temp_data.temp2 = 33;
		temp_data.temp3 = 25;
		temp_data.temp4 = 24;
		temp_data.temp5 = 30;
		temp_data.temp6 = 17;
		temp_data.temp7 = 30;
		personalize_data.dusk_temp1 = 20;
		personalize_data.dusk_temp2 = 22;
		personalize_data.dusk_temp3 = 21;
		personalize_data.afternoon_temp1 = 25;
		personalize_data.afternoon_temp2 = 27;
		personalize_data.afternoon_temp3 = 26;
		personalize_data.evening_temp1 = 18;
		personalize_data.evening_temp2 = 20;
		personalize_data.evening_temp3 = 19;
		personalize_data.morning_temp1 = 14;
		personalize_data.morning_temp2 = 17;
		personalize_data.morning_temp3 = 16;
		personalize_data.letter = "C";
		hourly_data.letter = "C";
		temp_data.exact = 22;
		letter_data.letter = "C";
	}

	//Renders page
	res.render("index",temp_data)
	
}