/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name": "Belinda LaVoie",
	"role": "Senior Application Developer",
	"welcomeMsg": "Experienced application developer seeking a Front-end position",
	"contacts": {
		"mobile": "860-349-2232",
		"email": "bl4531@att.com",
		"github": "bl4531bl4531",
		"location": "212 Harvey Rd, Durham, CT 06422"
	},
	"skills": ["SQL Server","ColdFusion","HTML","CSS","JavaScript","Teradata","Oracle PL/SQL", "SSMS","SSIS","GIT"],
	"bioPic": "images/lindy.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "ATT",
			"title": "Senior Application Developer",
			"location": "1 Deerfield Ln, Meriden, CT 06450",
			"datesWorked": "05/1995 - present",
			"description": "I am a member of a small development team that creates, designs, and maintains dozens of web based applications using SQL Server 2012, SQL Server 2008, ColdFusion, JavaScript, HTML, CSS, Oracle PL/SQL, Access, Excel, and Sharepoint.  I specialize in database and application design."  
		},
		{
			"employer": "Connecticut Hospital Association",
			"title": "Database Administrator and System Manager",
			"location": "100 Barnes Rd, Wallingford, CT 06492",
			"datesWorked": "09/1989 - 05/1995",
			"description": "Assembled and led a team of 8 developers who designed and build a state-wide healthcare database used to track and improve the quality of patient care."  
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Charter Oak College",
			"location": "Newington, CT",
			"degree": "BA",
			"major": "Business",
			"datesAttended": "1994-1995",
			"schoolWebsite": "https://www.charteroak.edu/"
		},
		{
			"name": "Waterbury State Technical College",
			"location": "Waterbury, CT",
			"degree": "AS",
			"major": "Data Processing",
			"datesAttended": "1978-1980",
			"schoolWebsite": "Not Applicable"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Build a Portfolio Site",
			"dates": "2016",
			"description": "Final project for an Intro to HTML and CSS course",
			"images": [
				"images/front_end_sized.jpg",
				"images/portfolio.jpg",
				"images/favorite_app.png",
				"images/resume.jpg"
			]
		}
	]
};

		
/* There was no semi-colon above before I did this last update */	
/*var name = "Belinda LaVoie";
var role = "Senior Application Developer";
var email = "bl4531@att.com";

I ADDED // FOR COMMENTS BELOW
*/

//var formattedContact = HTMLcontactGeneric.replace("%data%",bio.role);
//var formattedEmail = HTMLemail.replace("%data%",bio.email);
//var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
//
//
//$("#main").append(formattedEmail);
//$("#main").append(formattedskills);
//
///* This writes the first element in the array
//$("#main").append(skills[0]); */
//
//$("#main").append(bio.name);
//$("#main").append(bio.bioPic);
//$("#main").append(work.years);
//$("#main").append(education.schools[0].major);
//$("#main").append(education.schools[1].major);

// Display the header
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

//Display the skills section
$("#header").append(HTMLskillsStart); 

for(oneskill in bio.skills) {
	var formattedSkills = HTMLskills.replace("%data%",bio.skills[oneskill]);
	$("#skills").append(formattedSkills);
}

// This simply through the working code in a function and called that function
function displayWork() {
	//Display the work experience section
	$("#workExperience").append(HTMLworkStart); 
	
	for(job in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();


/* This is to log clicks to the console for an exercise in JavaScript
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
*/

// Encapsulation example - Display projects
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();	

// Here's a map
$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);		
infoWindow.open(map, marker)