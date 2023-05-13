var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;

	
	
	
};
function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> "
}
function displayScores()
{
	var scoreString = "";
	for(var i=0;i<scores.length;i++)
	{
		scoreString+=names[i]+" "+scores[i]+"<br />";
	}
	document.getElementById("scores_table").innerHTML="<h2> Scores </h2><br />"+scoreString;
}
function addScore()
{
	var Name = $("name").value;
	if(Name=="")
	{
		alert("Please enter a name");
		return;
	}
	else
	{
		names.push(Name);
	}

	var Score = $("score").value;
	if(Number.isInteger(parseInt(Score)))
	{
		if(Score => 0 || Score<=100)
		{
			scores.push(parseInt(Score));
		}
		else if(Score<0 || Score>100)
		{
			alert("Please enter a score Between 0 & 100");
			
		}
	}
	else
	{
		alert("Please enter avalid Score");
		
	}
	$("name").value = ""; 
	$("score").value = ""; 
	moveCursorToName();
}



window.addEventListener('load', function() {
    moveCursorToName();
});

function moveCursorToName()
 {
    document.getElementById('name').focus();
}