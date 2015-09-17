'use strict';

var bio = {
	"name": "Amy Thompson",
	"role": "Udacity Student",
	"contacts" : {
		"email" : "amytgarcia@gmail.com",
		"github" : "amytthompson.github.io",
		"twitter" : "@amytgarcia",
		"location" : "Austin"
	},
	"welcomeMessage" : "#learningNerd",
	"bioPic" : "images/mypicture.jpg",
	"skills" : ["HTML/CSS", "JavaScript", "Git/Github"]
};
//appends contact information to resume
	bio.display = function () {
		var data = '%data%';
		var $header = $('#header');

		var formattedName = HTMLheaderName.replace(data, bio.name);
		var formattedRole = HTMLheaderRole.replace(data, bio.role);
		$header.append(formattedName + formattedRole);

		var formattedPic = HTMLbioPic.replace(data, bio.bioPic);
		var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
		$header.append(formattedPic + formattedWelcome);

		var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
		var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
		$('#topContacts').append(formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
		$('#footerContacts').append(formattedEmail + formattedGithub + formattedTwitter + formattedLocation);

//appends skills to resume
	if (bio.skills.length > 0) {
		$header.append(HTMLskillsStart);
		var formattedSkill0 = HTMLskills.replace(data, bio.skills[0]);
		var formattedSkill1 = HTMLskills.replace(data, bio.skills[1]);
		var formattedSkill2 = HTMLskills.replace(data, bio.skills[2]);
		$header.append(formattedSkill0 + formattedSkill1 + formattedSkill2);
	}
};
bio.display();


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
	]
};
//appends work history to resume
	work.display = function () {
	for (var job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var	formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedDates + formattedDescription + formattedLocation);

		}	
};
work.display ();

var education = {
	"schools": [
	{
		"name": "Texas Woman\'s University",
		"location": "Denton, TX",
		"degree": "BS",
		"majors": ["Government"],
		"dates": 1995,
	},
	],

	"onlineCourses": [
	{
		"name": "Udacity",
		"dates": 2015,
		"classes": "Front-End NanoDegree",
		"url": "www.udacity.com"

	},
	{
		"name": "Austin Community College Continuing Education",
		"dates": 2014,
		"classes": "Introduction to WWW Authoring, HTML, and CSS",
		"url": "http://www.continue.austincc.edu"
	},
	{
		"name": "CodeSchool",
		"dates": 2015,
		"classes": ["HTML/CSS: Front-End Foundations"],
		"url": "www.codeschool.com"
	},
	{
		"name": "CodeCademy",
		"dates": 2015,
		"classes": ["HTML & CSS"], 
		"url": "www.codecademy.com"
	},
	]
};

//appends education to resume
education.schools.display = function() {

		for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedschoolnameDegree = formattedschoolName + formattedschoolDegree;
		$(".education-entry:last").append(formattedschoolnameDegree);

		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedschoolDates + formattedschoolLocation + formattedschoolMajor);
}
};
education.onlineCourses.display = function() { 

		for (var course in education.onlineCourses) {
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].classes);
		var onlinetitleSchool = onlineTitle+ onlineSchool;
		$(".education-entry:last").append(onlinetitleSchool);

		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var onlineclassURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(onlineDates + onlineclassURL);
	}
};
education.schools.display ();
education.onlineCourses.display();


var projects = {
	"projects": [
	{
		"title": "Project1",
		"dates": "January February",
		"description": "Project Portfolio",
		"images": "http://lorempixel.com/output/abstract-q-c-640-480-3.jpg"
	},
	{

		"title": "Project2",
		"dates": "March April",
		"description": "Online Resume",
		"images": "http://lorempixel.com/output/abstract-q-c-640-480-1.jpg"
	},
	{

		"title": "Project3",
		"dates": "May June",
		"description": "Arcade Game",
		"images": "http://lorempixel.com/output/abstract-q-c-640-480-9.jpg"
	},
	]
};
//appends project history to resume
projects.display = function () {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var	projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(projectTitle);

		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(projectDates);

		var	projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(projectDescription);

		var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(projectImage);
	}
};

projects.display();


//appends map to resume
$("#mapDiv").append(googleMap);

//appends cities worked to googleMap
function locationizer(work_obj) {
	var locationArray = [];
	for (var job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

//appends internationalize button to resume
$("#main").append(internationalizeButton);

//internationalizes name
function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + name[1];
}

