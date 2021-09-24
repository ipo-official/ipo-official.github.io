let src = ''
let pos = 0

const eqInput = document.getElementById('eq')

function solve() {
	src = eqInput.value
	pos = 0
	console.log(parseExpr())
}

function parseExpr(parentPrecedence = 0) {
	let left = parsePrimExpr()

	while (true) {
		let op = lexOp()
		let precedence = getPrecedence(op)
		if (precedence <= 0 || precedence < parentPrecedence)
			break;

		let right = parseExpr(precedence)
		left = new Ast(op, left, right)
	}

	return left
}

function parsePrimExpr() {
	let val = lexNum()

	if (peek() == 'x') {
		next()
		return new Ast(AstKind.Var, val, val)
	}

	return val
}

function isNum(c) {
	return c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' || c == '6' || c == '7' || c == '8' || c == '9';
}

function getPrecedence(op) {
	switch (op) {
	case AstKind.Add:
	case AstKind.Sub:
		return 1
	case AstKind.Mul:
	case AstKind.Div:
		return 2

	default:
		return 0
	}
}

function lexOp() {
	let op

	switch (peek()) {
	case '+':
	case '-':
	case '*':
	case '/':
		op = next()
		break;
	}

	goodbyeWhitespace()

	return op
}

function lexNum() {
	let numStr = ''
	while (isNum(peek()))
		numStr += next()

	let num = parseInt(numStr)
	goodbyeWhitespace()
	return num
}

function goodbyeWhitespace() {
	while (peek() == ' ')
		next()
}

function peek(offset = 0) {
	let i = pos + offset
	if (i >= src.length)
		return '\0'
	return src[pos]
}

function next() {
	let current = peek()
	pos++
	return current
}