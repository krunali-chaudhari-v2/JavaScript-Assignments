function getControlFromButton() {
  let num1 = prompt("Enter the first number");
  num1 = Number.parseInt(num1);
  let num2 = prompt("Enter the second number");
  num2 = Number.parseInt(num2);
  let sum = num1 + num2;
  console.log(`The Addition of ${num1} and ${num2} is ${sum}`);
  let sub = num1 - num2;
  console.log(`The Substraction of ${num1} and ${num2} is ${sub}`);
  let mul = num1 * num2;
  console.log(`The Multiplication of ${num1} and ${num2} is ${mul}`);
  let div = num1 / num2;
  console.log(`The Division of ${num1} and ${num2} is ${div}`);
}
