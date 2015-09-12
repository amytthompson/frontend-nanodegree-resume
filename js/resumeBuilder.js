

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
		"employer" : "McKool Smith",
		"title" : "Systems Administrator",
		"dates" : "March 2010 - Current",
		"location" : "Austin, TX",
		"description" : "yellow feathers"
	},
	{
		"employer" : "Thompson & Knight LLP",
		"title" : "IT Coordinator",
		"dates" : "November 2004 - February 2010",
		"location" : "Austin, TX",
		"description" : "red feathers"
	},
	{
		"employer" : "McKool Smith",
		"title" : "Helpdesk",
		"dates" : "November 2003 - November 2004",
		"location" : "Dallas, TX",
		"description" : "purple feathers"
	},
	{
		"employer" : "Thompson & Knight LLP",
		"title" : "Helpdesk",
		"dates" : "August 2001 - November 2003",
		"location" : "Dallas, TX",
		"description" : "orange feathers"
	},
	{
		"employer" : "USWeb/marchFIRST",
		"title" : "Helpdesk",
		"dates" : "1998 - March 2001",
		"location" : "Dallas, TX",
		"description" : "white feathers"
	},
		{
		"employer" : "Berger & Co.",
		"title" : "Office Administrator",
		"dates" : "1997 - 1998",
		"location" : "Dallas, TX",
		"description" : "black feathers"
	},
		{
		"employer" : "Baron & Budd",
		"title" : "Receptionist",
		"dates" : "1996 - 1997",
		"location" : "Dallas",
		"description" : "blank feathers"
	},
		{
		"employer" : "Law Office of Nikki Carmody",
		"title" : "Legal Assistant",
		"dates" : "1995 - 1996",
		"location" : "Dallas, TX",
		"description" : "rainbow feathers"
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
		//"url": "http://www.twu.edu/"
	},
	],

	"onlineCourses": [
	{
		"name": "Austin Community College Continuing Education",
		"dates": 2014,
		"courses": "Introduction to HTML and CSS"
	},
	{
		"name": "Udacity",
		"dates": 2015,
		"courses": "Front-End NanoDegree",
		//"url": "http://www.udacity.com"

	},
	{
		"name": "CodeSchool",
		"dates": 2014,
		"courses": ["HTML","CSS"]
		//"url": "http://www.codeschool.com"
	},
	{
		"name": "CodeCademy",
		"dates": 2014,
		"courses": ["HTML","CSS"] 
		//"url": "http://www.codecademy.com"
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

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

function displayWork (){
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var	formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	$(".work-entry:last").append(formattedLocation);
}
};

displayWork();
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + name[1];
};

$("#header").append(bio.contacts.email);
$("#header").append(bio.contacts.github);
$("#header").append(bio.contacts.twitter);
$("#header").append(bio.contacts.location);
$("#header").append(bio.welcome);
$("#header").append(bio.bioPic);
$("#header").append(bio.skills);
//$("#workExperience").append(work.jobs.employer);
//$("#workExperience").append(work.jobs.title);
//$("#workExperience").append(work.jobs.dates);
//$("#workExperience").append(work.jobs.location);
//$("#workExperience").append(work.jobs.description);
$("#education").append(education["name"]);
$("#education").append(education["dates"]);
$("#education").append(education["location"]);
$("#education").append(education["degree"]);
$("#education").append(education["majors"]);
$("#main").append(internationalizeButton);



