let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
var homes = document.getElementById("darkhome");
var cautions = document.getElementById("darkcaution");
var muscles = document.getElementById("darkmuscles");
var runs = document.getElementById("darkruns");
var mails = document.getElementById("darkmails");
var section1 = document.getElementById("muscle");
var section2 = document.getElementById("contact");
var section02 = document.getElementById("safety");
var section01 = document.getElementById("cardio");
var linkedin = document.getElementById("darklinkedin");
var github = document.getElementById("darkgithub");
var button = document.getElementById("fcf-button");



const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    console.log("I give you dark")
}

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
    console.log("I give you light")
}
if(theme === 'dark'){
    changeThemeToDark()
    document.getElementById("darkhome").src = "images/whitehome.png";
    document.getElementById("darkcaution").src = "images/whitecaution.png";
    document.getElementById("darkmuscles").src = "images/whitemuscles.png";
    document.getElementById("darkruns").src = "images/whiterunning.png";
    document.getElementById("darkmails").src = "images/whitemail.png";
    document.getElementById("muscle").style.backgroundColor = "#5a4e4eb0";
    document.getElementById("muscle").style.color = "white";
    document.getElementById("contact").style.backgroundColor = "#5a4e4eb0";
    document.getElementById("contact").style.color = "white";
    document.getElementById("cardio").style.backgroundColor = "#171717";
    document.getElementById("cardio").style.color = "white";
    document.getElementById("safety").style.backgroundColor = "#171717";
    document.getElementById("safety").style.color = "white";
    document.getElementById("darklinkedin").src = "images/whitelinkedin.png";
    document.getElementById("darkgithub").src = "images/whitegithub.png";
    document.getElementById("fcf-button").style.backgroundColor = "#0657d2";


} else {
    changeThemeToLight()
    document.getElementById("darkhome").src = "images/homes.png";
    document.getElementById("darkcaution").src = "images/caution-sign.png";
    document.getElementById("darkmuscles").src = "images/muscles.png";
    document.getElementById("darkruns").src = "images/running.png";
    document.getElementById("darkmails").src = "images/mails.png";
    document.getElementById("muscle").style.backgroundColor = "#f0f2f5";
    document.getElementById("muscle").style.color = "black";
    document.getElementById("contact").style.backgroundColor = "#f0f2f5";
    document.getElementById("contact").style.color = "black";
    document.getElementById("cardio").style.backgroundColor = "white";
document.getElementById("cardio").style.color = "black";
document.getElementById("safety").style.backgroundColor = "white";
document.getElementById("safety").style.color = "black";
document.getElementById("darklinkedin").src = "images/linkedin.png";
    document.getElementById("darkgithub").src = "images/github-logo.png";
    document.getElementById("fcf-button").style.backgroundColor = "#37d33c";

};

checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
        document.getElementById("darkhome").src = "images/homes.png";
        document.getElementById("darkcaution").src = "images/caution-sign.png";
        document.getElementById("darkmuscles").src = "images/muscles.png";
        document.getElementById("darkruns").src = "images/running.png";
        document.getElementById("darkmails").src = "images/mails.png";
        document.getElementById("muscle").style.backgroundColor = "#f0f2f5";
        document.getElementById("muscle").style.color = "black";
        document.getElementById("contact").style.backgroundColor = "#f0f2f5";
        document.getElementById("contact").style.color = "black";
        document.getElementById("cardio").style.backgroundColor = "white";
    document.getElementById("cardio").style.color = "black";
    document.getElementById("safety").style.backgroundColor = "white";
    document.getElementById("safety").style.color = "black";
    document.getElementById("darklinkedin").src = "images/linkedin.png";
    document.getElementById("darkgithub").src = "images/github-logo.png";
    document.getElementById("fcf-button").style.backgroundColor = "#37d33c";


    }else{
        changeThemeToDark()
        document.getElementById("darkhome").src = "images/whitehome.png";
        document.getElementById("darkcaution").src = "images/whitecaution.png";
        document.getElementById("darkmuscles").src = "images/whitemuscles.png";
        document.getElementById("darkruns").src = "images/whiterunning.png";
        document.getElementById("darkmails").src = "images/whitemail.png";
        document.getElementById("muscle").style.backgroundColor = "#5a4e4eb0";
        document.getElementById("muscle").style.color = "white";
        document.getElementById("contact").style.backgroundColor = "#5a4e4eb0";
        document.getElementById("contact").style.color = "white";
        document.getElementById("cardio").style.backgroundColor = "#171717";
        document.getElementById("cardio").style.color = "white";
        document.getElementById("safety").style.backgroundColor = "#171717";
        document.getElementById("safety").style.color = "white";
        document.getElementById("darklinkedin").src = "images/whitelinkedin.png";
    document.getElementById("darkgithub").src = "images/whitegithub.png";
    document.getElementById("fcf-button").style.backgroundColor = "#0657d2";

    }
   
});

/* let count_deserialized = JSON.parse(localStorage.getItem("counting")); */

function strengths() {
    let count = 0;
let count_serialized = JSON.stringify(count);
      var strength = document.forms[0];
      var txt = "";
      var i;

      for (i = 0; i < strength.length; i++) {
        if (strength[i].checked) {
          txt = txt + strength[i].value + " " + count;
          count ++;
          localStorage.setItem("counting", count);
        }
        else { 
          localStorage.setItem("counting", count);
        }

      }         

      document.getElementById("calcstrengths").innerHTML = "Strengths added: +" + count; 
    } document.getElementById("calcstrengths").textContent =  "Strengths added: +" + localStorage.getItem("counting");

    function cardios() {
      let countc = 0;
  let countc_serialized = JSON.stringify(countc);
        var cardio = document.forms[1];
        var txts = "";
        var c;
  
        for (c = 0; c < cardio.length; c++) {
          if (cardio[c].checked) {
            txts = txts + cardio[c].value + " " + countc;
            countc ++;
            localStorage.setItem("countingcalc", countc);
          }
          else {
            localStorage.setItem("countingcalc", countc);
          }
  
        }         
  
        document.getElementById("calccardios").innerHTML = "Cardios added: +" + countc; 
      } document.getElementById("calccardios").textContent =  "Cardios added: +" + localStorage.getItem("countingcalc");
    



  /* https://stackoverflow.com/questions/51562275/count-total-number-of-checkboxes-what-are-checked-and-show-on-page-via-js */
 /*  var calcs = document.getElementById('calcstrengths');

   function populateStorage() {
    localStorage.setItem('calcstrengths', document.getElementById('calcstrengths').value);
    strengths();
   }

function strengths(){
    var checks = localStorage.getItem('calcstrengths');
    document.getElementById('calcstrengths').value = checks;

  document.getElementById("calcstrengths").textContent = "Strengths added: +" + document.querySelectorAll("input:checked").length;
}
document.querySelectorAll("input[name=strength]").forEach(i=>{
 i.onclick = function(){
  strengths();
 }
})
calcs.onchange = populateStorage();
; */