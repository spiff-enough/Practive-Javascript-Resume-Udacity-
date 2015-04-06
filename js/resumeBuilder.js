/*$("#main").append("Aury Casanova");

var awesomeThoughts = "I am Aury and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);*/

var name = "Aury Casanova";
var role = "Software Developer";
var skills = ["programming", "C#", "Java", "JS", "Python", "ActionScript", "Spanish", "French"];
var bio = {
	"name" : name,
	"role" : role,
	contactInfo : {
		"mobile" : "502-296-99857",
		"email" : "aury.casanova@gmail.com",
		"gitHub" : "spiff-enough",
	},
	"picURL" : "images/foxy.png",
	"welcome" : "Welcome to my resume!",
	"skills" : skills
};
var work = {};
	work.position = "student";
	work.employer = "University of Utah";
	work.years = 2;
	work.city = "Salt Lake City";
var education = {};
	education["name"] = "University of Utah";
	education["years"] = 2;
	education["city"] = "Salt Lake City";

/* The following variables are used to store the appropriate data inside
of helper.js */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var Mobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var Email = HTMLemail.replace("%data%", bio.contactInfo.email);
var GitHub = HTMLgithub.replace("%data%", bio.contactInfo.gitHub);
var Pic = HTMLbioPic.replace("%data%", bio.picURL);
var Welcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var Skills = HTMLskills.replace("%data%", bio.skills);
var JobTitle = HTMLworkTitle.replace("%data%", work["position"]);
//var JobBoss = HTMLworkEmployer.replace("%data%", work.employer);
//var JobYears = HTMLworkDates.replace("%data%", work.years);
//var JobCity = HTMLworkLocation.replace("%data%", work.city);
var SchoolName = HTMLschoolName.replace("%data%", education.name);
//var SchoolYears = HTMLschoolDates.replace("%data%", education.years);
//var SchoolCity = HTMLschoolLocation.replace("%data%", education.city);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(Mobile);
$("#header").append(Email);
$("#header").append(GitHub);
$("#header").append(Pic);
$("#header").append(Welcome);
$("#header").append(Skills);
$("#header").append(JobTitle);
//$("#header").append(JobBoss);
//$("#header").append(JobYears);
//$("#header").append(JobCity);
$("#header").append(SchoolName);
//$("#header").append(SchoolYears);
//$("#header").append(SchoolCity);


