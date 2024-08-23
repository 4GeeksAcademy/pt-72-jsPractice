/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#default").addEventListener("click", function() {
    generateExcuse("default");
  });
  document.querySelector("#female").addEventListener("click", function() {
    generateExcuse("female");
  });
  document.querySelector("#male").addEventListener("click", function() {
    generateExcuse("male");
  });
  document.querySelector("#none").addEventListener("click", function() {
    generateExcuse("none");
  });
};

const generateExcuse = gender => {
  let allFirstNames = [
    { name: "Luna", gender: "Female" },
    { name: "Amber", gender: "Female" },
    { name: "Leo", gender: "Male" },
    { name: "Iris", gender: "Female" },
    { name: "Asher", gender: "N/a" },
    { name: "Aria", gender: "Female" },
    { name: "Kai", gender: "Male" },
    { name: "Aurora", gender: "Female" },
    { name: "Eli", gender: "Male" },
    { name: "Serena", gender: "Female" },
    { name: "Jasper", gender: "Male" },
    { name: "Nova", gender: "N/a" },
    { name: "Felix", gender: "Male" },
    { name: "Orion", gender: "Male" },
    { name: "Stella", gender: "Female" },
    { name: "Ethan", gender: "Male" },
    { name: "Vera", gender: "Female" },
    { name: "Atlas", gender: "Male" },
    { name: "Zara", gender: "Female" },
    { name: "Miles", gender: "Male" },
    { name: "Cleo", gender: "Female" },
    { name: "Julian", gender: "Male" },
    { name: "Mira", gender: "Female" },
    { name: "Ronan", gender: "Male" }
  ];
  let connectors = [
    "Van der",
    "Del",
    "De",
    "Von",
    "O'",
    "Di",
    "Mc",
    "Mac",
    "La",
    "Le",
    "St.",
    "Fitz",
    "Al-",
    "Du",
    "Dos",
    "El-",
    "D'",
    "Da",
    "Des",
    "San",
    "Ben",
    "Ibn",
    "Ap",
    " L'",
    "A'"
  ];
  let last = [
    "Unicorn",
    "Ice Cream",
    "Rainbow",
    "Shooting Stars",
    "Cotton Candy",
    "Cherry Blossoms",
    "Moonlight",
    "Fireflies",
    "Crystal Snowflakes",
    "Starry Night",
    "Fairy Wings",
    "Sunsets",
    "Lullabies",
    "Candy Canes",
    "Butterflies",
    "Rose Petals",
    "Cotton Clouds",
    "Aurora Borealis",
    "Dewdrops",
    "Teddy Bears",
    "Baby’s Laughter",
    "Honeycomb",
    "Seashells",
    "Fireworks",
    "Dreamcatchers"
  ];

  let first = [];

  if (gender === "default") {
    for (let i = 0; i < allFirstNames.length; i++) {
      first.push(allFirstNames[i].name);
    }
  } else if (gender === "female") {
    for (let i = 0; i < allFirstNames.length; i++) {
      if (allFirstNames[i].gender === "Female") {
        first.push(allFirstNames[i].name);
      }
    }
  } else if (gender === "male") {
    for (let i = 0; i < allFirstNames.length; i++) {
      if (allFirstNames[i].gender === "Male") {
        first.push(allFirstNames[i].name);
      }
    }
  } else if (gender === "none") {
    for (let i = 0; i < allFirstNames.length; i++) {
      if (allFirstNames[i].gender === "N/a") {
        first.push(allFirstNames[i].name);
      }
    }
  }

  let firstIndex = Math.floor(Math.random() * first.length);
  let connectorIndex = Math.floor(Math.random() * connectors.length);
  let lastIndex = Math.floor(Math.random() * last.length);

  let fullName =
    first[firstIndex] + " " + connectors[connectorIndex] + last[lastIndex];
  document.querySelector(".characterName").innerHTML = fullName;
};
