var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));
var CurrentTime = $("#currentTime").text(today.format("h:mm a"));
var actualTime = today.hour()
console.log(actualTime);

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
  if (actualTime < 7){
    sevenAM.css("background", "grey");
  } else if (actualTime === 7) {
    sevenAM.css("background", "limegreen");
  } else {
    sevenAM.css("background", "red");
  }
};
itsSevenAm();

// Start of 8am clock
var eightAM = $("#eight");
var saveDocument2 = $("#saveBtn2");
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
  if (actualTime < 8){
    sevenAM.css("background", "grey");
  } else if (actualTime === 8) {
    eightAM.css("background", "limegreen");
  } else {
    eightAM.css("background", "red");
  }
};
itsEightAm();

// Start of 9am clock
var nineAM = $("#nine");
var saveDocument3 = $("#saveBtn3");
var nineTime = "Nine AM:";
var nine = nineAM.val();
// var myTime = today.format("h:mm:ss a");

nineAM.text(localStorage.getItem(nineTime));

$(saveDocument3).click(function (e) { 
  e.preventDefault(e);
  const nineTime = "Nine AM:";
  const nine = nineAM.val();

 
  localStorage.setItem(nineTime, nine);
  nineAM.text(localStorage.getItem(nineTime));
});

function itsNineAm() {
  if (actualTime < 9){
    nineAM.css("background", "grey");
  } else if (actualTime === 9) {
    nineAM.css("background", "limegreen");
  } else {
    nineAM.css("background", "red");
  }
};
itsNineAm();

// Start of 10am clock
var tenAM = $("#ten");
var saveDocument4 = $("#saveBtn4");
var tenTime = "Ten AM:";
var ten = tenAM.val();
// var myTime = today.format("h:mm:ss a");

tenAM.text(localStorage.getItem(tenTime));

$(saveDocument4).click(function (e) { 
  e.preventDefault(e);
  const tenTime = "Ten AM:";
  const ten = tenAM.val();

 
  localStorage.setItem(tenTime, ten);
  tenAM.text(localStorage.getItem(tenTime));
});

function itsTenAm() {
  if (actualTime < 10){
    tenAM.css("background", "grey");
  } else if (actualTime === 10) {
    tenAM.css("background", "limegreen");
  } else {
    tenAM.css("background", "red");
  }
};
itsTenAm();


// Start of 11am clock
var elevenAM = $("#eleven");
var saveDocument5 = $("#saveBtn5");
var elevenTime = "Eleven AM:";
var eleven = elevenAM.val();
// var myTime = today.format("h:mm:ss a");

elevenAM.text(localStorage.getItem(elevenTime));

$(saveDocument5).click(function (e) { 
  e.preventDefault(e);
  const elevenTime = "Eleven AM:";
  const eleven = elevenAM.val();

 
  localStorage.setItem(elevenTime, eleven);
  elevenAM.text(localStorage.getItem(elevenTime));
});

function itsElevenAm() {
  if (actualTime < 11){
    elevenAM.css("background", "grey");
  } else if (actualTime === 11) {
    elevenAM.css("background", "limegreen");
  } else {
    elevenAM.css("background", "red");
  }
};
itsElevenAm();


// Start of 12am clock
var twelveAM = $("#twelve");
var saveDocument6 = $("#saveBtn6");
var twelveTime = "Twelve AM:";
var twelve = twelveAM.val();
// var myTime = today.format("h:mm:ss a");

twelveAM.text(localStorage.getItem(twelveTime));

$(saveDocument6).click(function (e) { 
  e.preventDefault(e);
  const twelveTime = "Twelve AM:";
  const twelve = twelveAM.val();

 
  localStorage.setItem(twelveTime, twelve);
  twelveAM.text(localStorage.getItem(twelveTime));
});

function itsTwelveAm() {
  if (actualTime < 12){
    twelveAM.css("background", "grey");
  } else if (actualTime === 12) {
    twelveAM.css("background", "limegreen");
  } else {
    twelveAM.css("background", "red");
  }
};
itsTwelveAm();


// Start of 13pm clock
var thirteenPM = $("#thirteen");
var saveDocument7 = $("#saveBtn7");
var thirteenTime = "Thirteen PM:";
var thirteen = thirteenPM.val();
// var myTime = today.format("h:mm:ss a");

thirteenPM.text(localStorage.getItem(thirteenTime));

