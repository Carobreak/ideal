function check() {
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var d=(q1*q2*q3*q4*q5)*100;
	var e=(d/100)*24317838;
	var result=document.getElementById("result");
	var quiz=document.getElementById("quiz");

		result.textContent="Vôtre chance de trouver l'homme idéal est de " + d.toFixed(2) +"%.";
		result2.textContent=parseInt(e).toLocaleString() + " hommes correspondent à vos critères en France.";
		
/*		if (d = "100") {
		result3.textContent="Vous n'avez pas répondu à toutes les questions...";
		}
    	{else
    		result3.textContent="...";
		}
*/} 
