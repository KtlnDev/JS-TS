import fetch from "node-fetch";

const sumURL = "http://localhost:8080/sum/5/8";
const subURL = "http://localhost:8080/sub/144/12";
const mulURL = "http://localhost:8080/mul/7/6";
const divURL = "http://localhost:8080/div/675/34";

fetch(sumURL)
  .then((body) => body.json())
  .then((json) => console.log(json));

fetch(subURL)
  .then((body) => body.json())
  .then((json) => console.log(json));

fetch(mulURL)
  .then((body) => body.json())
  .then((json) => console.log(json));

fetch(divURL)
  .then((body) => body.json())
  .then((json) => console.log(json));
