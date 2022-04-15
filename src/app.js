/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["Doom Guy", "Master Chief", "Kratos", "Captain Price"];
  let action = ["dismembered", "blew up", "killed", "360 no scoped"];
  let what = ["a demon", "the Gods", "the Covenant"];
  let when = [
    "before the class",
    "20 minutes ago",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function excusesForWork() {
    document.getElementById("excuse").innerHTML =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      action[Math.floor(Math.random() * action.length)] +
      " " +
      what[Math.floor(Math.random() * what.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];
  }

  document.getElementById("myBtn").addEventListener("click", excusesForWork);

  console.log("They Called Him the Excuse Slayer!");
};
