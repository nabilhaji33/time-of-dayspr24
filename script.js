
let myDate = new Date();
let myHour = myDate.getHours();
let myGreeting = "";
let myColor = "";
let myPic = "";

if ((myHour >= 5 && myHour, 12)) {
  myGreeting = "Good Morining";
  myColor = "orange";
  myPic = "morning.jpg";
} else if (myHour > 12 && myHour < 18) {
  myGreeting = "Good Afternoon";
  myColor = "yellow";
  myPic = "afternoon.jpg";
} else if (myHour > 18 && myHour < 23) {
  myGreeting = "Good Evening";
  myColor = "blue";
  myPic = "evening.jpg";
} else {
  myGreeting = "Good night";
  myColor = "purble";
  myPic = "night.jpg";
}