/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Amy Thompson");

var firstName = "awesomeThoughts";
var awesomeThoughts="I am Amy and I am AWESOME!"
console.log(awesomeThoughts);

var funThoughts =
	awesomeThoughts.replace("AWESOME","FUN");

var name = "Amy Thompson";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#main").append(funThoughts);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);