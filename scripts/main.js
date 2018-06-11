function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

r(function(){
   const date = new Date();
   console.log(date);
   day(date);
   month(date);
   season(date);
   year(date);
   year400th(date);
});

function day(date) {
   const today = date.getDate();
   const dayMarkers = document.getElementById("days").children;
   console.log(dayMarkers.length + " days");
   dayMarkers[today].classList.add("active");
}

function month(date) {
   const thisMonth = date.getMonth();
   const monthMarkers = document.getElementById("months").children;
   monthMarkers[thisMonth].classList.add("active");
   console.log(monthMarkers.length + " months");
}

function season(date) {
   var thisSeason = date.getMonth() + 1;
   thisSeason = Math.floor((thisSeason / 12 * 4)) % 4;
   const seasonMarkers = document.getElementById("seasons").children;
   seasonMarkers[thisSeason].classList.add("active");
   console.log(seasonMarkers.length + " seasons");
}

function year(date) {
   const thisYearHundred = date.getFullYear() - 2000;
   const yearMarkers = document.getElementById("years").children;
   yearMarkers[thisYearHundred].classList.add("active");
   console.log(yearMarkers.length + " years");
}

function year400th(date) {
   const thisYear400th = Math.floor(date.getFullYear()/400);
   const year400thMarkers = document.getElementById("years400").children;
   year400thMarkers[thisYear400th].classList.add("active");
   console.log(year400thMarkers.length + " year400");
}
