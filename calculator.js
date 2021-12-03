let mathFunc = process.argv[2]
let num1 = parseInt(process.argv[3])
let num2 = parseInt(process.argv[4])

switch (mathFunc) {
  case 'add':
    console.log(`${num1 + num2}`)
    break;
  case 'subtract':
    console.log(`${num1 - num2}`)
    break;
  case 'multiply':
    console.log(`${num1 * num2}`)
    break;
  case 'divide':
    console.log(`${num1 / num2}`)
    break;

  default:
    break;
}