$(saveDocument7).click(function (e) { 
  e.preventDefault(e);
  const thirteenTime = "Thirteen PM:";
  const thirteen = thirteenPM.val();

 
  localStorage.setItem(thirteenTime, thirteen);
  thirteenPM.text(localStorage.getItem(thirteenTime));
});

function itsThirteenPm() {
  if (actualTime < 13){
    thirteenPM.css("background", "grey");
  } else if (actualTime === 13) {
    thirteenPM.css("background", "limegreen");
  } else {
    thirteenPM.css("background", "red");
  }
};
itsThirteenPm();


// Start of 14pm clock
var fourteenPM = $("#fourteen");
var saveDocument8 = $("#saveBtn8");
var fourteenTime = "Fourteen PM:";
var fourteen = fourteenPM.val();
// var myTime = today.format("h:mm:ss a");

fourteenPM.text(localStorage.getItem(fourteenTime));

$(saveDocument8).click(function (e) { 
  e.preventDefault(e);
  const fourteenTime = "Fourteen PM:";
  const fourteen = fourteenPM.val();

 
  localStorage.setItem(fourteenTime, fourteen);
  fourteenPM.text(localStorage.getItem(fourteenTime));
});

function itsFourteenPm() {
  if (actualTime < 14){
    fourteenPM.css("background", "grey");
  } else if (actualTime === 14) {
    fourteenPM.css("background", "limegreen");
  } else {
    fourteenPM.css("background", "red");
  }
};
itsFourteenPm();


// Start of 15pm clock
var fifteenPM = $("#fifteen");
var saveDocument9 = $("#saveBtn9");
var fifteenTime = "Fifteen PM:";
var fifteen = fifteenPM.val();
// var myTime = today.format("h:mm:ss a");

fifteenPM.text(localStorage.getItem(fifteenTime));

$(saveDocument9).click(function (e) { 
  e.preventDefault(e);
  const fifteenTime = "Fifteen PM:";
  const fifteen = fifteenPM.val();

 
  localStorage.setItem(fifteenTime, fifteen);
  fifteenPM.text(localStorage.getItem(fifteenTime));
});

function itsFifteenPm() {
  if (actualTime < 15){
    fifteenPM.css("background", "grey");
  } else if (actualTime === 15) {
    fifteenPM.css("background", "limegreen");
  } else {
    fifteenPM.css("background", "red");
  }
};
itsFifteenPm();


// Start of 16pm clock
var sixteenPM = $("#sixteen");
var saveDocument10 = $("#saveBtn10");
var sixteenTime = "Sixteen PM:";
var sixteen = sixteenPM.val();
// var myTime = today.format("h:mm:ss a");

sixteenPM.text(localStorage.getItem(sixteenTime));

$(saveDocument10).click(function (e) { 
  e.preventDefault(e);
  const sixteenTime = "Sixteen PM:";
  const sixteen = sixteenPM.val();

 
  localStorage.setItem(sixteenTime, sixteen);
  sixteenPM.text(localStorage.getItem(sixteenTime));
});

function itsSixteenPm() {
  if (actualTime < 16){
    sixteenPM.css("background", "grey");
  } else if (actualTime === 16) {
    sixteenPM.css("background", "limegreen");
  } else {
    sixteenPM.css("background", "red");
  }
};
itsSixteenPm();


// Start of 17pm clock
var seventeenPM = $("#seventeen");
var saveDocument11 = $("#saveBtn11");
var seventeenTime = "Seventeen PM:";
var seventeen = seventeenPM.val();
// var myTime = today.format("h:mm:ss a");

seventeenPM.text(localStorage.getItem(seventeenTime));

$(saveDocument11).click(function (e) { 
  e.preventDefault(e);
  const seventeenTime = "Seventeen PM:";
  const seventeen = seventeenPM.val();

 
  localStorage.setItem(seventeenTime, seventeen);
  seventeenPM.text(localStorage.getItem(seventeenTime));
});

function itsSeventeenPm() {
  if (actualTime < 17){
    seventeenPM.css("background", "grey");
  } else if (actualTime === 17) {
    seventeenPM.css("background", "limegreen");
  } else {
    seventeenPM.css("background", "red");
  }
};
itsSeventeenPm();


// Start of 18pm clock
var eighteenPM = $("#eighteen");
var saveDocument12 = $("#saveBtn12");
var eighteenTime = "Eighteen PM:";
var eighteen = eighteenPM.val();
// var myTime = today.format("h:mm:ss a");

