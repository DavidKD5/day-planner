var eventInput = $(".eventInput");
var eventInput2 = $(".eventInput2");
var eventInput3 = $(".eventInput3");
var eventInput4 = $(".eventInput4");
var eventInput5 = $(".eventInput5");
var eventInput6 = $(".eventInput6");
var eventInput7 = $(".eventInput7");
var eventInput8 = $(".eventInput8");
var eventInput9 = $(".eventInput9");
var btn = $(".btn");

var savedEvent = localStorage.getItem("saveEvent");
var savedEvent2 = localStorage.getItem("saveEvent2");
var savedEvent3 = localStorage.getItem("saveEvent3");
var savedEvent4 = localStorage.getItem("saveEvent4");
var savedEvent5 = localStorage.getItem("saveEvent5");
var savedEvent6 = localStorage.getItem("saveEvent6");
var savedEvent7 = localStorage.getItem("saveEvent7");
var savedEvent8 = localStorage.getItem("saveEvent8");
var savedEvent9 = localStorage.getItem("saveEvent9");

function saveEvent() {
  var eventInput = $(".eventInput");
  localStorage.setItem("saveEvent", eventInput.val());
  alert("Event Saved To Local Storage!");
}
$(".saveBtn").click(saveEvent);
eventInput.val(savedEvent);

function saveEvent2() {
  var eventInput2 = $(".eventInput2");
  localStorage.setItem("saveEvent2", eventInput2.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn2").click(saveEvent2);
eventInput2.val(savedEvent2);

function saveEvent3() {
  var eventInput3 = $(".eventInput3");
  localStorage.setItem("saveEvent3", eventInput3.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn3").click(saveEvent3);
eventInput3.val(savedEvent3);

function saveEvent4() {
  var eventInput4 = $(".eventInput4");
  localStorage.setItem("saveEvent4", eventInput4.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn4").click(saveEvent4);
eventInput4.val(savedEvent4);

function saveEvent5() {
  var eventInput5 = $(".eventInput5");
  localStorage.setItem("saveEvent5", eventInput5.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn5").click(saveEvent5);
eventInput5.val(savedEvent5);

function saveEvent6() {
  var eventInput6 = $(".eventInput6");
  localStorage.setItem("saveEvent6", eventInput6.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn6").click(saveEvent6);
eventInput6.val(savedEvent6);

function saveEvent7() {
  var eventInput7 = $(".eventInput7");
  localStorage.setItem("saveEvent7", eventInput7.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn7").click(saveEvent7);
eventInput7.val(savedEvent7);

function saveEvent8() {
  var eventInput8 = $(".eventInput8");
  localStorage.setItem("saveEvent8", eventInput8.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn8").click(saveEvent8);
eventInput8.val(savedEvent8);

function saveEvent9() {
  var eventInput9 = $(".eventInput9");
  localStorage.setItem("saveEvent9", eventInput9.val());
  alert("Event Saved To Local Storage");
}
$(".saveBtn9").click(saveEvent9);
eventInput9.val(savedEvent9);
