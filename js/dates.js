var listOfAssignments = {
	"assignments": [
	{
		"id":1,
		"name":"EpiBio Homework Quiz 2",
		"course":"EpiBio",
		"due":new Date(2015,9,5,23,59,00,00)
	},	
	{
		"id":2,
		"name":"EpiBio Homework Quiz 3",
		"course":"EpiBio",
		"due":new Date(2015,9,26,23,00,00,00)
	},
	{
		"id":3,
		"name":"EpiBio Homework Quiz 4",
		"course":"",
		"due":new Date(2015,10,2,23,59,00,00)
	}
]
};

$(document).ready(function(){

	for(i = 0; i < listOfAssignments.assignments.length; i++){
		var dueDay = listOfAssignments.assignments[i].due.getDate();
		var dueMonth = listOfAssignments.assignments[i].due.getMonth();
		var dueDate = listOfAssignments.assignments[i].due.toDateString().split(' 2015')[0];
		//var dueTime = listOfAssignments.assignments[i].due.toTimeString().split(' ')[0];
		var desc = listOfAssignments.assignments[i].name;
		$("#upcoming").append('<li><span class="assDesc">' + desc + '</span> due on <span class="time">' + dueDate + '</li>');
		
	}

});