eighteenPM.text(localStorage.getItem(eighteenTime));

$(saveDocument12).click(function (e) { 
  e.preventDefault(e);
  const eighteenTime = "Eighteen PM:";
  const eighteen = eighteenPM.val();

 
  localStorage.setItem(eighteenTime, eighteen);
  eighteenPM.text(localStorage.getItem(eighteenTime));
});

function itsEighteenPm() {
  if (actualTime < 18){
    eighteenPM.css("background", "grey");
  } else if (actualTime === 18) {
    eighteenPM.css("background", "limegreen");
  } else {
    eighteenPM.css("background", "red");
  }
};
itsEighteenPm();


// Start of 19pm clock
var nineteenPM = $("#nineteen");
var saveDocument13 = $("#saveBtn13");
var nineteenTime = "Nineteen PM:";
var nineteen = nineteenPM.val();
// var myTime = today.format("h:mm:ss a");

nineteenPM.text(localStorage.getItem(nineteenTime));

$(saveDocument13).click(function (e) { 
  e.preventDefault(e);
  const nineteenTime = "Nineteen PM:";
  const nineteen = nineteenPM.val();

 
  localStorage.setItem(nineteenTime, nineteen);
  nineteenPM.text(localStorage.getItem(nineteenTime));
});

function itsNineteenPm() {
  if (actualTime < 19){
    nineteenPM.css("background", "grey");
  } else if (actualTime === 19) {
    nineteenPM.css("background", "limegreen");
  } else {
    nineteenPM.css("background", "red");
  }
};
itsNineteenPm();


// Start of 20pm clock
var twentyPM = $("#twenty");
var saveDocument14 = $("#saveBtn14");
var twentyTime = "Twenty PM:";
var twenty = twentyPM.val();
// var myTime = today.format("h:mm:ss a");

twentyPM.text(localStorage.getItem(twentyTime));

$(saveDocument14).click(function (e) { 
  e.preventDefault(e);
  const twentyTime = "Twenty PM:";
  const twenty = twentyPM.val();

 
  localStorage.setItem(twentyTime, twenty);
  twentyPM.text(localStorage.getItem(twentyTime));
});

function itsTwentyPm() {
  if (actualTime < 20){
    twentyPM.css("background", "grey");
  } else if (actualTime === 20) {
    twentyPM.css("background", "limegreen");
  } else {
    twentyPM.css("background", "red");
  }
};
itsTwentyPm();


// Start of 21pm clock
var twentyonePM = $("#twentyone");
var saveDocument15 = $("#saveBtn15");
var twentyoneTime = "Twentyone PM:";
var twentyone = twentyonePM.val();
// var myTime = today.format("h:mm:ss a");

twentyonePM.text(localStorage.getItem(twentyoneTime));

$(saveDocument15).click(function (e) { 
  e.preventDefault(e);
  const twentyoneTime = "Twentyone PM:";
  const twentyone = twentyonePM.val();

 
  localStorage.setItem(twentyoneTime, twentyone);
  twentyonePM.text(localStorage.getItem(twentyoneTime));
});

function itsTwentyonePm() {
  if (actualTime < 21){
    twentyonePM.css("background", "grey");
  } else if (actualTime === 21) {
    twentyonePM.css("background", "limegreen");
  } else {
    twentyonePM.css("background", "red");
  }
};
itsTwentyonePm();


// Start of 22pm clock
var twentytwoPM = $("#twentytwo");
var saveDocument16 = $("#saveBtn16");
var twentytwoTime = "Twentytwo PM:";
var twentytwo = twentytwoPM.val();
// var myTime = today.format("h:mm:ss a");

twentytwoPM.text(localStorage.getItem(twentytwoTime));

$(saveDocument16).click(function (e) { 
  e.preventDefault(e);
  const twentytwoTime = "Twentytwo PM:";
  const twentytwo = twentytwoPM.val();

 
  localStorage.setItem(twentytwoTime, twentytwo);
  twentytwoPM.text(localStorage.getItem(twentytwoTime));
});

function itsTwentytwoPm() {
  if (actualTime < 22){
    twentytwoPM.css("background", "grey");
  } else if (actualTime === 22) {
    twentytwoPM.css("background", "limegreen");
  } else {
    twentytwoPM.css("background", "red");
  }
};
itsTwentytwoPm();
