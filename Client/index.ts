import fetch from "node-fetch";

const sumURL = "http://localhost:8080/sum/5/8";
const subURL = "http://localhost:8080/sub/144/12";
const mulURL = "http://localhost:8080/mul/7/6";
const divURL = "http://localhost:8080/div/144/12";

fetch(sumURL)
  .then((body) => body.json())
  .then((json) => console.log("Sum: " + json));

fetch(subURL)
  .then((body) => body.json())
  .then((json) => console.log("Subtraction: " + json));

fetch(mulURL)
  .then((body) => body.json())
  .then((json) => console.log("Multiplication: " + json));

fetch(divURL)
  .then((body) => body.json())
  .then((json) => console.log("Division: " + json));

//exponential
const paramsExp = new URLSearchParams();
paramsExp.append("base", "2");
paramsExp.append("exp", "3");
(async () => {
  const response = await fetch("http://localhost:8080/exponential", {
    method: "POST",
    body: paramsExp,
  });
  const json = await response.json();

  console.log("Exponential: " + json);
})();

//log
const paramsLog = new URLSearchParams();
paramsLog.append("number", "10");
(async () => {
  const response = await fetch("http://localhost:8080/log", {
    method: "POST",
    body: paramsLog,
  });
  const json = await response.json();

  console.log("Log: " + json);
})();

//sqrt
const paramsSqrt = new URLSearchParams();
paramsSqrt.append("number", "100");
(async () => {
  const response = await fetch("http://localhost:8080/sqrt", {
    method: "POST",
    body: paramsSqrt,
  });
  const json = await response.json();

  console.log("Sqrt: " + json);
})();
