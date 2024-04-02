const elements = document.querySelectorAll("h1, h2, h3, p");

elements.forEach(function (element) {
  element.addEventListener("focus", (e) => {
    console.log(`Element ${e.currentTarget} is focused.`);
  });
});
