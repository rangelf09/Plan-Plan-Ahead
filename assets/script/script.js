var sevenAM = document.getElementById("seven");
var saveDocument = document.getElementById("saveBtn");
var sevenTime = "Seven AM:";
var seven = sevenAM.value;

sevenAM.innerHTML = localStorage.getItem(sevenTime);

saveDocument.addEventListener("click", function (event) {
  event.preventDefault(event);
  const sevenTime = "Seven AM:";
  const seven = sevenAM.value;

  // console.log(time);
  // console.log(reminder);

  localStorage.setItem(sevenTime, seven);
  location.reload();
  sevenAM.innerHTML = localStorage.getItem(sevenTime);
});

// Start of 8AM
var eightAM = document.getElementById("eight");
var saveDocument2 = document.getElementById("saveBtn2");
var eightTime = "Eigth AM:";
var eight = eightAM.value;

eightAM.innerText = localStorage.getItem(eightTime);

saveDocument2.addEventListener("click", function (event) {
  event.preventDefault(event);
  var eightTime = "Eight AM:";
  var eight = eightAM.value;

  // console.log(eightTime);
  // console.log(eight);

  localStorage.setItem(eightTime, eight);
  // location.reload();

  eightAM.innerHTML = localStorage.getItem(eightTime);
  console.log(localStorage.getItem(eightTime));
});
