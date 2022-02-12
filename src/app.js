/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoex = [Math.floor(Math.random() * who.length)];
  let actionex = [Math.floor(Math.random() * action.length)];
  let whatex = [Math.floor(Math.random() * what.length)];
  let whenex = [Math.floor(Math.random() * when.length)];

  let excuse =
    who[whoex] +
    " " +
    action[actionex] +
    " " +
    what[whatex] +
    " " +
    when[whenex];

  document.getElementById("excuse").innerHTML = excuse;
};
