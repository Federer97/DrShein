var attivo = true;
var mobile = false;
var tablet = false;
var dimensione = window.matchMedia("(max-width: 600px)"); 
var dimensione2 = window.matchMedia("(max-width: 1023px)"); 


function controlloMediaQuery() {
  if (dimensione.matches) { // If media query matches
    mobile = true;
  } else if (dimensione2.matches){
    mobile = false;
    tablet = true;
  }
  else{
    mobile = false;
    tablet = false;
  }
  
  //vestiti();
  scritta();
} 

/*
let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cards",
      start: "top 75%", 
      end: "bottom 25%", 
    }
  });

//var tl = gsap.timeline({});
tl.addLabel("start")
 .from(".flash", {duration: 1.2, ease:"bounce", y: 1000})
 .from(".helen", {duration: 1.2, ease:"bounce", y: 1000}, "-=0.9")
 .from(".bob", {duration: 1.2, ease:"bounce", y: 1000}, "-=0.9")
 .from(".violet", {duration: 1.2, ease:"bounce", y: 1000}, "-=0.9")
 .from(".jack", {duration: 1.2, ease:"bounce", y: 1000}, "-=0.9");
 
let t0 = gsap.timeline({
    scrollTrigger: {
      trigger: "#novita",
      start: "top 75%", 
      end: "bottom 25%", 
    }
  }); 
  
//var t0 = gsap.timeline({});
t0.addLabel("start")
 .from("#novita", {duration: 2.5, scale: 0.2, rotation: 3600});
 */
 
function flip(scelta){

var t2 = gsap.timeline({});
t2.to("#"+scelta, {duration:1, rotationY: "+=180"});

}

function unlockLevel(){
	
	switch(getElementById("").value){
		
		case "x": 
			alert("Nuova missione disponibile");
			document.getElementsByClassName("helen")[0].style.display="inline-block";
			document.getElementsByClassName("helen")[0].style.marginTop="110%";
			document.getElementsByClassName("helen2")[0].style.display="inline-block";
			document.getElementsByClassName("helen2")[0].style.marginTop="110%";
		break;
		case "y": 
			alert("Nuova missione disponibile");
			document.getElementsByClassName("helen")[0].style.display="inline-block";
			document.getElementsByClassName("helen")[0].style.marginTop="110%";
			document.getElementsByClassName("helen2")[0].style.display="inline-block";
			document.getElementsByClassName("helen2")[0].style.marginTop="110%";
		break;
		default:
		alert(livello);
	}
	
}


  /*.from(".Tour2", {duration: 1, y:100}, "-=0.9")
  .from(".pine2", {duration: 1, y:100}, "-=0.9")
  .from(".car", {duration: 2, x:1000});
tx.to(".car", {duration: 2, x: -1000}, "+=5");*/

function carica(){
    setTimeout(function(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("vista").style.display = "inline"; }, 1000);
} 