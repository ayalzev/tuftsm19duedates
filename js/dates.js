var listOfAssignments = {
	"assignments": [
	{
		"id":1,
		"name":"Limb/Back Lab Quiz",
		"course":"Anatomy",
		"due":new Date(2015,12,11,09,00,00,00)
	},	
	{
		"id":10,
		"name":"SAT Modules",
		"course":"SAT",
		"due":new Date(2015,12,31,23,59,00,00)
	},
]
};

$(document).ready(function(){

	for(i = 0; i < listOfAssignments.assignments.length; i++){
		var dueDay = listOfAssignments.assignments[i].due.getDate();
		var dueMonth = listOfAssignments.assignments[i].due.getMonth() + 1;
		var dueDate = listOfAssignments.assignments[i].due.toDateString().split(' 201')[0];
		var now = new Date();
		var desc = listOfAssignments.assignments[i].name;
		if(now < listOfAssignments.assignments[i].due){
			$("#upcoming-date").append('<p>' + dueDate + '</p>');
			$("#upcoming-desc").append('<p>' + desc + '</p>');		
			$("#mobile-dates").append('<p>' + dueMonth + '/' + dueDay + ' ~ ' + desc + '</p>');
		}
	}

});