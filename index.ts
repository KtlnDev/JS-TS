import fs from "fs";

let numbers: Array<string> = [];
let base1: Array<string> = [];
let base2: Array<string> = [];
let convertedNumbers: Array<string> = [];
let index = 0;

async function convertFromBaseToBase(
  str: number,
  fromBase: number,
  toBase: number
) {
  let num = parseInt(str.toString(), fromBase);
  return num.toString(toBase);
}

console.log("read status: start");

fs.readFile("./ChangeBaseNumbers.csv", "utf8", async (err, file) => {
  let row = file.split("\n");

  for (let i = 1; i < row.length; i++) {
    let line = row[i].split(",");
    numbers[index] = line[0];
    base1[index] = line[1];
    base2[index] = line[2];
    index++;
  }

  console.log("read status: done");
  //start time
  let start = new Date().getTime();
  console.time();
  for (let i = 0; i < index; i++) {
    convertedNumbers[i] = await convertFromBaseToBase(
      parseInt(numbers[i]),
      parseInt(base1[i]),
      parseInt(base2[i])
    );
  }
  let end = new Date().getTime();
  console.log("conversion status: done");

  let result = fs.createWriteStream("./result.csv");
  result.write(convertedNumbers.toString());

  console.log(end - start);
});
