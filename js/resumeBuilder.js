

var bio = {
	"name": "Amy Thompson",
	"role": "Udacity Student",
	"contacts" : {
		"email" : "amityatx@gmail.com",
		"github" : "amytthompson.github.io",
		"twitter" : "@amytgarcia",
		"location" : "Austin"
	},
	"welcomeMessage" : "Welcome!",
	"bioPic" : "images/mypicture.jpg",
	"skills" : ["HTML/CSS", "Git", "JavaScript"]
};

var work = {
	"jobs": [
	{
		"employer" : "McKool Smith PC",
		"title" : "Systems Administrator",
		"dates" : "March 2010 - Current",
		"location" : "Austin",
		"description" : ""
	},
	{
		"employer" : "Thompson & Knight LLP",
		"title" : "IT Coordinator",
		"dates" : "November 2004 - February 2010",
		"location" : "Austin",
		"description" : ""
	},
	{
		"employer" : "McKool Smith PC",
		"title" : "Helpdesk",
		"dates" : "November 2003 - November 2004",
		"location" : "Austin",
		"description" : ""
	},
	{
		"employer" : "Thompson & Knight LLP",
		"title" : "Helpdesk",
		"dates" : "August 2001 - November 2003",
		"location" : "Austin",
		"description" : ""
	},
	{
		"employer" : "marchFIRST",
		"title" : "Helpdesk",
		"dates" : "1999 - March 2001",
		"location" : "Austin",
		"description" : ""
	},
	]
};

var education = {
	"schools": [
	{
		"name": "TWU",
		"location": "Denton",
		"degree": "Bachelor of Science",
		"majors": ["Government"],
		"dates": 1995,
		"url": "http://www.twu.edu/"
	},
	{
		"schoolName": "Austin Community College Continuing Education",
		"schoolYears": 2014,
		"courses": "Introduction to HTML and CSS"
	},
	],

	"onlineCourses": [
	{
		"schoolName": "Udacity",
		"schoolYears": 2015,
		"courses": "Front-End NanoDegree",
		"url": "http://www.udacity.com"

	},
	{
		"schoolName": "CodeSchool",
		"schoolYears": 2014,
		"courses": ["HTML","CSS"]
		"url": "http://www.codeschool.com"
	},
	{
		"schoolName": "CodeCademy",
		"schoolYears": 2014,
		"courses": ["HTML","CSS"] 
		"url": "http://www.codecademy.com"
	},
	]
};

var projects = {
	"projects": [
	{

		"title":"",
		"dates":"",
		"description":"",
		"images":""
	},
	{

		"title":"",
		"dates":"",
		"description":"",
		"images":""
	},
	{

		"title":"",
		"dates":"",
		"description":"",
		"images":""
	},
	]
};


$("#header").prepend(formattedName);
$("#header").append(formattedRole);
//$("#main").append(bio.name);
//$("#main").append(bio.role);
$("#header").append(bio.contacts.email);
$("#header").append(bio.contacts.github);
$("#header").append(bio.contacts.twitter);
$("#header").append(bio.contacts.location);
$("#header").append(bio.welcome);
$("#header").append(bio.bioPic);
$("#header").append(bio.skills);
$("#workExperience").append(work.employerCurrent);
$("#workExperience").append(work.positionCurrent);
$("#workExperience").append(work.employerCurrentDates);
$("#workExperience").append(work.employerCurrentCity);
$("#education").append(education["schoolName"]);
$("#education").append(education["schoolYears"]);
$("#education").append(education["schoolCity"]);



