/*$("#main").append("Aury Casanova");

var awesomeThoughts = "I am Aury and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);*/
var name = "Aury Casanova";
var role = "Software Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);