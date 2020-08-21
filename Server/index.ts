import express, { response, request } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/sum/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let result = number1 + number2;
  response.json(result);
});

app.get("/sub/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let result = number1 - number2;
  response.json(result);
});

app.get("/mul/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let result = number1 * number2;
  response.json(result);
});

app.get("/div/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let result = number1 / number2;
  response.json(result);
});

app.post("/exponential", (request, response) => {
  let numbers = {
    base: request.body.base ? request.body.base : "N/A",
    exp: request.body.exp ? request.body.exp : "N/A",
  };
  let result = Math.pow(numbers.base, numbers.exp);
  response.json(result);
});

app.post("/log", (request, response) => {
  let number = request.body.number ? request.body.number : "N/A";
  let result = Math.log(number);
  response.json(result);
});

app.post("/sqrt", (request, response) => {
  let number = request.body.number ? request.body.number : "N/A";
  let result = Math.sqrt(number);
  response.json(result);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
