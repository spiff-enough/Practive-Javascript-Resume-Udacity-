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
var work = {
	"jobs" : [
		{
			"position" : "research assistant",
			"employer" : "University of Utah",
			"years" : 1,
			"city" : "Salt Lake City"
		}
	]
};
var education = {
	"schools" : [
		{
			"name" : "University of Utah",
			"city" : "Salt lake City",
			"degree" : "BA",
			"years" : 2,
			"minor" : ["none"],
			"major" : ["Computer Science"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
};

var projects = {
	"allProjects" : [
		{
			"title" : "JS resume",
			"dates" : 2015,
			"description" : "Created an online resume after taking a course in JS.",
			"image" : ""
		}
	]
};

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
//var JobTitle = HTMLworkTitle.replace("%data%", work["position"]);
//var JobBoss = HTMLworkEmployer.replace("%data%", work.employer);
//var JobYears = HTMLworkDates.replace("%data%", work.years);
//var JobCity = HTMLworkLocation.replace("%data%", work.city);
//var SchoolName = HTMLschoolName.replace("%data%", education.name);
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
//$("#header").append(JobTitle);
//$("#header").append(JobBoss);
//$("#header").append(JobYears);
//$("#header").append(JobCity);
//$("#header").append(SchoolName);
//$("#header").append(SchoolYears);
//$("#header").append(SchoolCity);


