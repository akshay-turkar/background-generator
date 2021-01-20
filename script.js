var css=document.querySelector("h3");
var col1=document.querySelector(".col1");
var col2=document.querySelector(".col2");
var body=document.getElementById("gradient");


css.textContent=col1.value+" "+col2.value;
function setGradient()
{
		
	body.style.background= 
	"linear-gradient(to right, "
	+col1.value+
	", "
	+col2.value+
	")";
	css.textContent=body.style.background+";";	
}
function def()
{
	body.style.background= "linear-gradient(to right,#FF0000,  #FFFF00";
	col1.value= "#FF0000";
	col2.value= "#FFFF00";
	css.textContent=body.style.background+";";
}
col1.addEventListener("input", setGradient);
col2.addEventListener("input", setGradient);
//onclick and oninput can also be used

