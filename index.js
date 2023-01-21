const calcKeys = document.querySelectorAll('.key')
const display = document.querySelector('.display')
let currentCalc = []

const writeNumber = (number) => {
	if (currentCalc.length == 3) currentCalc = []

	if (currentCalc.length < 2) {
		currentCalc[0] = currentCalc[0] ? currentCalc[0] + number : number
		display.innerHTML = currentCalc[0]
	} else {
		currentCalc[2] = currentCalc[2] ? currentCalc[2] + number : number
		display.innerHTML = currentCalc[2]
	}
}

const writeOperator = (operator) => {
	if (currentCalc.length == 3) currentCalc = []

	if (currentCalc.length == 0) return
	if (currentCalc.length == 1) {
		currentCalc[1] = operator
	}
}

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => {
	if (num2 == 0) {
		return 'Syntax Error'
	}

	return num1 / num2
}

const writeResult = () => {
	const [num1, operator, num2] = currentCalc

	display.innerHTML = operator(+num1, +num2)
}

const mapOperators = {
	add, subtract, multiply, divide
}

calcKeys.forEach((key) => {
	const type = key.classList[1]

	if (type == 'number') key.addEventListener('click', () => writeNumber(key.innerHTML))
	if (type == 'operator') key.addEventListener('click', () => writeOperator(mapOperators[key.classList[2]]))
	if (type == 'result') key.addEventListener('click', writeResult)
})

