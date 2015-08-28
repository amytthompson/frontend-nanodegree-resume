/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Amy Thompson");

var firstName = "awesomeThoughts";
var awesomeThoughts="I am Amy and I am AWESOME!"
console.log(awesomeThoughts);

var funThoughts =
	awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Amy Thompson");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Systems Administrator")
$("#header").append(formattedRole);