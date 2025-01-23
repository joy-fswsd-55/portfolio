const greetingElement = document.getElementById("greeting");
// for the current time

const currenthour = new Date().getHours();
// for the greeting message

let greetingMessage;

//condition for greeting message

if (currenthour < 12) {
  greetingMessage = "Good Morning !!";
} else if (currenthour < 18) {
  greetingMessage = "Good Afternoon !!";
} else {
  greetingMessage = "Good Evening !!";
}

greetingElement.textContent = greetingMessage;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/*
multiline comments

*/