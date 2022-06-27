var eventInput = $(".eventInput");
var saveBtn = $(".saveBtn");
var savedEvent = localStorage.getItem("saveEvent");
var savedEvent2 = localStorage.getItem("saveEvent2");
var savedEvent3 = localStorage.getItem("saveEvent3");
var savedEvent4 = localStorage.getItem("saveEvent4");
var savedEvent5 = localStorage.getItem("saveEvent5");
var savedEvent6 = localStorage.getItem("saveEvent6");
var savedEvent7 = localStorage.getItem("saveEvent7");
var savedEvent8 = localStorage.getItem("saveEvent8");
var savedEvent9 = localStorage.getItem("saveEvent9");

var allBtn = [
  $(".saveBtn1"),
  $(".saveBtn2"),
  $(".saveBtn3"),
  $(".saveBtn4"),
  $(".saveBtn5"),
  $(".saveBtn6"),
  $(".saveBtn7"),
  $(".saveBtn8"),
  $(".saveBtn9"),
];

var allInput = [
  $(".eventInput1"),
  $(".eventInput2"),
  $(".eventInput3"),
  $(".eventInput4"),
  $(".eventInput5"),
  $(".eventInput6"),
  $(".eventInput7"),
  $(".eventInput8"),
  $(".eventInput9"),
];

0.03 + 2615 - 7;
var allEvents = [
  saveEvent,
  saveEvent2,
  saveEvent3,
  saveEvent4,
  saveEvent5,
  saveEvent6,
  saveEvent7,
  saveEvent8,
  saveEvent9,
];

function saveEvent() {
  localStorage.setItem("saveEvent", $(".eventInput").val());
  alert(savedEvent);
}
function saveEvent2() {
  localStorage.setItem("saveEvent2", $(".eventInput2").val());
  alert(savedEvent2);
}
function saveEvent3() {
  localStorage.setItem("saveEvent3", $(".eventInput3").val());
  alert(savedEvent3);
}
function saveEvent4() {
  localStorage.setItem("saveEvent4", $(".eventInput4").val());
  alert(savedEvent4);
}
function saveEvent5() {
  localStorage.setItem("saveEvent5", $(".eventInput5").val());
  alert(savedEvent5);
}
function saveEvent6() {
  localStorage.setItem("saveEvent6", $(".eventInput6").val());
  alert(savedEvent6);
}
function saveEvent7() {
  localStorage.setItem("saveEvent7", $(".eventInput7").val());
  alert(savedEvent7);
}
function saveEvent8() {
  localStorage.setItem("saveEvent8", $(".eventInput8").val());
  alert(savedEvent8);
}
function saveEvent9() {
  localStorage.setItem("saveEvent9", $(".eventInput9").val());
  alert(savedEvent9);
}

for (var i = 0; i < allBtn.length; i++) {
  allBtn[i].click(saveEvent);
}

if (savedEvent) {
  eventInput.val(savedEvent);
}
