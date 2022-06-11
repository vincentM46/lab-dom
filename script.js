let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector("#main-title").innerHTML = "I am Dom"
  // Part 2
  document.body.style.backgroundColor = "Red"
  // Part 3
  let favList = document.querySelector("#favorite-things");
  favList.removeChild(favList.lastElementChild);
  // Part 4
  let font = document.getElementsByClassName("special-title");
  for (let i = 0; i < font.length; i++) {
    font.fontSize = "2rem"
  }
  // Part 5
  let pastRaces = document.getElementById("past-races");
  Array.from(pastRaces.children).forEach(currentItem => {
    if (currentItem.innerText == "Chicago")
    pastRaces.removeChild(currentItem);
  });
  // Part 6
  el = document.createElement("li");
  el.innerHTML = "Jersey";
  document.getElementById("past-races").appendChild(el);
  // Part 7
  let div = document.createElement("div");
  div.className = 'blog-post purple';
  div.style.textAlign = "center"
  let h1 = document.createElement("h1");
  h1.textContent = 'Jersey';
  let newP = document.createElement("p");
  newP.textContent = "I GOT SOME NICE DONUTS, ATE CHIPOTLE, AND THEN CRASHED MY CAR HERE!"
  div.appendChild(h1);
  div.appendChild(newP)
  document.querySelector("body > div.main").append(div)
}