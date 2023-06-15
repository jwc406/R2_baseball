const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomNumbers() {
  let numbers = [];
  for (let i = 0; numbers.length < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
  }
  return numbers;
}

function baseballGame(ranArr, attemps) {
  rl.question(`${attemps}번째 시도 : `, (line) => {
    let inputArr = line.split("");
    inputArr = inputArr.map((e) => {
      return Number(e);
    });

    if (inputArr.length !== 3) {
      console.log("3자리 숫자만 입력하세요!");
      baseballGame(ranArr, attemps);
      return;
    }

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (ranArr[i] === inputArr[i]) strike++;
      else if (ranArr.includes(inputArr[i])) ball++;
    }

    console.log(ball + "B" + strike + "S");

    if (strike === 3) {
      console.log(attemps + "번만에 맞히셨습니다!");
      rl.close();
    } else {
      attemps++;
      baseballGame(ranArr, attemps);
    }
  });
}

rl.on("close", () => {
  console.log("게임을 종료합니다.");
});

function gameStart() {
  let ranArr = getRandomNumbers();
  let attemps = 1;

  console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞혀보세요!");
  baseballGame(ranArr, attemps);
}

gameStart();
