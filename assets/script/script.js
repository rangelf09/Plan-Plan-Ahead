var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));
var CurrentTime = $("#currentTime").text(today.format("h:mm a"));
var actualTime = today.hour()
// console.log(actualTime);

// Start of 7am clock
var sevenAM = $("#seven");
var saveDocument = $("#saveBtn1");
var sevenTime = "Seven AM:";
var seven = sevenAM.val();
// var myTime = today.format("h:mm:ss a");

sevenAM.text(localStorage.getItem(sevenTime));

$(saveDocument).click(function (e) { 
  e.preventDefault(e);
  const sevenTime = "Seven AM:";
  const seven = sevenAM.val();

 
  // console.log(sevenTime, seven);
  localStorage.setItem(sevenTime, seven);
  sevenAM.text(localStorage.getItem(sevenTime));
});

function itsSevenAm() {
  if (actualTime === 7) {
    sevenAM.css("background", "limegreen");
  } else {
    sevenAM.css("background", "red");
  }
};
itsSevenAm();

// Start of 8am clock
var eightAM = $("#eight");
var saveDocument2 = $("#saveBtn3");
var eightTime = "Eight AM:";
var eight = eightAM.val();
// var myTime = today.format("h:mm:ss a");

eightAM.text(localStorage.getItem(eightTime));

$(saveDocument2).click(function (e) { 
  e.preventDefault(e);
  const eightTime = "Eight AM:";
  const eight = eightAM.val();

 
  localStorage.setItem(eightTime, eight);
  eightAM.text(localStorage.getItem(eightTime));
});

function itsEightAm() {
  if (actualTime === 8) {
    eightAM.css("background", "limegreen");
  } else {
    eightAM.css("background", "red");
  }
};
itsEightAm();

// Start of 9am clock
var eightAM = $("#eight");
var saveDocument2 = $("#saveBtn3");
var eightTime = "Eight AM:";
var eight = eightAM.val();
// var myTime = today.format("h:mm:ss a");

eightAM.text(localStorage.getItem(eightTime));

$(saveDocument2).click(function (e) { 
  e.preventDefault(e);
  const eightTime = "Eight AM:";
  const eight = eightAM.val();

 
  localStorage.setItem(eightTime, eight);
  eightAM.text(localStorage.getItem(eightTime));
});

function itsEightAm() {
  if (actualTime === 8) {
    eightAM.css("background", "limegreen");
  } else {
    eightAM.css("background", "red");
  }
};
itsEightAm();

