function getControlFromButton() {
  const num = parseInt(prompt("enter a value"));
  let text;
  if (isNaN(num) || num < 1) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  console.log(text);
  let c = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      console.log("number is not prime");
      c = 1;
    }
  }
  if (c == 0) {
    console.log("number is prime");
    return 0;
  } else if (num % 2 == 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}
