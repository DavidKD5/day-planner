// Set needed variables

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
var message = $("#savedEventMessage");

var savedEvent = localStorage.getItem("saveEvent");
var savedEvent2 = localStorage.getItem("saveEvent2");
var savedEvent3 = localStorage.getItem("saveEvent3");
var savedEvent4 = localStorage.getItem("saveEvent4");
var savedEvent5 = localStorage.getItem("saveEvent5");
var savedEvent6 = localStorage.getItem("saveEvent6");
var savedEvent7 = localStorage.getItem("saveEvent7");
var savedEvent8 = localStorage.getItem("saveEvent8");
var savedEvent9 = localStorage.getItem("saveEvent9");
var date = $("#currentDay");
var time = $("#currentTime");

var nineAM = $(".nineAM");
var tenAM = $(".tenAM");
var elevenAM = $(".elevenAM");
var twelvePM = $(".twelvePM");
var onePM = $(".onePM");
var twoPM = $(".twoPM");
var threePM = $(".threePM");
var fourPM = $(".fourPM");
var fivePM = $(".fivePM");

// Configure date and time to be displayed on top of page
const currentDate = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

var today = currentDate.toLocaleString("en-US", options);
var todayTime = currentDate.toLocaleTimeString("en-US", { hour12: true });

time.text(todayTime);
date.text(today);

const timeOptions = {
  timeZone: "Canada/Central",
  hour: "numeric",
};

var shortTime = new Date().toLocaleTimeString("en-IN", timeOptions);
const eventTime = new Date();
let hour = eventTime.getHours();

// Set classes for past, present and future
if (hour > nineAM.text()) {
  eventInput.addClass("past");
  eventInput.removeClass("item");
} else if ((hour = nineAM.text())) {
  eventInput.addClass("present");
} else {
  eventInput.addClass("future");
}

if (hour > tenAM.text()) {
  eventInput2.addClass("past");
  eventInput2.removeClass("item");
} else if ((hour = tenAM.text())) {
  eventInput2.addClass("present");
} else {
  eventInput2.addClass("future");
}

if (hour > elevenAM.text()) {
  eventInput3.addClass("past");
  eventInput3.removeClass("item");
} else if (hour == elevenAM.text()) {
  eventInput3.addClass("present");
} else {
  eventInput3.addClass("future");
}
if (hour > twelvePM.text()) {
  eventInput4.addClass("past");
  eventInput4.removeClass("item");
} else if (hour == twelvePM.text()) {
  eventInput4.addClass("present");
} else {
  eventInput4.addClass("future");
}
if (hour > parseInt(onePM.text()) + 12) {
  eventInput5.addClass("past");
  eventInput5.removeClass("item");
} else if (hour == parseInt(onePM.text()) + 12) {
  eventInput5.addClass("present");
} else {
  eventInput5.addClass("future");
}
if (hour > parseInt(twoPM.text()) + 12) {
  eventInput6.addClass("past");
  eventInput6.removeClass("item");
} else if (hour == parseInt(twoPM.text()) + 12) {
  eventInput6.addClass("present");
} else {
  eventInput6.addClass("future");
}
if (hour > parseInt(threePM.text()) + 12) {
  eventInput7.addClass("past");
  eventInput7.removeClass("item");
} else if (hour == parseInt(threePM.text()) + 12) {
  eventInput7.addClass("present");
} else {
  eventInput7.addClass("future");
}
if (hour > parseInt(fourPM.text()) + 12) {
  eventInput8.addClass("past");
  eventInput8.removeClass("item");
} else if (hour == parseInt(fourPM.text()) + 12) {
  eventInput8.addClass("present");
} else {
  eventInput8.addClass("future");
}
if (hour > parseInt(fivePM.text()) + 12) {
  eventInput9.addClass("past");
  eventInput9.removeClass("item");
} else if (hour == parseInt(fivePM.text()) + 12) {
  eventInput9.addClass("present");
} else {
  eventInput9.addClass("future");
}

// Save events to local storage
function saveEvent() {
  var eventInput = $(".eventInput");
  localStorage.setItem("saveEvent", eventInput.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn").click(saveEvent);
eventInput.val(savedEvent);

function saveEvent2() {
  var eventInput2 = $(".eventInput2");
  localStorage.setItem("saveEvent2", eventInput2.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn2").click(saveEvent2);
eventInput2.val(savedEvent2);

function saveEvent3() {
  var eventInput3 = $(".eventInput3");
  localStorage.setItem("saveEvent3", eventInput3.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn3").click(saveEvent3);
eventInput3.val(savedEvent3);

function saveEvent4() {
  var eventInput4 = $(".eventInput4");
  localStorage.setItem("saveEvent4", eventInput4.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn4").click(saveEvent4);
eventInput4.val(savedEvent4);

function saveEvent5() {
  var eventInput5 = $(".eventInput5");
  localStorage.setItem("saveEvent5", eventInput5.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn5").click(saveEvent5);
eventInput5.val(savedEvent5);

function saveEvent6() {
  var eventInput6 = $(".eventInput6");
  localStorage.setItem("saveEvent6", eventInput6.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn6").click(saveEvent6);
eventInput6.val(savedEvent6);

function saveEvent7() {
  var eventInput7 = $(".eventInput7");
  localStorage.setItem("saveEvent7", eventInput7.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn7").click(saveEvent7);
eventInput7.val(savedEvent7);

function saveEvent8() {
  var eventInput8 = $(".eventInput8");
  localStorage.setItem("saveEvent8", eventInput8.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn8").click(saveEvent8);
eventInput8.val(savedEvent8);

function saveEvent9() {
  var eventInput9 = $(".eventInput9");
  localStorage.setItem("saveEvent9", eventInput9.val());
  message.text("EVENT SAVED TO LOCAL STORAGE!");
}
$(".saveBtn9").click(saveEvent9);
eventInput9.val(savedEvent9);
