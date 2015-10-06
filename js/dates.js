var listOfAssignments = {
	"assignments": [
		
	{
		"id":8,
		"name":"Microbiology Small Group",
		"course":"Microbiology",
		"due":new Date(2015,9,7,23,59,00,00)
	},		
	{
		"id":5,
		"name":"Ethics Quiz & Case Analysis 1",
		"course":"Ethics",
		"due":new Date(2015,9,14,23,59,00,00)
	},	
	{
		"id":9,
		"name":"Microbiology Small Group",
		"course":"Microbiology",
		"due":new Date(2015,9,14,23,59,00,00)
	},	
	{
		"id":2,
		"name":"Epi/Bio Homework Quiz 3",
		"course":"EpiBio",
		"due":new Date(2015,9,26,23,00,00,00)
	},
	{
		"id":3,
		"name":"Epi/Bio Homework Quiz 4",
		"course":"EpiBio",
		"due":new Date(2015,10,2,23,59,00,00)
	},	
	{
		"id":4,
		"name":"Epi/Bio Paper Critique",
		"course":"EpiBio",
		"due":new Date(2015,10,2,23,59,00,00)
	},	
	{
		"id":10,
		"name":"Microbiology Small Group",
		"course":"Microbiology",
		"due":new Date(2015,10,4,23,59,00,00)
	},
	{
		"id":11,
		"name":"Microbiology Small Group",
		"course":"Microbiology",
		"due":new Date(2015,10,6,23,59,00,00)
	},
	{
		"id":6,
		"name":"SAT Modules",
		"course":"SAT",
		"due":new Date(2016,0,1,23,59,00,00)
	},
	{
		"id":7,
		"name":"Ethics Quiz & Case Analysis 2",
		"course":"Ethics",
		"due":new Date(2016,2,9,23,59,00,00)
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