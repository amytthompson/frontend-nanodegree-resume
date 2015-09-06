var name = "Amy Thompson";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.rep

var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
	"name" : name,
	"role" : role,
	"contact info" : {
		"email" : "amityatx@gmail.com",
		"github" : "github",
		"twitter" : "@amytgarcia",
		"location" : "austintx",
	},
	"welcome message" : "Welcome!",
	"skills" : skills : ["reading","writing", "rithmatic"],
	"biopic" : "images/me.jpg",
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(skills);
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio."contact info");
$("#main").append(bio."picture URL");
$("#main").append(bio."welcome message");
$("#main").append(bio."skills");
