var listOfExams = {
	"exams":[
	{
		"exam":"Med Foundations I",
		"id":"MF1E3",
		"description":"Exam 3",
		"modules":["Biochemistry: Lipid Metabolism (25) - Heme (32)", 
					"Histology: Cardiovascular (7) - Gastrointestinal III (12)", 
					"Immunology: Innate (1) - Cellular Cooperation (8)", 
					"Microbiology: Intro (1) - Pseudomonas/CF (6)"],
		"date": new Date(2015,9,19,08,15,00,00)
	},
	{
		"exam":"MIDPR OSCE Final",
		"id":"MIDPR1",
		"description":"MIDPR Final Exam",
		"modules":["Everything"],
		"date": new Date(2015,10,9,13,00,00)
	},	
	{
		"exam":"MIDPR OSCE Final",
		"id":"MIDPR2",
		"description":"MIDPR Final Exam",
		"modules":["Everything"],
		"date": new Date(2015,10,10,13,00,00)
	},
	{
		"exam":"Epi/Bio",
		"id":"EPIBIO",
		"description":"Final Exam",
		"modules":["Everything"],
		"date": new Date(2015,10,12,08,15,00,00)	
	},
	{
		"exam":"Med Foundations I",
		"id":"MF1E4",
		"description":"Exam 4",
		"modules":["Biochemistry: Protein Digestion (33) - Diabetes (42)", 
					"Histology: Respiratory (12) - Male Reproductive II(21)", 
					"Immunology: Complement (9) - Immunodifficiency II (16)", 
					"Microbiology: Antibiotic Resitance (7) - Antibiotic Stewardship (13)"],
		"date": new Date(2015,10,13,08,15,00,00)		
	},	
	{
		"exam":"Med Foundations II",
		"id":"MF2E1",
		"description":"Exam 1",
		"modules":["None Uploaded to Tusk Yet"],
		"date": new Date(2015,10,24,08,45,00,00)		
	},	
	{
		"exam":"Med Foundations II",
		"id":"MF2E2",
		"description":"Exam 2",
		"modules":["None Uploaded to Tusk Yet"],
		"date": new Date(2015,11,18,08,45,00,00)		
	},
]
};

$(document).ready(function(){

	for(i=0; i < listOfExams.exams.length; i++){
		var exam_desc = listOfExams.exams[i].description;
		var exam_name = listOfExams.exams[i].exam;
		var exam_dueDay = listOfExams.exams[i].date.getDate();
		var exam_dueMonth = listOfExams.exams[i].date.getMonth() + 1;
		var exam_dueDate = listOfExams.exams[i].date.toDateString().split(' 201')[0];
		var exam_modules = listOfExams.exams[i].modules;
		
		var exam_id = listOfExams.exams[i].id;
		
		
		var open_anchor = '<a class="btn btn-default btn-lg" data-toggle="collapse" href="#' + exam_id + '" aria-expanded="false" aria-controls="collapseExample">';
		var open_collapse = '<div class="collapse" id="' + exam_id + '"><div class="well">';
		var close_two_div = '</div></div>';
		var toInsert = open_anchor + exam_name + ': ' + exam_desc + ' ~ ' + exam_dueDate + '</a>' + open_collapse;
		for(j = 0; j < exam_modules.length; j++){
			toInsert += exam_modules[j] + '<br>';
		}
		toInsert += close_two_div + '<br><br>';
		
		$("#upcoming-exams").append(toInsert);
		
	
	}

});